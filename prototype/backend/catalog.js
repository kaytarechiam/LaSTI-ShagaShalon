const entries = [
  ['neuromodulators','Potong rambut pria',45000,45,'haircut-men'],
  ['dermal-filler','Potong rambut wanita',65000,60,'haircut-women'],
  ['skin-boosters','Perawatan rambut',100000,60,'hair-wash'],
  ['biostimulators','Perming',300000,120,'perming'],
  ['clinical-facial','Cuci dan blow dry',65000,45,'hair-styling'],
  ['chemical-peel','Perawatan kulit kepala',85000,45,'hair-wash'],
  ['microneedling-prp','Cuci rambut',25000,30,'hair-wash'],
  ['led-light-therapy','Blow dry',45000,30,'hair-styling'],
  ['laser-hair-removal','Penataan rambut',100000,60,'hair-styling'],
  ['ipl-photofacial','Pewarnaan rambut',300000,120,'hair-color'],
  ['moxi-laser','Penyegaran warna',200000,90,'hair-color'],
  ['fractional-laser','Smoothing',350000,150,'smoothing'],
  ['body-contouring','Massage',125000,60,'massage'],
  ['morpheus8-body','Massage tubuh',175000,90,'massage'],
  ['stretch-mark-treatment','Manicure',50000,45,'nail-care'],
  ['hand-rejuvenation','Pedicure',60000,45,'pedicure'],
];
export const services = entries.map(([id,name,price,duration,image]) => ({id,name,price,duration,image}));
export const capsters = [
  {id:'a', name:'Capster A', skills:services.slice(0,9).map(s=>s.id), off:1, start:9, end:18},
  {id:'b', name:'Capster B', skills:services.slice(1,12).map(s=>s.id), off:3, start:10, end:19},
  {id:'c', name:'Capster C', skills:services.slice(12).map(s=>s.id), off:2, start:9, end:19},
];
export const buffer = 15;
const dateFormat = new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Jakarta',year:'numeric',month:'2-digit',day:'2-digit'});
export function today(now = new Date()) {
  const parts = Object.fromEntries(dateFormat.formatToParts(now).map(p=>[p.type,p.value]));
  return parts.year+'-'+parts.month+'-'+parts.day;
}
export function candidates(service, capster, date, now = Date.now(), rules = {open:9,close:19,sunday:18,buffer,breakStart:12,breakEnd:13}) {
  if (!service || service.active === false || capster?.active === false || !(service.ids || [service.id]).every(id=>capster?.skills.includes(id)) || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return [];
  const day = Date.parse(date+'T00:00:00+07:00');
  if (!Number.isFinite(day) || today(new Date(day)) !== date || day > now + 60 * 86400000) return [];
  const weekday = new Date(date+'T00:00:00Z').getUTCDay();
  if (weekday === capster.off) return [];
  const close = Math.min(capster.end, weekday === 0 ? rules.sunday : rules.close) * 60;
  const slots = [];
  for (let minute = Math.max(capster.start,rules.open)*60; minute + service.duration + rules.buffer <= close; minute += 15) {
    const endMinute = minute + service.duration + rules.buffer;
    if (rules.breakStart < rules.breakEnd && minute < rules.breakEnd*60 && endMinute > rules.breakStart*60) continue;
    const start = day + minute*60000;
    if (start > now) slots.push({start,end:start+(service.duration+rules.buffer)*60000});
  }
  return slots;
}
