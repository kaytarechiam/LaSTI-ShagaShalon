import { createHash, randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';
import { mkdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { capsters, today } from './catalog.js';
import { createOperations } from './operations.js';

const digest = value => createHash('sha256').update(value).digest('hex');
const ttl = 8 * 3600;
const cookie = 'shaga_session';
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[\d ()-]{8,22}$/;
const dummyHash = passwordHash(randomBytes(32).toString('hex'));

function passwordHash(password, salt = randomBytes(16).toString('hex')) {
  return salt + ':' + scryptSync(password, salt, 64).toString('hex');
}

function matches(password, stored) {
  const [salt] = stored.split(':');
  return timingSafeEqual(Buffer.from(stored), Buffer.from(passwordHash(password, salt)));
}

class ApiError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}

async function body(req) {
  if (req.headers['content-type']?.split(';')[0] !== 'application/json') {
    throw new ApiError(415,'Format permintaan tidak didukung.');
  }
  let size = 0;
  const chunks = [];
  for await (const chunk of req) {
    size += chunk.length;
    if (size > 8192) throw new ApiError(413,'Data terlalu panjang.');
    chunks.push(chunk);
  }
  try {
    const data = JSON.parse(Buffer.concat(chunks).toString());
    if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error();
    return data;
  } catch { throw new ApiError(400,'Data tidak dapat dibaca.'); }
}

function field(data, key, max) {
  if (typeof data[key] !== 'string' || data[key].length > max) return '';
  return data[key].trim();
}

function contact(data) {
  const name = field(data,'name',100);
  const phone = field(data,'phone',22);
  if (name.length < 2 || !phonePattern.test(phone) || phone.replace(/\D/g,'').length < 8) {
    throw new ApiError(400,'Isi nama dan nomor telepon yang valid.');
  }
  return {name,phone};
}

export function createReservationApi(root, {memory = false} = {}) {
  if (!memory && (process.env.DATABASE_URL || process.env.VERCEL)) {
    throw new Error('Backend PostgreSQL belum terhubung; server SQLite tidak dapat digunakan dengan DATABASE_URL atau Vercel.');
  }
  const folder = join(process.env.LOCALAPPDATA || homedir(), 'ShagaSalonPrototype');
  if (!memory) mkdirSync(folder,{recursive:true});
  const db = new DatabaseSync(memory ? ':memory:' : join(folder,digest(root).slice(0,16)+'.sqlite'));
  db.exec(`
    PRAGMA foreign_keys = ON;
    PRAGMA busy_timeout = 5000;
    CREATE TABLE IF NOT EXISTS accounts(
      id INTEGER PRIMARY KEY, email TEXT UNIQUE NOT NULL, name TEXT NOT NULL,
      phone TEXT NOT NULL, password TEXT NOT NULL, role TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS sessions(
      token TEXT PRIMARY KEY, account INTEGER NOT NULL REFERENCES accounts(id), expires INTEGER NOT NULL
    );
    CREATE TABLE IF NOT EXISTS reservations(
      id TEXT PRIMARY KEY, account INTEGER NOT NULL REFERENCES accounts(id),
      service TEXT NOT NULL, capster TEXT NOT NULL, day TEXT NOT NULL,
      start INTEGER NOT NULL, end INTEGER NOT NULL, name TEXT NOT NULL, phone TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'REQUESTED', code TEXT UNIQUE
    );
    CREATE TABLE IF NOT EXISTS allocations(
      reservation TEXT PRIMARY KEY REFERENCES reservations(id), capster TEXT NOT NULL,
      start INTEGER NOT NULL, end INTEGER NOT NULL
    );
    CREATE INDEX IF NOT EXISTS allocations_interval ON allocations(capster,start,end);
    CREATE TABLE IF NOT EXISTS simulated_notifications(
      reservation TEXT PRIMARY KEY REFERENCES reservations(id), created INTEGER NOT NULL
    );
  `);
  const staffEmail = process.env.SHAGA_STAFF_EMAIL?.trim().toLowerCase();
  const staffPassword = process.env.SHAGA_STAFF_PASSWORD;
  if (staffEmail || staffPassword) {
    if (!emailPattern.test(staffEmail || '') || !staffPassword || staffPassword.length < 12 || staffPassword.length > 128) {
      throw new Error('Akun resepsionis memerlukan email valid dan kata sandi 12–128 karakter.');
    }
    const existing = db.prepare('SELECT role FROM accounts WHERE email = ?').get(staffEmail);
    if (existing && existing.role !== 'staff') throw new Error('Email resepsionis sudah digunakan pelanggan.');
    if (!existing) db.prepare('INSERT INTO accounts(email,name,phone,password,role) VALUES(?,?,?,?,?)')
      .run(staffEmail,'Resepsionis','',passwordHash(staffPassword),'staff');
  }
  const operations = createOperations(db,{ApiError,contact});
  for (const [prefix,role,label] of [['MANAGER','manager','Manajer'],['CAPSTER','capster','Capster']]) {
    const email = process.env['SHAGA_'+prefix+'_EMAIL']?.trim().toLowerCase();
    const password = process.env['SHAGA_'+prefix+'_PASSWORD'];
    if (!email && !password) continue;
    const capster = process.env.SHAGA_CAPSTER_ID || 'a';
    if (!emailPattern.test(email || '') || !password || password.length<12 || password.length>128 ||
        (role==='capster' && !capsters.some(c=>c.id===capster))) {
      throw new Error('Email, kata sandi, atau ID capster tidak valid untuk akun '+label+'.');
    }
    operations.transaction(()=>{
      const existing=db.prepare('SELECT id,role FROM accounts WHERE email=?').get(email);
      if (existing && existing.role!==role) throw new Error('Email sudah dipakai oleh peran lain.');
      const account=existing?.id || db.prepare('INSERT INTO accounts(email,name,phone,password,role) VALUES(?,?,?,?,?)')
        .run(email,label,'',passwordHash(password),role).lastInsertRowid;
      if (role==='capster') {
        const link=db.prepare('SELECT capster FROM capster_accounts WHERE account=?').get(account);
        if (link && link.capster!==capster) throw new Error('Akun sudah terhubung dengan capster lain.');
        if (!link) db.prepare('INSERT INTO capster_accounts VALUES(?,?)').run(account,capster);
      }
    });
  }
  const attempts = new Map();
  const accountFields = 'accounts.id,accounts.name,accounts.email,accounts.phone,accounts.role';
  const reservationFields = 'r.id,r.service,r.capster,r.day,r.start,r.end,r.name,r.phone,r.status,r.code,t.price AS booked_price,t.duration AS booked_duration,v.ticket,v.status AS visit_status';
  const customerRows = 'SELECT '+reservationFields+' FROM reservations r LEFT JOIN booking_terms t ON t.reservation=r.id LEFT JOIN visits v ON v.reservation=r.id';
  const owned = db.prepare(customerRows+' WHERE r.id=? AND r.account=?');
  const {available}=operations;
  function sessionToken(req) {
    return req.headers.cookie?.match(/(?:^|;\s*)shaga_session=([a-f0-9]{64})(?:;|$)/)?.[1];
  }
  function setCookie(req,res,token,age) {
    const secure = req.socket.encrypted ? '; Secure' : '';
    res.setHeader('Set-Cookie',cookie+'='+token+'; Path=/; HttpOnly; SameSite=Lax; Max-Age='+age+secure);
  }
  function signIn(req,res,id) {
    const token = randomBytes(32).toString('hex');
    const old = sessionToken(req);
    if (old) db.prepare('DELETE FROM sessions WHERE token=?').run(digest(old));
    db.prepare('DELETE FROM sessions WHERE expires<=?').run(Date.now());
    db.prepare('INSERT INTO sessions VALUES(?,?,?)').run(digest(token),id,Date.now()+ttl*1000);
    setCookie(req,res,token,ttl);
  }
  function limitAuth(req) {
    const now = Date.now();
    for (const [key,value] of attempts) if (value.until <= now) attempts.delete(key);
    const key = req.socket.remoteAddress;
    const attempt = attempts.get(key) || {count:0,until:now+600000};
    if (++attempt.count > 30) throw new ApiError(429,'Terlalu banyak percobaan. Coba lagi nanti.');
    attempts.set(key,attempt);
  }
  function quote(row) {
    return digest(JSON.stringify([row.id,row.items,row.capster,row.start,row.end??null]));
  }
  function quoted(row) {
    const full=operations.withItems(row);
    return {...full,quote:quote(full)};
  }
  function confirm(id, account, acceptedQuote) {
    db.exec('BEGIN IMMEDIATE');
    try {
      const existing = owned.get(id,account);
      if (!existing) throw new ApiError(404,'Reservasi tidak ditemukan.');
      const row=quoted(existing);
      if (row.status === 'REQUESTED') {
        const settings=operations.config();
        const {capsters}=settings;
        const service=operations.bundle(row.items.map(item=>item.id),settings);
        if (!service) throw new ApiError(409,'Ada layanan yang sudah tidak tersedia. Pilih layanan kembali.');
        const capster = capsters.find(entry => entry.id === row.capster);
        const slot = available(service,capster,row.day).find(entry => entry.start === row.start);
        if (!slot) throw new ApiError(409,'Jadwal ini sudah tidak tersedia. Silakan pilih jam lain.');
        const updated={...row,items:service.items,booked_price:service.price,booked_duration:service.duration,end:slot.end};
        const latestQuote=quote(updated);
        if (acceptedQuote!==latestQuote &&
            (acceptedQuote!==undefined || JSON.stringify(row.items)!==JSON.stringify(service.items) || row.end!==slot.end)) {
          db.exec('COMMIT');
          return {...updated,quote:latestQuote,needsReview:true};
        }
        const code = 'SH-'+randomBytes(6).toString('hex').toUpperCase();
        db.prepare('INSERT INTO allocations VALUES(?,?,?,?)').run(id,capster.id,slot.start,slot.end);
        db.prepare("UPDATE reservations SET status='CONFIRMED',code=?,end=? WHERE id=?").run(code,slot.end,id);
        operations.terms(id,service);
        operations.record({id:account},id,'CONFIRMED');
        db.prepare('INSERT INTO simulated_notifications VALUES(?,?)').run(id,Date.now());
      }
      db.exec('COMMIT');
      return quoted(owned.get(id,account));
    } catch (error) {
      db.exec('ROLLBACK');
      throw error;
    }
  }

  function getAccount(req) {
    const token = sessionToken(req);
    return token && db.prepare('SELECT '+accountFields+' FROM sessions JOIN accounts ON accounts.id=sessions.account WHERE token=? AND expires>?')
      .get(digest(token),Date.now());
  }
  async function handle(req,res,url) {
    const send = (status,value) => {
      res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});
      res.end(JSON.stringify(value));
    };
    try {
      const post = req.method === 'POST';
      if (!post && req.method !== 'GET') throw new ApiError(405,'Metode tidak didukung.');
      if (post && (req.headers['sec-fetch-site'] === 'cross-site' ||
        (req.headers.origin && req.headers.origin !== url.origin))) throw new ApiError(403,'Permintaan ditolak.');
      const token = sessionToken(req);
      const account = getAccount(req);
      const route = url.pathname;
      if (!post && route === '/api/session') return send(200,{account:account || null});
      if (post && route === '/api/logout') {
        if (token) db.prepare('DELETE FROM sessions WHERE token=?').run(digest(token));
        setCookie(req,res,'',0);
        return send(200,{ok:true});
      }
      if (post && ['/api/login','/api/register'].includes(route)) {
        limitAuth(req);
        const data = await body(req);
        const email = field(data,'email',254).toLowerCase();
        const password = typeof data.password === 'string' && data.password.length <= 128 ? data.password : '';
        const existing = db.prepare('SELECT id,password FROM accounts WHERE email=?').get(email);
        if (route === '/api/login') {
          if (!matches(password,existing?.password || dummyHash) || !existing) {
            throw new ApiError(401,'Email atau kata sandi tidak cocok.');
          }
          signIn(req,res,existing.id);
          return send(200,{ok:true});
        }
        if (!emailPattern.test(email)) throw new ApiError(400,'Isi alamat email yang valid.');
        if (password.length < 8 || password !== data.confirmation) {
          throw new ApiError(400,'Gunakan minimal 8 karakter dan pastikan kedua kata sandi sama.');
        }
        const {name,phone} = contact(data);
        if (existing) throw new ApiError(409,'Email sudah terdaftar. Silakan masuk.');
        const result = db.prepare('INSERT INTO accounts(email,name,phone,password,role) VALUES(?,?,?,?,?)')
          .run(email,name,phone,passwordHash(password),'customer');
        signIn(req,res,result.lastInsertRowid);
        return send(201,{ok:true});
      }
      if (!post && route==='/api/public-catalog') {
        const {services}=operations.config();
        return send(200,{services});
      }
      if (!account) throw new ApiError(401,'Masuk untuk melanjutkan reservasi.');
      if (post && route === '/api/profile') {
        const {name,phone} = contact(await body(req));
        db.prepare('UPDATE accounts SET name=?, phone=? WHERE id=?').run(name,phone,account.id);
        return send(200,{account:{...account,name,phone}});
      }
      if (route.startsWith('/api/ops/')) {
        if (!['staff','capster','manager'].includes(account.role)) throw new ApiError(403,'Halaman khusus tim salon.');
        const payload=post ? await body(req) : null;
        return send(200,operations.route(account,route,url.searchParams,payload));
      }
      if (!post && route === '/api/settlement/report' && account.role === 'manager') {
        throw new ApiError(501,'Laporan pembayaran dan feedback memerlukan database PostgreSQL; tidak tersedia pada demo SQLite lokal.');
      }
      if (!['customer','staff'].includes(account.role)) throw new ApiError(403,'Gunakan dashboard sesuai peranmu.');
      const {services,capsters,rules}=operations.config();
      if (!post && route === '/api/catalog') return send(200,{services,capsters,buffer:rules.buffer,today:today()});
      if (!post && route === '/api/slots') {
        const ids=url.searchParams.getAll('services');
        const service=operations.bundle(ids.length ? ids : [url.searchParams.get('service')]);
        const capster = capsters.find(entry => entry.id === url.searchParams.get('capster'));
        const day = url.searchParams.get('day') || '';
        return send(200,{slots:available(service,capster,day)});
      }
      if (!post && route === '/api/reservations') {
        return send(200,{reservations:db.prepare(customerRows+' WHERE r.account=? ORDER BY r.rowid DESC').all(account.id).map(operations.withItems)});
      }
      if (post && route === '/api/reservations') {
        const data = await body(req);
        const {name,phone} = contact(data);
        const service=operations.bundle(data.services ?? [data.service]);
        if (!service) throw new ApiError(400,'Pilih layanan aktif yang berbeda.');
        const capster = capsters.find(entry => entry.id === data.capster);
        const slot = available(service,capster,field(data,'day',10)).find(entry => entry.start === data.start);
        if (!slot) throw new ApiError(409,'Jadwal ini sudah tidak tersedia. Silakan pilih jam lain.');
        const id = randomBytes(16).toString('hex');
        operations.transaction(()=>{
          db.prepare('INSERT INTO reservations(id,account,service,capster,day,start,end,name,phone) VALUES(?,?,?,?,?,?,?,?,?)')
            .run(id,account.id,service.id,capster.id,data.day,slot.start,slot.end,name,phone);
          operations.terms(id,service);
          operations.record(account,id,'REQUESTED');
        });
        return send(201,quoted(owned.get(id,account.id)));
      }
      const match = route.match(/^\/api\/reservations\/([a-f0-9]{32})(\/confirm)?$/);
      if (match && !post && !match[2]) {
        const row = owned.get(match[1],account.id);
        if (row) return send(200,quoted(row));
      }
      if (match && post && match[2]) {
        const data=await body(req);
        return send(200,confirm(match[1],account.id,data.quote));
      }
      throw new ApiError(404,'Halaman tidak ditemukan.');
    } catch (error) {
      if (!error.status) console.error('Shaga reservation:',error.code || error.name);
      if (!res.destroyed) send(error.status || 500,{message:error.status ? error.message : 'Terjadi gangguan. Silakan coba lagi.'});
    }
  }
  return {handle,getAccount};
}
