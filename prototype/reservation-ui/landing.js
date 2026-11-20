import { accountTarget, syncAccountButton } from './shared-nav.js';

let account=null;
function syncExistingNav() {
  for (const header of document.querySelectorAll('[data-framer-name="Header Compact"]')) {
    syncAccountButton(header,account);
    for (const link of header.querySelectorAll('[data-framer-name="Panel"] a[name]')) {
      if (['Concerns','Results','Practitioners','Journal','Membership'].includes(link.getAttribute('name'))) link.style.display='none';
    }
  }
}
async function syncAccount() {
  try {
    const response=await fetch('/api/session',{cache:'no-store'});
    if (response.ok) account=(await response.json()).account;
  } catch {}
  syncExistingNav();
}
const detailId=()=>location.pathname.match(/(?:\/treatments\/|\/treatments_)([a-z0-9-]+?)(?:\.html)?\/?$/)?.[1];
let catalog=new Map();
const rupiah=new Intl.NumberFormat('id-ID');
function syncCatalog() {
  for (const card of document.querySelectorAll('a[href*="/treatments/"],a[href*="treatments_"],a[href^="treatments/"]')) {
    const id=new URL(card.href).pathname.match(/(?:\/treatments\/|\/treatments_)([a-z0-9-]+?)(?:\.html)?\/?$/)?.[1];
    const service=catalog.get(id);
    if (!service) continue;
    for (const label of card.querySelectorAll('[data-framer-name="Price"] p')) {
      if (!/^(?:(?:Mulai )?Rp|Sedang tidak tersedia)/i.test(label.textContent.trim())) continue;
      const value=service.active===false?'Sedang tidak tersedia':'Mulai Rp'+rupiah.format(service.price);
      if (label.textContent!==value) label.textContent=value;
    }
  }
}
async function loadCatalog() {
  try {
    const response=await fetch('/api/public-catalog',{cache:'no-store'});
    if (!response.ok) return;
    catalog=new Map((await response.json()).services.map(service=>[service.id,service]));
    syncCatalog();
  } catch {}
}
function bookingUrl() {
  const id=detailId();
  return id?'/reservasi?'+new URLSearchParams({layanan:id}):'/reservasi';
}
function isLegacy(link) {
  const url=new URL(link.href,location.href);
  return url.origin===location.origin &&
    (/^\/(visit(?:\.html)?|subpages\/visit\.html)\/?$/.test(url.pathname) || ['#visit','#book'].includes(url.hash) ||
    ((url.pathname==='/' || url.pathname.endsWith('/index.html')) && /reservasi|book|layanan ini/i.test(link.textContent)));
}
function connectForms() {
  for (const form of document.querySelectorAll('form[data-framer-name="Consultation request"]')) {
    form.classList.add('shaga-booking-entry');
    form.noValidate=true;
    for (const button of form.querySelectorAll('button[type="submit"]')) {
      const label=button.querySelector('[data-framer-name="Label"] p') || button.querySelector('p');
      if (label && label.textContent!=='Pilih layanan dan jadwal') label.textContent='Pilih layanan dan jadwal';
    }
  }
  for (const link of document.querySelectorAll('a[href*="#"],a[href*="visit"],a[href$="index.html"]')) {
    if (link.matches('a[name="CTA Button"]') && link.closest('[data-framer-name="Header Compact"]')) continue;
    if (!isLegacy(link)) continue;
    link.dataset.shagaBooking='true';
    link.href=bookingUrl();
  }
}
document.addEventListener('click',event=>{
  const submit=event.target instanceof Element && event.target.closest('button[type="submit"]');
  if (submit?.form?.matches('form[data-framer-name="Consultation request"]')) {
    event.preventDefault();
    event.stopImmediatePropagation();
    location.assign(bookingUrl());
    return;
  }
  const link=event.target instanceof Element && event.target.closest('a[href]');
  if (!link || event.button!==0) return;
  const target=link.closest('[data-framer-name="Header Compact"]') && link.matches('a[name="CTA Button"]')
    ? accountTarget(account) : bookingUrl();
  const accountButton=link.closest('[data-framer-name="Header Compact"]') && link.matches('a[name="CTA Button"]');
  if (!accountButton && !link.dataset.shagaBooking && !isLegacy(link)) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  if (event.ctrlKey || event.metaKey || event.shiftKey) window.open(target,'_blank','noopener');
  else location.assign(target);
},true);
document.addEventListener('submit',event=>{
  if (!event.target.matches('form[data-framer-name="Consultation request"]')) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  location.assign(bookingUrl());
},true);
new MutationObserver(()=>{connectForms(); syncExistingNav(); if (catalog.size) syncCatalog();}).observe(document.body,{subtree:true,childList:true,characterData:true});
connectForms();
syncExistingNav();
syncAccount();
loadCatalog();
addEventListener('pageshow',event=>{ if (event.persisted) { syncAccount(); loadCatalog(); } });
