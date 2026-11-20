import { services, capsters, buffer, candidates, today } from '../catalog.js';

export const initialConfig = {
  services: services.map(service => ({ ...service, active: true })),
  capsters: capsters.map(capster => ({ ...capster, active: true })),
  rules: { open: 9, close: 19, sunday: 18, buffer, breakStart: 12, breakEnd: 13, early: 60, late: 60 },
};

const queryRow = async (db, sql, args = []) => (await db.query(sql, args)).rows[0];

// Safe for simultaneous cold starts. An existing configuration is never reset.
export async function initializeConfig(db) {
  await db.query('INSERT INTO salon_config(id,version,data) VALUES(1,1,$1) ON CONFLICT (id) DO NOTHING',
    [JSON.stringify(initialConfig)]);
}

export async function getConfig(db) {
  const row = await queryRow(db, 'SELECT version,data FROM salon_config WHERE id=1');
  if (!row) throw new Error('Salon configuration is missing');
  return { version: row.version, ...JSON.parse(row.data) };
}

export function serviceBundle(ids, settings) {
  if (!Array.isArray(ids) || !ids.length || ids.length > settings.services.length ||
      ids.some(id => typeof id !== 'string') || new Set(ids).size !== ids.length) return null;
  const selected = ids.map(id => settings.services.find(service => service.id === id));
  if (selected.some(service => !service || service.active === false)) return null;
  const items = selected.map(({ id, name, price, duration }) => ({ id, name, price, duration }));
  return { id: ids[0], ids, items, price: items.reduce((n, item) => n + item.price, 0),
    duration: items.reduce((n, item) => n + item.duration, 0) };
}

export async function getItems(db, reservation) {
  return (await db.query('SELECT service AS id,name,price,duration FROM reservation_items WHERE reservation=$1 ORDER BY position', [reservation])).rows;
}

export async function writeTerms(db, reservation, service) {
  await db.query(`INSERT INTO booking_terms(reservation,price,duration) VALUES($1,$2,$3)
    ON CONFLICT (reservation) DO UPDATE SET price=EXCLUDED.price,duration=EXCLUDED.duration`,
    [reservation, service.price, service.duration]);
  await db.query('DELETE FROM reservation_items WHERE reservation=$1', [reservation]);
  for (const [position, item] of (service.items || [service]).entries()) {
    await db.query('INSERT INTO reservation_items(reservation,position,service,name,price,duration) VALUES($1,$2,$3,$4,$5,$6)',
      [reservation, position, item.id, item.name, item.price, item.duration]);
  }
}

export async function availableSlots(db, service, capster, day, { except = '', settings, now = Date.now() } = {}) {
  if (!service || !capster || typeof day !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(day) ||
      !Number.isFinite(Date.parse(day + 'T00:00:00+07:00')) || today(new Date(day + 'T00:00:00+07:00')) !== day) return [];
  settings ||= await getConfig(db);
  const ranges = (await db.query('SELECT start,"end" FROM allocations WHERE capster=$1 AND reservation<>$2 AND "end">$3',
    [capster.id, except, Date.parse(day + 'T00:00:00+07:00')])).rows;
  const active = await queryRow(db, `SELECT v.started,v.estimate FROM visits v JOIN reservations r ON r.id=v.reservation
    WHERE r.capster=$1 AND v.status='ACTIVE' AND r.id<>$2 LIMIT 1`, [capster.id, except]);
  if (active) ranges.push({ start: active.started, end: Math.max(now, active.estimate) + settings.rules.buffer * 60000 });
  const recent = await queryRow(db, `SELECT v.started,v.ended FROM visits v JOIN reservations r ON r.id=v.reservation
    WHERE r.capster=$1 AND v.status='DONE' AND r.id<>$2 ORDER BY v.ended DESC LIMIT 1`, [capster.id, except]);
  if (recent) ranges.push({ start: recent.started, end: recent.ended + settings.rules.buffer * 60000 });
  return candidates(service, capster, day, now, settings.rules)
    .filter(slot => ranges.every(range => range.start >= slot.end || range.end <= slot.start));
}
