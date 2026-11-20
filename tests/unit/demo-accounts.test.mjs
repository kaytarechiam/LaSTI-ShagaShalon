import test from 'node:test';
import assert from 'node:assert/strict';
import { scryptSync, timingSafeEqual } from 'node:crypto';
import { seedDemoAccounts } from '../../prototype/backend/postgres/demo-accounts.js';

const input = { customerEmail: ' CUSTOMER@example.test ', customerPassword: 'customer-secret-123',
  staffEmail: 'staff@example.test', staffPassword: 'staff-secret-123' };

test('seed creates a customer and staff with independently salted compatible password hashes', async () => {
  const calls = [];
  const db = { transaction: fn => fn({ query: async (_sql, values) => { calls.push(values); return { rows: [{ id: calls.length }] }; } }) };
  assert.deepEqual(await seedDemoAccounts(db, input), [
    { email: 'customer@example.test', role: 'customer' }, { email: 'staff@example.test', role: 'staff' },
  ]);
  for (const [index, password] of [input.customerPassword, input.staffPassword].entries()) {
    const [salt, hash] = calls[index][3].split(':');
    assert.ok(timingSafeEqual(Buffer.from(hash, 'hex'), scryptSync(password, salt, 64)));
  }
  assert.notEqual(calls[0][3], calls[1][3]);
});

test('seed rejects duplicate addresses and existing accounts', async () => {
  const db = { transaction: fn => fn({ query: async () => ({ rows: [] }) }) };
  await assert.rejects(seedDemoAccounts(db, { ...input, staffEmail: 'customer@example.test' }), /berbeda/);
  await assert.rejects(seedDemoAccounts(db, input), /sudah digunakan/);
});
