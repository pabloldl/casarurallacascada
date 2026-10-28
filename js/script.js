'use strict';
document.querySelector('#year').textContent = new Date().getFullYear();
const menu = document.querySelector('#menu'), nav = document.querySelector('#nav');
menu.hidden = false;
nav.classList.add('collapsed');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('collapsed', !open); });
nav.addEventListener('click', e => { if(e.target.closest('a')) { nav.classList.add('collapsed'); menu.setAttribute('aria-expanded','false'); } });
const photos = [...document.querySelectorAll('[data-gallery]')], dialog = document.querySelector('.lightbox');
let index = 0, opener;
function displayPhoto(next) { index = (next + photos.length) % photos.length; const photo = photos[index], image = dialog.querySelector('img'); image.src = photo.href; image.alt = photo.querySelector('img')?.alt || photo.dataset.caption; dialog.querySelector('figcaption').textContent = photo.dataset.caption; dialog.querySelector('.position').textContent = `${index + 1} / ${photos.length}`; }
function openPhoto(next, trigger) { opener = trigger; displayPhoto(next); dialog.showModal(); document.body.classList.add('modal-open'); dialog.querySelector('.close').focus(); }
if(typeof dialog.showModal === 'function') { photos.forEach((photo,i) => photo.addEventListener('click',e => { e.preventDefault(); openPhoto(i,photo); })); const all = document.querySelector('#all-photos'); all.hidden = false; all.addEventListener('click',()=>openPhoto(0,all)); }
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.querySelector('.prev').addEventListener('click',()=>displayPhoto(index-1));
dialog.querySelector('.next').addEventListener('click',()=>displayPhoto(index+1));
dialog.addEventListener('keydown',e=>{ if(e.key==='Escape'){e.preventDefault();dialog.close();return;} if(e.key==='ArrowRight'||e.key==='ArrowLeft'){ e.preventDefault(); displayPhoto(index+(e.key==='ArrowRight'?1:-1)); } });
dialog.addEventListener('click',e=>{ if(e.target===dialog) dialog.close(); });
dialog.addEventListener('close',()=>{ document.body.classList.remove('modal-open'); opener?.focus(); });
let touchStart;
dialog.addEventListener('touchstart',e=>{touchStart=e.changedTouches[0].clientX;},{passive:true});
dialog.addEventListener('touchend',e=>{ if(touchStart==null)return; const distance=e.changedTouches[0].clientX-touchStart; if(Math.abs(distance)>55)displayPhoto(index+(distance<0?1:-1));touchStart=null; },{passive:true});
if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) { const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove('pending');observer.unobserve(entry.target);}}),{threshold:.1}); document.querySelectorAll('.reveal').forEach(el=>{el.classList.add('pending');observer.observe(el);}); }

