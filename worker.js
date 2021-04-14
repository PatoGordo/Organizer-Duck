// self.addEventListener('install', event => {
//   event.waitUntil(
//     caches.open('organizer-duck-cache-v1')
//     .then(cache => {
//       // Files to cache
//       return cache.addAll([
//         // Files and CDN's
//         '/',
//         'index.html',

//          // Lib
//         'Lib/dexie.min.js',
//         'Lib/feather.min.js.map',
//         'Lib/feathericons.min.js',
//         'Lib/less.js',
//         'Lib/vue-router.js',
//         'Lib/vue.js',

//         // Scripts & Styles
//         'Src/Styles/styles.less',
//         'Src/Styles/presets.less',

//         'Src/Styles/Components/AddButton.less',
//         'Src/Styles/Components/BottomBar.less',
//         'Src/Styles/Components/Forms.less',
//         'Src/Styles/Components/ModalEdit.less',

//         'Src/Styles/Views/Edit.less',
//         'Src/Styles/Views/Home.less',
//         'Src/Styles/Views/Routine.less',
//         'Src/Styles/Views/Todo.less',

//         'Src/Styles/Themes/dark.less',
//         'Src/Styles/Themes/light.less',

//         'Src/Styles/AppFramework/background.less',
//         'Src/Styles/AppFramework/colors.less',
//         'Src/Styles/AppFramework/cursors.less',
//         'Src/Styles/AppFramework/displays.less',
//         'Src/Styles/AppFramework/positions.less',
//         'Src/Styles/AppFramework/tests.less',
//         'Src/Styles/AppFramework/transitions.less',


//         'Src/Styles/styles.min.css',

//         'Src/app.js',
//         'Src/router.js',
//         'Src/storage.js',

//         // Views
//         'Src/Views/404.vue.js',
//         'Src/Views/Edit.vue.js',
//         'Src/Views/Home.vue.js',
//         'Src/Views/Routine-Days.vue.js',
//         'Src/Views/Routine.vue.js',
//         'Src/Views/Todo.vue.js',

//         // Components
//         'Src/Components/AddButton.vue.js',
//         'Src/Components/BottomBar.vue.js',
//         'Src/Components/ModalEdit.vue.js',

//         // Images
//         'Images/vue.png',
//         'Images/logo-github.svg',
//         'Images/android-launchericon-512-512.png',
//         'Images/android-launchericon-192-192.png',
//         'Images/android-launchericon-144-144.png',
//         'Images/android-launchericon-96-96.png',
//         'Images/android-launchericon-72-72.png',
//         'Images/android-launchericon-48-48.png'
//       ])
//     })
//   )
// })

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request).then(function(response) {
//       return response || fetch(event.request)
//     })
//   )
// })