import test from 'node:test';
import assert from 'node:assert/strict';
import { createTeamAccount } from '../../prototype/backend/postgres/team-accounts.js';

test('creates a capster and mapping in the same transaction', async () => {
  const calls=[];
  const db={transaction:fn=>fn({query:async(sql,args)=>{calls.push([sql,args]);return {rows:[{id:8,account:8}]};}})};
  assert.deepEqual(await createTeamAccount(db,{email:' TEST@example.test ',password:'secure-demo-password',role:'capster',capsterId:'a'}),
    {email:'test@example.test',role:'capster',capsterId:'a'});
  assert.equal(calls.length,2);
  assert.deepEqual(calls[1][1],[8,'a']);
  assert.notEqual(calls[0][1][2],'secure-demo-password');
});

test('refuses existing account, occupied capster, and invalid role', async () => {
  const input={email:'test@example.test',password:'secure-demo-password',role:'capster',capsterId:'a'};
  let n=0;
  const db={transaction:fn=>fn({query:async()=>({rows:++n===1?[{id:8}]:[]})})};
  await assert.rejects(createTeamAccount(db,input),/Capster sudah terhubung/);
  await assert.rejects(createTeamAccount({transaction:fn=>fn({query:async()=>({rows:[]})})},input),/Email sudah digunakan/);
  await assert.rejects(createTeamAccount(db,{...input,role:'admin'}),/tidak valid/);
});
