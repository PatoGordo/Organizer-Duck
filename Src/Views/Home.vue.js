const Home = Vue.component('Home', {
  data: function () {
    return {
  		title: 'Organizer Duck - Home'
    }
  },
  mounted() {
		document.title = this.title 
    feather.replace()
  },
  template: `
    <div class="view">
      <h2 class="home-logo">Organizer 🦆</h2>
      <section class="items">
        <router-link to="/routine" class="item">
          <h3>Routine</h3>
          <icon class="item-icon" data-feather="clock"></icon>
        </router-link>
        <router-link to="/todo" class="item">
          <h3>To do</h3>
          <icon class="item-icon" data-feather="list"></icon>
        </router-link>
        <router-link to="/meditation" class="item">
          <h3>Meditation</h3>
          <icon class="item-icon" data-feather="smile"></icon>
        </router-link>
        <router-link to="/decorate" class="item">
          <h3>To Decorate</h3>
          <icon class="item-icon" data-feather="upload-cloud"></icon>
        </router-link>
        <router-link to="/calendar" class="item">
          <h3>Calendar</h3>
          <icon class="item-icon" data-feather="calendar"></icon>
        </router-link>
        <router-link to="/notes" class="item">
          <h3>Notes</h3>
          <icon class="item-icon" data-feather="edit-3"></icon>
        </router-link>
      </section>
    </div>
  `
})

export default Home