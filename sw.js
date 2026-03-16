const cacheName = 'pao-martarar-v1';
const assets = [
  './',
  './index.html',
  './page1.jpg',
  './page2.jpg'
  './page3.jpg'
  './page4.jpg'
  './page5.jpg'
  './page6.jpg'
  './page7.jpg'
  './page8.jpg'
  './page9.jpg'
  './page10.jpg'
  './page11.jpg'
  './page12.jpg'
  './page13.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
