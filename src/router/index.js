import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/todos',
      name: 'Todos',
      component: () => import('@/views/Todos.vue')
    },
    {
      path: '/posts',
      name: 'PostIndex',
      component: () => import('@/views/Post/Index.vue')
    },
    {
      path: '/posts/:postId',
      name: 'PostShow',
      component: () => import('@/views/Post/Show.vue')
    },
    {
      path: '/albums',
      name: 'AlbumIndex',
      component: () => import('@/views/Album/Index.vue')
    },
    {
      path: '/albums/:albumId',
      name: 'AlbumShow',
      component: () => import('@/views/Album/Show.vue')
    },
    {
      path: '/users',
      name: 'UserList',
      component: () => import('@/views/UserList.vue')
    }
  ]
})
