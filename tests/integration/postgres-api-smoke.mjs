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
    await tx.query("UPDATE accounts SET role='staff' WHERE id=$1",[staffAccount.rows[0].id]);
    const visitId=randomBytes(16).toString('hex'), now=Date.now();
    await tx.query(`INSERT INTO reservations(id,account,service,capster,day,start,"end",name,phone,status,code)
      VALUES($1,$2,$3,$4,$5,$6,$7,'Demo','081234567890','CONFIRMED',$8)`,
      [visitId,staffAccount.rows[0].id,chosen.service,chosen.capster,catalog.today,now-1000,now+3600000,'TEST-'+suffix]);
    await tx.query('INSERT INTO allocations(reservation,capster,start,"end") VALUES($1,$2,$3,$4)',[visitId,chosen.capster,now-1000,now+3600000]);
    await tx.query('INSERT INTO booking_terms(reservation,price,duration) VALUES($1,45000,45)',[visitId]);
    await tx.query("INSERT INTO reservation_items(reservation,position,service,name,price,duration) VALUES($1,0,$2,'Demo',45000,45)",[visitId,chosen.service]);
    assert.equal((await staff('/api/ops/check-in',{id:visitId})).body.visit_status,'WAITING');
    await tx.query("UPDATE accounts SET role='capster' WHERE id=$1",[staffAccount.rows[0].id]);
    await tx.query('INSERT INTO capster_accounts(account,capster) VALUES($1,$2)',[staffAccount.rows[0].id,chosen.capster]);
    assert.equal((await staff('/api/ops/ready',{ready:true})).status,200);
    assert.equal((await staff('/api/ops/board?day='+chosen.day)).body.mine,chosen.capster);
    assert.equal((await staff('/api/ops/start',{id:visitId})).body.visit_status,'ACTIVE');
    assert.equal((await staff('/api/ops/estimate',{id:visitId,minutes:30})).status,200);
    assert.equal((await staff('/api/ops/finish',{id:visitId})).body.visit_status,'DONE');
    throw intentionalRollback;
  });
} catch (error) {
  if (error!==intentionalRollback) throw error;
  console.log('PostgreSQL accounts, booking conflict, staff, management, and capster session checks passed; rolled back.');
} finally { await pool.close(); }
