import { api } from '@/store/api'
import {
  SET_USERS,
  SET_USER
} from '@/store/mutation.types'
import {
  FETCH_USERS,
  FETCH_USER
} from '@/store/action.types'

const state = {
  users: [],
  user: null
}

const getters = {
  users: (state) => state.users,
  user: (state) => state.user
}

const mutations = {
  [SET_USERS]: (state, users) => state.users = users,
  [SET_USER]: (state, user) => state.user = user
}

const actions = {
  async [FETCH_USERS]({ commit }) {
    const response = await api.get('/users')
    commit(SET_USERS, response.data)
  },
  async [FETCH_USER]({ commit }, userId) {
    const response = await api.get(`/users/${userId}`)
    commit(SET_USER, response.data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
