import Home from './Views/Home.vue.js'
import Routine from './Views/Routine.vue.js'
import RoutineDays from './Views/Routine-Days.vue.js'
import Edit from './Views/Edit.vue.js'
import Page404 from './Views/404.vue.js'

const routes = [
	//set your routes here
  { path: '/', component: Home },
  { path: '/routine', component: Routine },
  { path: '/edit/:whatedit/:id', component: Edit },
  { path: '/routine/days', component: RoutineDays },
	
  { path: '*', component: Page404 }
]

const router = new VueRouter({
  routes
})

export default router