// Reuse the actual landing header while isolating Webflow styles from the app.
export async function mountLandingNav(host) {
  const [pageResponse, cssResponse, fontResponse, adjustmentResponse] = await Promise.all([
    fetch('/'),
    fetch('/landing-webflow/styles/ixolyn.webflow.shared.a886d9345.css'),
    fetch('/landing-webflow/styles/css-a97773.css'),
    fetch('/landing-webflow/shaga-adjustments.css'),
  ]);
  if (![pageResponse, cssResponse, fontResponse, adjustmentResponse].every(r => r.ok)) throw new Error('Aset navigasi tidak tersedia');
  const doc = new DOMParser().parseFromString(await pageResponse.text(), 'text/html');
  const nav = doc.querySelector('.fda-navbar');
  if (!nav) throw new Error('Navigasi landing tidak ditemukan');
  for (const a of nav.querySelectorAll('a[href^="#"]')) a.setAttribute('href', '/' + a.getAttribute('href'));
  for (const a of nav.querySelectorAll('[aria-current]')) { a.removeAttribute('aria-current'); a.classList.remove('w--current'); }
  const css = await cssResponse.text();
  const hostCSS = css.replace(/(^|[},\s])(?:body|:root)(?=[\s{,.#:[>])/g, '$1:host')
    .replaceAll('url("../assets/', 'url("/landing-webflow/assets/');
  const fontCSS = (await fontResponse.text()).replaceAll('url("../assets/', 'url("/landing-webflow/assets/');
  const shadow = host.shadowRoot || host.attachShadow({ mode: 'open' });
  const style = document.createElement('style');
  style.textContent = hostCSS + '\n' + fontCSS + '\n' + await adjustmentResponse.text() + `
    :host{display:block;height:75px!important;min-height:0!important;background:transparent!important;--_typography---font-family--body-font:ShagaLandingInter,sans-serif}
    .fda-navbar-main{background:#aa7d5c}
    .fda-nav-dropdown-v1.is-open .fda-nav-dropdown-list-v1,
    .fda-nav-dropdown-v2.is-open .fda-nav-dropdown-v2-list{display:block}
    @media(max-width:991px){
      .fda-navbar-main{background:#f1f2ee;border-bottom:1px solid #ddd8d0}
      .fda-navbar-v1-wrapper{border-radius:0}
      .fda-navbar-v1-menu-wrap.is-open{display:block!important;position:absolute;top:100%;left:0;right:0;background:#f6f5f0;max-height:calc(100vh - 76px);overflow:auto}
    }
  `;
  shadow.replaceChildren(style, nav);
  const menuButton = shadow.querySelector('.fda-nav-responsove-button');
  const menu = shadow.querySelector('.fda-navbar-v1-menu-wrap');
  if (menuButton && menu) {
    menuButton.setAttribute('role', 'button'); menuButton.setAttribute('tabindex', '0');
    menuButton.setAttribute('aria-label', 'Menu navigasi'); menuButton.setAttribute('aria-expanded', 'false');
    const toggle = () => { const open = menu.classList.toggle('is-open'); menuButton.setAttribute('aria-expanded', String(open)); };
    menuButton.addEventListener('click', toggle);
    menuButton.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
    shadow.addEventListener('keydown', e => { if (e.key === 'Escape') { menu.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.focus(); } });
  }
  for (const dropdown of shadow.querySelectorAll('.w-dropdown')) {
    const trigger = dropdown.querySelector('.w-dropdown-toggle');
    if (!trigger) continue;
    const setOpen = open => { dropdown.classList.toggle('is-open', open); trigger.setAttribute('aria-expanded', String(open)); };
    trigger.setAttribute('role', 'button'); trigger.setAttribute('tabindex', '0'); trigger.setAttribute('aria-expanded', 'false');
    trigger.addEventListener('click', () => setOpen(!dropdown.classList.contains('is-open')));
    trigger.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(!dropdown.classList.contains('is-open')); } });
    dropdown.addEventListener('mouseenter', () => setOpen(true));
    dropdown.addEventListener('mouseleave', () => setOpen(false));
  }
}
