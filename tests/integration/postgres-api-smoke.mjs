// Requires a disposable development branch. Every write is rolled back.
import assert from 'node:assert/strict';
import { randomBytes } from 'node:crypto';
import { Readable } from 'node:stream';
import { createInterface } from 'node:readline';
import { createPostgresDatabase } from '../../prototype/backend/postgres/database.js';
import { createPostgresReservationApi } from '../../prototype/backend/postgres/reservation-api.js';
import { createPostgresOperations } from '../../prototype/backend/postgres/operations.js';
import { seedDemoAccounts } from '../../prototype/backend/postgres/demo-accounts.js';

let url = process.env.DATABASE_URL;
if (!url) {
  const input=createInterface({ input:process.stdin, terminal:false });
  url=await new Promise(resolve=>input.once('line',resolve));
  input.close();
}
if (!url) throw new Error('DATABASE_URL required');
const pool = createPostgresDatabase(url);
const intentionalRollback = new Error('rollback test');
function client(api) {
  let cookie='';
  return async (path,data) => {
    const req=Readable.from(data === undefined ? [] : [Buffer.from(JSON.stringify(data))]);
    req.method=data===undefined?'GET':'POST'; req.headers={cookie,...(data===undefined?{}:{'content-type':'application/json'})};
    req.socket={remoteAddress:'test'};
    let status,result;
    const res={setHeader(name,value){if(name.toLowerCase()==='set-cookie') cookie=value.split(';')[0];},
      writeHead(code){status=code;},end(value){result=JSON.parse(value);}};
    await api.handle(req,res,new URL(path,'http://localhost')); return {status,body:result};
  };
}
try {
  await pool.transaction(async tx => {
    await tx.query('CREATE TABLE IF NOT EXISTS auth_attempts (key text PRIMARY KEY,count integer NOT NULL,expires bigint NOT NULL)');
    const db={query:(...args)=>tx.query(...args),transaction:fn=>fn(tx)};
    const suffix=randomBytes(6).toString('hex');
    await seedDemoAccounts(db,{customerEmail:`customer-${suffix}@example.test`,customerPassword:'customer-demo-1234',
      staffEmail:`staff-${suffix}@example.test`,staffPassword:'staff-demo-1234'});
    const api=await createPostgresReservationApi(db,{operations:createPostgresOperations(db)});
    const first=client(api), second=client(api), staff=client(api);
    assert.equal((await first('/api/login',{email:`customer-${suffix}@example.test`,password:'customer-demo-1234'})).status,200);
    assert.equal((await staff('/api/login',{email:`staff-${suffix}@example.test`,password:'staff-demo-1234'})).status,200);
    assert.equal((await staff('/api/ops/board')).status,200);
    assert.equal((await second('/api/register',{email:`second-${suffix}@example.test`,password:'password-demo',confirmation:'password-demo',name:'Test User',phone:'081234567890'})).status,201);
    const catalog=(await first('/api/catalog')).body; let chosen;
    for (let offset=1;offset<=14&&!chosen;offset++) {
      const day=new Date(Date.parse(catalog.today+'T00:00:00Z')+offset*86400000).toISOString().slice(0,10);
      for (const capster of catalog.capsters) { for (const service of catalog.services) {
        const params=new URLSearchParams({service:service.id,capster:capster.id,day});
        const slots=(await first('/api/slots?'+params)).body.slots;
        if(slots?.length){chosen={service:service.id,capster:capster.id,day,start:slots[0].start};break;}
      } if(chosen) break; }
    }
    assert.ok(chosen);
    const payload={...chosen,name:'Demo Customer',phone:'081234567890'};
    const a=await first('/api/reservations',payload), b=await second('/api/reservations',payload);
    assert.equal(a.status,201,JSON.stringify(a.body)); assert.equal(b.status,201,JSON.stringify(b.body));
    assert.equal((await first(`/api/reservations/${a.body.id}/confirm`,{quote:a.body.quote})).status,200);
    assert.equal((await second(`/api/reservations/${b.body.id}/confirm`,{quote:b.body.quote})).status,409);
    const staffBoard=(await staff('/api/ops/board?day='+chosen.day)).body.rows;
    assert.ok(staffBoard.some(row=>row.id===a.body.id) && staffBoard.some(row=>row.id===b.body.id));
    // Exercise management and capster routes with the same test account inside the rollback.
    await tx.query("UPDATE accounts SET role='manager' WHERE email=$1",[`staff-${suffix}@example.test`]);
    const board=(await staff('/api/ops/board')).body;
    assert.equal((await staff('/api/ops/draft',{...board.settings})).status,200);
    assert.equal((await staff('/api/ops/validate',{})).body.published,false);
    assert.equal((await staff('/api/ops/publish',{})).body.published,true);
    const staffAccount=await tx.query('SELECT id FROM accounts WHERE email=$1',[`staff-${suffix}@example.test`]);
    const customerAccount=await tx.query('SELECT id FROM accounts WHERE email=$1',[`customer-${suffix}@example.test`]);
    await tx.query("UPDATE accounts SET role='staff' WHERE id=$1",[staffAccount.rows[0].id]);
    const visitId=randomBytes(16).toString('hex'), now=Date.now(), testCapster='test-'+suffix;
    await tx.query(`INSERT INTO reservations(id,account,service,capster,day,start,"end",name,phone,status,code)
      VALUES($1,$2,$3,$4,$5,$6,$7,'Demo','081234567890','CONFIRMED',$8)`,
      [visitId,customerAccount.rows[0].id,chosen.service,testCapster,catalog.today,now-1000,now+3600000,'TEST-'+suffix]);
    await tx.query('INSERT INTO allocations(reservation,capster,start,"end") VALUES($1,$2,$3,$4)',[visitId,testCapster,now-1000,now+3600000]);
    await tx.query('INSERT INTO booking_terms(reservation,price,duration) VALUES($1,45000,45)',[visitId]);
    await tx.query("INSERT INTO reservation_items(reservation,position,service,name,price,duration) VALUES($1,0,$2,'Demo',45000,45)",[visitId,chosen.service]);
    assert.equal((await staff('/api/ops/check-in',{id:visitId})).body.visit_status,'WAITING');
    await tx.query("UPDATE accounts SET role='capster' WHERE id=$1",[staffAccount.rows[0].id]);
    await tx.query('INSERT INTO capster_accounts(account,capster) VALUES($1,$2)',[staffAccount.rows[0].id,testCapster]);
    assert.equal((await staff('/api/ops/ready',{ready:true})).status,200);
    assert.equal((await staff('/api/ops/board?day='+chosen.day)).body.mine,testCapster);
    assert.equal((await staff('/api/ops/start',{id:visitId})).body.visit_status,'ACTIVE');
    assert.equal((await first('/api/settlement/feedback',{id:visitId,rating:5})).status,409);
    assert.equal((await staff('/api/ops/estimate',{id:visitId,minutes:30})).status,200);
    assert.equal((await staff('/api/ops/finish',{id:visitId})).body.visit_status,'DONE');
    await tx.query("UPDATE accounts SET role='staff' WHERE id=$1",[staffAccount.rows[0].id]);
    assert.equal((await second('/api/settlement/detail?id='+visitId)).status,404);
    assert.equal((await second('/api/settlement/feedback',{id:visitId,rating:5,comment:'x'})).status,404);
    assert.equal((await first('/api/settlement/create',{id:visitId})).status,403);
    assert.equal((await staff('/api/settlement/create',{id:visitId})).body.total,45000);
    assert.equal((await first('/api/settlement/feedback',{id:visitId,rating:5})).status,409);
    // Existing feedback from before the paid requirement remains readable.
    await tx.query('INSERT INTO feedback(reservation,account,rating,comment,created) VALUES($1,$2,4,$3,$4)',[visitId,customerAccount.rows[0].id,'Uji data lama',Date.now()]);
    assert.equal((await first('/api/settlement/detail?id='+visitId)).body.feedback.rating,4);
    await tx.query('DELETE FROM feedback WHERE reservation=$1',[visitId]); // synthetic fixture, transaction rolled back
    assert.equal((await staff('/api/settlement/adjust',{id:visitId,total:40000,reason:'Koreksi'})).body.total,40000);
    assert.equal((await staff('/api/settlement/pay',{id:visitId,method:'CASH',received:true})).body.paid_amount,40000);
    assert.equal((await staff('/api/settlement/pay',{id:visitId,method:'CASH',received:true})).body.paid_amount,40000);
    assert.equal((await staff('/api/settlement/pay',{id:visitId,method:'TRANSFER',received:true})).status,409);
    assert.equal((await staff('/api/settlement/adjust',{id:visitId,total:1,reason:'x'})).status,409);
    assert.equal((await first('/api/settlement/detail?id='+visitId)).body.invoice.paid_amount,40000);
    assert.equal((await first('/api/settlement/feedback',{id:visitId,rating:5,comment:'Bagus'})).status,200);
    assert.equal((await first('/api/settlement/feedback',{id:visitId,rating:5,comment:'Bagus'})).status,409);
    assert.equal((await first('/api/settlement/report?from='+catalog.today+'&to='+catalog.today)).status,403);
    await tx.query("UPDATE accounts SET role='manager' WHERE id=$1",[staffAccount.rows[0].id]);
    const report=await staff('/api/settlement/report?from='+catalog.today+'&to='+catalog.today);
    assert.equal(report.status,200,JSON.stringify(report.body));
    assert.ok(report.body.payments.total>=40000);
    assert.ok(report.body.feedback.count>=1);
    assert.equal(report.body.series.length,1);
    assert.equal(report.body.series[0].paid_total,report.body.payments.total);
    assert.equal(report.body.series[0].visits,report.body.counts.visits);
    assert.ok(report.body.invoices.count>=1);
    assert.ok(report.body.ratings.some(row=>row.rating===5 && row.count>=1));
    assert.equal((await staff('/api/settlement/report?from=2026-01-01&to=2026-04-01')).status,400);
    const walkId=randomBytes(16).toString('hex'), walkDay='2098-06-01';
    await tx.query(`INSERT INTO reservations(id,account,service,capster,day,start,"end",name,phone,status)
      VALUES($1,$2,$3,$4,$5,1,2,'Uji walk-in','081234567890','CONFIRMED')`,[walkId,customerAccount.rows[0].id,chosen.service,testCapster,walkDay]);
    await tx.query("INSERT INTO visits(reservation,day,ticket,status,arrived,channel) VALUES($1,$2,1,'DONE',1,'WALK_IN')",[walkId,walkDay]);
    await tx.query('INSERT INTO invoices(reservation,original_total,total,created,created_by) VALUES($1,5000,5000,$2,$3)',[walkId,Date.parse('2098-06-01T00:00:00+07:00'),staffAccount.rows[0].id]);
    await tx.query("INSERT INTO payments(reservation,amount,method,actor,created) VALUES($1,5000,'CASH',$2,$3)",[walkId,staffAccount.rows[0].id,Date.parse('2098-06-01T23:59:59+07:00')]);
    await tx.query('INSERT INTO feedback(reservation,account,rating,comment,created) VALUES($1,$2,3,$3,$4)',[walkId,customerAccount.rows[0].id,'Batas WIB',Date.parse('2098-06-02T00:00:00+07:00')]);
    const walkReport=await staff('/api/settlement/report?from='+walkDay+'&to='+walkDay);
    assert.equal(walkReport.status,200);
    assert.equal(walkReport.body.counts.walkins,1);
    assert.equal(walkReport.body.counts.reservations,0);
    assert.equal(walkReport.body.counts.visits,1);
    assert.equal(walkReport.body.payments.total,5000);
    assert.equal(walkReport.body.series[0].paid_total,5000);
    assert.equal(walkReport.body.feedback.count,0);
    const nextDay=await staff('/api/settlement/report?from=2098-06-02&to=2098-06-02');
    assert.equal(nextDay.body.payments.count,0);
    assert.equal(nextDay.body.feedback.count,1);
    assert.equal((await staff('/api/settlement/followup',{id:visitId,note:'Terima kasih'})).status,200);
    throw intentionalRollback;
  });
} catch (error) {
  if (error!==intentionalRollback) throw error;
  console.log('PostgreSQL accounts, booking conflict, staff, management, and capster session checks passed; rolled back.');
} finally { await pool.close(); }
