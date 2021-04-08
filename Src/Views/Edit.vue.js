const Edit = Vue.component('Edit', {
  data: function () {
    return {
  		title: "Edit"
    }
  },
	created(){
		document.title = this.title 
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
    </div>
  `
})

export default Edit