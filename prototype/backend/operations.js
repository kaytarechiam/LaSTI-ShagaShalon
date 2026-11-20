import { randomBytes } from 'node:crypto';
import { services, capsters, buffer, candidates, today } from './catalog.js';

const initial = {
  services:services.map(s=>({...s,active:true})),
  capsters:capsters.map(c=>({...c,active:true})),
  rules:{open:9, close:19, sunday:18, buffer, breakStart:12, breakEnd:13, early:60, late:60},
};
const validDay = day => typeof day === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(day) &&
  Number.isFinite(Date.parse(day+'T00:00:00+07:00')) && today(new Date(day+'T00:00:00+07:00')) === day;
const id = () => randomBytes(16).toString('hex');

export function createOperations(db, {ApiError,contact}) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS salon_config(id INTEGER PRIMARY KEY, version INTEGER NOT NULL, data TEXT NOT NULL, updated INTEGER, actor INTEGER);
    CREATE TABLE IF NOT EXISTS salon_drafts(account INTEGER PRIMARY KEY REFERENCES accounts(id), version INTEGER NOT NULL, data TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS capster_accounts(account INTEGER PRIMARY KEY REFERENCES accounts(id), capster TEXT UNIQUE NOT NULL);
    CREATE TABLE IF NOT EXISTS capster_ready(capster TEXT PRIMARY KEY, ready INTEGER NOT NULL);
    CREATE TABLE IF NOT EXISTS visits(
      reservation TEXT PRIMARY KEY REFERENCES reservations(id), day TEXT NOT NULL, ticket INTEGER NOT NULL,
      status TEXT NOT NULL, arrived INTEGER NOT NULL, started INTEGER, ended INTEGER, estimate INTEGER,
      channel TEXT NOT NULL, request_key TEXT UNIQUE, UNIQUE(day,ticket)
    );
    CREATE TABLE IF NOT EXISTS booking_terms(reservation TEXT PRIMARY KEY REFERENCES reservations(id), price INTEGER NOT NULL, duration INTEGER NOT NULL);
    CREATE TABLE IF NOT EXISTS reservation_items(
      reservation TEXT NOT NULL REFERENCES reservations(id), position INTEGER NOT NULL,
      service TEXT NOT NULL, name TEXT NOT NULL, price INTEGER NOT NULL, duration INTEGER NOT NULL,
      PRIMARY KEY(reservation,position), UNIQUE(reservation,service)
    );
    CREATE TABLE IF NOT EXISTS salon_events(id INTEGER PRIMARY KEY, actor INTEGER NOT NULL, subject TEXT NOT NULL, action TEXT NOT NULL, at INTEGER NOT NULL);
  `);
  db.prepare('INSERT OR IGNORE INTO salon_config(id,version,data) VALUES(1,1,?)').run(JSON.stringify(initial));
  for (const service of services) {
    db.prepare('INSERT OR IGNORE INTO booking_terms SELECT id,?,? FROM reservations WHERE service=?')
      .run(service.price,service.duration,service.id);
    // Existing snapshots are authoritative for price and duration. The original catalog supplies the legacy name.
    db.prepare(`INSERT OR IGNORE INTO reservation_items
      SELECT r.id,0,r.service,?,t.price,t.duration FROM reservations r JOIN booking_terms t ON t.reservation=r.id
      WHERE r.service=? AND NOT EXISTS (SELECT 1 FROM reservation_items i WHERE i.reservation=r.id)`)
      .run(service.name,service.id);
  }
  const config = () => {
    const row = db.prepare('SELECT version,data FROM salon_config WHERE id=1').get();
    return {version:row.version,...JSON.parse(row.data)};
  };
  function transaction(fn) {
    db.exec('BEGIN IMMEDIATE');
    try { const result=fn(); db.exec('COMMIT'); return result; }
    catch(error) { db.exec('ROLLBACK'); throw error; }
  }
  function fail(status,message) { throw new ApiError(status,message); }
  function record(account,subject,action) {
    db.prepare('INSERT INTO salon_events(actor,subject,action,at) VALUES(?,?,?,?)').run(account.id,subject,action,Date.now());
  }
  function bundle(ids,settings=config()) {
    if (!Array.isArray(ids) || !ids.length || ids.length>settings.services.length ||
        ids.some(id=>typeof id!=='string') || new Set(ids).size!==ids.length) return null;
    const selected=ids.map(id=>settings.services.find(service=>service.id===id));
    if (selected.some(service=>!service || service.active===false)) return null;
    const items=selected.map(({id,name,price,duration})=>({id,name,price,duration}));
    return {
      id:ids[0], ids, items,
      price:items.reduce((total,item)=>total+item.price,0),
      duration:items.reduce((total,item)=>total+item.duration,0),
    };
  }
  const itemQuery=db.prepare('SELECT service AS id,name,price,duration FROM reservation_items WHERE reservation=? ORDER BY position');
  function withItems(row) {
    return row && {...row,items:itemQuery.all(row.id)};
  }
  function terms(key,service) {
    const items=service.items || [service];
    db.prepare('INSERT OR REPLACE INTO booking_terms VALUES(?,?,?)').run(key,service.price,service.duration);
    db.prepare('DELETE FROM reservation_items WHERE reservation=?').run(key);
    const insert=db.prepare('INSERT INTO reservation_items VALUES(?,?,?,?,?,?)');
    items.forEach((item,position)=>insert.run(key,position,item.id,item.name,item.price,item.duration));
  }
  function actorCapster(account) {
    return db.prepare('SELECT capster FROM capster_accounts WHERE account=?').get(account.id)?.capster;
  }
  const query = `SELECT r.*,v.status AS visit_status,v.ticket,v.channel,v.arrived,v.started,v.ended,v.estimate,
    t.price AS booked_price,t.duration AS booked_duration
    FROM reservations r LEFT JOIN visits v ON v.reservation=r.id
    LEFT JOIN booking_terms t ON t.reservation=r.id`;
  function row(key) { return withItems(db.prepare(query+' WHERE r.id=?').get(key)); }
  function available(service,capster,day,{except='',settings=config(),now=Date.now()}={}) {
    if (!validDay(day) || !service || !capster) return [];
    const ranges = db.prepare('SELECT start,end FROM allocations WHERE capster=? AND reservation<>? AND end>?')
      .all(capster?.id,except,Date.parse(day+'T00:00:00+07:00'));
    const active = db.prepare(query+" WHERE r.capster=? AND v.status='ACTIVE' AND r.id<>?").get(capster?.id,except);
    if (active) ranges.push({start:active.started,end:Math.max(now,active.estimate)+settings.rules.buffer*60000});
    const recent = db.prepare(query+" WHERE r.capster=? AND v.status='DONE' AND r.id<>? ORDER BY v.ended DESC LIMIT 1").get(capster?.id,except);
    if (recent) ranges.push({start:recent.started,end:recent.ended+settings.rules.buffer*60000});
    return candidates(service,capster,day,now,settings.rules)
      .filter(slot=>ranges.every(range=>range.start>=slot.end || range.end<=slot.start));
  }
  function visit(key,channel,requestKey=null) {
    const reservation = row(key);
    const ticket = db.prepare('SELECT COALESCE(MAX(ticket),0)+1 AS n FROM visits WHERE day=?').get(reservation.day).n;
    db.prepare("INSERT INTO visits(reservation,day,ticket,status,arrived,channel,request_key) VALUES(?,?,?,'WAITING',?,?,?)")
      .run(key,reservation.day,ticket,Date.now(),channel,requestKey);
    return row(key);
  }
  function checkIn(account,key) {
    return transaction(()=>{
      const r = row(key);
      if (!r || r.status!=='CONFIRMED') fail(409,'Check-in memerlukan reservasi terkonfirmasi.');
      if (r.ticket) return r;
      const diff = (Date.now()-r.start)/60000;
      const rules = config().rules;
      if (r.day!==today() || diff < -rules.early || diff > rules.late) fail(409,'Di luar waktu check-in yang diizinkan.');
      const result = visit(key,'RESERVASI');
      record(account,key,'CHECK_IN');
      return result;
    });
  }
  function walkIn(account,data) {
    const {name,phone}=contact(data);
    if (typeof data.requestKey!=='string' || !/^[a-f0-9-]{36}$/.test(data.requestKey)) fail(400,'Permintaan walk-in tidak valid.');
    return transaction(()=>{
      const previous = db.prepare('SELECT reservation FROM visits WHERE request_key=?').get(data.requestKey);
      if (previous) {
        const existing = row(previous.reservation);
        if (existing.account!==account.id) fail(409,'Permintaan sudah digunakan.');
        return existing;
      }
      const settings = config();
      const service = settings.services.find(s=>s.id===data.service);
      const capster = settings.capsters.find(c=>c.id===data.capster);
      const day = today();
      const slot = available(service,capster,day,{settings}).find(s=>s.start===data.start);
      if (!slot) fail(409,'Jam tersebut tidak cukup atau baru terisi. Muat ulang pilihan jam atau pilih capster lain.');
      const key=id();
      db.prepare("INSERT INTO reservations(id,account,service,capster,day,start,end,name,phone,status,code) VALUES(?,?,?,?,?,?,?,?,?,'CONFIRMED',?)")
        .run(key,account.id,service.id,capster.id,day,slot.start,slot.end,name,phone,'SH-'+randomBytes(6).toString('hex').toUpperCase());
      db.prepare('INSERT INTO allocations VALUES(?,?,?,?)').run(key,capster.id,slot.start,slot.end);
      terms(key,service);
      const result=visit(key,'WALK_IN',data.requestKey);
      record(account,key,'WALK_IN');
      return result;
    });
  }
  function changeVisit(account,key,action,data) {
    return transaction(()=>{
      const r = row(key);
      const capsterId = actorCapster(account);
      if (!r?.ticket || !capsterId || r.capster!==capsterId) fail(404,'Sesi tidak ditemukan.');
      const now=Date.now();
      const settings=config();
      if (action==='start') {
        if (r.visit_status==='ACTIVE') return r;
        if (r.visit_status!=='WAITING' || r.day!==today() || now<r.start) fail(409,'Sesi hanya bisa dimulai pada atau setelah jam yang dijadwalkan.');
        if (!db.prepare('SELECT ready FROM capster_ready WHERE capster=?').get(capsterId)?.ready) fail(409,'Tandai siap sebelum memulai sesi.');
        if (db.prepare(query+" WHERE r.capster=? AND v.status='ACTIVE'").get(capsterId)) fail(409,'Selesaikan sesi aktif terlebih dahulu.');
        const last = db.prepare(query+" WHERE r.capster=? AND v.status='DONE' ORDER BY v.ended DESC LIMIT 1").get(capsterId);
        if (last && last.ended+settings.rules.buffer*60000>now) fail(409,'Jeda setelah sesi sebelumnya belum selesai.');
        const duration=r.booked_duration ?? settings.services.find(s=>s.id===r.service)?.duration;
        db.prepare("UPDATE visits SET status='ACTIVE',started=?,estimate=? WHERE reservation=?").run(now,now+duration*60000,key);
      } else if (action==='finish') {
        if (r.visit_status==='DONE') return r;
        if (r.visit_status!=='ACTIVE') fail(409,'Mulai sesi sebelum menyelesaikannya.');
        db.prepare("UPDATE visits SET status='DONE',ended=?,estimate=NULL WHERE reservation=?").run(now,key);
        db.prepare('INSERT OR REPLACE INTO capster_ready VALUES(?,0)').run(capsterId);
      } else if (action==='estimate') {
        if (r.visit_status!=='ACTIVE') fail(409,'Hanya sesi aktif yang dapat diperbarui.');
        if (!Number.isInteger(data.minutes) || data.minutes<1 || data.minutes>480) fail(400,'Isi sisa waktu 1–480 menit.');
        db.prepare('UPDATE visits SET estimate=? WHERE reservation=?').run(now+data.minutes*60000,key);
      } else {
        if (r.visit_status!=='WAITING' || data.approved!==true) fail(409,'Penyesuaian memerlukan sesi menunggu dan persetujuan pelanggan.');
        if (r.items.length>1) fail(409,'Penyesuaian untuk reservasi beberapa layanan belum tersedia.');
        const service=settings.services.find(s=>s.id===data.service);
        const capster=settings.capsters.find(c=>c.id===data.capster);
        const slot=available(service,capster,r.day,{except:key,settings,now:r.start-1}).find(s=>s.start===r.start);
        if (!slot || slot.end<=now) fail(409,'Perubahan bentrok dengan jadwal. Pilihan lama tetap berlaku.');
        db.prepare('UPDATE reservations SET service=?,capster=?,end=? WHERE id=?').run(service.id,capster.id,slot.end,key);
        db.prepare('UPDATE allocations SET capster=?,end=? WHERE reservation=?').run(capster.id,slot.end,key);
        terms(key,service);
      }
      record(account,key,action.toUpperCase());
      return row(key);
    });
  }

  function clean(data) {
    const previous=config();
    const integer=(v,min,max)=>Number.isInteger(v)&&v>=min&&v<=max;
    const name=v=>typeof v==='string' && v.trim().length>=2 && v.length<=80;
    const rules=data.rules;
    if (!rules || !['open','close','sunday','breakStart','breakEnd'].every(k=>integer(rules[k],0,24)) ||
      rules.open>=Math.min(rules.close,rules.sunday) || rules.breakStart>rules.breakEnd ||
      !integer(rules.buffer,0,120) || !integer(rules.early,0,240) || !integer(rules.late,0,240)) fail(400,'Periksa jam dan aturan operasional.');
    function read(incoming,current,validate,map) {
      if (!Array.isArray(incoming) || incoming.length!==current.length) fail(400,'Daftar pengaturan tidak valid.');
      return current.map(old=>{
        const item=incoming.find(x=>x?.id===old.id);
        if (!item || !name(item.name) || typeof item.active!=='boolean' || !validate(item)) fail(400,'Periksa pengaturan '+old.name+'.');
        return {...old,name:item.name.trim(),active:item.active,...map(item)};
      });
    }
    const nextServices=read(data.services,previous.services,s=>integer(s.price,0,100000000)&&integer(s.duration,15,480),
      s=>({price:s.price,duration:s.duration}));
    const nextCapsters=read(data.capsters,previous.capsters,c=>integer(c.start,0,23)&&integer(c.end,c.start+1,24)&&
      integer(c.off,-1,6)&&Array.isArray(c.skills)&&c.skills.every(skill=>nextServices.some(s=>s.id===skill)),
      c=>({start:c.start,end:c.end,off:c.off,skills:[...new Set(c.skills)]}));
    return {services:nextServices,capsters:nextCapsters,rules:Object.fromEntries(Object.keys(initial.rules).map(k=>[k,rules[k]]))};
  }
  function draftOutcome(account,publish) {
    return transaction(()=>{
      const draft=db.prepare('SELECT version,data FROM salon_drafts WHERE account=?').get(account.id);
      const current=config();
      if (!draft || draft.version!==current.version) fail(409,'Draf belum ada atau versi pengaturan sudah berubah.');
      const next=JSON.parse(draft.data);
      const active=db.prepare(query+" WHERE r.status='CONFIRMED' AND r.day>=? AND (v.status IS NULL OR v.status<>'DONE') ORDER BY r.start").all(today());
      const conflicts=[];
      const planned=new Map();
      for (const r of active) {
        const service=bundle(itemQuery.all(r.id).map(item=>item.id),next);
        const capster=next.capsters.find(c=>c.id===r.capster);
        const slot=candidates(service,capster,r.day,r.start-1,next.rules).find(s=>s.start===r.start);
        const prior=planned.get(r.capster);
        if (!slot || slot.end>r.end || (prior && prior.end>r.start)) conflicts.push({code:r.code,day:r.day});
        if (slot) planned.set(r.capster,{end:Math.max(prior?.end||0,slot.end)});
      }
      if (conflicts.length || !publish) return {conflicts,published:false};
      db.prepare('UPDATE salon_config SET version=version+1,data=?,updated=?,actor=? WHERE id=1')
        .run(draft.data,Date.now(),account.id);
      db.prepare('DELETE FROM salon_drafts WHERE account=?').run(account.id);
      record(account,'settings','PUBLISH');
      return {conflicts,published:true};
    });
  }
  function board(account,params) {
    const day=params.get('day')||today(), to=params.get('to')||day;
    if (!validDay(day) || !validDay(to) || to<day || Date.parse(to)-Date.parse(day)>31*86400000) fail(400,'Pilih rentang tanggal hingga 31 hari.');
    const settings=config();
    const mine=account.role==='capster' ? actorCapster(account)||'' : null;
    const rows=db.prepare(query+' WHERE r.day BETWEEN ? AND ?'+(mine===null?'':' AND r.capster=?')+' ORDER BY r.start')
      .all(day,to,...(mine===null?[]:[mine])).map(withItems);
    const pendingByCapster=new Map();
    const now=Date.now();
    for (const r of rows.filter(r=>r.visit_status==='ACTIVE' && r.day===today())) {
      pendingByCapster.set(r.capster,Math.max(now,r.estimate)+settings.rules.buffer*60000);
    }
    for (const r of rows.filter(r=>r.visit_status==='WAITING')) {
      r.eta=Math.max(r.start,pendingByCapster.get(r.capster)||r.start,r.day===today()?now:0);
      pendingByCapster.set(r.capster,r.eta+(r.booked_duration||settings.services.find(s=>s.id===r.service)?.duration||0)*60000+settings.rules.buffer*60000);
    }
    if (mine!==null) for (const r of rows) delete r.phone;
    const draft=account.role==='manager' && db.prepare('SELECT version,data FROM salon_drafts WHERE account=?').get(account.id);
    return {rows,settings,mine,ready:!!(mine&&db.prepare('SELECT ready FROM capster_ready WHERE capster=?').get(mine)?.ready),
      draft:draft?{version:draft.version,...JSON.parse(draft.data)}:null};
  }

  function route(account,path,params,data=null) {
    const {role}=account;
    if (!['staff','capster','manager'].includes(role)) fail(403,'Halaman khusus tim salon.');
    if (data===null && path==='/api/ops/board') return board(account,params);
    if (!data) fail(404,'Halaman tidak ditemukan.');
    if (role==='staff' && path==='/api/ops/check-in') return checkIn(account,data.id??'');
    if (role==='staff' && path==='/api/ops/walk-in') return walkIn(account,data);
    if (role==='capster' && path==='/api/ops/ready') {
      if (typeof data.ready!=='boolean') fail(400,'Pilih kesiapan capster.');
      const capster=actorCapster(account);
      if (!capster) fail(403,'Belum ada capster yang terhubung.');
      return transaction(()=>{
        db.prepare('INSERT OR REPLACE INTO capster_ready VALUES(?,?)').run(capster,Number(data.ready));
        record(account,capster,data.ready?'READY':'NOT_READY');
        return {ready:data.ready};
      });
    }
    const action=path.match(/^\/api\/ops\/(start|finish|estimate|adjust)$/)?.[1];
    if (role==='capster' && action) return changeVisit(account,data.id??'',action,data);
    if (role==='manager' && path==='/api/ops/draft') {
      if (data.version!==config().version) fail(409,'Muat ulang pengaturan sebelum menyimpan.');
      db.prepare('INSERT OR REPLACE INTO salon_drafts VALUES(?,?,?)').run(account.id,data.version,JSON.stringify(clean(data)));
      return {saved:true};
    }
    if (role==='manager' && ['/api/ops/validate','/api/ops/publish'].includes(path)) return draftOutcome(account,path.endsWith('/publish'));
    fail(403,'Peranmu tidak memiliki akses ke tindakan ini.');
  }
  return {config,available,route,terms,record,transaction,bundle,withItems};
}
