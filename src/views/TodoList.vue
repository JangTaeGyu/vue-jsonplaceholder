<template>
  <div class="todos">
    <h1>Todo List</h1>
    <TodoAdd />
    <ul class="todos">
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.title }}
        <button :disabled="buttonDisabled" @click="updateTodo(todo)">{{ todo.completed ? 'Incomplete' : 'Completed' }}</button>
        <button :disabled="buttonDisabled" @click="destroyTodo(todo.id)">Delete</button>
      </li>
    </ul>
    <Pagination :count="count" :limit="limit" :currentPage.sync="currentPage" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_TODOS, UPDATE_TODO, DESTROY_TODO } from '@/store/modules/todo.type'
import TodoAdd from '@/components/Todo/TodoAdd.vue'
import Pagination from '@/components/Pagination/Default.vue'

export default {
  name: 'TodoList',
  components: {
    TodoAdd,
    Pagination
  },
  data() {
    return {
      count: 200,
      limit: 20,
      currentPage: 1,
      buttonDisabled: false
    }
  },
  computed: {
    ...mapGetters(['todos'])
  },
  watch: {
    currentPage(page) {
      this.currentPage = page
      this.fetchTodos()
    }
  },
  methods: {
    fetchTodos() {
      this.$store.dispatch(FETCH_TODOS, { page: this.currentPage, limit: this.limit })
    },
    updateTodo(todo) {
      const changeTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      }

      this.buttonDisabled = true

      Promise.all([
        this.$store.dispatch(UPDATE_TODO, changeTodo)
      ]).then(() => {
        this.buttonDisabled = false
      })
    },
    destroyTodo(todoId) {
      this.buttonDisabled = true

      Promise.all([
        this.$store.dispatch(DESTROY_TODO, todoId)
      ]).then(() => {
        this.buttonDisabled = false
      })
    }
  },
  created() {
    this.fetchTodos()
  }
}
</script>
