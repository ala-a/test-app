self.addEventListener("install", (e) => {
  e.waitUntil(caches.open("pc-v1").then((c) => c.addAll(["/", "/index.html", "/manifest.json", "/icons/icon-192.png", "/icons/icon-512.png"]))); 
});
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (url.origin === location.origin) {
    e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
  }
});
