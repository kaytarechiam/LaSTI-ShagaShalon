import { useEffect, useState, type FormEvent } from 'react';
import { ArrowLeft, ArrowRight, Check, Clock3 } from 'lucide-react';
import { api, date, money, time, type Account, type Catalog, type Reservation } from './api';

type Queue = { ticket: number | null; status: 'WAITING' | 'ACTIVE' | 'DONE' | null; eta: number | null; estimate: number | null };
type Invoice = { total: number; paid_at: number | null; method: string | null };
type Settlement = { invoice: Invoice | null; feedback: { rating: number; comment: string } | null };
const errorMessage = (error: unknown) => error instanceof Error ? error.message : 'Terjadi gangguan. Silakan coba lagi.';

export function Profile({ account }: { account: Account }) {
  const [editing,setEditing]=useState(false),[name,setName]=useState(account.name),[phone,setPhone]=useState(account.phone),[notice,setNotice]=useState(''),[busy,setBusy]=useState(false);
  async function save(e:FormEvent) {
    e.preventDefault();setBusy(true);setNotice('');
    try { const result=await api<{account:Account}>('/profile',{name,phone});Object.assign(account,result.account);setName(result.account.name);setPhone(result.account.phone);setEditing(false);setNotice('Profil berhasil diperbarui.'); }
    catch(error){setNotice(errorMessage(error));}finally{setBusy(false);}
  }
  return <><div className="m-page-heading"><div><span className="m-eyebrow">AKUN / PROFIL</span><h1>Profil <em>saya.</em></h1><p>Kelola informasi yang digunakan untuk kunjunganmu.</p></div></div>
    <section className="m-detail-card"><p role="status">{notice}</p>{editing?<form className="m-form" onSubmit={save}><label>Nama lengkap<input value={name} onChange={e=>setName(e.target.value)} minLength={2} maxLength={100} required/></label><label>Nomor telepon<input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} maxLength={22} required/></label><div className="m-actions"><button className="m-primary" disabled={busy}>{busy?'Menyimpan…':'Simpan perubahan'} <ArrowRight size={17}/></button><button className="m-secondary" type="button" onClick={()=>{setName(account.name);setPhone(account.phone);setEditing(false);setNotice('');}}>Batal</button></div></form>:
      <><dl className="m-detail-list"><div><dt>Nama lengkap</dt><dd>{account.name}</dd></div><div><dt>Email</dt><dd>{account.email}</dd></div><div><dt>Nomor telepon</dt><dd>{account.phone||'Belum diisi'}</dd></div><div><dt>Peran</dt><dd>Pelanggan</dd></div></dl><button className="m-secondary" onClick={()=>setEditing(true)}>Edit profil</button></>}</section></>;
}

function Visit({id}:{id:string}) {
  const [queue,setQueue]=useState<Queue|null>(null),[updated,setUpdated]=useState<number|null>(null),[failed,setFailed]=useState(false),[settlement,setSettlement]=useState<Settlement|null>(null);
  const [rating,setRating]=useState(''),[comment,setComment]=useState(''),[message,setMessage]=useState(''),[sending,setSending]=useState(false);
  useEffect(()=>{
    let live=true, pending=false;
    async function load() {
      if(pending||document.hidden)return;pending=true;
      try {
        const q=await api<Queue>('/queue?'+new URLSearchParams({id}));
        if(!live)return;setQueue(q);setUpdated(Date.now());setFailed(false);
        if(q.status==='DONE') {const result=await api<Settlement>('/settlement/detail?'+new URLSearchParams({id}));if(live)setSettlement(result);}
      } catch {if(live)setFailed(true);} finally {pending=false;}
    }
    void load();const timer=setInterval(load,20000);
    const visible=()=>{if(!document.hidden)void load();};document.addEventListener('visibilitychange',visible);
    return()=>{live=false;clearInterval(timer);document.removeEventListener('visibilitychange',visible);};
  },[id]);
  async function submit(e:FormEvent) {e.preventDefault();setSending(true);setMessage('');try{await api('/settlement/feedback',{id,rating:Number(rating),comment});setSettlement(previous=>previous?{...previous,feedback:{rating:Number(rating),comment}}:previous);setMessage('Terima kasih, feedback kamu sudah tercatat.');}catch(error){setMessage(errorMessage(error));}finally{setSending(false);}}
  const status=queue?.status?({WAITING:'Menunggu layanan',ACTIVE:'Sedang dilayani',DONE:'Selesai'})[queue.status]:'Belum check-in';
  return <section className="m-detail-card m-visit"><div className="m-section-title"><span>02</span><div><h2>Kunjungan dan antrean</h2><p>Estimasi dapat berubah mengikuti kondisi pelayanan.</p></div></div>
    <div className="m-queue-line"><Clock3 size={20}/><div><strong>{queue?status:'Memuat status kunjungan…'}</strong>{queue?.ticket&&<p>Nomor antrean {queue.ticket}</p>}{queue?.eta&&<p>Perkiraan mulai {time.format(queue.eta)} WIB</p>}{queue?.estimate&&<p>Perkiraan selesai {time.format(queue.estimate)} WIB</p>}</div></div>
    <p className="m-updated" role="status">{failed?'Gagal memperbarui. ':''}{updated?'Terakhir diperbarui '+time.format(updated)+' WIB.':'Menunggu pembaruan.'}</p>
    {queue?.status==='DONE'&&<><div className="m-invoice"><span>Tagihan</span><strong>{settlement?.invoice?money.format(settlement.invoice.total):'Belum dibuat'}</strong><small>{settlement?.invoice?(settlement.invoice.paid_at?'Lunas ('+settlement.invoice.method+')':'Belum lunas'):''}</small></div>
      {settlement?.feedback?<p role="status">Terima kasih, feedback kamu sudah tercatat ({settlement.feedback.rating}/5).</p>:settlement&&<form className="m-form" onSubmit={submit}><h3>Feedback sukarela</h3><p>Kamu boleh melewati bagian ini.</p><label>Rating<select value={rating} onChange={e=>setRating(e.target.value)} required><option value="">Pilih rating</option>{[1,2,3,4,5].map(n=><option key={n} value={n}>{n}</option>)}</select></label><label>Komentar (opsional)<textarea value={comment} onChange={e=>setComment(e.target.value)} maxLength={1000}/></label><p role="status">{message}</p><button className="m-primary" disabled={sending}>{sending?'Mengirim…':'Kirim feedback'} <ArrowRight size={17}/></button></form>}
    </>}
  </section>;
}

export function ReservationDetail({id,catalog}:{id:string;catalog:Catalog}) {
  const [row,setRow]=useState<Reservation|null>(null),[notice,setNotice]=useState(''),[busy,setBusy]=useState(false),[conflict,setConflict]=useState(false);
  useEffect(()=>{api<Reservation>('/reservations/'+encodeURIComponent(id)).then(setRow).catch(error=>setNotice(errorMessage(error)));},[id]);
  async function confirm(){if(!row)return;setBusy(true);setNotice('');try{setRow(await api<Reservation>('/reservations/'+row.id+'/confirm',{quote:row.quote}));}catch(error){setNotice(errorMessage(error));if(error instanceof Error&&'status' in error&&error.status===409)setConflict(true);}finally{setBusy(false);}}
  if(!row)return <p role="status">{notice||'Memuat reservasi…'}</p>;
  const confirmed=row.status==='CONFIRMED', capster=catalog.capsters.find(c=>c.id===row.capster)?.name||row.capster;
  const choices=new URLSearchParams({tanggal:row.day,capster:row.capster,jam:String(row.start)});row.items.forEach(item=>choices.append('layanan',item.id));
  return <><a className="m-back" href="/akun"><ArrowLeft size={16}/> Kembali ke reservasi saya</a><div className="m-page-heading"><div><span className="m-eyebrow">RESERVASI / {confirmed?'TERKONFIRMASI':'TINJAU PILIHAN'}</span><h1>{confirmed?<>Jadwalmu <em>siap.</em></>:<>Satu langkah <em>lagi.</em></>}</h1><p>{confirmed?'Simpan kode reservasi dan tunjukkan saat datang.':row.needsReview?'Rincian berubah. Periksa kembali harga dan durasi sebelum konfirmasi.':'Jadwal baru diamankan setelah kamu melakukan konfirmasi.'}</p></div></div>
    <section className="m-detail-card"><div className="m-section-title"><span>01</span><div><h2>Rincian reservasi</h2><p>{confirmed?'Jadwal terkonfirmasi':'Periksa rincian sebelum mengonfirmasi'}</p></div></div>
      {confirmed&&<div className="m-confirmed"><Check size={18}/> Kode reservasi <strong>{row.code}</strong></div>}
      <dl className="m-detail-list"><div><dt>Jadwal</dt><dd>{date.format(row.start)} · {time.format(row.start)} WIB</dd></div><div><dt>Capster</dt><dd>{capster}</dd></div>{row.items.map(item=><div key={item.id}><dt>{item.name}</dt><dd>{money.format(item.price)} · {item.duration} menit</dd></div>)}<div><dt>Total harga</dt><dd>{money.format(row.booked_price)}</dd></div><div><dt>Total durasi</dt><dd>{row.booked_duration} menit layanan · jeda salon {Math.max(0,(row.end-row.start)/60000-row.booked_duration)} menit</dd></div><div><dt>Nama</dt><dd>{row.name}</dd></div><div><dt>Nomor telepon</dt><dd>{row.phone}</dd></div></dl>
      {notice&&<p className="m-notice" role="alert">{notice}</p>}
      {confirmed?<p className="m-muted">Notifikasi dicatat sebagai simulasi.</p>:<div className="m-actions">{!conflict&&<button className="m-primary" onClick={confirm} disabled={busy}>{busy?'Memeriksa…':'Konfirmasi reservasi'} <ArrowRight size={17}/></button>}<a className="m-secondary" href={'/reservasi?'+choices}>Kembali memilih jam</a></div>}
    </section>
    {confirmed&&<Visit id={id}/>}
  </>;
}
