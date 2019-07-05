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
export default {
  name: 'PostList',
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>
