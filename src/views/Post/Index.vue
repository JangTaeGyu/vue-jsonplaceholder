<template>
  <div>
    <h1>Posts</h1>
    <ul class="posts">
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/posts/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>
    <Pagination :count="count" :limit="limit" :currentPage.sync="currentPage" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_POSTS } from '@/store/modules/post.type'
import Pagination from '@/components/Pagination/Default.vue'

export default {
  name: 'PostIndex',
  components: {
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
