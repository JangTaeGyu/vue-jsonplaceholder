<template>
  <div class="board-add bg">
    <form @submit.prevent="onSubmit">
      <div class="board-add-title">
        <input type="text" class="form-control" v-model="title" placeholder="할일을 입력해 주세요">
      </div>
      <div class="board-add-btn">
        <input type="submit" class="btn small link" value="저장하기" />
      </div>
    </form>
  </div>
</template>

<script>
import { TODO_STORE } from '@/store/action.types'

export default {
  name: 'TodoAdd',
  props: {
    count: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit() {
      Promise.all([
        this.$store.dispatch(TODO_STORE, { title: this.title, completed: false })
      ]).then(() => {
        let newCount = this.count
        this.$emit('update:count', newCount + 1)
        this.title = ''
      })
    }
  }
}
</script>

