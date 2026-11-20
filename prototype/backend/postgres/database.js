import pg from 'pg';

// Millisecond timestamps use PostgreSQL int8. Refuse silent precision loss.
const parsers = {
  getTypeParser(oid, format) {
    if (oid === 20 && (!format || format === 'text')) {
      return value => {
        const number = Number(value);
        if (!Number.isSafeInteger(number)) throw new RangeError('PostgreSQL integer exceeds JavaScript safe integer range');
        return number;
      };
    }
    return pg.types.getTypeParser(oid, format);
  },
};

/** Create a PostgreSQL connection pool. The connection string stays in the environment. */
export function createPostgresDatabase(connectionString, { pool } = {}) {
  if (!pool && !connectionString) throw new Error('DATABASE_URL is required');
  const databasePool = pool || new pg.Pool({ connectionString, max: 4, idleTimeoutMillis: 10_000, connectionTimeoutMillis: 10_000, types: parsers });
  return {
    query(text, values = []) { return databasePool.query(text, values); },
    async transaction(callback) {
      const client = await databasePool.connect();
      try {
        await client.query('BEGIN');
        // All scheduling and management mutations must use this transaction so
        // checks and writes cannot interleave across serverless instances.
        await client.query('SELECT pg_advisory_xact_lock($1, $2)', [1936220513, 1]);
        const result = await callback(client);
        await client.query('COMMIT');
        return result;
      } catch (error) {
        try { await client.query('ROLLBACK'); } catch { /* preserve the original error */ }
        throw error;
      } finally {
        client.release();
      }
    },
    close() { return databasePool.end(); },
  };
}
