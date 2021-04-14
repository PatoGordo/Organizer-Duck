const Todo = Vue.component('Todo', {
  data: function () {
    return {
  		title: "Todo",
      new_todo: '',
      todos: [],
      maxlength_: 36
    }
  },
  methods: {
    addTodo() {
      if(this.new_todo != '' ) {
        this.todos.push({ todo: this.new_todo, conclused: false })
        this.new_todo = ''
      }
    },
    deleteTodo(index) {
      this.todos.splice(index, 1)
    },
    completeTodo(index) {
      this.todos[index].conclused = !this.todos[index].conclused
    }
  },
	created(){
		document.title = this.title
    if (localStorage.getItem('TODOS')) this.todos = JSON.parse(localStorage.getItem('TODOS'))
	},
  mounted() {
    feather.replace()
  },
  watch: {
    todos: {
      handler() {
        localStorage.setItem('TODOS', JSON.stringify(this.todos))
      },
      deep: true
    }
  },
  template: `
    <div class="view">
      <h2 class="view-logo">To Do</h2>
      <section class="todos">
        <h3 v-if="todos.length == 0">You not have Todo's!</h3>
        <div class="todo":class="item.conclused?'conclused':''" v-for="(item, index) in todos" :id="index" @click="completeTodo(index)">
          <p class="todo-text">{{item.todo}}</p>
          <button class="todo-delete-button" @click="deleteTodo(index)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 icon red"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button>
        </div>
      </section>

      <section class="add-todo-content">
        <label class="add-todo">
          <input class="add-todo-input" placeholder="Your task..." v-model="new_todo" @keydown.enter="addTodo()" />
          <button class="add-todo-button" @click="addTodo()"><icon class="add-icon" data-feather="plus"></icon></button>
        </label>
        <!-- <small>{{maxlength_ - new_todo.length}} characters remain</small> -->
      </section>
    </div>
  `
})

export default Todo