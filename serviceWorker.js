const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/index.html",
  "/js/app.js",
  "/src/aframe.min.js",
  "/src/aframe-ar.js",
  "/src/gesture-detector.js",
  "/src/gesture-handler.js",
  "/assets/asset.mp4",
  "/assets/marker.patt",
  "/icon-144x144.png",
  "/icon-192x192.png",
  "/icon-256x256.png",
  "/icon-384x384.png",
  "/icon-512x512.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
