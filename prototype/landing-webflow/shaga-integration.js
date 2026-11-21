const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
function respectMotionPreference() {
  if (motionPreference.matches) document.querySelector('.fda-blog-hero video')?.pause();
}
respectMotionPreference();
motionPreference.addEventListener('change', respectMotionPreference);

fetch('/api/session', { cache: 'no-store' })
  .then(response => response.ok ? response.json() : null)
  .then(data => {
    if (!data?.account) return;
    const homes = { staff: '/resepsionis', capster: '/capster', manager: '/manajemen' };
    for (const link of document.querySelectorAll('[data-shaga-account]')) {
      link.href = homes[data.account.role] || '/beranda';
      for (const node of link.childNodes) {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() === 'Masuk') node.textContent = 'Akun';
      }
      const label = link.querySelector('.fda-nav-link-v3-text');
      if (label) label.textContent = 'Akun';
    }
  }).catch(() => {});
