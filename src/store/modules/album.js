import { api } from '@/store/api'
import {
  SET_ALBUMS,
  SET_ALBUM,
  SET_PHOTOS
} from '@/store/mutation.types'
import {
  FETCH_ALBUMS,
  FETCH_ALBUM,
  FETCH_PHOTOS
} from '@/store/action.types'

const state = {
  albums: [],
  album: null,
  photos: []
}

const getters = {
  albums: (state) => state.albums,
  album: (state) => state.album,
  photos: (state) => state.photos
}

const mutations = {
  [SET_ALBUMS]: (state, albums) => state.albums = albums,
  [SET_ALBUM]: (state, album) => state.album = album,
  [SET_PHOTOS]: (state, photos) => state.photos = photos
}

const actions = {
  async [FETCH_ALBUMS]({ commit }, search) {
    let params = ''
    params += search.page ? `_page=${search.page}&` : ''
    params += search.limit ? `_limit=${search.limit}&` : ''
    const response = await api.get(`/albums?${params}`)
    commit(SET_ALBUMS, response.data)
  },
  async [FETCH_ALBUM]({ commit }, albumId) {
    const response = await api.get(`/albums/${albumId}`)
    commit(SET_ALBUM, response.data)
  },
  async [FETCH_PHOTOS]({ commit }, albumId) {
    let params = ''
    params += albumId ? `albumId=${albumId}` : ''
    const response = await api.get(`/photos?${params}`)
    commit(SET_PHOTOS, response.data)
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}
