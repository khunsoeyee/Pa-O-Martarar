const CACHE_NAME = 'book-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './page1.jpg',
  './page2.jpg',
  './page3.jpg',
  './page4.jpg',
  './page5.jpg',
  './page6.jpg',
  './page7.jpg',
  './page8.jpg',
  './page9.jpg',
  './page10.jpg',
  './page11.jpg',
  './page12.jpg'
];

// Install Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch Assets
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
