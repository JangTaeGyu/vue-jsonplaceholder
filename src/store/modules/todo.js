import { api } from '@/store/api'
import {
  SET_TODOS,
  TODO_ADD,
  TODO_EDIT,
  TODO_REMOVE
} from '@/store/mutation.types'
import {
  FETCH_TODOS,
  TODO_STORE,
  TODO_UPDATE,
  TODO_DESTROY
} from '@/store/action.types'

const state = {
  todos: []
}

const getters = {
  todos: (state) => state.todos
}

const mutations = {
  [SET_TODOS]: (state, todos) => state.todos = todos,
  [TODO_ADD]: (state, todo) => state.todos.unshift(todo),
  [TODO_EDIT]: (state, changeTodo) => {
    const index = state.todos.findIndex(todo => todo.id === changeTodo.id)
    if (index !== -1) {
      state.todos.splice(index, 1, changeTodo)
    }
  },
  [TODO_REMOVE]: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id)
}

const actions = {
  async [FETCH_TODOS]({ commit }, search) {
    let route = ''
    route += search.page ? `_page=${search.page}&` : ''
    route += search.limit ? `_limit=${search.limit}&` : ''
    const response = await api.get(`/todos?${route}`)
    commit(SET_TODOS, response.data)
  },
  async [TODO_STORE]({ commit }, newTodo) {
    const response = await api.post('/todos', newTodo)
    commit(TODO_ADD, response.data)
  },
  async [TODO_UPDATE]({ commit }, changeTodo) {
    const response = await api.put(`/todos/${changeTodo.id}`, changeTodo)
    commit(TODO_EDIT, response.data)
  },
  async [TODO_DESTROY]({ commit }, id) {
    await api.delete(`/todos/${id}`)
    commit(TODO_REMOVE, id)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
