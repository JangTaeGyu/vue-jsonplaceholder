<template>
  <div id="content">
    <div class="top">
      <h2>포스트 상세보기<small></small></h2>
    </div>
    <div class="form-box bg">
      <div class="form-group">
        <label for="title">제목</label>
        <input type="text" id="title" class="form-control" v-model="post.title" />
      </div>
      <div class="form-group">
        <label for="content">내용</label>
        <textarea id="content" class="form-control border h-150" v-model="post.body"></textarea>
      </div>
      <div class="form-group text-center">
        <button @click="onBack" class="btn block clouds">뒤로가기</button>
      </div>
    </div>

    <div class="top" style="margin-top: 16px;">
      <h3>코멘트<small>{{ comments.length }} 건</small></h3>
    </div>
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
