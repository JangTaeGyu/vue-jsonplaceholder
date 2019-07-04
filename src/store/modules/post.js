import { api } from '@/store/api'
import { FETCH_POSTS, FETCH_POST, FETCH_COMMENTS, DESTROY_COMMENT, STORE_COMMENT } from './post.type'

const state = {
  posts: [],
  post: null,
  comments: []
}

const getters = {
  posts: (state) => state.posts,
  post: (state) => state.post,
  comments: (state) => state.comments
}

const mutations = {
  setPosts: (state, posts) => state.posts = posts,
  setPost: (state, post) => state.post = post,
  setComments: (state, comments) => state.comments = comments,
  destroyComment: (state, commentId) => state.comments = state.comments.filter(comment => comment.id !== commentId),
  storeComment: (state, comment) => state.comments.unshift(comment)
}

const actions = {
  async [FETCH_POSTS]({ commit }, search) {
    let params = ''
    params += search.page ? `_page=${search.page}&` : ''
    params += search.limit ? `_limit=${search.limit}&` : ''
    const response = await api.get(`/posts?${params}`)
    commit('setPosts', response.data)
  },
  async [FETCH_POST]({ commit }, postId) {
    const response = await api.get(`/posts/${postId}`)
    commit('setPost', response.data)
  },
  async [FETCH_COMMENTS]({ commit }, postId) {
    let params = ''
    params += postId ? `postId=${postId}` : ''
    const response = await api.get(`/comments?${params}`)
    commit('setComments', response.data)
  },
  async [DESTROY_COMMENT]({ commit }, commentId) {
    await api.delete(`/comments/${commentId}`)
    commit('destroyComment', commentId)
  },
  async [STORE_COMMENT]({ commit }, comment) {
    const response = await api.post('/comments', comment)
    commit('storeComment', response.data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
