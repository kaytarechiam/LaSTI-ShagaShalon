import assert from 'node:assert/strict';
import { Readable } from 'node:stream';
import test from 'node:test';
import { createReservationApi } from '../../prototype/backend/reservation-api.js';

function client(api) {
  let cookie = '';
  return async (path, data) => {
    const post = data !== undefined;
    const req = Readable.from(post ? [Buffer.from(JSON.stringify(data))] : []);
    req.method = post ? 'POST' : 'GET';
    req.headers = { cookie, ...(post ? { 'content-type': 'application/json' } : {}) };
    req.socket = { remoteAddress: '127.0.0.1' };
    let status, result;
    const res = {
      setHeader(name, value) { if (name.toLowerCase() === 'set-cookie') cookie = value.split(';')[0]; },
      writeHead(code) { status = code; },
      end(value) { result = JSON.parse(value); },
    };
    await api.handle(req, res, new URL(path, 'http://localhost'));
    return { status, body: result };
  };
}

test('blok waktu dan jam istirahat memblokir slot pelanggan serta menghormati peran capster', async () => {
  const prev = {
    SHAGA_STAFF_EMAIL: process.env.SHAGA_STAFF_EMAIL,
    SHAGA_STAFF_PASSWORD: process.env.SHAGA_STAFF_PASSWORD,
    SHAGA_CAPSTER_EMAIL: process.env.SHAGA_CAPSTER_EMAIL,
    SHAGA_CAPSTER_PASSWORD: process.env.SHAGA_CAPSTER_PASSWORD,
    SHAGA_CAPSTER_ID: process.env.SHAGA_CAPSTER_ID,
    SHAGA_MANAGER_EMAIL: process.env.SHAGA_MANAGER_EMAIL,
    SHAGA_MANAGER_PASSWORD: process.env.SHAGA_MANAGER_PASSWORD,
  };
  process.env.SHAGA_STAFF_EMAIL = 'staff.block@example.test';
  process.env.SHAGA_STAFF_PASSWORD = 'StaffBlock1234!';
  process.env.SHAGA_CAPSTER_EMAIL = 'cap.block@example.test';
  process.env.SHAGA_CAPSTER_PASSWORD = 'CapBlock12345!';
  process.env.SHAGA_CAPSTER_ID = 'a';
  process.env.SHAGA_MANAGER_EMAIL = 'mgr.block@example.test';
  process.env.SHAGA_MANAGER_PASSWORD = 'MgrBlock12345!';

  try {
    const api = createReservationApi('ops-blocks-test', { memory: true });
    const customer = client(api);
    const capster = client(api);
    const manager = client(api);

    assert.equal((await customer('/api/register', {
      email: 'cust.block@example.test',
      password: 'CustBlock1234!',
      confirmation: 'CustBlock1234!',
      name: 'Pelanggan Blok',
      phone: '081234567899',
    })).status, 201);
    assert.equal((await capster('/api/login', { email: 'cap.block@example.test', password: 'CapBlock12345!' })).status, 200);
    assert.equal((await manager('/api/login', { email: 'mgr.block@example.test', password: 'MgrBlock12345!' })).status, 200);

    const catalog = (await customer('/api/catalog')).body;
    let targetDay = '';
    for (let offset = 1; offset <= 7; offset += 1) {
      const candidate = new Date(Date.parse(catalog.today + 'T00:00:00Z') + offset * 86400000).toISOString().slice(0, 10);
      if (new Date(candidate + 'T00:00:00Z').getUTCDay() !== 1) {
        targetDay = candidate;
        break;
      }
    }
    assert.ok(targetDay, 'menemukan hari kerja capster a');

    // Capster tidak boleh memblokir jadwal capster lain
    const forbidden = await capster('/api/ops/block', {
      capster: 'b',
      day: targetDay,
      startMin: 10 * 60,
      endMin: 11 * 60,
      kind: 'BREAK',
      label: 'Istirahat tambahan',
    });
    assert.equal(forbidden.status, 403);

    // Capster boleh memblokir jadwalnya sendiri 09:00-11:00
    const created = await capster('/api/ops/block', {
      capster: 'a',
      day: targetDay,
      startMin: 9 * 60,
      endMin: 11 * 60,
      kind: 'TRAINING',
      label: 'Briefing pagi tim',
    });
    assert.equal(created.status, 200);
    assert.equal(created.body.blocks.length, 1);

    // Slot jam 09:00-10:45 harus tertutup bagi pelanggan
    const blockedSlots = (await customer(`/api/slots?service=neuromodulators&capster=a&day=${targetDay}`)).body.slots;
    const dayStart = Date.parse(targetDay + 'T00:00:00+07:00');
    assert.ok(!blockedSlots.some((s) => s.start < dayStart + 11 * 3600000 && s.end > dayStart + 9 * 3600000));

    // Manajer boleh menghapus blok waktu dan memulihkan slot
    const removed = await manager('/api/ops/block/remove', { id: created.body.block.id });
    assert.equal(removed.status, 200);
    assert.equal(removed.body.blocks.length, 0);

    const restoredSlots = (await customer(`/api/slots?service=neuromodulators&capster=a&day=${targetDay}`)).body.slots;
    assert.ok(restoredSlots.some((s) => s.start === dayStart + 9 * 3600000));
  } finally {
    for (const [k, v] of Object.entries(prev)) {
      if (v === undefined) delete process.env[k];
      else process.env[k] = v;
    }
  }
});
