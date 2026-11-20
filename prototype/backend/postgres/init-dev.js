// This draft schema is intended for an empty development database only.
import { readFile } from 'node:fs/promises';
import { createPostgresDatabase } from './database.js';

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is required. Use a new, empty development database.');
  process.exitCode = 1;
} else {
  const db = createPostgresDatabase(process.env.DATABASE_URL);
  try {
    const schema = await readFile(new URL('./001-schema.sql', import.meta.url), 'utf8');
    await db.query(schema);
    console.log('Development schema created. Set DATABASE_URL when starting the application to use PostgreSQL.');
  } catch (error) {
    // Connection errors may contain credentials; report only a PostgreSQL error code.
    console.error('Could not initialize development schema:', /^[0-9A-Z]{5}$/.test(error.code || '') ? error.code : error.name);
    process.exitCode = 1;
  } finally {
    await db.close();
  }
}
