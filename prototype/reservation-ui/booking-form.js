export function showBooking({account,catalog,params,screen,title,escape:e,price,time,api,formAction,message}) {
  const {services,capsters,buffer,today}=catalog;
  const active=services.filter(service=>service.active!==false);
  const requested=params.getAll('layanan');
  const chosen=new Set(requested.filter(id=>active.some(service=>service.id===id)));
  screen(title(account.role==='staff'?'Reservasi pelanggan':'Reservasi',
    'Pilih satu atau beberapa layanan, lalu tentukan tanggal dan jam kunjungan.','Langkah 1 dari 3')+`
    <form id="booking-form">
      <div class="booking-section-heading"><span>01</span><div><h2>Pilih layanan</h2><p>Pilih satu atau beberapa layanan yang kamu inginkan.</p></div></div>
      <label class="service-search">Cari layanan<input type="search" id="service-search" placeholder="Cari layanan" autocomplete="off"></label>
      <p id="service-search-status" role="status" class="slot-status"></p>
      <fieldset class="service-picker">
        <legend class="visually-hidden">Layanan</legend>
        ${active.map(service=>`<label class="service-option">
          <input name="services" type="checkbox" value="${e(service.id)}" ${chosen.has(service.id)?'checked':''}>
          <span>${e(service.name)}<small>${service.duration} menit</small></span>
          <strong>${e(price.format(service.price))}</strong>
        </label>`).join('')}
      </fieldset>
      <div class="booking-section-heading"><span>02</span><div><h2>Jadwal kunjungan</h2><p>Pilih tanggal dan capster untuk melihat jam yang tersedia.</p></div></div>
      <label>Tanggal kunjungan<input type="date" name="day" min="${e(today)}" required></label>
      <label>Capster<select name="capster" required></select></label>
      <label>Jam kunjungan (WIB)<select name="start" required disabled></select></label>
      <p id="slot-status" role="status"></p>
      <div class="booking-section-heading"><span>03</span><div><h2>Data pelanggan</h2><p>Periksa informasi yang akan digunakan saat kunjungan.</p></div></div>
      <label>Nama pelanggan<input name="name" value="${e(account.role==='staff'?'':account.name)}" required minlength="2" maxlength="100" autocomplete="name"></label>
      <label>Nomor telepon<input name="phone" value="${e(account.role==='staff'?'':account.phone)}" type="tel" required maxlength="22" autocomplete="tel"></label>
      <div class="booking-section-heading"><span>04</span><div><h2>Ringkasan pilihan</h2><p>Jadwal diamankan setelah konfirmasi berhasil.</p></div></div>
      <div id="service-summary" class="service-summary" aria-live="polite"></div>
      ${message}
      <button type="submit" disabled>Tinjau permintaan</button>
    </form>`);
  const form=document.querySelector('#booking-form');
  const {day,capster,start}=form.elements;
  const summary=form.querySelector('#service-summary');
  const status=form.querySelector('#slot-status');
  const alert=form.querySelector('.message');
  const button=form.querySelector('button[type="submit"]');
  let version=0;
  const search=form.querySelector('#service-search');
  search.addEventListener('input',()=>{
    const term=search.value.trim().toLocaleLowerCase('id-ID');
    let shown=0;
    for(const option of form.querySelectorAll('.service-option')) {
      const visible=option.textContent.toLocaleLowerCase('id-ID').includes(term);
      option.hidden=!visible; if(visible) shown++;
    }
    form.querySelector('#service-search-status').textContent=term ? (shown ? shown+' layanan ditemukan.' : 'Tidak ada layanan yang cocok.') : '';
  });
  day.value=params.get('tanggal')>=today && /^\d{4}-\d{2}-\d{2}$/.test(params.get('tanggal'))?params.get('tanggal'):today;
  const picked=()=>active.filter(service=>chosen.has(service.id));
  const option=(label,value='')=>new Option(label,String(value));
  function updateCapsters(preferred=capster.value) {
    const items=picked();
    summary.innerHTML=items.length ? '<ul>'+items.map(s=>`<li><span>${e(s.name)} · ${s.duration} menit</span><strong>${e(price.format(s.price))}</strong></li>`).join('')+'</ul>'+
      `<div><strong>Total ${e(price.format(items.reduce((sum,s)=>sum+s.price,0)))}</strong>
      <span>${items.reduce((sum,s)=>sum+s.duration,0)} menit layanan · jeda salon ${buffer} menit</span></div>` :
      '<p>Pilih layanan untuk melihat total.</p>';
    const eligible=items.length?capsters.filter(c=>c.active!==false && items.every(s=>c.skills.includes(s.id))):[];
    capster.replaceChildren(option('Pilih capster'),...eligible.map(c=>option(c.name,c.id)));
    if (eligible.some(c=>c.id===preferred)) capster.value=preferred;
    else if (eligible.length===1) capster.value=eligible[0].id;
    capster.disabled=!eligible.length;
  }
  function draft() {
    const query=new URLSearchParams({tanggal:day.value,capster:capster.value,jam:start.value});
    for (const id of chosen) query.append('layanan',id);
    return query;
  }
  async function slots(preferred='') {
    const request=++version;
    start.replaceChildren(option('Pilih jam'));
    start.disabled=true;
    button.disabled=true;
    if (!chosen.size || !day.value || !capster.value) {
      status.textContent=chosen.size && capster.disabled
        ? 'Belum ada satu capster yang dapat menangani semua layanan ini. Coba ubah pilihan layanan.'
        : 'Pilih layanan, tanggal, dan capster untuk melihat jam.';
      return;
    }
    status.textContent='Mencari jam tersedia…';
    const query=new URLSearchParams({day:day.value,capster:capster.value});
    for (const id of chosen) query.append('services',id);
    try {
      const result=await api('/slots?'+query);
      if (request!==version) return;
      start.append(...result.slots.map(slot=>option(time.format(slot.start)+' WIB',slot.start)));
      if (result.slots.some(slot=>String(slot.start)===preferred)) start.value=preferred;
      start.disabled=!result.slots.length;
      button.disabled=!start.value;
      status.textContent=preferred && !start.value ? 'Jam sebelumnya sudah tidak tersedia. Pilih jam lain.':
        result.slots.length?'Pilih salah satu jam yang tersedia.':'Tidak ada jam yang cukup. Coba tanggal atau capster lain.';
    } catch(error) {
      if (request!==version) return;
      if (error.status===401) location.assign('/login?'+draft());
      else status.textContent='Jam belum bisa dimuat. Ubah pilihan untuk mencoba lagi.';
    }
  }
  form.querySelector('.service-picker').addEventListener('change',event=>{
    const input=event.target;
    if (input.checked) chosen.add(input.value);
    else chosen.delete(input.value);
    const previous=start.value;
    updateCapsters();
    slots(previous);
  });
  for (const control of [day,capster]) control.addEventListener('change',()=>slots(start.value));
  start.addEventListener('change',()=>{button.disabled=!start.value;});
  if (requested.some(id=>!chosen.has(id))) alert.textContent='Sebagian layanan sebelumnya sudah tidak tersedia.';
  updateCapsters(params.get('capster'));
  slots(params.get('jam')||'');
  formAction(form,async data=>{
    try {
      const row=await api('/reservations',{...data,services:picked().map(s=>s.id),start:Number(data.start)});
      location.assign('/reservasi?id='+row.id);
    } catch(error) {
      if (error.status===401) {
        try { sessionStorage.setItem('shaga-draft-contact-'+account.id,JSON.stringify({name:data.name,phone:data.phone})); } catch {}
        location.assign('/login?'+draft());
        return;
      }
      throw error;
    }
  },{onError:error=>{if (error.status===409) slots();}});
  try {
    const key='shaga-draft-contact-'+account.id;
    const saved=JSON.parse(sessionStorage.getItem(key)||'null');
    if (saved) { form.elements.name.value=saved.name; form.elements.phone.value=saved.phone; sessionStorage.removeItem(key); }
  } catch {}
}
