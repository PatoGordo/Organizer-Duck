Vue.component('app-bottom-bar', {
	data: {
    
	},
  mounted() {
  },
	template: `
		<nav class="bottom-bar">
      <router-link to="/" class="bottombar-item"><icon class="bottombar-icon" data-feather="home"></icon><small>Home</small></router-link>
      <router-link to="/settings" class="bottombar-item"><icon class="bottombar-icon" data-feather="settings"></icon><small>Settings</small></router-link>
		</nav>
	`
})