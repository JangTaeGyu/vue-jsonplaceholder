<template>
  <div class="pagination" v-if="count > 0">
    <a
      :key="page"
      v-for="page in pages"
      @click.prevent="changePage(page)"
      class="page-link"
      href="javascript:void(0)">{{ page }}</a>
  </div>
</template>

<script>
export default {
  name: 'PaginationDefault',
  props: {
    count: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      required: false,
      default: 10
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    pages() {
      if (this.count <= this.limit) {
        return []
      }
      return [
        ...Array(Math.ceil(this.count / this.limit)).keys()
      ].map(e => e + 1)
    },
  },
  methods: {
    changePage(page) {
      if (page === this.currentPage) return
      this.$emit('update:currentPage', page)
    }
  }
}
</script>
