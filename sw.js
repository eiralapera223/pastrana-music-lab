// Service worker: guarda los archivos de la app para que abra rápido y funcione la "instalación".
// Subí la versión (v1 -> v2) cada vez que publiques cambios.
const CACHE = 'pml-v1';
const FILES = ['./','index.html','pastrana-music-lab.css','pastrana-music-lab.js','firebase-config.js','foto-productor.jpg','foto-estudio.jpg','manifest.json','icons/icon-192.png','icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return; // Firebase y fuentes van directo a la red
  // Red primero (siempre ves la última versión), caché si no hay internet
  e.respondWith(
    fetch(e.request).then(r => {
      const copy = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return r;
    }).catch(() => caches.match(e.request).then(m => m || caches.match('index.html')))
  );
});
