const app = new Vue({
	el: "#app",
	data: {
    hello: 'Welcome to vue pwa'
	},
	template: `
		<div id="app">
			<h2>{{hello}}</h2>
      <p>This is a simple pwa made using Vue CDN.</p>
      <img src="./Images/vue.png">
      <br>
      <a href="https://github.com/PatoGordo/VuePwaTemplate" target="_blank" noopener class="github-button"><img src="./Images/logo-github.svg" class="icon"> Open project on github</a>

      <footer>Made with ❤️ by <a href="https://github.com/PatoGordo/" target="_blank" noopener>PatoGordo</a></footer>
		</div>
	`
}).$mount("#app")