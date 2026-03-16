const cacheName = 'pao-martarar-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './icon.png',
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
  './page12.jpg',
  './page13.jpg'
];

// Service Worker ကို Install လုပ်ပြီး File များကို Cache ထဲသိမ်းဆည်းခြင်း
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Caching all assets');
      return cache.addAll(assets);
    })
  );
});

// အင်တာနက်မရှိချိန်တွင် Cache ထဲမှ File များကို ပြန်ထုတ်ပေးခြင်း (Offline Mode)
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});

// Version အဟောင်းများကို ရှင်းထုတ်ခြင်း
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== cacheName).map(key => caches.delete(key))
      );
    })
  );
});
