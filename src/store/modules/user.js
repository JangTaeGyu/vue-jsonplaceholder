import { api } from '@/store/api'
import { FETCH_USERS, FETCH_USER } from './user.type'

const state = {
  users: [],
  user: null
}

const getters = {
  users: (state) => state.users,
  user: (state) => state.user
}

const mutations = {
  setUsers: (state, users) => state.users = users,
  setUser: (state, user) => state.user = user
}

const actions = {
  async [FETCH_USERS]({ commit }) {
    const response = await api.get('/users')
    commit('setUsers', response.data)
  },
  async [FETCH_USER]({ commit }, userId) {
    const response = await api.get(`/users/${userId}`)
    commit('setUser', response.data)
    return response.data
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
