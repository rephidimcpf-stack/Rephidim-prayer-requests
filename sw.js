/* Prayer request app - service worker.
   Its only job is to make the app installable on Android (a registered
   service worker with a fetch handler is required). It deliberately does
   NOT cache anything, so updates always show up immediately. */
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) { /* pass-through */ });
