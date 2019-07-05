<template>
  <div id="app">
    <Header />
    <div id="main">
      <div class="container">
        <div>
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Layout/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
