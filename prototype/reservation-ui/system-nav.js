const icons={home:'M3 10.5 12 3l9 7.5V21h-6v-7H9v7H3z',calendar:'M4 6h16v15H4z M8 3v6 M16 3v6 M4 10h16',history:'M4 4v5h5 M4.5 9a8 8 0 1 1-.2 5 M12 7v5l3 2',user:'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M5 21a7 7 0 0 1 14 0',queue:'M4 6h16 M4 12h16 M4 18h11',settings:'M12 3v2 M12 19v2 M3 12h2 M19 12h2 M5.6 5.6 7 7 M17 17l1.4 1.4 M18.4 5.6 17 7 M7 17l-1.4 1.4 M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',external:'M13 4h7v7 M20 4l-9 9 M18 13v6H5V6h6'};
const glyph=name=>`<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="${icons[name]}"/></svg>`;
export function mountSystemNav(host,account,onLogout) {
  const role=account.role, team=role!=='customer';
  const homes={customer:'/beranda',staff:'/resepsionis',capster:'/capster',manager:'/manajemen'};
  const menus={customer:[['Beranda','/beranda','home'],['Reservasi','/reservasi','calendar'],['Riwayat','/akun','history'],['Profil','/profil','user']],staff:[['Operasional','/resepsionis','home'],['Reservasi','/reservasi','calendar'],['Antrean','/resepsionis#antrean','queue'],['Profil','/profil','user']],capster:[['Jadwal','/capster','calendar'],['Profil','/profil','user']],manager:[['Ringkasan','/manajemen','home'],['Pengaturan','/manajemen#pengaturan','settings'],['Profil','/profil','user']]};
  const items=menus[role] || menus.customer;
  const active=href=>{const [p,hash]=href.split('#'); if(location.pathname!==p)return false; if(p==='/manajemen'||p==='/resepsionis')return hash?location.hash==='#'+hash:!location.hash; return true;};
  const links=()=>items.map(([label,href,icon])=>`<a href="${href}" class="system-link${active(href)?' is-active':''}"${active(href)?' aria-current="page"':''}>${glyph(icon)}<span>${label}</span></a>`).join('');
  document.body.classList.add('system-page',team?'system-team':'system-customer');
  host.setAttribute('aria-label','Navigasi sistem Shaga Salon');
  host.innerHTML=`<div class="system-shell"><a class="system-brand" href="${homes[role]}"><span>Shaga</span><small>${team?'SALON · TIM':'SALON'}</small></a><nav class="system-desktop" aria-label="Menu utama">${links()}</nav><div class="system-secondary"><a href="/" class="system-site">${glyph('external')}<span>Website salon</span></a><button type="button" class="system-logout">Keluar</button></div></div><nav class="system-mobile" aria-label="Menu utama">${links()}</nav>`;
  const logout=host.querySelector('.system-logout');
  logout.addEventListener('click',async()=>{logout.disabled=true;try{await onLogout();location.assign('/');}catch{logout.disabled=false;alert('Belum berhasil keluar. Coba lagi.');}});
  addEventListener('hashchange',()=>{for(const nav of host.querySelectorAll('.system-desktop,.system-mobile'))nav.innerHTML=links();});
  if (window.visualViewport) {
    const update=()=>document.body.classList.toggle('keyboard-open',innerWidth<=800 && innerHeight-window.visualViewport.height>160);
    window.visualViewport.addEventListener('resize',update); update();
  }
}
