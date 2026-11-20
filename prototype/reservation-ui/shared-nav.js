const homes={staff:'/resepsionis',capster:'/capster',manager:'/manajemen'};
export const accountTarget=account=>homes[account?.role] || (account?'/beranda':'/login');

function setLabel(element,value) {
  const label=element?.querySelector('[data-framer-name="Label"] p') || element?.querySelector('h3,p');
  if (label && label.textContent!==value) label.textContent=value;
}

export function syncAccountButton(host,account) {
  for (const link of host.querySelectorAll('a[name="CTA Button"]')) {
    setLabel(link,homes[account?.role]?'Dashboard':account?'Akun saya':'Masuk');
    if (link.getAttribute('href')!==accountTarget(account)) link.href=accountTarget(account);
  }
}

const copy={
  Treatments:'Katalog', Concerns:'Kebutuhanmu', Prices:'Harga', Results:'Inspirasi',
  Practitioners:'Capster', Visit:'Reservasi', About:'Tentang', Questions:'Tanya jawab',
  Journal:'Artikel', Membership:'Panduan reservasi',
};
function syncAppNav(host,account) {
  syncAccountButton(host,account);
  const menu=host.querySelector('[data-framer-name="Menu button"]');
  if (menu) { menu.setAttribute('role','button'); menu.setAttribute('aria-label','Menu navigasi'); menu.setAttribute('aria-expanded',String(Boolean(host.querySelector('[data-framer-name="Panel"]')))); }
  for (const wordmark of host.querySelectorAll('[data-framer-name="Wordmark"] p')) {
    if (wordmark.textContent!=='Shaga Salon') wordmark.textContent='Shaga Salon';
  }
  setLabel(host.querySelector('[data-framer-name="Status"]'),'Senin–Sabtu 09.00–19.00 · Minggu 09.00–18.00');
  for (const link of host.querySelectorAll('[data-framer-name="Panel"] a[name]')) {
    const name=link.getAttribute('name');
    if (account) {
      const menus={
        customer:{Treatments:['Beranda','/beranda'],Concerns:['Buat reservasi','/reservasi'],Prices:['Reservasi saya','/akun'],Results:['Profil saya','/profil'],Practitioners:['Website salon','/'],Visit:['Keluar','#keluar']},
        staff:{Treatments:['Operasional','/resepsionis'],Concerns:['Buat reservasi','/reservasi'],Prices:['Antrean & walk-in','/resepsionis#antrean'],Results:['Profil saya','/profil'],Practitioners:['Website salon','/'],Visit:['Keluar','#keluar']},
        capster:{Treatments:['Jadwal & pelayanan','/capster'],Concerns:['Profil saya','/profil'],Prices:['Website salon','/'],Results:['Keluar','#keluar']},
        manager:{Treatments:['Ringkasan','/manajemen'],Concerns:['Pengaturan salon','/manajemen#pengaturan'],Prices:['Profil saya','/profil'],Results:['Website salon','/'],Practitioners:['Keluar','#keluar']},
      };
      const item=(menus[account.role] || menus.customer)[name];
      link.style.display=item?'':'none';
      if (item) { setLabel(link,item[0]); if(link.getAttribute('href')!==item[1]) link.setAttribute('href',item[1]); link.dataset.systemTarget=item[1]; }
      continue;
    }
    if (Object.hasOwn(copy,name)) setLabel(link,copy[name]);
    if (name==='Instagram ↗') link.href='https://www.instagram.com/shaga_salon/';
    if (name==='(212) 555-0193') { setLabel(link,'(031) 8410334'); link.href='tel:+62318410334'; }
    if (name==='Directions') { setLabel(link,'Lihat lokasi'); link.href='https://share.google/bzlMSy4K4UnnxuBj8'; }
  }
  const logo=host.querySelector('a[data-framer-name="Logo"]');
  if (logo && account) logo.href=accountTarget(account);
}

export async function mountNav(host,account,onLogout) {
  host.setAttribute('aria-label','Navigasi utama Shaga Salon');
  const anchor=document.createElement('a');
  anchor.href=account ? accountTarget(account) : '/';
  anchor.textContent='Shaga Salon';
  anchor.className='brand';
  const accountLink=document.createElement('a');
  accountLink.href=accountTarget(account);
  accountLink.textContent=homes[account?.role]?'Dashboard':account?'Akun saya':'Masuk';
  const fallback=document.createElement('div');
  fallback.className='booking-header';
  fallback.append(anchor,accountLink);
  host.replaceChildren(fallback);
  if (account) {
    const footer=document.createElement('footer');
    footer.className='booking-session-footer';
    footer.innerHTML='<button class="secondary" type="button">Keluar</button><p role="alert"></p>';
    document.querySelector('main').after(footer);
    const button=footer.querySelector('button');
    button.addEventListener('click',async ()=>{
      button.disabled=true;
      try { await onLogout(); location.assign('/'); }
      catch { footer.querySelector('p').textContent='Belum berhasil keluar. Coba lagi.'; button.disabled=false; }
    });
  }
  try {
    const [react,framer]=await Promise.all([
      import('/scripts/vendor/react.BF5K0J5z.mjs'),
      import('/scripts/vendor/toplevel-deps.TwMXxJp8.mjs'),
    ]);
    react.n();
    const Header=framer.shagaHeaderCompact();
    const mount=document.createElement('div');
    mount.className='framer-header-mount';
    mount.hidden=true;
    host.append(mount);
    const observer=new MutationObserver(()=>{
      syncAppNav(mount,account);
      if (mount.querySelector('[data-framer-name="Bar"]')) {
        mount.hidden=false;
        fallback.hidden=true;
      }
    });
    observer.observe(mount,{subtree:true,childList:true,characterData:true});
    mount.addEventListener('click',event=>{
      const system=event.target.closest('a[data-system-target]');
      if (system && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) {
        event.preventDefault(); event.stopImmediatePropagation();
        if (system.dataset.systemTarget==='#keluar') { onLogout().then(()=>location.assign('/')).catch(()=>alert('Belum berhasil keluar. Coba lagi.')); }
        else if (system.dataset.systemTarget===location.pathname+location.hash) location.reload();
        else location.assign(system.dataset.systemTarget);
        return;
      }
      const logo=event.target.closest('a[data-framer-name="Logo"]');
      if (logo && account) { event.preventDefault(); event.stopImmediatePropagation(); location.assign(accountTarget(account)); return; }
      const link=event.target.closest('a[name="CTA Button"]');
      if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      location.assign(accountTarget(account));
    },true);
    react.r(mount).render(react.o(Header,{bookingNav:true,name:'Header Compact',style:{width:'100%'}}));
  } catch(error) {
    console.error('Header Compact:',error);
  }
}
