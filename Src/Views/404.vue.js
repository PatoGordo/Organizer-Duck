const Home = Vue.component('Home', {
  data: function () {
    return {
  		title: "Page not found"
    }
  },
	created(){
		document.title = this.title 
	},
  template: `
    <div class="view">
      <h2>404 - Page not found</h2>
      <router-link to="/">return to home</router-link>
    </div>
  `
})

export default Home