// Runs only against a disposable development database. It creates uniquely named
// rows and removes those exact rows even if the assertion fails.
import assert from 'node:assert/strict';
import { randomBytes } from 'node:crypto';
import { createInterface } from 'node:readline';
import { createPostgresDatabase } from '../../prototype/backend/postgres/database.js';

let url=process.env.TEST_DATABASE_URL;
if (!url && process.env.SHAGA_TEST_DISPOSABLE === 'yes') {
  const input=createInterface({input:process.stdin,terminal:false});
  url=await new Promise(resolve=>input.once('line',resolve)); input.close();
}
if (!url || process.env.SHAGA_TEST_DISPOSABLE !== 'yes') {
  throw new Error('Set TEST_DATABASE_URL and SHAGA_TEST_DISPOSABLE=yes for a disposable development database.');
}
const db=createPostgresDatabase(url);
const suffix=randomBytes(16).toString('hex'), email=`concurrency-${suffix}@example.test`;
const ids=[randomBytes(16).toString('hex'),randomBytes(16).toString('hex')], capster=`test-${suffix}`;
let accountId;
try {
  await db.transaction(async tx=>{
    const result=await tx.query("INSERT INTO accounts(email,name,phone,password,role) VALUES($1,'Test','','hash','customer') RETURNING id",[email]);
    accountId=result.rows[0].id;
    for(const id of ids) await tx.query(`INSERT INTO reservations(id,account,service,capster,day,start,"end",name,phone)
      VALUES($1,$2,'test',$3,'2099-01-01',100,200,'Test','')`,[id,accountId,capster]);
  });
  const attempts=ids.map(id=>db.transaction(async tx=>{
    await tx.query('INSERT INTO allocations(reservation,capster,start,"end") VALUES($1,$2,100,200)',[id,capster]);
    await new Promise(resolve=>setTimeout(resolve,100));
  }));
  const result=await Promise.allSettled(attempts);
  assert.equal(result.filter(item=>item.status==='fulfilled').length,1);
  const rejected=result.find(item=>item.status==='rejected');
  assert.equal(rejected?.reason?.code,'23P01');
  console.log('Concurrent conflicting allocations: one success and one PostgreSQL exclusion violation.');
} finally {
  if(accountId) await db.transaction(async tx=>{
    await tx.query('DELETE FROM allocations WHERE reservation=ANY($1::text[])',[ids]);
    await tx.query('DELETE FROM reservations WHERE id=ANY($1::text[])',[ids]);
    await tx.query('DELETE FROM accounts WHERE id=$1 AND email=$2',[accountId,email]);
  });
  await db.close();
}
