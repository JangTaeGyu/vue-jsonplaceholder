import { api } from '@/store/api'
import {
  SET_POSTS,
  SET_POST,
  SET_COMMENTS,
  COMMENT_ADD,
  COMMENT_REMOVE
} from '@/store/mutation.types'
import {
  FETCH_POSTS,
  FETCH_POST,
  FETCH_COMMENTS,
  COMMENT_STORE,
  COMMENT_DESTROY
} from '@/store/action.types'

const state = {
  posts: [],
  post: {
    title: '',
    body: ''
  },
  comments: []
}

const getters = {
  posts: (state) => state.posts,
  post: (state) => state.post,
  comments: (state) => state.comments
}

const mutations = {
  [SET_POSTS]: (state, posts) => state.posts = posts,
  [SET_POST]: (state, post) => state.post = post,
  [SET_COMMENTS]: (state, comments) => state.comments = comments,
  [COMMENT_ADD]: (state, comment) => state.comments.unshift(comment),
  [COMMENT_REMOVE]: (state, commentId) => state.comments = state.comments.filter(comment => comment.id !== commentId)
}

const actions = {
  async [FETCH_POSTS]({ commit }, search) {
    let params = ''
    params += search.page ? `_page=${search.page}&` : ''
    params += search.limit ? `_limit=${search.limit}&` : ''
    const response = await api.get(`/posts?${params}`)
    commit(SET_POSTS, response.data)
  },
  async [FETCH_POST]({ commit }, postId) {
    const response = await api.get(`/posts/${postId}`)
    commit(SET_POST, response.data)
  },
  async [FETCH_COMMENTS]({ commit }, postId) {
    let params = ''
    params += postId ? `postId=${postId}` : ''
    const response = await api.get(`/comments?${params}`)
    commit(SET_COMMENTS, response.data)
  },
  async [COMMENT_STORE]({ commit }, comment) {
    const response = await api.post('/comments', comment)
    commit(COMMENT_ADD, response.data)
  },
  async [COMMENT_DESTROY]({ commit }, commentId) {
    await api.delete(`/comments/${commentId}`)
    commit(COMMENT_REMOVE, commentId)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
