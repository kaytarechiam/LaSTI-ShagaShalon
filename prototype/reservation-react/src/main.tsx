import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowLeft, ArrowRight, CalendarDays, CircleCheck, Clock3, Menu, Scissors, UserRound, X } from 'lucide-react';
import { motion, MotionConfig } from 'motion/react';
import * as Dialog from '@radix-ui/react-dialog';
import { api, ApiError, date, money, time, type Account, type Catalog, type Reservation, type Slot } from './api';
import { Profile, ReservationDetail } from './CustomerDetails';
import './style.css';

const legacyTeam = new Set(['/resepsionis', '/capster', '/manajemen']);
const path = location.pathname.replace(/\/$/, '') || '/reservasi';
const query = new URLSearchParams(location.search);
const teamHome: Record<string, string> = { staff: '/resepsionis', capster: '/capster', manager: '/manajemen' };
const legacyEntry = '/reservation-ui/app.js';
const loadLegacy = () => import(/* @vite-ignore */ legacyEntry);

function Notice({ text }: { text: string }) { return text ? <p className="m-notice" role="alert">{text}</p> : null; }
function message(error: unknown) { return error instanceof Error ? error.message : 'Koneksi terganggu. Silakan coba lagi.'; }
function go(url: string) { location.assign(url); }

function Shell({ account, children }: { account: Account | null; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [logoutError, setLogoutError] = useState('');
  useEffect(() => {
    if (account) return;
    let active = true;
    document.body.classList.add('m-public-auth');
    const entry = '/reservation-ui/shared-nav.js';
    void import(/* @vite-ignore */ entry).then(({mountNav}) => {
      const host = document.querySelector('#shared-nav');
      if (active && host) void mountNav(host, null, () => api('/logout', {}));
    });
    return () => { active = false; document.body.classList.remove('m-public-auth'); };
  }, [account]);
  const logout = async () => { try { await api('/logout', {}); go('/'); } catch { setOpen(false); setLogoutError('Belum berhasil keluar. Silakan coba lagi.'); } };
  const links = account ? [['Beranda', '/beranda'], ['Reservasi', '/reservasi'], ['Riwayat', '/akun'], ['Profil', '/profil']] : [['Website salon', '/'], ['Masuk', '/login']];
  return <div className="m-app">
    {account && <header className="m-header">
      <a className="m-brand" href={account ? '/beranda' : '/'}><span>Shaga</span><small>SALON · SURABAYA</small></a>
      <nav className="m-desktop" aria-label="Navigasi utama">{links.map(([label, href]) => <a href={href} aria-current={path === href ? 'page' : undefined} key={href}>{label}</a>)}</nav>
      {account && <button className="m-logout m-desktop" onClick={logout}>Keluar <ArrowRight size={16}/></button>}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild><button className="m-mobile m-icon-button" aria-label="Buka menu"><Menu size={22}/></button></Dialog.Trigger>
        <Dialog.Portal><Dialog.Overlay className="m-overlay"/><Dialog.Content className="m-mobile-menu">
          <div className="m-menu-top"><Dialog.Title>Menu Shaga</Dialog.Title><Dialog.Close className="m-icon-button" aria-label="Tutup menu"><X size={22}/></Dialog.Close></div>
          <Dialog.Description className="m-muted">Pilih halaman yang ingin kamu buka.</Dialog.Description>
          {links.map(([label,href])=><a href={href} key={href}>{label}<ArrowRight size={17}/></a>)}
          {account && <button onClick={logout}>Keluar <ArrowRight size={17}/></button>}
        </Dialog.Content></Dialog.Portal>
      </Dialog.Root>
    </header>}
    <div className="m-main">{logoutError && <p className="m-notice" role="alert">{logoutError}</p>}{children}</div>
    <footer className="m-footer"><span>SHAGA SALON · SURABAYA</span><a href="/">Kembali ke website salon <ArrowRight size={15}/></a></footer>
  </div>;
}
function Auth() {
  const register = path === '/daftar', [error, setError] = useState(''), [busy, setBusy] = useState(false);
  const carry = query.toString() ? '?' + query.toString() : '';
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError('');
    const form = event.currentTarget, values = Object.fromEntries(new FormData(form));
    try {
      await api(register ? '/register' : '/login', values);
      const { account } = await api<{ account: Account }>('/session');
      go(teamHome[account.role] || (query.size ? '/reservasi' + carry : '/beranda'));
    } catch (error) { setError(message(error)); } finally { setBusy(false); }
  }
  return <Shell account={null}><section className="m-auth-layout"><div className="m-auth-art"><div className="m-art-caption"><span>WAKTU UNTUK DIRIMU</span><h1>Perawatan yang<br/><em>dimulai dari sini.</em></h1><p>Rencanakan waktumu, kami siapkan ruangnya.</p></div></div>
    <motion.div className="m-auth-form" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.3}}>
      <span className="m-eyebrow">SHAGA SALON / AKUN</span><h2>{register ? 'Buat akun' : 'Selamat datang kembali.'}</h2>
      <p className="m-muted">{register ? 'Mulai dengan membuat akun untuk menyimpan reservasi.' : 'Masuk untuk mengatur jadwal perawatanmu.'}</p>
      <form onSubmit={submit} className="m-form">
        {register && <><label>Nama lengkap<input name="name" autoComplete="name" required minLength={2} maxLength={100}/></label><label>Nomor telepon<input name="phone" type="tel" autoComplete="tel" required maxLength={22}/></label></>}
        <label>Email<input name="email" type="email" autoComplete="email" placeholder="nama@email.com" required maxLength={254}/></label>
        <label>Kata sandi<input name="password" type="password" autoComplete={register ? 'new-password' : 'current-password'} required minLength={register ? 8 : undefined} maxLength={128}/></label>
        {register && <><small>Minimal 8 karakter.</small><label>Konfirmasi kata sandi<input name="confirmation" type="password" autoComplete="new-password" required maxLength={128}/></label></>}
        <Notice text={error}/><button className="m-primary" disabled={busy}>{busy ? 'Memproses…' : register ? 'Buat akun' : 'Masuk'} <ArrowRight size={18}/></button>
      </form>
      <p className="m-auth-switch">{register ? 'Sudah punya akun?' : 'Belum punya akun?'} <a href={(register ? '/login' : '/daftar') + carry}>{register ? 'Masuk' : 'Daftar sekarang'}</a></p>
    </motion.div></section></Shell>;
}

function Status({ row }: { row: Reservation }) {
  const label = (row.visit_status && ({WAITING:'Menunggu layanan',ACTIVE:'Sedang dilayani',DONE:'Selesai'})[row.visit_status]) || (row.status === 'CONFIRMED' ? 'Terkonfirmasi' : 'Menunggu konfirmasi');
  return <span className="m-status"><span/>{label}</span>;
}
function ReservationCard({row,catalog}:{row:Reservation;catalog:Catalog}) {
  return <article className="m-reservation-card"><div className="m-card-date"><span>{date.format(row.start)}</span><strong>{time.format(row.start)} <small>WIB</small></strong></div><div className="m-card-body"><Status row={row}/><h3>{row.items.map(i=>i.name).join(' + ')}</h3><p>{catalog.capsters.find(c=>c.id===row.capster)?.name || row.capster} · {money.format(row.booked_price)}</p>{row.code && <small>Kode reservasi {row.code}</small>}</div><a className="m-round-link" aria-label="Lihat detail reservasi" href={'/reservasi?id='+encodeURIComponent(row.id)}><ArrowRight size={19}/></a></article>;
}
function CustomerHome({ account, catalog, history }: { account: Account; catalog: Catalog; history: boolean }) {
  const [rows, setRows] = useState<Reservation[] | null>(null), [error,setError] = useState('');
  useEffect(()=>{api<{reservations:Reservation[]}>('/reservations').then(r=>setRows(r.reservations)).catch(e=>setError(message(e)));},[]);
  const next = rows?.filter(r=>r.start>=Date.now() && r.visit_status!=='DONE').sort((a,b)=>a.start-b.start)[0];
  return <><div className="m-page-heading"><div><span className="m-eyebrow">{history ? 'AKUN / RIWAYAT' : 'SHAGA SALON / AKUN'}</span><h1>{history ? 'Reservasi saya' : <>Halo, {account.name.split(' ')[0]}.<br/><em>Senang melihatmu lagi.</em></>}</h1><p>{history ? 'Semua rencana perawatanmu ada di sini.' : 'Rencanakan waktu untuk merawat dirimu.'}</p></div><a className="m-primary m-heading-action" href="/reservasi">Buat reservasi <ArrowRight size={18}/></a></div>
    {!history && <div className="m-editorial-strip"><div><span>SEBUAH JEDA UNTUKMU</span><p>Perawatan yang baik dimulai dari waktu yang kamu sisihkan untuk diri sendiri.</p></div><Scissors size={40} strokeWidth={1}/></div>}
    <div className="m-section-heading"><div><span className="m-eyebrow">{history ? 'SEMUA KUNJUNGAN' : 'R E N C A N A  K A M U'}</span><h2>{history ? 'Riwayat reservasi' : 'Reservasi terdekat'}</h2></div>{!history && <a href="/akun">Lihat semua <ArrowRight size={16}/></a>}</div>
    <Notice text={error}/>{!rows && !error && <p role="status">Memuat reservasi…</p>}
    {rows && (history ? rows.length ? rows.map(r=><ReservationCard key={r.id} row={r} catalog={catalog}/>) : <Empty/> : next ? <ReservationCard row={next} catalog={catalog}/> : <Empty/>)}
  </>;
}
function Empty() { return <div className="m-empty"><CalendarDays size={30} strokeWidth={1.4}/><div><h3>Belum ada reservasi</h3><p>Temukan layanan dan pilih waktu yang cocok untukmu.</p></div><a href="/reservasi">Jelajahi layanan <ArrowRight size={16}/></a></div>; }

function Booking({account,catalog}:{account:Account;catalog:Catalog}) {
  const [selected,setSelected]=useState<string[]>(query.getAll('layanan').filter(id=>catalog.services.some(s=>s.id===id&&s.active!==false)));
  const [day,setDay]=useState(query.get('tanggal')||''), [capster,setCapster]=useState(query.get('capster')||''), [start,setStart]=useState(query.get('jam')||'');
  const [name,setName]=useState(account.role==='staff'?'':account.name), [phone,setPhone]=useState(account.role==='staff'?'':account.phone);
  const [term,setTerm]=useState(''), [slots,setSlots]=useState<Slot[]>([]), [status,setStatus]=useState('Pilih layanan, tanggal, dan capster.'), [busy,setBusy]=useState(false), [error,setError]=useState('');
  const items=catalog.services.filter(s=>selected.includes(s.id)&&s.active!==false);
  const eligible=catalog.capsters.filter(c=>c.active!==false && items.length>0 && items.every(s=>c.skills.includes(s.id)));
  useEffect(()=>{if(capster && !eligible.some(c=>c.id===capster)) {setCapster('');setStart('');}},[selected.join(','),capster]);
  useEffect(()=>{
    let active=true; if(!items.length||!day||!capster){setSlots([]);return;}
    const params=new URLSearchParams({day,capster}); selected.forEach(id=>params.append('services',id));
    setSlots([]); setStatus('Mencari jadwal yang tersedia…');
    api<{slots:Slot[]}>('/slots?'+params).then(r=>{if(!active)return;setSlots(r.slots);setStatus(r.slots.length?'Pilih waktu yang paling nyaman.':'Belum ada waktu yang cukup. Coba tanggal atau capster lain.');setStart(previous=>r.slots.some(s=>String(s.start)===previous)?previous:'');}).catch(e=>{if(active)setStatus(message(e));});
    return ()=>{active=false;};
  },[selected.join(','),day,capster]);
  async function submit(event:FormEvent<HTMLFormElement>){event.preventDefault();setBusy(true);setError('');try{const row=await api<Reservation>('/reservations',{services:selected,day,capster,start:Number(start),name,phone});go('/reservasi?id='+row.id);}catch(e){setError(message(e));}finally{setBusy(false);}}
  return <><div className="m-page-heading m-booking-heading"><div><span className="m-eyebrow">RESERVASI / LANGKAH 01</span><h1>Waktu untuk <em>dirimu.</em></h1><p>Pilih perawatan dan jadwal yang paling nyaman untukmu.</p></div><span className="m-heading-note">SHAGA SALON <br/> SURABAYA · WIB</span></div>
    <form className="m-booking-layout" onSubmit={submit}><div className="m-booking-content">
      <section className="m-booking-section"><div className="m-section-title"><span>01</span><div><h2>Pilih layanan</h2><p>Mulai dari perawatan yang kamu inginkan.</p></div></div>
        <label className="m-search">Cari layanan<input value={term} onChange={e=>setTerm(e.target.value)} type="search" placeholder="Misalnya, potong rambut"/></label>
        <fieldset className="m-services"><legend className="m-sr">Layanan</legend>{catalog.services.filter(s=>s.active!==false&&s.name.toLowerCase().includes(term.toLowerCase())).map(s=><label className={'m-service '+(selected.includes(s.id)?'is-selected':'')} key={s.id}><input type="checkbox" checked={selected.includes(s.id)} onChange={()=>setSelected(old=>old.includes(s.id)?old.filter(id=>id!==s.id):[...old,s.id])}/><span><strong>{s.name}</strong><small>{s.duration} menit</small></span><b>{money.format(s.price)}</b></label>)}{!catalog.services.some(s=>s.active!==false&&s.name.toLowerCase().includes(term.toLowerCase()))&&<p role="status">Tidak ada layanan yang cocok.</p>}</fieldset>
      </section>
      <section className="m-booking-section"><div className="m-section-title"><span>02</span><div><h2>Atur jadwal</h2><p>Semua waktu ditampilkan dalam WIB.</p></div></div><div className="m-grid-two"><label>Tanggal<input type="date" value={day} min={catalog.today} onChange={e=>{setDay(e.target.value);setStart('');}} required/></label><label>Capster<select value={capster} onChange={e=>{setCapster(e.target.value);setStart('');}} required disabled={!eligible.length}><option value="">Pilih capster</option>{eligible.map(c=><option key={c.id} value={c.id}>{c.name}</option>)}</select></label></div>
        <label>Waktu tersedia<select value={start} onChange={e=>setStart(e.target.value)} disabled={!slots.length} required><option value="">Pilih waktu</option>{slots.map(s=><option value={s.start} key={s.start}>{time.format(s.start)} WIB</option>)}</select></label><p className="m-slot-note" role="status"><Clock3 size={15}/> {items.length&&!eligible.length?'Belum ada capster yang dapat menangani semua layanan pilihan. Ubah pilihan layanan.':status}</p>
      </section>
      <section className="m-booking-section"><div className="m-section-title"><span>03</span><div><h2>Data pelanggan</h2><p>Untuk menghubungi dan menyambutmu saat kunjungan.</p></div></div><div className="m-grid-two"><label>Nama pelanggan<input value={name} onChange={e=>setName(e.target.value)} required minLength={2} maxLength={100}/></label><label>Nomor telepon<input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} required maxLength={22}/></label></div></section>
    </div><aside className="m-summary"><span className="m-eyebrow">RENCANA PERAWATAN</span><h2>Ringkasan pilihan</h2><p>Detail perawatanmu akan muncul di sini.</p><div className="m-summary-list">{items.length?items.map(s=><div key={s.id}><span>{s.name}<small>{s.duration} menit</small></span><strong>{money.format(s.price)}</strong></div>):<p>Belum ada layanan dipilih.</p>}</div><div className="m-total"><span>Total estimasi</span><strong>{money.format(items.reduce((n,s)=>n+s.price,0))}</strong></div><p className="m-summary-note">Jadwal baru diamankan setelah konfirmasi berhasil. Termasuk jeda salon {catalog.buffer} menit.</p><Notice text={error}/><button className="m-primary" disabled={busy||!selected.length||!start}>{busy?'Menyimpan…':'Tinjau permintaan'} <ArrowRight size={18}/></button></aside></form>
  </>;
}

function App() {
  const [session,setSession]=useState<Account|null|undefined>(), [catalog,setCatalog]=useState<Catalog|null>(null), [error,setError]=useState('');
  useEffect(()=>{const titles:Record<string,string>={'/login':'Masuk','/daftar':'Daftar','/beranda':'Beranda','/akun':'Reservasi saya','/profil':'Profil saya','/reservasi':'Reservasi'};document.title=(titles[path]||'Shaga Salon')+' · Shaga Salon';},[]);
  useEffect(()=>{api<{account:Account|null}>('/session').then(async ({account})=>{
    if(account && teamHome[account.role]) { document.body.classList.remove('m-root'); await loadLegacy(); return; }
    if(!account && path!=='/login' && path!=='/daftar'){go('/login'+(location.search||(path==='/reservasi'?'?lanjut=reservasi':'')));return;}
    if(account && (path==='/login'||path==='/daftar')){go(query.size?'/reservasi'+location.search:'/beranda');return;}
    setSession(account); if(account) setCatalog(await api<Catalog>('/catalog'));
  }).catch(e=>setError(message(e)));},[]);
  if(error)return <Shell account={null}><Notice text={error}/></Shell>;
  if(session===undefined)return <p className="m-boot" role="status">Menyiapkan Shaga Salon…</p>;
  if(!session)return <Auth/>;
  if(!catalog)return <Shell account={session}><p role="status">Memuat katalog…</p></Shell>;
  return <Shell account={session}>{path==='/profil'?<Profile account={session}/>:path==='/reservasi'&&query.has('id')?<ReservationDetail id={query.get('id')||''} catalog={catalog}/>:path==='/reservasi'?<Booking account={session} catalog={catalog}/>:<CustomerHome account={session} catalog={catalog} history={path==='/akun'}/>}</Shell>;
}

if (legacyTeam.has(path)) void loadLegacy();
else {
  document.body.classList.add('m-root');
  const container=document.querySelector('#app');
  if(container) createRoot(container).render(<MotionConfig reducedMotion="user"><App/></MotionConfig>);
}
