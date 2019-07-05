<template>
  <div class="board bg">
    <ul>
      <li v-for="album in albums" :key="album.id">
        <div class="board-content">
          <div class="title">
            <router-link :to="`/albums/${album.id}`">{{ album.title }}</router-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AlbumList',
  props: {
    albums: {
      type: Array,
      required: true
    }
  }
}
</script>
