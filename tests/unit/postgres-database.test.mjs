import assert from 'node:assert/strict';
import test from 'node:test';
import { createPostgresDatabase } from '../../prototype/backend/postgres/database.js';

function fixture() {
  const calls = [];
  const client = { async query(text, values) { calls.push([text, values]); }, release() { calls.push(['release']); } };
  const pool = { async connect() { return client; }, async end() {}, async query() {} };
  return { calls, client, db: createPostgresDatabase('', { pool }) };
}

test('transaction locks before work and commits before releasing the connection', async () => {
  const { calls, db } = fixture();
  const result = await db.transaction(async client => { await client.query('UPDATE example'); return 42; });
  assert.equal(result, 42);
  assert.deepEqual(calls.map(call => call[0]), ['BEGIN', 'SELECT pg_advisory_xact_lock($1, $2)', 'UPDATE example', 'COMMIT', 'release']);
});

test('transaction rolls back and releases the connection on failure', async () => {
  const { calls, db } = fixture();
  await assert.rejects(db.transaction(async () => { throw new Error('failed'); }), /failed/);
  assert.deepEqual(calls.map(call => call[0]), ['BEGIN', 'SELECT pg_advisory_xact_lock($1, $2)', 'ROLLBACK', 'release']);
});
