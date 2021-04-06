import Home from './Views/Home.vue.js'
import Page404 from './Views/404.vue.js'

const routes = [
	//set your routes here
  { path: '/', component: Home },
	
  { path: '*', component: Page404 }
]

const router = new VueRouter({
  routes
})

export default router