// Increment the cache name to bust the old cache whenever we deploy a new version of the app.
// Increment the cache name to bust the old cache whenever we deploy a new version of the app.
const CACHE_NAME = 'kolleden-selector-cache-v5';
// List all of the assets that should be cached for offline use. When updating
// the app or adding new assets (like images), be sure to include them here so
// the service worker will cache them on install.
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/wish.html',
  '/huts.html',
  '/done.html',
  '/styles.css',
  '/app.js',
  '/manifest.webmanifest',
  // Images for the huts; adding these ensures they are available offline.
  '/bezbog.jpeg',
  '/malyovitsa.jpeg',
  '/rilski-ezera.jpeg',
  '/rai.jpeg',
  '/pleven.jpeg'
  , '/background-pattern.jpeg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
