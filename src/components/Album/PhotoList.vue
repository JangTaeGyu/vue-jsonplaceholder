<template>
  <div v-if="photos.length > 0">
    <h3>Photos <small>({{ photos.length }})</small></h3>
    <ul class="photos">
      <li v-for="photo in photos" :key="photo.id">
        <dl>
          <dt>{{ photo.title }}</dt>
          <dd><img :src="photo.thumbnailUrl" /></dd>
        </dl>
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

<style>
.photos { list-style: none; margin: 0; padding: 0; overflow: hidden; }
.photos > li { float: left; margin: 0 5px 10px; padding: 10px; width: 150px; height: 200px; border: 1px solid #ccc; }
.photos > li > dl { margin: 0; }
.photos > li > dl > dt { margin-bottom: 5px; height: 45px; overflow: hidden; }
.photos > li > dl > dd { margin: 0; }
</style>
