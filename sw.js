// PSMOBILITY PWA v3.1: NEVER cache customer data or the application HTML.
// HTML navigation is always network-only. Only non-sensitive icons are cached.
const CACHE='psmobility-icons-v3.1';
const ICONS=['./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ICONS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('psmobility-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
 const request=event.request;
 if(request.method!=='GET')return;
 const url=new URL(request.url);
 if(url.origin!==self.location.origin)return;
 if(request.mode==='navigate'){
   event.respondWith(fetch(request,{cache:'no-store'})); // No cached auth UI/HTML fallback.
   return;
 }
 if(ICONS.some(p=>new URL(p,self.registration.scope).href===url.href)){
   event.respondWith(caches.match(request).then(c=>c||fetch(request)));
 }
});
