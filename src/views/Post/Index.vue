<template>
  <div id="content">
    <div class="top">
      <h2>포스트 목록<small>{{ this.count }} 건</small></h2>
    </div>
    <PostList :posts="posts" />
    <div class="bottom">
        <Pagination :count="count" :limit="limit" :currentPage.sync="currentPage" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_POSTS } from '@/store/modules/post.type'
import PostList from '@/components/Post/PostList.vue'
import Pagination from '@/components/Pagination/Default.vue'

export default {
  name: 'PostIndex',
  components: {
    PostList,
    Pagination
  },
  data() {
    return {
      count: 100,
      limit: 20,
      currentPage: 1
    }
  },
  computed: {
    ...mapGetters(['posts'])
  },
  watch: {
    currentPage(page) {
      this.currentPage = page
      this.fetchPosts()
    }
  },
  methods: {
    fetchPosts() {
      this.$store.dispatch(FETCH_POSTS, { page: this.currentPage, limit: this.limit })
    }
  },
  created() {
    this.fetchPosts()
  }
}
</script>
