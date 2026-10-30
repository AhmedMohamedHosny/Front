/**
 * CodeMasr — Offline-First Service Worker (PWA)
 * Engineered by Eng. Ahmed M Hosny
 */

const CACHE_NAME = 'codemasr-offline-v3';

const CORE_ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './CM.png',
  'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min/vs/loader.min.js',
  'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap'
];

// 1. تثبيت الـ Service Worker وتخزين ملفات الموقع الأساسية للعمل أوفلاين
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      for (const asset of CORE_ASSETS) {
        try {
          await cache.add(asset);
        } catch (err) {
          console.warn('Cache skip notice:', asset);
        }
      }
    })
  );
});

// 2. تفعيل النسخة الجديدة ومسح أي كاش قديم
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    ).then(() => self.clients.claim())
  );
});

// 3. استراتيجية العمل أوفلاين: جلب الملفات من الكاش فوراً مع تحديثها في الخلفية عند توفر الإنترنت
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const reqUrl = new URL(event.request.url);
  if (reqUrl.protocol !== 'http:' && reqUrl.protocol !== 'https:') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const networkFetch = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // في حالة انقطاع الإنترنت بالكامل، إرجاع الصفحة الرئيسية لأي تنقل
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
          return cachedResponse;
        });

      return cachedResponse || networkFetch;
    })
  );
});