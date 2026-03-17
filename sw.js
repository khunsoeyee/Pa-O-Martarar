const CACHE_NAME = 'pao-book-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './page1.jpg', './page2.jpg', './page3.jpg', './page4.jpg', './page5.jpg',
  './page6.jpg', './page7.jpg', './page8.jpg', './page9.jpg', './page10.jpg',
  './page11.jpg', './page12.jpg', './page13.jpg'
];

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch resources from Cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
