self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('vue-pwa-cache-v2')
    .then(cache => {
      // Files to cache
      return cache.addAll([
        // Files and CDN's
        '/',
        'index.html',
        'Dist/vue.js',
        'Dist/less.js',
        'Dist/vue-router.js',
        'Dist/fathericons.min.js',
        'Dist/feather.min.js.map',

        // Scripts & Styles
        'Src/Styles/styles.css',
        'Src/Styles/styles.min.less',
        'Src/router.js',
        'Src/app.js',

        // Views
        'Src/Views/Home.vue.js',
        'Src/Views/404.vue.js',

        // Components
        'Src/Components/BottomBar.vue.js',

        // Images
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