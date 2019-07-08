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
import { mapGetters } from 'vuex'
import {
  TODO_UPDATE,
  TODO_DESTROY
} from '@/store/action.types'

export default {
  name: 'TodoList',
  props: {
    count: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      buttonDisabled: false
    }
  },
  computed: {
    ...mapGetters(['todos'])
  },
  methods: {
    updateTodo(todo) {
      this.buttonDisabled = true

      Promise.all([
        this.$store.dispatch(TODO_UPDATE, {
          id: todo.id,
          title: todo.title,
          completed: !todo.completed
        })
      ]).then(() => {
        this.buttonDisabled = false
      })
    },
    destroyTodo(todoId) {
      this.buttonDisabled = true

      Promise.all([
        this.$store.dispatch(TODO_DESTROY, todoId)
      ]).then(() => {
        let newCount = this.count
        this.$emit('update:count', newCount - 1)
        this.buttonDisabled = false
      })
    }
  }
}
</script>
