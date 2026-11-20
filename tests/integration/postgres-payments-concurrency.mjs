// Only use a disposable development database. Creates and removes uniquely identified fixtures.
import assert from 'node:assert/strict';
import { randomBytes } from 'node:crypto';
import { createInterface } from 'node:readline';
import { createPostgresDatabase } from '../../prototype/backend/postgres/database.js';
import { createSettlement } from '../../prototype/backend/postgres/settlement.js';

let url=process.env.DATABASE_URL;
if (!url) {
  const input=createInterface({input:process.stdin,terminal:false});
  url=await new Promise(resolve=>input.once('line',resolve));
  input.close();
}
if (!url) throw new Error('DATABASE_URL required');
if (process.env.SHAGA_TEST_DISPOSABLE !== 'yes') throw new Error('Set SHAGA_TEST_DISPOSABLE=yes for a disposable development database.');
const db=createPostgresDatabase(url), suffix=randomBytes(16).toString('hex'), id=suffix;
let actor;
try {
  await db.transaction(async tx=>{
    actor=(await tx.query("INSERT INTO accounts(email,name,phone,password,role) VALUES($1,'Test','08123456789','test','staff') RETURNING id",[`payment-${suffix}@example.test`])).rows[0].id;
    await tx.query(`INSERT INTO reservations(id,account,service,capster,day,start,"end",name,phone,status) VALUES($1,$2,'test','test','2099-01-01',1,2,'Test','08123456789','CONFIRMED')`,[id,actor]);
    await tx.query("INSERT INTO visits(reservation,day,ticket,status,arrived,channel) VALUES($1,$2,1,'DONE',1,'RESERVASI')",[id,'test-'+suffix]);
    await tx.query('INSERT INTO booking_terms(reservation,price,duration) VALUES($1,50000,45)',[id]);
    await tx.query("INSERT INTO reservation_items(reservation,position,service,name,price,duration) VALUES($1,0,'test','Test',50000,45)",[id]);
  });
  const service=createSettlement(db), staff={id:actor,role:'staff'}, params=new URLSearchParams();
  await service.route(staff,'/api/settlement/create',params,{id});
  const results=await Promise.all([
    service.route(staff,'/api/settlement/pay',params,{id,method:'CASH',received:true}),
    service.route(staff,'/api/settlement/pay',params,{id,method:'CASH',received:true}),
  ]);
  assert.deepEqual(results.map(x=>x.paid_amount),[50000,50000]);
  const rows=await db.query('SELECT count(*)::int AS count FROM payments WHERE reservation=$1',[id]);
  assert.equal(rows.rows[0].count,1);
  console.log('Concurrent duplicate payments produced one payment record.');
} finally {
  if (actor) await db.transaction(async tx=>{
    await tx.query('DELETE FROM salon_events WHERE subject=$1',[id]);
    await tx.query('DELETE FROM payments WHERE reservation=$1',[id]);
    await tx.query('DELETE FROM invoices WHERE reservation=$1',[id]);
    await tx.query('DELETE FROM reservation_items WHERE reservation=$1',[id]);
    await tx.query('DELETE FROM booking_terms WHERE reservation=$1',[id]);
    await tx.query('DELETE FROM visits WHERE reservation=$1',[id]);
    await tx.query('DELETE FROM reservations WHERE id=$1',[id]);
    await tx.query('DELETE FROM accounts WHERE id=$1',[actor]);
  });
  await db.close();
}
