import { showOperations } from './operations.js';
import { mountNav } from './shared-nav.js';
import { showBooking } from './booking-form.js';
import { mountSystemNav } from './system-nav.js';

const app = document.querySelector('#app');
const nav = document.querySelector('#shared-nav');
const params = new URLSearchParams(location.search);
const path = location.pathname.replace(/\/$/,'') || '/reservasi';
const carry=new URLSearchParams();
for (const value of params.getAll('layanan').slice(0,20)) if (/^[a-z0-9-]{1,50}$/.test(value)) carry.append('layanan',value);
for (const [key,pattern] of [['tanggal',/^\d{4}-\d{2}-\d{2}$/],['capster',/^[a-z0-9-]{1,25}$/],['jam',/^\d{13}$/],['id',/^[a-f0-9]{32}$/]]) {
  const value=params.get(key);
  if (pattern.test(value || '')) carry.set(key,value);
}
if (params.get('lanjut')==='reservasi') carry.set('lanjut','reservasi');
const serviceQuery=carry.size?'?'+carry:'';
const reservationUrl = '/reservasi'+serviceQuery;
const roles={staff:'/resepsionis',capster:'/capster',manager:'/manajemen'};
const startPage=account=>roles[account?.role] || (carry.size ? reservationUrl : '/beranda');
addEventListener('pageshow',event=>{ if (event.persisted) location.reload(); });
const timezone = 'Asia/Jakarta';
const time = new Intl.DateTimeFormat('id-ID',{timeZone:timezone,hour:'2-digit',minute:'2-digit',hourCycle:'h23'});
const date = new Intl.DateTimeFormat('id-ID',{timeZone:timezone,dateStyle:'long'});
const price = new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0});
const escape = value => String(value ?? '').replace(/[&<>"']/g, char =>
  ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const message = '<p class="message" role="alert"></p>';

async function api(route,data) {
  const options = data === undefined ? {} : {
    method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data),
  };
  const response = await fetch('/api'+route,options);
  const result = await response.json();
  if (!response.ok) {
    const error = new Error(result.message);
    error.status = response.status;
    throw error;
  }
  return result;
}

function title(name,description='',step='') {
  document.title = name+' · Shaga Salon';
  return (step ? '<p class="step">'+escape(step)+'</p>' : '')+
    '<h1 tabindex="-1">'+escape(name)+'</h1>'+(description ? '<p>'+escape(description)+'</p>' : '');
}

function screen(html) {
  app.innerHTML = html;
  app.querySelector('h1')?.focus({preventScroll:true});
}

function formAction(form,handler,{auth=false,onError}={}) {
  form.addEventListener('submit',async event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    const button = form.querySelector('button[type="submit"]');
    const alert = form.querySelector('.message');
    button.disabled = true;
    alert.textContent = '';
    try { await handler(data); }
    catch (error) {
      if (!auth && error.status === 401) location.assign('/login'+serviceQuery);
      else {
        alert.textContent = error.status ? error.message : 'Koneksi terganggu. Silakan coba lagi.';
        onError?.(error);
      }
    } finally { button.disabled = false; }
  });
}

function authForm(register) {
  document.body.classList.add('page-auth');
  const heading = register ? 'Daftar akun' : 'Masuk';
  const contact = register ? `
    <label>Nama lengkap<input name="name" autocomplete="name" required minlength="2" maxlength="100"></label>
    <label>Nomor telepon<input name="phone" type="tel" autocomplete="tel" required maxlength="22"></label>` : '';
  const confirmation = register ? '<label>Konfirmasi kata sandi<input name="confirmation" type="password" autocomplete="new-password" required maxlength="128"></label>' : '';
  const switchLink = register ? 'Sudah punya akun? <a href="/login'+escape(serviceQuery)+'">Masuk</a>' :
    'Belum punya akun? <a href="/daftar'+escape(serviceQuery)+'">Daftar</a>';
  screen(title(heading,register ? 'Buat akun untuk memilih jadwal dan menyimpan reservasi.' : 'Masuk untuk melanjutkan reservasi di Shaga Salon.')+`
    <form>
      ${contact}
      <label>Email<input name="email" type="email" autocomplete="email" required maxlength="254"></label>
      <label>Kata sandi<input name="password" type="password" autocomplete="${register ? 'new-password' : 'current-password'}" required maxlength="128" ${register ? 'minlength="8" aria-describedby="password-tip"' : ''}></label>
      ${register ? '<small id="password-tip">Minimal 8 karakter.</small>' : ''}
      ${confirmation}
      ${message}
      <button type="submit">${register ? 'Daftar' : 'Masuk'}</button>
    </form>
    <p>${switchLink}</p>`);
  formAction(app.querySelector('form'),async data => {
    await api(register ? '/register' : '/login',data);
    location.replace(startPage((await api('/session')).account));
  },{auth:true});
}

function review(row,catalog,account) {
  document.body.classList.remove('page-booking');
  document.body.classList.add('page-review');
  const capster = catalog.capsters.find(c=>c.id === row.capster);
  const confirmed = row.status === 'CONFIRMED';
  const choices=new URLSearchParams({tanggal:row.day,capster:row.capster,jam:row.start});
  for (const item of row.items) choices.append('layanan',item.id);
  const reselect='/reservasi?'+choices;
  const details = [
    ['Jadwal',date.format(row.start)+' · '+time.format(row.start)+' WIB'],['Capster',capster?.name ?? row.capster],
    ...row.items.map(item=>[item.name,price.format(item.price)+' · '+item.duration+' menit']),
    ['Total harga',price.format(row.booked_price)],
    ['Total durasi',row.booked_duration+' menit layanan'+(row.end ? ' · jeda salon '+Math.max(0,(row.end-row.start)/60000-row.booked_duration)+' menit' : '')],
    ['Nama',row.name],['Nomor telepon',row.phone],
  ];
  if (confirmed) details.unshift(['Kode reservasi',row.code]);
  if (row.ticket) details.push(['Nomor antrean',row.ticket],['Kunjungan',({WAITING:'Menunggu',ACTIVE:'Sedang dilayani',DONE:'Selesai'})[row.visit_status]]);
  screen(title(confirmed ? 'Reservasi terkonfirmasi' : 'Tinjau reservasi',
    confirmed ? 'Simpan kode reservasi dan tunjukkan kepada resepsionis saat datang.' :
      row.needsReview?'Rincian layanan berubah. Tinjau harga dan durasi terbaru sebelum mengonfirmasi kembali.':
      'Permintaan tersimpan. Jadwal baru diamankan setelah kamu menekan Konfirmasi dan slot masih tersedia.',
    confirmed ? 'Langkah 3 dari 3' : 'Langkah 2 dari 3')+
    '<div class="review-card">'+(confirmed?'<p class="review-badge">✓ &nbsp; Jadwal terkonfirmasi</p>':'<p class="review-badge pending">Periksa rincian sebelum konfirmasi</p>')+'<dl class="summary">'+details.map(([key,value])=>'<div class="'+(key==='Kode reservasi'?'review-code':key==='Jadwal'?'review-date':'')+'"><dt>'+escape(key)+'</dt><dd>'+escape(value)+'</dd></div>').join('')+'</dl></div>'+
    (confirmed ? '<p>Notifikasi dicatat sebagai simulasi.</p><a class="action" href="'+(account.role==='staff'?'/resepsionis':'/akun')+'">Lihat daftar reservasi</a>' :
      '<form>'+message+'<button type="submit">Konfirmasi reservasi</button></form><a href="'+escape(reselect)+'">Kembali memilih jam</a>'));
  if (!confirmed) formAction(app.querySelector('form'),async () => review(await api('/reservations/'+row.id+'/confirm',{quote:row.quote}),catalog,account),
    {onError(error) { if (error.status === 409) app.querySelector('form button').hidden = true; }});
}

async function accountScreen(account) {
  document.body.classList.add('page-history');
  const [{reservations},{capsters}] = await Promise.all([api('/reservations'),api('/catalog')]);
  const items = reservations.map(row=>{
    const visit=({WAITING:'Menunggu layanan',ACTIVE:'Sedang dilayani',DONE:'Selesai'})[row.visit_status];
    const label = visit || (row.status === 'CONFIRMED' ? 'Terkonfirmasi · '+row.code : 'Menunggu konfirmasi');
    const capster=capsters.find(c=>c.id===row.capster)?.name || row.capster;
    return '<li class="history-card"><div class="history-date"><span>'+escape(date.format(row.start))+'</span><strong>'+escape(time.format(row.start))+' WIB</strong></div><div class="history-detail"><span class="history-status'+(row.status==='REQUESTED'?' pending':'')+'">'+escape(label)+'</span><h2>'+escape(row.items.map(item=>item.name).join(' + '))+'</h2><p>'+escape(capster)+' · '+escape(price.format(row.booked_price))+'</p></div><a href="/reservasi?id='+encodeURIComponent(row.id)+'">Lihat detail →</a></li>';
  });
  screen(title(account.role === 'staff' ? 'Akun resepsionis' : 'Reservasi saya','Halo, '+account.name+'.')+
    (items.length ? '<ul class="history-list">'+items.join('')+'</ul>' : '<div class="empty-card"><h2>Belum ada reservasi</h2><p>Pilih layanan dan jadwal untuk kunjungan pertamamu.</p></div>')+
    '<a class="action" href="/reservasi">Buat reservasi</a>');
}

async function homeScreen(account) {
  document.body.classList.add('page-home');
  const [{reservations},catalog] = await Promise.all([api('/reservations'),api('/catalog')]);
  const next=reservations.filter(r=>r.start>=Date.now() && r.visit_status!=='DONE').sort((a,b)=>a.start-b.start)[0];
  const capster=next && catalog.capsters.find(c=>c.id===next.capster);
  const state=next && (next.visit_status ? ({WAITING:'Menunggu layanan',ACTIVE:'Sedang dilayani',DONE:'Selesai'})[next.visit_status] : next.status==='CONFIRMED'?'Terkonfirmasi':'Menunggu konfirmasi');
  screen('<div class="welcome-panel">'+title('Halo, '+account.name,'Selamat datang kembali di Shaga Salon.')+'<a class="action" href="/reservasi">Buat reservasi <span aria-hidden="true">↗</span></a></div>'+
    '<div class="home-section"><div class="section-heading"><h2>Reservasi terdekat</h2><a href="/akun">Lihat semua →</a></div>'+
    (next ? '<article class="next-card"><span class="history-status'+(next.status==='REQUESTED'?' pending':'')+'">'+escape(state)+'</span><h3>'+escape(next.items.map(i=>i.name).join(' + '))+'</h3><p>'+escape(date.format(next.start))+' · '+escape(time.format(next.start))+' WIB</p><p>'+escape(capster?.name || next.capster)+'</p>'+(next.code?'<p class="booking-code">Kode reservasi <strong>'+escape(next.code)+'</strong></p>':'')+'<a href="/reservasi?id='+encodeURIComponent(next.id)+'">Lihat detail reservasi →</a></article>' : '<div class="empty-card compact"><div><h3>Belum ada reservasi mendatang</h3><p>Pilih layanan dan jadwal untuk kunjunganmu.</p></div></div>')+'</div><div class="home-links"><a href="/akun"><strong>Reservasi saya</strong><small>Lihat riwayat →</small></a><a href="/profil"><strong>Profil saya</strong><small>Kelola informasi akun →</small></a></div>');
}

function profileScreen(account,notice='') {
  if(account.role==='customer') document.body.classList.add('page-profile');
  const role=({customer:'Pelanggan',staff:'Resepsionis',capster:'Capster',manager:'Manajer'})[account.role] || account.role;
  const view=()=>{
    screen(title('Profil saya','Kelola informasi akunmu.','AKUN')+
      '<dl class="summary"><div><dt>Nama</dt><dd>'+escape(account.name)+'</dd></div><div><dt>Email</dt><dd>'+escape(account.email)+'</dd></div><div><dt>Telepon</dt><dd>'+escape(account.phone || 'Belum diisi')+'</dd></div><div><dt>Peran</dt><dd>'+escape(role)+'</dd></div></dl><p role="status">'+escape(notice)+'</p><button type="button" id="edit-profile">Edit profil</button><div class="profile-links"><a href="/">Website salon</a><button type="button" class="secondary profile-logout">Keluar</button></div>');
    app.querySelector('#edit-profile').onclick=edit;
    app.querySelector('.profile-logout').onclick=async event=>{event.currentTarget.disabled=true;try{await api('/logout',{});location.assign('/');}catch{event.currentTarget.disabled=false;notice='Belum berhasil keluar. Coba lagi.';view();}};
  };
  const edit=()=>{
    screen('<button type="button" class="profile-back" id="back-profile">← Profil saya</button>'+title('Edit profil','Perbarui nama dan nomor teleponmu.','AKUN')+
      '<form><label>Nama lengkap<input name="name" required minlength="2" maxlength="100" autocomplete="name" value="'+escape(account.name)+'"></label><label>Nomor telepon<input name="phone" type="tel" required minlength="8" maxlength="22" autocomplete="tel" value="'+escape(account.phone)+'"></label>'+message+'<button type="submit">Simpan perubahan</button><button type="button" class="secondary" id="cancel-profile">Batal</button></form>');
    app.querySelector('#cancel-profile').onclick=()=>{notice='';view();};
    app.querySelector('#back-profile').onclick=()=>{notice='';view();};
    formAction(app.querySelector('form'),async data=>{
      if (data.name.trim().length<2 || !/^\+?[\d ()-]{8,22}$/.test(data.phone.trim()) || data.phone.replace(/\D/g,'').length<8) {
        const error=new Error('Isi nama dan nomor telepon yang valid.'); error.status=400; throw error;
      }
      const result=await api('/profile',data); Object.assign(account,result.account); notice='Profil berhasil diperbarui.'; view();
    });
  };
  view();
}

async function main() {
  const {account} = await api('/session');
  if(account) mountSystemNav(nav,account,()=>api('/logout',{}));
  else void mountNav(nav,account,()=>api('/logout',{}));
  const auth = path === '/login' || path === '/daftar';
  if (!account && !auth) return location.replace('/login'+serviceQuery);
  if (account && auth) return location.replace(startPage(account));
  if (auth) return authForm(path === '/daftar');
  const workspace=roles[account.role];
  if (path==='/profil') return profileScreen(account);
  if (workspace && path!==workspace && !(account.role==='staff' && path==='/reservasi')) return location.replace(workspace);
  if (workspace===path) return showOperations({account,app,api,escape,date,time,price});
  if (path === '/beranda') return homeScreen(account);
  const catalog = await api('/catalog');
  if (path === '/akun') return accountScreen(account);
  if (params.has('id')) {
    const row = await api('/reservations/'+encodeURIComponent(params.get('id')));
    return review(row,catalog,account);
  }
  if(account.role==='customer') document.body.classList.add('page-booking');
  showBooking({account,catalog,params,screen,title,escape,price,time,api,formAction,message});
}

main().catch(error => {
  if (error.status === 401) return location.replace('/login'+serviceQuery);
  screen(title(error.status === 404 ? 'Reservasi tidak ditemukan' : 'Halaman belum bisa dimuat',
    error.status === 404 ? 'Buka akunmu untuk melihat reservasi yang tersedia.' : 'Periksa koneksi lalu muat ulang halaman.')+
    '<a href="/reservasi">Kembali ke reservasi</a>');
});
