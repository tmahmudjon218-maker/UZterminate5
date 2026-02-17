/**
 * sw.js — Service Worker for Taomlar Retsepti PWA
 * Strategy: Cache First for static assets, Network First for images
 */

const CACHE_NAME = 'taomlar-v1.2';

// Files to pre-cache on install
const STATIC_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './data.js',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap',
];

// ── INSTALL ──────────────────────────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// ── ACTIVATE ─────────────────────────────────────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH ────────────────────────────────────────────────────────
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // For Unsplash images: network-first, fallback to cache
  if (url.hostname.includes('unsplash') || url.hostname.includes('images')) {
    event.respondWith(networkFirst(event.request));
    return;
  }

  // For Google Fonts: stale-while-revalidate
  if (url.hostname.includes('fonts')) {
    event.respondWith(staleWhileRevalidate(event.request));
    return;
  }

  // Static assets: cache-first
  event.respondWith(cacheFirst(event.request));
});

// ── STRATEGIES ───────────────────────────────────────────────────

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('<h1>Offline</h1>', {
      headers: { 'Content-Type': 'text/html' },
    });
  }
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    return cached || new Response('', { status: 503 });
  }
}

async function staleWhileRevalidate(request) {
  const cached = await caches.match(request);
  const fetchPromise = fetch(request).then((response) => {
    if (response.ok) {
      caches.open(CACHE_NAME).then((cache) => cache.put(request, response.clone()));
    }
    return response;
  }).catch(() => cached);

  return cached || fetchPromise;
}
