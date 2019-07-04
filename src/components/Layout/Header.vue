<template>
  <div id="header">
    <h1 class="brand">
      <router-link to="/">Vue.js</router-link>
      <small>Vue.js, JSONPlaceholder REST API 활용하여 사이트 만들기</small>
    </h1>
    <div class="navbar">
      <ul>
        <li><router-link to="/todos">할일</router-link></li>
        <li><router-link to="/posts">포스트</router-link></li>
        <li><router-link to="/albums">앨범</router-link></li>
        <li><router-link to="/users">사용자</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
