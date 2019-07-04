import { api } from '@/store/api'
import { FETCH_ALBUMS, FETCH_ALBUM, FETCH_PHOTOS } from './album.type'

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
  setAlbums: (state, albums) => state.albums = albums,
  setAlbum: (state, album) => state.album = album,
  setPhotos: (state, photos) => state.photos = photos
}

const actions = {
  async [FETCH_ALBUMS]({ commit }, search) {
    let params = ''
    params += search.page ? `_page=${search.page}&` : ''
    params += search.limit ? `_limit=${search.limit}&` : ''
    const response = await api.get(`/albums?${params}`)
    commit('setAlbums', response.data)
  },
  async [FETCH_ALBUM]({ commit }, albumId) {
    const response = await api.get(`/albums/${albumId}`)
    commit('setAlbum', response.data)
  },
  async [FETCH_PHOTOS]({ commit }, albumId) {
    let params = ''
    params += albumId ? `albumId=${albumId}` : ''
    const response = await api.get(`/photos?${params}`)
    commit('setPhotos', response.data)
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}
