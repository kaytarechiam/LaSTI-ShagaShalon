import { createHash, randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';
import { today } from '../catalog.js';
import { createAccountStore } from './accounts.js';
import { initializeConfig, getConfig, serviceBundle, availableSlots, getItems, writeTerms } from './scheduling.js';

const digest = value => createHash('sha256').update(value).digest('hex');
const ttl = 8 * 3600;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[\d ()-]{8,22}$/;
const dummyHash = passwordHash(randomBytes(32).toString('hex'));
function passwordHash(password, salt = randomBytes(16).toString('hex')) {
  return salt + ':' + scryptSync(password, salt, 64).toString('hex');
}
function matches(password, stored) {
  try {
    const actual = Buffer.from(passwordHash(password, stored.split(':')[0]));
    const expected = Buffer.from(stored);
    return actual.length === expected.length && timingSafeEqual(actual, expected);
  } catch { return false; }
}
class ApiError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}
function field(data, key, max) {
  return typeof data[key] === 'string' && data[key].length <= max ? data[key].trim() : '';
}
function contact(data) {
  const name = field(data, 'name', 100), phone = field(data, 'phone', 22);
  if (name.length < 2 || !phonePattern.test(phone) || phone.replace(/\D/g, '').length < 8)
    throw new ApiError(400, 'Isi nama dan nomor telepon yang valid.');
  return { name, phone };
}
async function body(req) {
  if (req.headers['content-type']?.split(';')[0] !== 'application/json') throw new ApiError(415, 'Format permintaan tidak didukung.');
  if (req.body !== undefined) {
    const encoded = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
    if (Buffer.byteLength(encoded) > 8192) throw new ApiError(413, 'Data terlalu panjang.');
    try { const result = JSON.parse(encoded); if (!result || typeof result !== 'object' || Array.isArray(result)) throw new Error(); return result; }
    catch { throw new ApiError(400, 'Data tidak dapat dibaca.'); }
  }
  let size = 0; const chunks = [];
  for await (const chunk of req) { size += chunk.length; if (size > 8192) throw new ApiError(413, 'Data terlalu panjang.'); chunks.push(chunk); }
  try { const result = JSON.parse(Buffer.concat(chunks).toString()); if (!result || typeof result !== 'object' || Array.isArray(result)) throw new Error(); return result; }
  catch { throw new ApiError(400, 'Data tidak dapat dibaca.'); }
}
const reservationFields = `r.id,r.service,r.capster,r.day,r.start,r."end",r.name,r.phone,r.status,r.code,
  t.price AS booked_price,t.duration AS booked_duration,v.ticket,v.status AS visit_status`;
const customerRows = `SELECT ${reservationFields} FROM reservations r LEFT JOIN booking_terms t ON t.reservation=r.id LEFT JOIN visits v ON v.reservation=r.id`;
const one = async (db, query, params) => (await db.query(query, params)).rows[0];
const quote = row => digest(JSON.stringify([row.id, row.items, row.capster, row.start, row.end ?? null]));
async function quoted(db, row) {
  if (!row) return null;
  const full = { ...row, items: await getItems(db, row.id) };
  return { ...full, quote: quote(full) };
}
async function owned(db, id, account) {
  return one(db, customerRows + ' WHERE r.id=$1 AND r.account=$2', [id, account]);
}

export async function createPostgresReservationApi(db, { operations } = {}) {
  await initializeConfig(db);
  const accounts = createAccountStore(db);
  function token(req) { return req.headers.cookie?.match(/(?:^|;\s*)shaga_session=([a-f0-9]{64})(?:;|$)/)?.[1]; }
  function setCookie(req, res, value, age) {
    const secure = req.socket?.encrypted || (process.env.VERCEL && req.headers['x-forwarded-proto'] === 'https');
    res.setHeader('Set-Cookie', `shaga_session=${value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${age}${secure ? '; Secure' : ''}`);
  }
  async function signIn(req, res, id) {
    const value = randomBytes(32).toString('hex'), previous = token(req);
    await accounts.replaceSession(previous ? digest(previous) : null, digest(value), id, Date.now() + ttl * 1000);
    setCookie(req, res, value, ttl);
  }
  async function getAccount(req) {
    const value = token(req);
    return value ? accounts.findSession(digest(value)) : null;
  }
  async function limitAuth(req) {
    // Vercel supplies x-real-ip at its trusted edge; local servers use the socket.
    const address = process.env.VERCEL ? req.headers['x-real-ip'] : req.socket?.remoteAddress;
    const now = Date.now(), key = digest(String(address || 'unknown'));
    const result = await one(db, `INSERT INTO auth_attempts(key,count,expires) VALUES($1,1,$2)
      ON CONFLICT(key) DO UPDATE SET count=CASE WHEN auth_attempts.expires<=$3 THEN 1 ELSE auth_attempts.count+1 END,
      expires=CASE WHEN auth_attempts.expires<=$3 THEN $2 ELSE auth_attempts.expires END RETURNING count`, [key, now+600000, now]);
    if (result.count > 30) throw new ApiError(429, 'Terlalu banyak percobaan. Coba lagi nanti.');
  }
  async function confirm(id, account, acceptedQuote) {
    return db.transaction(async tx => {
      const existing = await owned(tx, id, account);
      if (!existing) throw new ApiError(404, 'Reservasi tidak ditemukan.');
      const row = await quoted(tx, existing);
      if (row.status !== 'REQUESTED') return row;
      const settings = await getConfig(tx);
      const service = serviceBundle(row.items.map(item => item.id), settings);
      if (!service) throw new ApiError(409, 'Ada layanan yang sudah tidak tersedia. Pilih layanan kembali.');
      const capster = settings.capsters.find(entry => entry.id === row.capster);
      const slot = (await availableSlots(tx, service, capster, row.day, { settings })).find(entry => entry.start === row.start);
      if (!slot) throw new ApiError(409, 'Jadwal ini sudah tidak tersedia. Silakan pilih jam lain.');
      const updated = { ...row, items: service.items, booked_price: service.price, booked_duration: service.duration, end: slot.end };
      const latestQuote = quote(updated);
      if (acceptedQuote !== latestQuote && (acceptedQuote !== undefined || JSON.stringify(row.items) !== JSON.stringify(service.items) || row.end !== slot.end))
        return { ...updated, quote: latestQuote, needsReview: true };
      const code = 'SH-' + randomBytes(6).toString('hex').toUpperCase();
      await tx.query('INSERT INTO allocations(reservation,capster,start,"end") VALUES($1,$2,$3,$4)', [id, capster.id, slot.start, slot.end]);
      await tx.query("UPDATE reservations SET status='CONFIRMED',code=$1,\"end\"=$2 WHERE id=$3", [code, slot.end, id]);
      await writeTerms(tx, id, service);
      await tx.query('INSERT INTO salon_events(actor,subject,action,at) VALUES($1,$2,$3,$4)', [account, id, 'CONFIRMED', Date.now()]);
      await tx.query('INSERT INTO simulated_notifications(reservation,created) VALUES($1,$2)', [id, Date.now()]);
      return quoted(tx, await owned(tx, id, account));
    });
  }
  async function handle(req, res, url) {
    const send = (status, value) => { res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' }); res.end(JSON.stringify(value)); };
    try {
      const post = req.method === 'POST';
      if (!post && req.method !== 'GET') throw new ApiError(405, 'Metode tidak didukung.');
      if (post && (req.headers['sec-fetch-site'] === 'cross-site' || (req.headers.origin && req.headers.origin !== url.origin))) throw new ApiError(403, 'Permintaan ditolak.');
      const route = url.pathname, currentToken = token(req), account = await getAccount(req);
      if (!post && route === '/api/session') return send(200, { account: account || null });
      if (post && route === '/api/logout') {
        if (currentToken) await accounts.removeSession(digest(currentToken));
        setCookie(req, res, '', 0); return send(200, { ok: true });
      }
      if (post && ['/api/login', '/api/register'].includes(route)) {
        await limitAuth(req);
        const data = await body(req), email = field(data, 'email', 254).toLowerCase();
        const password = typeof data.password === 'string' && data.password.length <= 128 ? data.password : '';
        const existing = await accounts.findByEmail(email);
        if (route === '/api/login') {
          if (!matches(password, existing?.password || dummyHash) || !existing) throw new ApiError(401, 'Email atau kata sandi tidak cocok.');
          await signIn(req, res, existing.id); return send(200, { ok: true });
        }
        if (!emailPattern.test(email)) throw new ApiError(400, 'Isi alamat email yang valid.');
        if (password.length < 8 || password !== data.confirmation) throw new ApiError(400, 'Gunakan minimal 8 karakter dan pastikan kedua kata sandi sama.');
        const details = contact(data);
        const id = await accounts.register({ email, ...details, password: passwordHash(password) });
        if (!id) throw new ApiError(409, 'Email sudah terdaftar. Silakan masuk.');
        await signIn(req, res, id); return send(201, { ok: true });
      }
      if (!post && route === '/api/public-catalog') return send(200, { services: (await getConfig(db)).services });
      if (!account) throw new ApiError(401, 'Masuk untuk melanjutkan reservasi.');
      if (post && route === '/api/profile') return send(200, { account: await accounts.updateProfile(account.id, ...Object.values(contact(await body(req)))) });
      if (route.startsWith('/api/ops/')) {
        if (!operations) throw new ApiError(503, 'Operasional belum tersedia.');
        if (!['staff', 'capster', 'manager'].includes(account.role)) throw new ApiError(403, 'Halaman khusus tim salon.');
        return send(200, await operations.route(account, route, url.searchParams, post ? await body(req) : null));
      }
      if (!['customer', 'staff'].includes(account.role)) throw new ApiError(403, 'Gunakan dashboard sesuai peranmu.');
      const settings = await getConfig(db), { services, capsters, rules } = settings;
      if (!post && route === '/api/catalog') return send(200, { services, capsters, buffer: rules.buffer, today: today() });
      if (!post && route === '/api/slots') {
        const ids = url.searchParams.getAll('services'), service = serviceBundle(ids.length ? ids : [url.searchParams.get('service')], settings);
        return send(200, { slots: await availableSlots(db, service, capsters.find(entry => entry.id === url.searchParams.get('capster')), url.searchParams.get('day') || '', { settings }) });
      }
      if (!post && route === '/api/reservations') {
        const rows = (await db.query(customerRows + ' WHERE r.account=$1 ORDER BY r.created_order DESC', [account.id])).rows;
        return send(200, { reservations: await Promise.all(rows.map(row => quoted(db, row))) });
      }
      if (post && route === '/api/reservations') {
        const data = await body(req), details = contact(data);
        const id = randomBytes(16).toString('hex');
        const row = await db.transaction(async tx => {
          const config = await getConfig(tx), service = serviceBundle(data.services ?? [data.service], config);
          if (!service) throw new ApiError(400, 'Pilih layanan aktif yang berbeda.');
          const capster = config.capsters.find(entry => entry.id === data.capster);
          const slot = (await availableSlots(tx, service, capster, field(data, 'day', 10), { settings: config })).find(entry => entry.start === data.start);
          if (!slot) throw new ApiError(409, 'Jadwal ini sudah tidak tersedia. Silakan pilih jam lain.');
          await tx.query('INSERT INTO reservations(id,account,service,capster,day,start,"end",name,phone) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)',
            [id, account.id, service.id, capster.id, data.day, slot.start, slot.end, details.name, details.phone]);
          await writeTerms(tx, id, service);
          await tx.query('INSERT INTO salon_events(actor,subject,action,at) VALUES($1,$2,$3,$4)', [account.id, id, 'REQUESTED', Date.now()]);
          return quoted(tx, await owned(tx, id, account.id));
        });
        return send(201, row);
      }
      const match = route.match(/^\/api\/reservations\/([a-f0-9]{32})(\/confirm)?$/);
      if (match && !post && !match[2]) { const row = await quoted(db, await owned(db, match[1], account.id)); if (row) return send(200, row); }
      if (match && post && match[2]) return send(200, await confirm(match[1], account.id, (await body(req)).quote));
      throw new ApiError(404, 'Halaman tidak ditemukan.');
    } catch (error) {
      if (!error.status) console.error('Shaga reservation:', error.code || error.name);
      const status = error.code === '23P01' ? 409 : error.status || 500;
      if (!res.destroyed) send(status, { message: error.code === '23P01' ? 'Jadwal ini sudah tidak tersedia. Silakan pilih jam lain.' : error.status ? error.message : 'Terjadi gangguan. Silakan coba lagi.' });
    }
  }
  return { handle, getAccount };
}
