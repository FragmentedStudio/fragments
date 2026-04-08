const CACHE_NAME = "fragments-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/links/comics.html",
  "/links/conceptart.html",
  "/links/team.html"
];

// instalar
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// responder con cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
