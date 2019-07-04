<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="title" placeholder="Add Todo">
      <input type="submit" value="Submit">
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

