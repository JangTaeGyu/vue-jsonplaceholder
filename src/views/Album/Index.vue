<template>
  <div id="content">
    <div class="top">
      <h2>앨범 목록<small>{{ this.count }} 건</small></h2>
    </div>
    <AlbumList :albums="albums"/>
    <div class="bottom">
      <Pagination :count="count" :limit="limit" :currentPage.sync="currentPage" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_ALBUMS } from '@/store/modules/album.type'
import AlbumList from '@/components/Album/AlbumList.vue'
import Pagination from '@/components/Pagination/Default.vue'

export default {
  name: 'AlbumIndex',
  components: {
    AlbumList,
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
    ...mapGetters(['albums'])
  },
  watch: {
    currentPage(page) {
      this.currentPage = page
      this.fetchAlbums()
    }
  },
  methods: {
    fetchAlbums() {
      this.$store.dispatch(FETCH_ALBUMS, { page: this.currentPage, limit: this.limit })
    }
  },
  created() {
    this.fetchAlbums()
  }
}
</script>

