import { createPostgresDatabase } from '../backend/postgres/database.js';
import { createPostgresOperations } from '../backend/postgres/operations.js';
import { createPostgresReservationApi } from '../backend/postgres/reservation-api.js';

let apiPromise;
function api() {
  if (!apiPromise) {
    const db = createPostgresDatabase(process.env.DATABASE_URL);
    apiPromise = createPostgresReservationApi(db, { operations: createPostgresOperations(db) })
      .catch(async error => { apiPromise = undefined; await db.close(); throw error; });
  }
  return apiPromise;
}

export default async function handler(req, res) {
  try {
    const scheme = req.headers['x-forwarded-proto'] === 'https' ? 'https' : 'http';
    const url = new URL(req.url, `${scheme}://${req.headers.host}`);
    const route = url.searchParams.get('__route');
    if (route !== null) { url.pathname = '/api/' + route; url.searchParams.delete('__route'); }
    await (await api()).handle(req, res, url);
  } catch (error) {
    console.error('API initialization:', error.code || error.name);
    res.writeHead(503, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end(JSON.stringify({ message: 'Layanan sementara tidak tersedia.' }));
  }
}
