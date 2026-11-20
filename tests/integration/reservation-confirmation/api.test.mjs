import assert from 'node:assert/strict';
import { Readable } from 'node:stream';
import test from 'node:test';
import { createReservationApi } from '../../../prototype/backend/reservation-api.js';

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

test('akun, profil, dan konflik konfirmasi reservasi', async () => {
  const api = createReservationApi('integration-test', { memory: true });
  const first = client(api), second = client(api);
  for (const [request, email] of [[first, 'first@example.test'], [second, 'second@example.test']]) {
    const registration = await request('/api/register', {
      email, password: 'password-demo', confirmation: 'password-demo', name: 'Pelanggan Demo', phone: '081234567890',
    });
    assert.equal(registration.status, 201);
    assert.equal((await request('/api/session')).body.account.email, email);
  }
  assert.equal((await first('/api/profile', { name: 'Nama Baru', phone: '081234567891' })).body.account.name, 'Nama Baru');
  const catalog = (await first('/api/catalog')).body;
  let chosen;
  for (let offset = 1; offset <= 14 && !chosen; offset++) {
    const date = new Date(Date.parse(catalog.today + 'T00:00:00Z') + offset * 86400000).toISOString().slice(0, 10);
    for (const capster of catalog.capsters) {
      for (const service of catalog.services) {
        const params = new URLSearchParams({ service: service.id, capster: capster.id, day: date });
        const slots = (await first('/api/slots?' + params)).body.slots;
        if (slots?.length) { chosen = { service: service.id, capster: capster.id, day: date, start: slots[0].start }; break; }
      }
      if (chosen) break;
    }
  }
  assert.ok(chosen, 'tersedia setidaknya satu jadwal untuk pengujian');
  const payload = { ...chosen, name: 'Pelanggan Demo', phone: '081234567890' };
  const a = await first('/api/reservations', payload);
  const b = await second('/api/reservations', payload);
  assert.equal(a.status, 201);
  assert.equal(b.status, 201);
  assert.equal((await first(`/api/reservations/${a.body.id}/confirm`, { quote: a.body.quote })).body.status, 'CONFIRMED');
  assert.equal((await second(`/api/reservations/${b.body.id}/confirm`, { quote: b.body.quote })).status, 409);
  assert.equal((await first('/api/logout', {})).status, 200);
  assert.equal((await first('/api/session')).body.account, null);
});
