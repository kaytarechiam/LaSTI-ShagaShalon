const menuButton = document.querySelector('.sh-menu-button');
const menu = document.querySelector('#sh-mobile-menu');
function setMenu(open) {
  menu.hidden = !open;
  menuButton.setAttribute('aria-expanded', String(open));
}
menuButton.addEventListener('click', () => setMenu(menu.hidden));
menu.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !menu.hidden) { setMenu(false); menuButton.focus(); }
});
const video = document.querySelector('.fda-blog-hero video');
const videoButton = document.querySelector('.fda-blog-hero [data-w-bg-video-control]');
function updateVideoButton() {
  videoButton.setAttribute('aria-label', video.paused ? 'Putar video' : 'Jeda video');
  videoButton.querySelectorAll('span')[0].hidden = video.paused;
  videoButton.querySelectorAll('span')[1].hidden = !video.paused;
}
videoButton.addEventListener('click', async () => {
  if (video.paused) { try { await video.play(); } catch { /* Browser may block playback. */ } }
  else video.pause();
  updateVideoButton();
});
video.addEventListener('play', updateVideoButton);
video.addEventListener('pause', updateVideoButton);
if (matchMedia('(prefers-reduced-motion: reduce)').matches) video.pause();
updateVideoButton();

fetch('/api/session', { cache: 'no-store' }).then(response => response.ok ? response.json() : null).then(data => {
  if (!data?.account) return;
  const homes = { staff: '/resepsionis', capster: '/capster', manager: '/manajemen' };
  for (const link of document.querySelectorAll('[data-account-link]')) {
    link.href = homes[data.account.role] || '/beranda';
    link.textContent = homes[data.account.role] ? 'Dashboard' : 'Akun saya';
  }
}).catch(() => {});
