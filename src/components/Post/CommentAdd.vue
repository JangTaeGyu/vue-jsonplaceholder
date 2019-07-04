<template>
  <div id="addComment">
    <form @submit.prevent="onSubmit">
      <div class="formGroup">
        <label for="name">Name: </label>
        <input type="text" v-model="name">
        <label for="email">email: </label>
        <input type="text" v-model="email">
      </div>
      <div class="formGroup">
        <textarea v-model="body" cols="60" rows="5"></textarea>
      </div>
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import { STORE_COMMENT } from '@/store/modules/post.type'

export default {
  name: 'CommentAdd',
  data() {
    return {
      name: '',
      email: '',
      body: ''
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch(STORE_COMMENT, { name: this.name, email: this.email, body: this.body })
      this.name = ''
      this.email = ''
      this.body = ''
    }
  }
}
</script>

<style>
#addComment { margin-top: 20px; }
</style>
