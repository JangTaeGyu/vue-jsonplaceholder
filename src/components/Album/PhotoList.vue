<template>
  <div v-if="photos.length > 0">
    <ul class="photo-list">
      <li v-for="photo in photos" :key="photo.id">
        <div class="title">{{ photo.title }}</div>
        <img :src="photo.thumbnailUrl" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PhotoList',
  props: {
    photos: {
      type: Array,
      required: true
    }
  }
}
</script>
