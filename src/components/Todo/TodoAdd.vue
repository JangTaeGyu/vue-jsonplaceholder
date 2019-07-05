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
import { STORE_TODO } from '@/store/modules/todo.type'

export default {
  name: 'TodoAdd',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch(STORE_TODO, this.title)
      this.title = ''
    }
  }
}
</script>

