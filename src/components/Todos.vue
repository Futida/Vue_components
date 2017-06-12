<template>
  <section class="todoapp">
    <header class="header">
      <h1>Todos</h1>
      <input type="text" class="new-todo" placeholder="Add task" v-model="newTodo">
      <button class="add" @click="addTodo">Add task</button>
    </header>
    <div class="main">
      <input type="checkbox" class="toggle-all" v-model="allDone">

      <ul class="todo-list">
        <li class="todo" v-for="todo in filterTodos" :class="{completed: todo.complete}">
          <div class="view">
            <input type="checkbox" v-model="todo.complete" class="toggle">
            <label @dblclick="editTodo(todo)">{{ todo.name }}</label>
            <button class="destroy" @click="deleteTodo(todo)"></button>
          </div>
        </li>
      </ul>
    </div>
    <footer class="footer" v-show="todos.length > 0">
      <span class="todo-count">
          {{ rm }} task(-s) remain
      </span>
      <ul class="filters">
        <li><a href="#" :class="{selected: filter === 'all'}" @click="filter ='all'">All</a></li>
        <li><a href="#" :class="{selected: filter === 'todo'}" @click="filter ='todo'">In process</a></li>
        <li><a href="#" :class="{selected: filter === 'done'}" @click="filter ='done'">Completed</a></li>
      </ul>
      <button class="clear-completed" v-show="complete" @click="deleteComplete">Delete complete</button>
    </footer>
  </section>
</template>

<script>
  export default{

    data(){
      return {

        todos: [
          { name: "Purchase", complete: false }
        ],
        newTodo: '',
        editing: null,
        filter: 'all'
      }
    },
    computed: {

      allDone: {
        get(){
          return this.rm === 0
        },

        set(value){

          this.todos.forEach(todo => {
            todo.complete = value
          })
        }
      },

      rm(){
        return this.todos.filter(todo => !todo.complete).length
      },
      complete(){
        return this.todos.filter(todo => todo.complete).length
      },

      filterTodos(){
        if (this.filter === 'todo') {
          return this.todos.filter(todo => !todo.complete)
        } else if (this.filter === 'done') {
          return this.todos.filter(todo => todo.complete)
        }
        return this.todos
      }

    },
    methods: {

      addTodo(){
        if (this.newTodo && this.newTodo.length) {
          this.todos.push(
            { name: this.newTodo, complete: false }
          );
          this.newTodo = ''
        }
      },

      deleteTodo(todo){
        this.todos = this.todos.filter(item => item !== todo)
      },

      deleteComplete(){
        this.todos = this.todos.filter(todo => !todo.complete)
      },

      editTodo(todo){
        this.editing = todo
      }
    }
  }
</script>

<style src="../css/todos.css"></style>
