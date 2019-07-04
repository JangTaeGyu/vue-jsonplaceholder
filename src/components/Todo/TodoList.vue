<template>
  <div class="board bg">
    <ul>
      <li v-for="todo in todos" :key="todo.id" :class="todo.completed ? '' : 'bg-warning'">
        <div class="board-content">
          <div class="text">
            {{ todo.title }}
          </div>
        </div>
        <div class="board-btn">
          <button
            class="btn small link"
            :disabled="buttonDisabled"
            @click="updateTodo(todo)">{{ todo.completed ? '보류하기' : '완료하기' }}</button>
          <button
            class="btn small link"
            :disabled="buttonDisabled"
            @click="destroyTodo(todo.id)">삭제하기</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { UPDATE_TODO, DESTROY_TODO } from '@/store/modules/todo.type'

export default {
  name: 'TodoList',
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      buttonDisabled: false
    }
  },
  methods: {
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
}
</script>
