// Manual smoke test for an isolated Vercel preview and its disposable Neon development branch.
// Receives {databaseUrl,shareUrl} on stdin; credentials stay in the ignored local demo env file.
import assert from 'node:assert/strict';
import { randomBytes } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { createInterface } from 'node:readline';
import { createPostgresDatabase } from '../../prototype/backend/postgres/database.js';

const input=createInterface({input:process.stdin,terminal:false});
const config=JSON.parse(await new Promise(resolve=>input.once('line',resolve))); input.close();
const env=Object.fromEntries((await readFile(new URL('../../prototype/.env.shaga-demo.local',import.meta.url),'utf8'))
  .split(/\r?\n/).filter(line=>/^[A-Z_]+=/.test(line)).map(line=>{const pos=line.indexOf('=');return [line.slice(0,pos),line.slice(pos+1).trim().replace(/^['"]|['"]$/g,'')];}));
const share=await fetch(config.shareUrl,{redirect:'manual'}), origin=new URL(config.shareUrl).origin;
const protectedCookies=share.headers.getSetCookie().map(c=>c.split(';')[0]).join('; ');
if (!protectedCookies) throw new Error('Preview protection cookie not received');
function client() {
  let session='';
  return async (path,data)=>{
    const response=await fetch(origin+path,{method:data===undefined?'GET':'POST',
      headers:{cookie:[protectedCookies,session].filter(Boolean).join('; '),...(data===undefined?{}:{'content-type':'application/json'})},
      ...(data===undefined?{}:{body:JSON.stringify(data)})});
    for(const value of response.headers.getSetCookie()) if(value.startsWith('shaga_session=')) session=value.split(';')[0];
    const raw=await response.text(); let body; try { body=JSON.parse(raw); } catch { throw new Error('Unexpected response '+response.status); }
    return {status:response.status,body};
  };
}
const customer=client(),staff=client(),manager=client(), db=createPostgresDatabase(config.databaseUrl);
const id=randomBytes(16).toString('hex'), code='TEST-'+id, day=new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Jakarta'}).format(new Date());
let inserted=false;
try {
  for(const [call,role] of [[customer,'CUSTOMER'],[staff,'STAFF'],[manager,'MANAGER']]) {
    const login=await call('/api/login',{email:env['SHAGA_DEMO_'+role+'_EMAIL'],password:env['SHAGA_DEMO_'+role+'_PASSWORD']});
    assert.equal(login.status,200,'preview login '+role);
  }
  await db.transaction(async tx=>{
    const owner=(await tx.query('SELECT id FROM accounts WHERE email=$1 AND role=$2',[env.SHAGA_DEMO_CUSTOMER_EMAIL,'customer'])).rows[0];
    if(!owner) throw new Error('Demo customer missing from development database');
    const ticket=(await tx.query('SELECT COALESCE(MAX(ticket),0)+1 AS ticket FROM visits WHERE day=$1',[day])).rows[0].ticket;
    const now=Date.now();
    await tx.query(`INSERT INTO reservations(id,account,service,capster,day,start,"end",name,phone,status,code)
      VALUES($1,$2,'test','preview-test',$3,$4,$5,'Preview Test','08123456789','CONFIRMED',$6)`,[id,owner.id,day,now-3600000,now-1800000,code]);
    await tx.query("INSERT INTO visits(reservation,day,ticket,status,arrived,started,ended,channel) VALUES($1,$2,$3,'DONE',$4,$4,$5,'RESERVASI')",[id,day,ticket,now-3600000,now-1800000]);
    await tx.query('INSERT INTO booking_terms(reservation,price,duration) VALUES($1,50000,30)',[id]);
    await tx.query("INSERT INTO reservation_items(reservation,position,service,name,price,duration) VALUES($1,0,'test','Preview Test',50000,30)",[id]);
  });
  inserted=true;
  assert.equal((await customer('/api/queue?id='+id)).body.status,'DONE');
  assert.equal((await staff('/api/settlement/create',{id})).body.total,50000);
  const paid=await Promise.all([staff('/api/settlement/pay',{id,method:'CASH',received:true}),staff('/api/settlement/pay',{id,method:'CASH',received:true})]);
  assert.deepEqual(paid.map(r=>r.status),[200,200]);
  assert.equal((await db.query('SELECT count(*)::int AS n FROM payments WHERE reservation=$1',[id])).rows[0].n,1);
  assert.equal((await customer('/api/settlement/detail?id='+id)).body.invoice.paid_amount,50000);
  assert.equal((await customer('/api/settlement/feedback',{id,rating:5,comment:'Preview test'})).status,200);
  assert.equal((await customer('/api/settlement/feedback',{id,rating:5,comment:'Preview test'})).status,409);
  assert.equal((await customer('/api/settlement/report?from='+day+'&to='+day)).status,403);
  const report=await manager('/api/settlement/report?from='+day+'&to='+day);
  assert.equal(report.status,200);
  assert.ok(report.body.comments.some(f=>f.reservation===id));
  console.log('Preview customer, staff, queue, payment, feedback and manager report checks passed.');
} finally {
  if(inserted) await db.transaction(async tx=>{
    await tx.query('DELETE FROM salon_events WHERE subject=$1',[id]);
    await tx.query('DELETE FROM feedback WHERE reservation=$1',[id]);
    await tx.query('DELETE FROM payments WHERE reservation=$1',[id]);
    await tx.query('DELETE FROM invoices WHERE reservation=$1',[id]);
    await tx.query('DELETE FROM reservation_items WHERE reservation=$1',[id]);
    await tx.query('DELETE FROM booking_terms WHERE reservation=$1',[id]);
    await tx.query('DELETE FROM visits WHERE reservation=$1',[id]);
    await tx.query('DELETE FROM reservations WHERE id=$1 AND code=$2',[id,code]);
  });
  await db.close();
}
