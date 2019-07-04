import { api } from '@/store/api'
import { FETCH_TODOS, UPDATE_TODO, DESTROY_TODO, STORE_TODO } from './todo.type'

const state = {
  todos: []
}

const getters = {
  todos: (state) => state.todos
}

const mutations = {
  setTodos: (state, todos) => state.todos = todos,
  storeTodo: (state, todo) => state.todos.unshift(todo),
  updateTodo: (state, changeTodo) => {
    const index = state.todos.findIndex(todo => todo.id === changeTodo.id)
    if (index !== -1) {
      state.todos.splice(index, 1, changeTodo)
    }
  },
  destroyTodo: (state, todoId) => state.todos = state.todos.filter(todo => todo.id !== todoId)
}

const actions = {
  async [FETCH_TODOS]({ commit }, search) {
    let route = ''
    route += search.page ? `_page=${search.page}&` : ''
    route += search.limit ? `_limit=${search.limit}&` : ''
    const response = await api.get(`/todos?${route}`)
    commit('setTodos', response.data)
  },
  async [UPDATE_TODO]({ commit }, changeTodo) {
    const response = await api.put(`/todos/${changeTodo.id}`, changeTodo)
    commit('updateTodo', response.data)
  },
  async [DESTROY_TODO]({ commit }, todoId) {
    await api.delete(`/todos/${todoId}`)
    commit('destroyTodo', todoId)
  },
  async [STORE_TODO]({ commit }, title) {
    const response = await api.post('/todos', { title, completed: false })
    commit('storeTodo', response.data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
