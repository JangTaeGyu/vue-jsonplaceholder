<template>
  <div>
    <div class="album">
      <h2>{{ album.title }}</h2>
    </div>
    <button @click="onBack">Back</button>

    <PhotoList :photos="photos" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '@/store'
import { FETCH_ALBUM, FETCH_PHOTOS } from '@/store/modules/album.type'
import PhotoList from '@/components/Album/PhotoList.vue'

export default {
  name: 'AlbumShow',
  components: {
    PhotoList,
  },
  beforeRouteEnter(to, from, next) {
    Promise.all([
      store.dispatch(FETCH_ALBUM, to.params.albumId),
      store.dispatch(FETCH_PHOTOS, to.params.albumId)
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
    ...mapGetters(['album', 'photos'])
  },
  methods: {
    onBack() {
      this.$router.go(-1)
    }
  }
}
</script>
