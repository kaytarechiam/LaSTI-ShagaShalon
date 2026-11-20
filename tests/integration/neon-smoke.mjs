// Run only against a disposable development database with the draft schema.
// Supply DATABASE_URL via environment or a raw terminal; never log the URL.
import assert from 'node:assert/strict';
import { randomBytes } from 'node:crypto';
import { createPostgresDatabase } from '../../prototype/backend/postgres/database.js';
import { createAccountStore } from '../../prototype/backend/postgres/accounts.js';

let url = process.env.DATABASE_URL;
if (!url && process.stdin.isTTY) {
  process.stdout.write('Neon development connection: ');
  process.stdin.setRawMode(true);
  process.stdin.resume();
  url = await new Promise(resolve => process.stdin.once('data', data => resolve(data.toString().trim())));
  process.stdin.setRawMode(false);
  process.stdin.pause();
}
if (!url) throw new Error('DATABASE_URL is required');
const db = createPostgresDatabase(url);
const rollback = new Error('intentional test rollback');
try {
  await db.transaction(async client => {
    const store = createAccountStore({ query: (...args) => client.query(...args), transaction: fn => fn(client) });
    const email = `test-${randomBytes(12).toString('hex')}@example.test`;
    const id = await store.register({ email, name: 'Test', phone: '081234567890', password: 'test-hash' });
    assert.ok(id);
    assert.equal(await store.register({ email, name: 'Test', phone: '081234567890', password: 'test-hash' }), null);
    assert.equal((await store.findByEmail(email)).id, id);
    assert.equal((await store.updateProfile(id, 'Updated', '081234567891')).name, 'Updated');
    await store.replaceSession(null, 'test-token', id, Date.now() + 60000);
    assert.equal((await store.findSession('test-token')).id, id);
    await store.removeSession('test-token');
    assert.equal(await store.findSession('test-token'), null);
    for (const reservation of ['smoke-a', 'smoke-b', 'smoke-c']) {
      await client.query(
        `INSERT INTO reservations(id,account,service,capster,day,start,"end",name,phone)
         VALUES($1,$2,'test','smoke-test-capster','2099-01-01',100,200,'Test','081234567890')`,
        [reservation, id]);
    }
    await client.query('INSERT INTO allocations(reservation,capster,start,"end") VALUES($1,$2,$3,$4)',
      ['smoke-a', 'smoke-test-capster', 100, 200]);
    await client.query('INSERT INTO allocations(reservation,capster,start,"end") VALUES($1,$2,$3,$4)',
      ['smoke-b', 'smoke-test-capster', 200, 300]);
    await client.query('SAVEPOINT overlap_test');
    try {
      await client.query('INSERT INTO allocations(reservation,capster,start,"end") VALUES($1,$2,$3,$4)',
        ['smoke-c', 'smoke-test-capster', 150, 250]);
      assert.fail('overlapping allocations must be rejected');
    } catch (error) {
      assert.equal(error.code, '23P01');
      await client.query('ROLLBACK TO SAVEPOINT overlap_test');
    }
    throw rollback;
  });
} catch (error) {
  if (error !== rollback) throw error;
  console.log('Neon account, session, and overlapping booking checks passed; test data rolled back.');
} finally {
  await db.close();
}
