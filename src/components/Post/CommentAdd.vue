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
