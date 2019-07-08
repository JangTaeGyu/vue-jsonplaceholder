<template>
  <div class="board bg">
    <ul class="post-list">
      <li v-for="post in posts" :key="post.id">
        <div class="board-content">
          <div class="title">
            <router-link :to="`/posts/${post.id}`">{{ post.title }}</router-link>
          </div>
          <div class="text">{{ post.body }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PostList',
  computed: {
    ...mapGetters(['posts'])
  }
}
</script>
