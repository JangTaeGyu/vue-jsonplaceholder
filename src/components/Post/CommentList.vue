<template>
  <div v-if="comments.length > 0">
    <h3>Comments <small>({{ comments.length }})</small></h3>
    <ul class="comments">
      <li v-for="comment in comments" :key="comment.id">
        <p>{{ comment.name }} / {{ comment.email }}</p>
        <p style="white-space: pre-line">{{ comment.body }}</p>
        <button :disabled="buttonDisabled" @click="destroyComment(comment.id)">Delete</button>
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
