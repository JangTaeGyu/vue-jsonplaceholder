<template>
  <div>
    <h1>Albums</h1>
    <ul class="albums">
      <li v-for="album in albums" :key="album.id">
        <router-link :to="`/albums/${album.id}`">{{ album.title }}</router-link>
      </li>
    </ul>
    <Pagination :count="count" :limit="limit" :currentPage.sync="currentPage" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_ALBUMS } from '@/store/modules/album.type'
import Pagination from '@/components/Pagination/Default.vue'

export default {
  name: 'AlbumIndex',
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

