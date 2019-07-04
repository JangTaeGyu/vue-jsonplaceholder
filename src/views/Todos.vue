<template>
  <div id="content">
    <div class="top">
      <h2>할일 목록<small>{{ this.count }} 건</small></h2>
    </div>
    <TodoAdd />
    <TodoList :todos="todos" />
    <div class="bottom">
        <Pagination :count="count" :limit="limit" :currentPage.sync="currentPage" />
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_TODOS } from '@/store/modules/todo.type'
import TodoAdd from '@/components/Todo/TodoAdd.vue'
import TodoList from '@/components/Todo/TodoList.vue'
import Pagination from '@/components/Pagination/Default.vue'

export default {
  name: 'Todos',
  components: {
    TodoAdd,
    TodoList,
    Pagination
  },
  data() {
    return {
      count: 200,
      limit: 20,
      currentPage: 1
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
    }
  },
  created() {
    this.fetchTodos()
  }
}
</script>
