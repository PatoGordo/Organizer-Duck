const Home = Vue.component('Home', {
  data: function () {
    return {
  		title: 'Organizer Duck - Home'
    }
  },
	created(){
		document.title = this.title 
	},
  template: `
    <div class="view">
      <h2>Home</h2>
      <p>This is only a cache test</p>
      <p>check if all icons and routes works</p>
      <router-link to="/404">404</router-link>
    </div>
  `
})

export default Home