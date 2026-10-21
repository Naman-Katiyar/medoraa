const CACHE = "medora-v7";
const FILES = [
  "./",
  "./index.html",
  "./prescription.html",
  "./kendras.html",
  "./about.html",
  "./css/style.css",
  "./js/common.js",
  "./js/i18n.js",
  "./js/home.js",
  "./js/prescription.js",
  "./js/about.js",
  "./js/kendras.js",
  "./data/drugs.json",
  "./data/kendras.json",
  "./manifest.json",
  "./icons/icon.svg"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((hit) => hit || fetch(e.request)));
});
