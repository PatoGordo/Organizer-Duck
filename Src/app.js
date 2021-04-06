import router from './router.js'
import './Components/BottomBar.vue.js'

const app = new Vue({
  router,
	el: "#app",
  mounted() {
    feather.replace()
  },
	template: `
		<div id="app">
      <router-view></router-view>
      <app-bottom-bar></app-bottom-bar>
		</div>
	`
}).$mount("#app")