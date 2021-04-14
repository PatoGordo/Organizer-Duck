Vue.component('app-modal-edit', {
  props: ['title'],
	data: {
    
	},
  methods: {
    closeModal() {
      document.querySelector('.modal').classList.toggle('none')
    }
  },
  created() {
    
    window.onclick = function(e) {
      if (e.target == document.querySelector('.modal')) {
        document.querySelector('.modal').classList.toggle('none')
      }
    }
  },
  mounted() {
  },
	template: `
		<div class="modal">
      <section class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">Add task on {{title}}</h2>
          <button class="close-modal" @click="closeModal()"><icon class="item-icon" data-feather="x"></icon></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="alert('all right!!')" class="animated">
            <div class="input-field">
              <input type="time" id="time" required />
              <label for="time">Task time</label>
            </div>
            
            <div class="input-field">
              <input type="text" id="name" required />
              <label for="name">Task name</label>
            </div>

            <button type="submit">Add to routine</button>
          </form>
        </div>
      </section>
    </div>
	`
})