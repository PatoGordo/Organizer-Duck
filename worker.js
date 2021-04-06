self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('vue-pwa-cache-v1')
    .then(cache => {
      // files to cache
      return cache.addAll([
        // Files and CDN's
        '/',
        'index.html',
        'Dist/vue.js',

        // Scripts & Styles
        'Src/Styles/style.css',
        'Src/app.js',

        //Images
        'Images/vue.png',
        'Images/logo-github.svg',
        'Images/android-launchericon-512-512.png',
        'Images/android-launchericon-192-192.png',
        'Images/android-launchericon-144-144.png',
        'Images/android-launchericon-96-96.png',
        'Images/android-launchericon-72-72.png',
        'Images/android-launchericon-48-48.png'
      ])
    })
  )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request)
    })
  )
})