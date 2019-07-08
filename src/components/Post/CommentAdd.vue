<template>
  <div class="form-box bg">
    <form @submit.prevent="onSubmit">
      <div class="clear">
        <div class="form-group left">
          <label for="name">이름</label>
          <input type="text" id="name" class="form-control" v-model="name" />
        </div>
        <div class="form-group right">
          <label for="email">이메일</label>
          <input type="email" id="email" class="form-control" v-model="email" />
        </div>
      </div>
      <div class="form-group">
        <label for="body">내용</label>
        <textarea id="body" class="form-control border" v-model="body"></textarea>
      </div>
      <div class="form-group">
        <input type="submit" class="btn block peter-river" value="등록하기">
      </div>
    </form>
  </div>
</template>

<script>
import { COMMENT_STORE } from '@/store/action.types'

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
    resetData() {
      this.name = ''
      this.email = ''
      this.body = ''
    },
    onSubmit() {
      this.$store.dispatch(COMMENT_STORE, { name: this.name, email: this.email, body: this.body })
      this.resetData()
    }
  }
}
</script>
