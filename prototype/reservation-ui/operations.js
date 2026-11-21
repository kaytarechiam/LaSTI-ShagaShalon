const names = {staff:'Resepsionis',capster:'Capster',manager:'Manajemen'};
const status = {REQUESTED:'Menunggu konfirmasi',CONFIRMED:'Terkonfirmasi',WAITING:'Menunggu layanan',ACTIVE:'Sedang dilayani',DONE:'Selesai'};
const rulesLabels={open:'Jam buka',close:'Jam tutup Senin–Sabtu',sunday:'Jam tutup Minggu',breakStart:'Mulai istirahat',breakEnd:'Akhir istirahat',buffer:'Jeda antarlayanan (menit)',early:'Check-in sebelum jadwal (menit)',late:'Batas terlambat check-in (menit)'};

export async function showOperations({account,app,api,escape:e,date,time,price}) {
  document.querySelector('.booking-layout').classList.add('ops-layout');
  document.title = names[account.role]+' · Shaga Salon';
  const jakartaDay = () => new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Jakarta'}).format(new Date());
  let currentDay = jakartaDay();
  let day=currentDay, to=currentDay, filter='', paymentFilter='', search='', response, walkKey=crypto.randomUUID();
  let generation=0, dirty=false, busy=false, lastUpdated=null;
  const role=account.role;
  let section=role==='manager'?(location.hash==='#pengaturan'?'settings':'overview'):'desk';
  const option=(value,label,selected=false)=>`<option value="${e(value)}"${selected?' selected':''}>${e(label)}</option>`;
  const button=(label,action,type='button')=>`<button type="${type}" data-action="${action}">${e(label)}</button>`;
  const formAlert='<p class="message" role="alert"></p>';
  const formData=form=>Object.fromEntries(new FormData(form));
  const capsterName=id=>response.settings.capsters.find(x=>x.id===id)?.name || id;
  const formatTime=value=>value ? time.format(value)+' WIB' : '—';
  const formatDay=value=>new Intl.DateTimeFormat('id-ID',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(value+'T00:00:00Z'));
  const activeChoices=items=>items.filter(x=>x.active).map(x=>option(x.id,x.name)).join('');
  const heading=()=>({staff:'Reservasi dan kedatangan',capster:'Jadwal pelayanan',manager:section==='settings'?'Pengaturan salon':'Ringkasan operasional'})[role];

  function controls() {
    const staffFilter = '<label>Status<select name="status">'+option('','Semua status')+
      Object.entries(status).map(([key,label])=>option(key,label,filter===key)).join('')+'</select></label>';
    if (role==='manager') return `<form id="ops-date" class="ops-controls"><p class="ops-period">${day===currentDay&&to===currentDay?'Hari ini': 'Periode'}: ${e(formatDay(day))}${to!==day?' s.d. '+e(formatDay(to)):''} · WIB</p>
      ${day===currentDay&&to===currentDay?'':button('Lihat hari ini','today')}
      <details class="ops-period-select"><summary>Pilih rentang tanggal</summary><div class="ops-fields">
      <label>Dari tanggal<input type="date" value="${e(day)}" name="day" required></label>
      <label>Sampai tanggal<input type="date" value="${e(to)}" name="to" required></label></div>
      <small>Maksimal 90 hari.</small> ${button('Tampilkan','filter','submit')}</details>${formAlert}</form>`;
    return `<form id="ops-date" class="ops-controls"><label>Tanggal
      <input type="date" value="${e(day)}" name="day" required></label>
      ${role==='staff'?staffFilter:''}
      ${role==='staff'?`<label>Pembayaran<select name="payment">${[['','Semua pembayaran'],['NOT_READY','Pelayanan belum selesai'],['READY','Siap ditagihkan'],['UNPAID','Belum lunas'],['PAID','Lunas']].map(([v,l])=>option(v,l,paymentFilter===v)).join('')}</select></label>`:''}
      ${role==='staff'?`<label>Cari nama, kode, atau telepon<input type="search" name="search" value="${e(search)}" maxlength="100"></label>`:''}
      ${button('Tampilkan','filter','submit')}${formAlert}</form>`;
  }
  function staffActions(r) {
    if (role==='staff' && r.visit_status==='DONE') return `<details class="ops-panel" data-settlement="${e(r.id)}"><summary>Tagihan dan pembayaran</summary><div>Memuat saat dibuka.</div></details>`;
    if (role!=='staff' || r.visit_status || r.status!=='CONFIRMED' || r.day!==currentDay) return '';
    return `<button type="button" data-action="check-in" data-id="${e(r.id)}">Check-in</button>`;
  }
  function capsterActions(r) {
    if (role!=='capster' || r.day!==currentDay) return '';
    if (r.visit_status==='WAITING') return `<div class="ops-actions">
      <button type="button" data-action="start" data-id="${e(r.id)}">Mulai sesi</button>
      ${r.items.length===1?`<details><summary>Sesuaikan hasil konsultasi</summary>
      <form data-form="adjust" data-id="${e(r.id)}">
        <label>Layanan<select name="service">${response.settings.services.filter(x=>x.active).map(x=>option(x.id,x.name,x.id===r.service)).join('')}</select></label>
        <label>Capster<select name="capster">${response.settings.capsters.filter(x=>x.active).map(x=>option(x.id,x.name,x.id===r.capster)).join('')}</select></label>
        <label class="ops-check"><input type="checkbox" name="approved" required>Pelanggan menyetujui perubahan</label>
        ${button('Simpan perubahan','adjust','submit')}${formAlert}</form></details>`:'<small>Penyesuaian untuk beberapa layanan belum tersedia.</small>'}</div>`;
    if (r.visit_status==='ACTIVE') return `<div class="ops-actions"><form data-form="estimate" data-id="${e(r.id)}">
      <label>Sisa waktu (menit)<input type="number" name="minutes" min="1" max="480" step="1" required></label>
      ${button('Perbarui estimasi','estimate','submit')}${formAlert}</form>
      <button type="button" data-action="finish" data-id="${e(r.id)}">Selesaikan sesi</button></div>`;
    return '';
  }
  function cards(rows) {
    if (!rows.length) return '<p class="ops-empty">Belum ada data untuk pilihan ini.</p>';
    return '<ul class="ops-records">'+rows.map(r=>`<li><article class="ops-record">
      <div><span class="ops-tag">${status[r.visit_status||r.status]||'—'}</span>
        ${role==='staff'&&r.payment_status?`<span class="ops-tag" data-payment-status="${e(r.id)}">${e(({NOT_READY:'Pelayanan belum selesai',READY:'Siap ditagihkan',UNPAID:'Belum lunas',PAID:'Lunas'})[r.payment_status]||'')}</span>`:''}
        <h3>${e(r.name)}</h3><p>${e(capsterName(r.capster))}</p>
        ${r.items.map(item=>`<p>${e(item.name)} · ${e(price.format(item.price))} · ${item.duration} menit</p>`).join('')}
        <p><strong>Total ${e(price.format(r.booked_price))} · ${r.booked_duration} menit</strong></p>
        <p>${e(date.format(r.start))} · ${e(formatTime(r.start))}${r.code?' · '+e(r.code):''}</p>
        ${role==='staff'?'<p>'+e(r.phone)+'</p>':''}
      </div>
      ${r.ticket?`<div class="ops-ticket"><strong>Antrean ${r.ticket}</strong>
        <p>${e(r.channel==='WALK_IN'?'Walk-in':'Reservasi')} · Tiba ${e(formatTime(r.arrived))}</p>
        ${r.eta?'<p>Perkiraan mulai '+e(formatTime(r.eta))+'</p>':''}
        ${r.estimate?'<p>Perkiraan selesai '+e(formatTime(r.estimate))+'</p>':''}
        ${r.started?'<p>Mulai '+e(formatTime(r.started))+(r.ended?' · Selesai '+e(formatTime(r.ended)):'')+'</p>':''}</div>`:''}
      ${staffActions(r)}${capsterActions(r)}</article></li>`).join('')+'</ul>';
  }
  function walkInPanel() {
    return `<details class="ops-panel"><summary>Terima pelanggan walk-in</summary>
      <p>Pilih jam yang cukup untuk layanan dan jeda salon hari ini.</p>
      <form id="walk-in">
      <div class="ops-fields">
        <label>Nama pelanggan<input name="name" required minlength="2" maxlength="100"></label>
        <label>Nomor telepon<input name="phone" type="tel" required maxlength="22"></label>
        <label>Layanan<select name="service" required>${option('','Pilih layanan')}${activeChoices(response.settings.services)}</select></label>
        <label>Capster<select name="capster" required>${option('','Pilih layanan dahulu')}</select></label>
        <label>Jam tersedia<select name="start" required disabled>${option('','Pilih capster dahulu')}</select></label>
      </div>
      <p id="walk-status" role="status"></p>
      ${button('Terima dan buat tiket','walk-in','submit')}${formAlert}</form></details>`;
  }
  function overview() {
    const rows=response.rows;
    const late=rows.filter(r=>(r.eta||r.started||0)>r.start+60000).length;
    const metrics=[['Sedang menunggu',rows.filter(r=>r.visit_status==='WAITING').length],
      ['Mulai atau estimasi terlambat (>1 menit)',late]];
    return '<div id="management-report"></div><h2>Kondisi operasional</h2><div class="ops-metrics">'+metrics.map(([label,count])=>`<div><strong>${count}</strong><span>${label}</span></div>`).join('')+'</div>'+
      '<h2>Aktivitas periode ini</h2>'+cards(rows);
  }
  function settingsPanel() {
    const cfg=response.draft?.version===response.settings.version ? response.draft : response.settings;
    const checks=(checked)=>checked?' checked':'';
    const number=(name,value,min=0,max=24)=>`<input type="number" name="${name}" value="${value}" min="${min}" max="${max}" required>`;
    const text=(name,value)=>`<input name="${name}" value="${e(value)}" required minlength="2" maxlength="80">`;
    return `<p>Versi aktif ${response.settings.version}${response.draft?' · Draf tersimpan':''}</p>
      <form id="settings">
      <details class="ops-panel" open><summary>Jam salon dan aturan penerimaan</summary><div class="ops-fields">
      ${Object.entries(rulesLabels).map(([key,label])=>`<label>${label}${number(key,cfg.rules[key],0,key==='buffer'?120:['early','late'].includes(key)?240:24)}</label>`).join('')}</div></details>
      <details class="ops-panel"><summary>Katalog layanan</summary>
      ${cfg.services.map(s=>`<fieldset data-service="${e(s.id)}"><legend>${e(s.name)}</legend><div class="ops-fields">
        <label>Nama${text('name',s.name)}</label><label>Harga (Rp)${number('price',s.price,0,100000000)}</label>
        <label>Durasi (menit)${number('duration',s.duration,15,480)}</label>
        <label class="ops-check"><input type="checkbox" name="active"${checks(s.active)}>Aktif</label>
      </div></fieldset>`).join('')}</details>
      <details class="ops-panel"><summary>Capster, kompetensi dan jadwal</summary>
      ${cfg.capsters.map(c=>`<fieldset data-capster="${e(c.id)}"><legend>${e(c.name)}</legend>
        <div class="ops-fields"><label>Nama${text('name',c.name)}</label><label>Jam mulai${number('start',c.start,0,23)}</label>
        <label>Jam selesai${number('end',c.end,1,24)}</label><label>Hari libur<select name="off">${['Tanpa hari libur','Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'].map((d,i)=>option(i-1,d,i-1===c.off)).join('')}</select></label>
        <label class="ops-check"><input type="checkbox" name="active"${checks(c.active)}>Aktif</label></div>
        <details><summary>Kompetensi</summary><div class="ops-fields">${cfg.services.map(s=>`<label class="ops-check"><input type="checkbox" name="skills" value="${e(s.id)}"${checks(c.skills.includes(s.id))}>${e(s.name)}</label>`).join('')}</div></details>
      </fieldset>`).join('')}</details>
      <div class="ops-actions">${button('Simpan draf','draft','submit')}
      ${response.draft?button('Periksa konflik','validate')+button('Terapkan pengaturan','publish'):''}</div>${formAlert}
      </form>`;
  }
  function render(notice='') {
    dirty=false;
    const term=search.trim().toLocaleLowerCase('id-ID');
    const rows=response.rows.filter(r=>(!filter || (r.visit_status||r.status)===filter) && (!paymentFilter || r.payment_status===paymentFilter) && (!term || [r.name,r.code,r.phone].some(value=>String(value||'').toLocaleLowerCase('id-ID').includes(term))));
    const visits=rows.filter(r=>r.ticket);
    app.innerHTML=`<div class="ops-top"><div><p class="step">${e(names[role])}</p><h1>${e(heading())}</h1></div>
      ${role==='staff'?'<a class="action" href="/reservasi">Buat reservasi</a>':''}
      ${role==='capster'?button(response.ready?'Tandai belum siap':'Tandai siap','ready'):''}</div>
      ${role==='manager'?'<div class="ops-tabs">'+button('Ringkasan','overview')+button('Pengaturan','settings')+'</div>':''}
      <p id="ops-message" role="status">${e(notice)}</p>
      <p id="refresh-status" role="status"></p>
      ${section==='settings'?settingsPanel():controls()}
      ${role==='staff'?'<div id="antrean">'+walkInPanel()+'<h2>Antrean harian</h2>'+cards(visits)+'</div><h2>Daftar reservasi</h2>'+cards(rows.filter(r=>r.channel!=='WALK_IN')):''}
      ${role==='capster'?'<p>'+e(capsterName(response.mine))+' · '+(response.ready?'Siap menerima pelanggan':'Belum siap')+' · Estimasi dapat berubah</p>'+cards(rows):''}
      ${role==='manager' && section!=='settings'?overview():''}`;
    if (section!=='settings') app.querySelector('#ops-date').elements.day.max='9999-12-31';
    const walk=app.querySelector('#walk-in');
    if (walk) {
      const {service,capster,start}=walk.elements;
      let request=0;
      const note=app.querySelector('#walk-status');
      service.onchange=()=>{
        capster.innerHTML=option('','Pilih capster')+activeChoices(response.settings.capsters.filter(c=>c.skills.includes(service.value)));
        capster.onchange();
      };
      capster.onchange=async ()=>{
        const ticket=++request;
        start.innerHTML=option('','Pilih jam');
        start.disabled=true;
        if (!service.value || !capster.value) { note.textContent=''; return; }
        note.textContent='Mencari jam tersedia…';
        try {
          const {slots}=await api('/slots?'+new URLSearchParams({day:currentDay,capster:capster.value,service:service.value}));
          if (ticket!==request) return;
          start.innerHTML+=slots.map(s=>option(s.start,formatTime(s.start))).join('');
          start.disabled=!slots.length;
          note.textContent=slots.length ? 'Pilih jam untuk membuat tiket.' : 'Tidak ada slot yang cukup. Pilih capster lain atau buat reservasi untuk tanggal lain.';
        } catch(error) { if (ticket===request) note.textContent=error.message; }
      };
    }
  }
  async function load(notice, automatic=false) {
    const request=++generation;
    const data=await api('/ops/board?'+new URLSearchParams({day,to:role==='manager'?to:day}));
    if (request!==generation || (automatic && (busy || dirty || app.querySelector('details[open]')))) return;
    response=data;
    render(notice);
    lastUpdated=Date.now();
    app.querySelector('#refresh-status').textContent='Diperbarui '+formatTime(lastUpdated)+' · Estimasi dapat berubah.';
    if (role==='manager' && section!=='settings') await showReport();
  }
  function chart(title,rows,format) {
    if (!rows.length || rows.every(row=>!Number(row.value))) return `<section class="ops-chart"><h3>${e(title)}</h3><p>Belum ada data untuk periode ini.</p></section>`;
    const max=Math.max(...rows.map(row=>Number(row.value)||0),1);
    return `<section class="ops-chart"><h3>${e(title)}</h3><div class="ops-chart-bars" aria-hidden="true">${rows.map(row=>`<div class="ops-chart-row"><span>${e(row.label)}</span><div class="ops-chart-track"><div class="ops-chart-fill" style="width:${Math.max(0,Math.min(100,Number(row.value)/max*100))}%"></div></div><strong>${e(format(row.value))}</strong></div>`).join('')}</div><details><summary>Data ${e(title)}</summary><table><thead><tr><th>Periode / kategori</th><th>Nilai</th></tr></thead><tbody>${rows.map(row=>`<tr><td>${e(row.label)}</td><td>${e(format(row.value))}</td></tr>`).join('')}</tbody></table></details></section>`;
  }
  async function showReport() {
    const target=app.querySelector('#management-report'); if (!target) return;
    target.textContent='Memuat laporan…';
    try {
      const r=await api('/settlement/report?'+new URLSearchParams({from:day,to}));
      if (!target.isConnected) return;
      const metrics=(title,items)=>'<section class="ops-report-group"><h3>'+e(title)+'</h3><div class="ops-metrics">'+items.map(([label,value])=>'<div><strong>'+e(value)+'</strong><span>'+e(label)+'</span></div>').join('')+'</div></section>';
      target.innerHTML='<h2>Laporan periode</h2>'+
        metrics('Reservasi dan pelayanan',[['Reservasi terkonfirmasi',r.counts.reservations],['Kunjungan',r.counts.visits],['Walk-in',r.counts.walkins],['Pelayanan selesai',r.counts.finished]])+
        metrics('Tagihan dan pembayaran',[['Tagihan dibuat',r.invoices.count],['Belum lunas',r.invoices.unpaid_count],['Nilai belum lunas',price.format(r.invoices.unpaid_total)],['Pembayaran lunas',r.payments.count],['Total pembayaran',price.format(r.payments.total)]])+
        metrics('Ulasan pelanggan',[['Feedback',r.feedback.count],['Rata-rata rating',r.feedback.average?.toFixed(1)||'—']])+
        '<div class="ops-charts">'+(r.series.length>1?chart('Kunjungan per hari',r.series.map(x=>({label:x.day,value:x.visits})),String)+chart('Pembayaran lunas per hari',r.series.map(x=>({label:x.day,value:x.paid_total})),price.format.bind(price)):'')+chart('Layanan selesai terbanyak',r.popular.map(x=>({label:x.name,value:x.count})),String)+'</div>'+
        '<details class="ops-report-notes"><summary>Rincian dan cara membaca laporan</summary>'+
        '<p>Reservasi dan kunjungan mengikuti tanggal kunjungan. Tagihan, pembayaran, dan feedback mengikuti waktu pencatatan (WIB). Tagihan belum lunas menunjukkan status saat ini.</p>'+
        '<p><strong>Status reservasi:</strong> '+e(r.statuses.map(x=>(status[x.status]||x.status)+' '+x.count).join(' · ')||'Belum ada')+'</p>'+
        '<p><strong>Distribusi rating:</strong> '+e(r.ratings.map(x=>x.rating+'/5: '+x.count).join(' · ')||'Belum ada')+'</p>'+
        '<p><strong>Metode pembayaran:</strong> '+e(r.methods.map(x=>({CASH:'Tunai',TRANSFER:'Transfer',OTHER:'Lainnya'}[x.method]||x.method)+' '+price.format(x.total)).join(' · ')||'Belum ada')+'</p></details>'+
        '<h3>Feedback terbaru</h3>'+(r.comments.length?'<div class="ops-feedback-list">'+r.comments.map(f=>'<article class="ops-panel ops-feedback"><strong aria-label="Rating '+e(f.rating)+' dari 5">'+e(f.rating)+' / 5</strong><p>'+e(f.comment||'Tanpa komentar')+'</p>'+((f.followups||[]).map(x=>'<p>Tindak lanjut: '+e(x.note)+'</p>').join(''))+'<details><summary>Catat tindak lanjut</summary><form data-followup="'+e(f.reservation)+'"><label>Tindak lanjut<textarea name="note" maxlength="1000" required></textarea></label><button type="submit">Simpan tindak lanjut</button>'+formAlert+'</form></details></article>').join('')+'</div>':'<p class="ops-empty">Belum ada feedback pada periode ini.</p>');
    } catch(error) { if (target.isConnected) target.textContent='Laporan tidak dapat dimuat: '+(error.message||'periksa koneksi'); }
  }
  async function settlementPanel(panel) {
    const box=panel.querySelector('div'), id=panel.dataset.settlement;
    const {invoice}=await api('/settlement/detail?'+new URLSearchParams({id}));
    box.innerHTML=invoice ? '<p>Total tagihan: <strong>'+e(price.format(invoice.total))+'</strong> · '+(invoice.paid_at?'Lunas ('+e(invoice.method)+') · '+e(date.format(invoice.paid_at))+' '+e(formatTime(invoice.paid_at)):'Belum lunas')+'</p>'+
      (invoice.adjustments||[]).map(a=>'<p>Koreksi oleh '+e(a.actor)+': '+e(price.format(a.old_total))+' → '+e(price.format(a.new_total))+' · '+e(a.reason)+'</p>').join('')+
      (invoice.paid_at?'':`<form data-settle="adjust"><label>Total koreksi (Rp)<input name="total" type="number" min="0" max="1000000000" required></label><label>Alasan koreksi<input name="reason" maxlength="500" required></label><button type="submit">Simpan koreksi</button>${formAlert}</form>
      <form data-settle="pay"><label>Metode<select name="method"><option value="CASH">Tunai</option><option value="TRANSFER">Transfer</option><option value="OTHER">Lainnya</option></select></label><label class="ops-check"><input name="received" type="checkbox" required> Saya memastikan pembayaran telah diterima</label><p>Pembayaran hanya dicatat setelah petugas memverifikasi penerimaan.</p><button type="submit">Catat pembayaran lunas</button>${formAlert}</form>`) :
      `<p>Tagihan dibuat dari harga layanan yang tercatat saat kunjungan.</p><form data-settle="create"><button type="submit">Buat tagihan</button>${formAlert}</form>`;
  }
  app.addEventListener('toggle',event=>{
    const panel=event.target;
    if (panel.matches('details[data-settlement]') && panel.open) settlementPanel(panel).catch(error=>{panel.querySelector('div').textContent=error.message||'Tidak dapat memuat tagihan.';});
  },true);
  function report(error,target) {
    if (error.status===401) return location.assign('/login');
    target.textContent=error.status ? error.message : 'Tidak dapat memuat perubahan. Silakan coba lagi.';
  }
  app.addEventListener('click',async event=>{
    const control=event.target.closest('button[data-action]');
    if (!control || control.type==='submit') return;
    const action=control.dataset.action;
    if (action==='today' && role==='manager') {
      const previous={day,to}; currentDay=jakartaDay(); day=currentDay; to=currentDay; dirty=false;
      try { await load(); } catch(error) { ({day,to}=previous); report(error,app.querySelector('#ops-message')); }
      return;
    }
    if (action==='overview' || action==='settings') { section=action; const hash=action==='settings'?'#pengaturan':''; if(location.hash!==hash) location.hash=hash; else { render(); if(action==='overview') void showReport(); } return; }
    const target=app.querySelector('#ops-message');
    busy=true;
    control.disabled=true;
    try {
      const data=action==='ready'?{ready:!response.ready}:{id:control.dataset.id};
      const result=await api('/ops/'+action,data);
      if (result.conflicts?.length) {
        target.textContent='Pengaturan bentrok dengan '+result.conflicts.map(r=>r.code+' ('+r.day+')').join(', ')+'.';
        return;
      }
      const notices={validate:'Tidak ada konflik pada draf.',publish:'Pengaturan baru diterapkan.',ready:'Kesiapan diperbarui.',start:'Sesi dimulai.',finish:'Sesi selesai.'};
      await load(action==='check-in'?'Check-in berhasil. Nomor antrean '+result.ticket+'.':notices[action]);
    } catch(error) { report(error,target); }
    finally { busy=false; control.disabled=false; }
  });
  app.addEventListener('submit',async event=>{
    event.preventDefault();
    const form=event.target;
    const target=form.querySelector('.message');
    const control=event.submitter;
    const data=formData(form);
    busy=true;
    if (control) control.disabled=true;
    try {
      if (form.id==='ops-date') {
        const previous={day,to,filter,paymentFilter,search};
        day=data.day; to=data.to||day; filter=data.status||''; paymentFilter=data.payment||''; search=(data.search||'').slice(0,100);
        try { await load(); } catch(error) { ({day,to,filter,paymentFilter,search}=previous); throw error; }
      } else if (form.dataset.settle) {
        const panel=form.closest('[data-settlement]'), action=form.dataset.settle;
        const settlement=await api('/settlement/'+action,{id:panel.dataset.settlement,...data,total:Number(data.total),received:data.received==='on'});
        if (action==='create' || action==='pay') {
          const state=settlement.paid_at?'PAID':'UNPAID';
          const row=response.rows.find(item=>item.id===panel.dataset.settlement);
          if (row) row.payment_status=state;
          for (const tag of app.querySelectorAll('[data-payment-status]')) {
            if (tag.dataset.paymentStatus===panel.dataset.settlement) tag.textContent=state==='PAID'?'Lunas':'Belum lunas';
          }
        }
        await settlementPanel(panel);
        dirty=false;
      } else if (form.dataset.followup) {
        await api('/settlement/followup',{id:form.dataset.followup,note:data.note});
        await showReport();
      } else if (form.id==='walk-in') {
        const result=await api('/ops/walk-in',{...data,start:Number(data.start),requestKey:walkKey});
        walkKey=crypto.randomUUID();
        day=currentDay; filter='';
        await load('Walk-in diterima. Nomor antrean '+result.ticket+'.');
      } else if (form.id==='settings') {
        const rows=(attribute,transform)=>[...form.querySelectorAll('fieldset[data-'+attribute+']')].map(fieldset=>{
          const values=Object.fromEntries([...fieldset.querySelectorAll('input,select')].map(input=>[input.name,input.type==='checkbox'?input.checked:input.value]));
          return transform({...values,id:fieldset.dataset[attribute]},fieldset);
        });
        const services=rows('service',s=>({...s,price:Number(s.price),duration:Number(s.duration)}));
        const capsters=rows('capster',(c,f)=>({...c,start:Number(c.start),end:Number(c.end),off:Number(c.off),
          skills:[...f.querySelectorAll('[name="skills"]:checked')].map(i=>i.value)}));
        const rules=Object.fromEntries(Object.keys(rulesLabels).map(k=>[k,Number(data[k])]));
        await api('/ops/draft',{version:response.settings.version,services,capsters,rules});
        await load('Draf tersimpan. Periksa konflik sebelum menerapkannya.');
      } else {
        const action=form.dataset.form;
        await api('/ops/'+action,{...data,id:form.dataset.id,minutes:Number(data.minutes),approved:data.approved==='on'});
        await load(action==='adjust'?'Penyesuaian diterapkan.':'Estimasi diperbarui.');
      }
    } catch(error) { report(error,target); }
    finally { busy=false; if(control) control.disabled=false; }
  });
  app.addEventListener('input',event=>{ if(event.target.closest('form')) dirty=true; });
  app.addEventListener('change',event=>{ if(event.target.closest('form')) dirty=true; });
  await load();
  let polling=false;
  const refresh=async()=>{
    if (polling || busy || dirty || document.hidden || !app.isConnected || section==='settings' || app.querySelector('details[open]') || app.contains(document.activeElement) && document.activeElement.matches('input,select,textarea')) return;
    const nextDay=jakartaDay();
    if (nextDay!==currentDay) { if(day===currentDay && to===currentDay) { day=nextDay; to=nextDay; } currentDay=nextDay; }
    polling=true;
    try { await load(undefined,true); }
    catch { const target=app.querySelector('#refresh-status'); if(target) target.textContent='Gagal memperbarui. '+(lastUpdated?'Terakhir diperbarui '+formatTime(lastUpdated)+'. ':'')+'Data mungkin sudah berubah; muat ulang halaman.'; }
    finally { polling=false; }
  };
  const timer=setInterval(refresh,20000);
  addEventListener('pagehide',()=>clearInterval(timer),{once:true});
  if (location.hash==='#antrean') document.querySelector('#antrean')?.scrollIntoView();
  addEventListener('hashchange',()=>{ if(role==='manager') {section=location.hash==='#pengaturan'?'settings':'overview'; render(); if(section==='overview') void showReport();} else if(location.hash==='#antrean') document.querySelector('#antrean')?.scrollIntoView(); });
}
