const Routine = Vue.component('Routine', {
  data: function () {
    return {
  		title: 'Organizer Duck - Routine',
      isConclused: false
    }
  },
  methods: {
    editItem(item) {
      confirm(`Do you would like to edit "${item}" item?`)
    }
  },
  mounted() {
		document.title = this.title 
    feather.replace()
  },
  template: `
    <div class="view">
      <h2 class="view-logo">Daily routine - Today (Tuesday)</h2>
      <div class="routine-nav">
        <router-link to="/routine">Today</router-link>
        <router-link to="/routine/days">All days</router-link>
      </div>
      <section class="items-routine">
        <div class="item-routine">
          <router-link to="/edit/routineday/tuesday" class="routine-day left"><icon class="icon" data-feather="edit"></icon></router-link>
          <p class="item-text">06:00 - Wake up</p>
          <input type="checkbox" checked="true" />
        </div>
        <div class="item-routine">
          <router-link to="/edit/routineday/tuesday" class="routine-day left"><icon class="icon" data-feather="edit"></icon></router-link>
          <p class="item-text">07:00 - Reserve a time to meditate and work on personal projects</p>
          <input type="checkbox" />
        </div>
      </section>
    </div>
  `
})

export default Routine