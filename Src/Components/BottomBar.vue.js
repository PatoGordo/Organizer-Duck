Vue.component('app-bottom-bar', {
	data: {
    
	},
  mounted() {
  },
	template: `
		<nav class="bottom-bar">
      <item><icon class="icon" data-feather="home"></icon><small>home</small></item>
      <item class="float-bottom-btn"><icon class="icon " data-feather="plus"></icon></item>
      <item><icon class="icon" data-feather="bookmark"></icon><small>bookmark</small></item>
		</nav>
	`
})