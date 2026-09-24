const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(toggle){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open);});}
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav?.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));
const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('.nav a[href^="#"]')];
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+entry.target.id))}})},{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>observer.observe(s));
