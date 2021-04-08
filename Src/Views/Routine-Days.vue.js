const RoutineDays = Vue.component('RoutineDays', {
  data: function () {
    return {
  		title: 'Organizer Duck - Routine'
    }
  },
  methods: {
    editDayRoutine(dayRoutine) {
      confirm(`Do you would like to edit "${dayRoutine}" routine schedule?`)
    }
  },
  mounted() {
		document.title = this.title 
    feather.replace()
  },
  template: `
    <div class="view">
      <h2 class="view-logo">Daily routine</h2>
      <div class="routine-nav">
        <router-link to="/routine">Today</router-link>
        <router-link to="/routine/days">All days</router-link>
      </div>
      <section class="items-routine">
        <div class="item-routine">
          <p class="item-text">Sunday</p>
          <router-link to="/edit/routineday/sunday" class="routine-day"><icon class="icon" data-feather="edit"></icon></router-link>
        </div>
        <div class="item-routine">
          <p class="item-text">Monday</p>
          <router-link to="/edit/routineday/monday" class="routine-day"><icon class="icon" data-feather="edit"></icon></router-link>
        </div>
        <div class="item-routine">
          <p class="item-text">Tuesday</p>
          <router-link to="/edit/routineday/tuesday" class="routine-day"><icon class="icon" data-feather="edit"></icon></router-link>
        </div>
        <div class="item-routine">
          <p class="item-text">Wednesday</p>
          <router-link to="/edit/routineday/wednesday" class="routine-day"><icon class="icon" data-feather="edit"></icon></router-link>
        </div>
        <div class="item-routine">
          <p class="item-text">Thursday</p>
          <router-link to="/edit/routineday/thursday" class="routine-day"><icon class="icon" data-feather="edit"></icon></router-link>
        </div>
        <div class="item-routine">
          <p class="item-text">Friday</p>
          <router-link to="/edit/routineday/friday" class="routine-day"><icon class="icon" data-feather="edit"></icon></router-link>
        </div>
        <div class="item-routine">
          <p class="item-text">Saturday</p>
          <router-link to="/edit/routineday/saturday" class="routine-day"><icon class="icon" data-feather="edit"></icon></router-link>
        </div>
      </section>
    </div>
  `
})

export default RoutineDays