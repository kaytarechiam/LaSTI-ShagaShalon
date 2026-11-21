const homes={staff:'/resepsionis',capster:'/capster',manager:'/manajemen'};
export const accountTarget=account=>homes[account?.role] || (account?'/beranda':'/login');
export function syncAccountButton(host,account) {
  for (const link of host.querySelectorAll('a[name="CTA Button"]')) {
    const label=link.querySelector('[data-framer-name="Label"] p') || link.querySelector('h3,p');
    if (label) label.textContent=homes[account?.role]?'Dashboard':account?'Akun saya':'Masuk';
    link.href=accountTarget(account);
  }
}
export async function mountNav(host,account,onLogout) {
  if (!account) {
    try {
      const { mountLandingNav } = await import('./landing-nav.js');
      await mountLandingNav(host);
      return;
    } catch (error) { console.error('Navigasi landing tidak dapat dimuat:', error); }
  }
  const links = account ? ({
    customer:[['Beranda','/beranda'],['Reservasi','/reservasi'],['Riwayat','/akun'],['Profil','/profil']],
    staff:[['Operasional','/resepsionis'],['Reservasi','/reservasi'],['Antrean','/resepsionis#antrean'],['Profil','/profil']],
    capster:[['Jadwal','/capster'],['Profil','/profil']],
    manager:[['Ringkasan','/manajemen'],['Pengaturan','/manajemen#pengaturan'],['Profil','/profil']]
  }[account.role] || []) : [['Beranda','/'],['Layanan','/#layanan'],['Cara reservasi','/#cara-reservasi']];
  const header=document.createElement('div'); header.className='sh-app-nav';
  const brand=document.createElement('a'); brand.className='sh-app-brand'; brand.href=account?accountTarget(account):'/'; brand.textContent='Shaga Salon'; header.append(brand);
  const nav=document.createElement('nav'); nav.className='sh-app-links'; nav.setAttribute('aria-label','Navigasi utama');
  for(const [label,href] of links){const a=document.createElement('a');a.textContent=label;a.href=href;nav.append(a)}
  header.append(nav);
  if(account){const button=document.createElement('button');button.className='sh-app-account';button.textContent='Keluar';button.type='button';button.addEventListener('click',async()=>{button.disabled=true;try{await onLogout();location.assign('/')}catch{button.disabled=false;alert('Belum berhasil keluar. Coba lagi.')}});header.append(button)}
  else {const a=document.createElement('a');a.className='sh-app-account';a.href='/login';a.textContent='Masuk';header.append(a)}
  const toggle=document.createElement('button');toggle.className='sh-app-toggle';toggle.type='button';toggle.textContent='Menu ☰';toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Buka menu navigasi');header.append(toggle);
  toggle.addEventListener('click',()=>{const open=header.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open))});
  header.addEventListener('keydown',e=>{if(e.key==='Escape'){header.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.focus()}});
  host.replaceChildren(header);
}
