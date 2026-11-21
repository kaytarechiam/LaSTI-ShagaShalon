import { randomBytes } from 'node:crypto';
import { candidates, today } from '../catalog.js';
import { getConfig, getItems, serviceBundle, availableSlots, writeTerms } from './scheduling.js';

class OperationError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}
const fail = (status, message) => { throw new OperationError(status, message); };
const one = async (db, sql, args = []) => (await db.query(sql, args)).rows[0];
const validDay = day => typeof day === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(day) &&
  Number.isFinite(Date.parse(day + 'T00:00:00+07:00')) && today(new Date(day + 'T00:00:00+07:00')) === day;
const query = `SELECT r.*,v.status AS visit_status,v.ticket,v.channel,v.arrived,v.started,v.ended,v.estimate,
 t.price AS booked_price,t.duration AS booked_duration FROM reservations r
 LEFT JOIN visits v ON v.reservation=r.id LEFT JOIN booking_terms t ON t.reservation=r.id`;
async function withItems(db, row) { return row && { ...row, items: await getItems(db, row.id) }; }
async function row(db, id) { return withItems(db, await one(db, query + ' WHERE r.id=$1', [id])); }
async function record(db, actor, subject, action) {
  await db.query('INSERT INTO salon_events(actor,subject,action,at) VALUES($1,$2,$3,$4)', [actor.id, subject, action, Date.now()]);
}
async function actorCapster(db, account) { return (await one(db, 'SELECT capster FROM capster_accounts WHERE account=$1', [account.id]))?.capster; }
async function visit(db, reservation, channel, requestKey = null) {
  const ticket = await one(db, 'SELECT COALESCE(MAX(ticket),0)+1 AS n FROM visits WHERE day=$1', [reservation.day]);
  await db.query("INSERT INTO visits(reservation,day,ticket,status,arrived,channel,request_key) VALUES($1,$2,$3,'WAITING',$4,$5,$6)",
    [reservation.id, reservation.day, ticket.n, Date.now(), channel, requestKey]);
  return row(db, reservation.id);
}
function contact(data) {
  const name = typeof data.name === 'string' && data.name.length <= 100 ? data.name.trim() : '';
  const phone = typeof data.phone === 'string' && data.phone.length <= 22 ? data.phone.trim() : '';
  if (name.length < 2 || !/^\+?[\d ()-]{8,22}$/.test(phone) || phone.replace(/\D/g, '').length < 8)
    fail(400, 'Isi nama dan nomor telepon yang valid.');
  return { name, phone };
}
function clean(data, previous) {
  const integer = (v, min, max) => Number.isInteger(v) && v >= min && v <= max;
  const name = v => typeof v === 'string' && v.trim().length >= 2 && v.length <= 80;
  const rules = data.rules;
  if (!rules || !['open','close','sunday','breakStart','breakEnd'].every(k => integer(rules[k],0,24)) ||
      rules.open >= Math.min(rules.close,rules.sunday) || rules.breakStart > rules.breakEnd ||
      !integer(rules.buffer,0,120) || !integer(rules.early,0,240) || !integer(rules.late,0,240)) fail(400,'Periksa jam dan aturan operasional.');
  function read(incoming,current,validate,map) {
    if (!Array.isArray(incoming) || incoming.length !== current.length) fail(400,'Daftar pengaturan tidak valid.');
    return current.map(old => {
      const item = incoming.find(x => x?.id === old.id);
      if (!item || !name(item.name) || typeof item.active !== 'boolean' || !validate(item)) fail(400,'Periksa pengaturan ' + old.name + '.');
      return { ...old, name:item.name.trim(), active:item.active, ...map(item) };
    });
  }
  const services = read(data.services,previous.services,s => integer(s.price,0,100000000) && integer(s.duration,15,480), s => ({price:s.price,duration:s.duration}));
  const capsters = read(data.capsters,previous.capsters,c => integer(c.start,0,23) && integer(c.end,c.start+1,24) &&
    integer(c.off,-1,6) && Array.isArray(c.skills) && c.skills.every(skill => services.some(s => s.id === skill)),
    c => ({start:c.start,end:c.end,off:c.off,skills:[...new Set(c.skills)]}));
  return {services,capsters,rules:Object.fromEntries(['open','close','sunday','buffer','breakStart','breakEnd','early','late'].map(k => [k,rules[k]]))};
}

export function createPostgresOperations(db) {
  async function checkIn(account, id) {
    return db.transaction(async tx => {
      const reservation = await row(tx, id);
      if (!reservation || reservation.status !== 'CONFIRMED') fail(409,'Check-in memerlukan reservasi terkonfirmasi.');
      if (reservation.ticket) return reservation;
      const rules = (await getConfig(tx)).rules, diff = (Date.now()-reservation.start)/60000;
      if (reservation.day !== today() || diff < -rules.early || diff > rules.late) fail(409,'Di luar waktu check-in yang diizinkan.');
      const result = await visit(tx, reservation, 'RESERVASI');
      await record(tx, account, id, 'CHECK_IN'); return result;
    });
  }
  async function walkIn(account, data) {
    const details = contact(data);
    if (typeof data.requestKey !== 'string' || !/^[a-f0-9-]{36}$/.test(data.requestKey)) fail(400,'Permintaan walk-in tidak valid.');
    return db.transaction(async tx => {
      const prior = await one(tx,'SELECT reservation FROM visits WHERE request_key=$1',[data.requestKey]);
      if (prior) { const existing = await row(tx,prior.reservation); if (existing.account !== account.id) fail(409,'Permintaan sudah digunakan.'); return existing; }
      const settings = await getConfig(tx), service = settings.services.find(s=>s.id===data.service), capster = settings.capsters.find(c=>c.id===data.capster), day=today();
      const slot = (await availableSlots(tx,service,capster,day,{settings})).find(s=>s.start===data.start);
      if (!slot) fail(409,'Jam tersebut tidak cukup atau baru terisi. Muat ulang pilihan jam atau pilih capster lain.');
      const id=randomBytes(16).toString('hex'), code='SH-'+randomBytes(6).toString('hex').toUpperCase();
      await tx.query(`INSERT INTO reservations(id,account,service,capster,day,start,"end",name,phone,status,code)
        VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,'CONFIRMED',$10)`,[id,account.id,service.id,capster.id,day,slot.start,slot.end,details.name,details.phone,code]);
      await tx.query('INSERT INTO allocations(reservation,capster,start,"end") VALUES($1,$2,$3,$4)',[id,capster.id,slot.start,slot.end]);
      await writeTerms(tx,id,service);
      const result=await visit(tx,{id,day},'WALK_IN',data.requestKey); await record(tx,account,id,'WALK_IN'); return result;
    });
  }
  async function changeVisit(account,id,action,data) {
    return db.transaction(async tx => {
      const r=await row(tx,id), capsterId=await actorCapster(tx,account), settings=await getConfig(tx), now=Date.now();
      if (!r?.ticket || !capsterId || r.capster!==capsterId) fail(404,'Sesi tidak ditemukan.');
      if (action==='start') {
        if (r.visit_status==='ACTIVE') return r;
        if (r.visit_status!=='WAITING' || r.day!==today() || now<r.start) fail(409,'Sesi hanya bisa dimulai pada atau setelah jam yang dijadwalkan.');
        if (!(await one(tx,'SELECT ready FROM capster_ready WHERE capster=$1',[capsterId]))?.ready) fail(409,'Tandai siap sebelum memulai sesi.');
        if (await one(tx,query+" WHERE r.capster=$1 AND v.status='ACTIVE'",[capsterId])) fail(409,'Selesaikan sesi aktif terlebih dahulu.');
        const last=await one(tx,query+" WHERE r.capster=$1 AND v.status='DONE' ORDER BY v.ended DESC LIMIT 1",[capsterId]);
        if (last && last.ended+settings.rules.buffer*60000>now) fail(409,'Jeda setelah sesi sebelumnya belum selesai.');
        const duration=r.booked_duration ?? settings.services.find(s=>s.id===r.service)?.duration;
        await tx.query("UPDATE visits SET status='ACTIVE',started=$1,estimate=$2 WHERE reservation=$3",[now,now+duration*60000,id]);
      } else if (action==='finish') {
        if (r.visit_status==='DONE') return r;
        if (r.visit_status!=='ACTIVE') fail(409,'Mulai sesi sebelum menyelesaikannya.');
        await tx.query("UPDATE visits SET status='DONE',ended=$1,estimate=NULL WHERE reservation=$2",[now,id]);
        await tx.query('INSERT INTO capster_ready(capster,ready) VALUES($1,0) ON CONFLICT(capster) DO UPDATE SET ready=0',[capsterId]);
      } else if (action==='estimate') {
        if (r.visit_status!=='ACTIVE') fail(409,'Hanya sesi aktif yang dapat diperbarui.');
        if (!Number.isInteger(data.minutes) || data.minutes<1 || data.minutes>480) fail(400,'Isi sisa waktu 1–480 menit.');
        await tx.query('UPDATE visits SET estimate=$1 WHERE reservation=$2',[now+data.minutes*60000,id]);
      } else {
        if (r.visit_status!=='WAITING' || data.approved!==true) fail(409,'Penyesuaian memerlukan sesi menunggu dan persetujuan pelanggan.');
        if (r.items.length>1) fail(409,'Penyesuaian untuk reservasi beberapa layanan belum tersedia.');
        const service=settings.services.find(s=>s.id===data.service), capster=settings.capsters.find(c=>c.id===data.capster);
        const slot=(await availableSlots(tx,service,capster,r.day,{except:id,settings,now:r.start-1})).find(s=>s.start===r.start);
        if (!slot || slot.end<=now) fail(409,'Perubahan bentrok dengan jadwal. Pilihan lama tetap berlaku.');
        await tx.query('UPDATE reservations SET service=$1,capster=$2,"end"=$3 WHERE id=$4',[service.id,capster.id,slot.end,id]);
        await tx.query('UPDATE allocations SET capster=$1,"end"=$2 WHERE reservation=$3',[capster.id,slot.end,id]); await writeTerms(tx,id,service);
      }
      await record(tx,account,id,action.toUpperCase()); return row(tx,id);
    });
  }
  async function board(account,params) {
    const day=params.get('day')||today(), to=params.get('to')||day;
    if (!validDay(day) || !validDay(to) || to<day || Date.parse(to)-Date.parse(day)>89*86400000) fail(400,'Pilih rentang tanggal hingga 90 hari.');
    const settings=await getConfig(db), mine=account.role==='capster' ? (await actorCapster(db,account))||'' : null;
    const result=await db.query(query+' WHERE r.day BETWEEN $1 AND $2'+(mine===null?'':' AND r.capster=$3')+' ORDER BY r.start',mine===null?[day,to]:[day,to,mine]);
    const itemsByReservation=new Map();
    if (result.rows.length) {
      const items=await db.query(`SELECT reservation,service AS id,name,price,duration FROM reservation_items
        WHERE reservation=ANY($1::text[]) ORDER BY reservation,position`,[result.rows.map(entry=>entry.id)]);
      for (const item of items.rows) {
        const {reservation,...details}=item;
        if (!itemsByReservation.has(reservation)) itemsByReservation.set(reservation,[]);
        itemsByReservation.get(reservation).push(details);
      }
    }
    const rows=result.rows.map(entry=>({...entry,items:itemsByReservation.get(entry.id)||[]}));
    if (account.role==='staff') {
      const settled=await db.query(`SELECT i.reservation, p.created AS paid_at FROM invoices i
        LEFT JOIN payments p ON p.reservation=i.reservation
        JOIN reservations r ON r.id=i.reservation WHERE r.day BETWEEN $1 AND $2`,[day,to]);
      const lookup=new Map(settled.rows.map(x=>[x.reservation,x.paid_at ? 'PAID' : 'UNPAID']));
      for (const row of rows) row.payment_status=lookup.get(row.id) || (row.visit_status==='DONE'?'READY':'NOT_READY');
    }
    const pending=new Map(), now=Date.now();
    for (const r of rows.filter(r=>r.visit_status==='ACTIVE' && r.day===today())) pending.set(r.capster,Math.max(now,r.estimate)+settings.rules.buffer*60000);
    for (const r of rows.filter(r=>r.visit_status==='WAITING')) {
      r.eta=Math.max(r.start,pending.get(r.capster)||r.start,r.day===today()?now:0);
      pending.set(r.capster,r.eta+(r.booked_duration||settings.services.find(s=>s.id===r.service)?.duration||0)*60000+settings.rules.buffer*60000);
    }
    if (mine!==null) for (const r of rows) delete r.phone;
    const draft=account.role==='manager' ? await one(db,'SELECT version,data FROM salon_drafts WHERE account=$1',[account.id]) : null;
    const ready=mine ? !!(await one(db,'SELECT ready FROM capster_ready WHERE capster=$1',[mine]))?.ready : false;
    return {rows,settings,mine,ready,draft:draft?{version:draft.version,...JSON.parse(draft.data)}:null};
  }
  async function draftOutcome(account,publish) {
    return db.transaction(async tx => {
      const draft=await one(tx,'SELECT version,data FROM salon_drafts WHERE account=$1',[account.id]), current=await getConfig(tx);
      if (!draft || draft.version!==current.version) fail(409,'Draf belum ada atau versi pengaturan sudah berubah.');
      const next=JSON.parse(draft.data), active=(await tx.query(query+" WHERE r.status='CONFIRMED' AND r.day>=$1 AND (v.status IS NULL OR v.status<>'DONE') ORDER BY r.start",[today()])).rows;
      const conflicts=[], planned=new Map();
      for (const r of active) {
        const service=serviceBundle((await getItems(tx,r.id)).map(item=>item.id),next), capster=next.capsters.find(c=>c.id===r.capster);
        const slot=candidates(service,capster,r.day,r.start-1,next.rules).find(s=>s.start===r.start), prior=planned.get(r.capster);
        if (!slot || slot.end>r.end || (prior && prior.end>r.start)) conflicts.push({code:r.code,day:r.day});
        if (slot) planned.set(r.capster,{end:Math.max(prior?.end||0,slot.end)});
      }
      if (conflicts.length || !publish) return {conflicts,published:false};
      await tx.query('UPDATE salon_config SET version=version+1,data=$1,updated=$2,actor=$3 WHERE id=1',[draft.data,Date.now(),account.id]);
      await tx.query('DELETE FROM salon_drafts WHERE account=$1',[account.id]); await record(tx,account,'settings','PUBLISH'); return {conflicts,published:true};
    });
  }
  async function route(account,path,params,data=null) {
    const {role}=account;
    if (!['staff','capster','manager'].includes(role)) fail(403,'Halaman khusus tim salon.');
    if (data===null && path==='/api/ops/board') return board(account,params);
    if (!data) fail(404,'Halaman tidak ditemukan.');
    if (role==='staff' && path==='/api/ops/check-in') return checkIn(account,data.id??'');
    if (role==='staff' && path==='/api/ops/walk-in') return walkIn(account,data);
    if (role==='capster' && path==='/api/ops/ready') {
      if (typeof data.ready!=='boolean') fail(400,'Pilih kesiapan capster.');
      return db.transaction(async tx=>{
        const capster=await actorCapster(tx,account); if (!capster) fail(403,'Belum ada capster yang terhubung.');
        await tx.query('INSERT INTO capster_ready(capster,ready) VALUES($1,$2) ON CONFLICT(capster) DO UPDATE SET ready=EXCLUDED.ready',[capster,Number(data.ready)]);
        await record(tx,account,capster,data.ready?'READY':'NOT_READY'); return {ready:data.ready};
      });
    }
    const action=path.match(/^\/api\/ops\/(start|finish|estimate|adjust)$/)?.[1];
    if (role==='capster' && action) return changeVisit(account,data.id??'',action,data);
    if (role==='manager' && path==='/api/ops/draft') return db.transaction(async tx=>{
      const config=await getConfig(tx); if (data.version!==config.version) fail(409,'Muat ulang pengaturan sebelum menyimpan.');
      await tx.query(`INSERT INTO salon_drafts(account,version,data) VALUES($1,$2,$3)
        ON CONFLICT(account) DO UPDATE SET version=EXCLUDED.version,data=EXCLUDED.data`,[account.id,data.version,JSON.stringify(clean(data,config))]);
      return {saved:true};
    });
    if (role==='manager' && ['/api/ops/validate','/api/ops/publish'].includes(path)) return draftOutcome(account,path.endsWith('/publish'));
    fail(403,'Peranmu tidak memiliki akses ke tindakan ini.');
  }
  async function customerQueue(account,id) {
    const owned=await one(db,'SELECT day FROM reservations WHERE id=$1 AND account=$2',[id,account.id]);
    if (!owned) fail(404,'Reservasi tidak ditemukan.');
    const result=await board(account,new URLSearchParams({day:owned.day}));
    const r=result.rows.find(entry=>entry.id===id);
    return {ticket:r?.ticket||null,status:r?.visit_status||null,eta:r?.eta||null,estimate:r?.estimate||null};
  }
  return {route,customerQueue};
}
