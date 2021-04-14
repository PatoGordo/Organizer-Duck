import db from '../storage.js'
import '../Components/AddButton.vue.js'
import '../Components/ModalEdit.vue.js'

const Edit = Vue.component('Edit', {
  data: function () {
    return {
  		title: "Edit",
      tasks: []
    }
  },
  methods: {
    changeState() {
      document.querySelector('.modal').classList.toggle('none')
    }
  },
	created(){
		document.title = this.title
	},
  mounted() {
    feather.replace()
  },
  template: `
    <div class="view">
      <!--<h2>{{$route.params.whatedit}}/{{$route.params.id}}</h2>-->
      <section class="edit-routine-day" :style="$route.params.whatedit == 'routineday'? 'display: flex' : 'display: none'">
        <h2 class="view-logo">Editing {{$route.params.id}} routine</h2>
        <div class="routine-nav">
          <router-link to="/routine">Today</router-link>
          <router-link to="/routine/days">All days</router-link>
        </div>
      </section>

      <b @click="changeState()"><app-add-button class="float" /></b>
      <app-modal-edit class="none" :title="$route.params.id" />
    </div>
  `
})

export default Edit