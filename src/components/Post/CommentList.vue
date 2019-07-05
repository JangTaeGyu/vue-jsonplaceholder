<template>
  <div class="board bg mt-15" v-if="comments.length > 0">
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <div class="board-content">
          <div class="info">
            <span class="info-name">{{ comment.name }}</span>
            <span class="info-email">{{ comment.email }}</span>
          </div>
          <div class="text" style="white-space: pre-line">{{ comment.body }}</div>
        </div>
        <div class="board-btn">
          <button
            class="btn small link"
            :disabled="buttonDisabled"
            @click="destroyComment(comment.id)">삭제하기</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { DESTROY_COMMENT } from '@/store/modules/post.type'

export default {
  name: 'CommentList',
  props: {
    comments: {
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
    destroyComment(commentId) {
      this.buttonDisabled = true

      Promise.all([
        this.$store.dispatch(DESTROY_COMMENT, commentId)
      ]).then(() => {
        this.buttonDisabled = false
      })
    }
  }
}
</script>

<style>
p { margin: 5px; }
</style>
