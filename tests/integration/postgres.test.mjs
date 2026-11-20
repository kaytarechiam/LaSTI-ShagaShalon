import test from 'node:test';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const url=process.env.TEST_DATABASE_URL;
const enabled=Boolean(url && process.env.SHAGA_TEST_DISPOSABLE==='yes');
function run(file,env) {
  return new Promise((resolve,reject)=>{
    const child=spawn(process.execPath,[fileURLToPath(new URL(file,import.meta.url))],{env:{...process.env,...env},stdio:['ignore','pipe','pipe']});
    let out=''; child.stdout.on('data',chunk=>out+=chunk); child.stderr.on('data',chunk=>out+=chunk);
    child.on('error',reject); child.on('close',code=>code===0?resolve():reject(new Error(`PostgreSQL integration failed (${code}): ${out.replaceAll(url,'[redacted]')}`)));
  });
}
test('PostgreSQL reservation and operations integration', {skip:!enabled,timeout:180000},()=>run('./postgres-api-smoke.mjs',{DATABASE_URL:url}));
test('PostgreSQL concurrent allocation exclusion', {skip:!enabled,timeout:180000},()=>run('./postgres-concurrency.mjs',{}));
test('PostgreSQL concurrent duplicate payments', {skip:!enabled,timeout:180000},()=>run('./postgres-payments-concurrency.mjs',{DATABASE_URL:url}));
