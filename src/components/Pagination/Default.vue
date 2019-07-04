<template>
  <div v-if="count > 0">
    <ul class="pagination">
      <li
        v-for="page in pages"
        :key="page"
        @click.prevent="changePage(page)">
        <a class="page-link" href="javascript:void(0)">{{ page }}</a>
      </li>
    </ul>
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

<style>
.pagination { list-style: none; margin: 0; padding: 0; }
.pagination > li { display: inline-block; margin: 0 5px; }
.pagination > li > a { text-decoration: none; border: 1px solid grey; padding: 2px 5px; }
</style>
