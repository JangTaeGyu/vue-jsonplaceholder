<template>
  <div>
    <div class="post">
      <h2>{{ post.title }}</h2>
      <div class="body">{{ post.body }}</div>
    </div>
    <button @click="onBack">Back</button>
    <CommentAdd />
    <CommentList :comments="comments" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '@/store'
import { FETCH_POST, FETCH_COMMENTS } from '@/store/modules/post.type'
import CommentAdd from '@/components/Post/CommentAdd.vue'
import CommentList from '@/components/Post/CommentList.vue'

export default {
  name: 'PostShow',
  components: {
    CommentAdd,
    CommentList
  },
  beforeRouteEnter(to, from, next) {
    Promise.all([
      store.dispatch(FETCH_POST, to.params.postId),
      store.dispatch(FETCH_COMMENTS, to.params.postId)
    ]).then(() => {
      next()
    })
  },
  data() {
    return {
      buttonDisabled: false
    }
  },
  computed: {
    ...mapGetters(['post', 'comments'])
  },
  methods: {
    onBack() {
      this.$router.go(-1)
    }
  }
}
</script>
