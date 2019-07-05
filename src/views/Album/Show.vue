<template>
  <div id="content">
    <div class="top">
      <h2>앨범 상세보기<small></small></h2>
    </div>
    <div class="form-box bg">
      <div class="form-group">
        <label for="title">제목</label>
        <input type="text" id="title" class="form-control" v-model="album.title" />
      </div>
      <div class="form-group text-center">
        <button @click="onBack" class="btn block clouds">뒤로가기</button>
      </div>
    </div>

    <div class="top" style="margin-top: 16px;">
      <h3>사진<small>{{ photos.length }} 건</small></h3>
    </div>
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
