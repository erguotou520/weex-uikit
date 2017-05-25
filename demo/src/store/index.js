import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    title: 'weex-uikit',
    show: {
      mask: false,
      select: false
    }
  },
  mutations: {
    SET_TITLE (state, title) {
      state.title = title
    },
    TOGGLE_MASK_VISIABLE (state, visiable) {
      state.show.mask = visiable
    },
    TOGGLE_SELECT_VISIABLE (state, visiable) {
      state.show.select = visiable
      state.show.mask = visiable
    }
  },
  actions: {
    setTitle ({ commit }, title) {
      commit('SET_TITLE', title)
    },
    toggleMask ({ commit }, visiable) {
      commit('TOGGLE_MASK_VISIABLE', visiable)
    },
    toggleSelect ({ commit }, visiable) {
      commit('TOGGLE_SELECT_VISIABLE', visiable)
    }
  },
  getters: {
    title (state) {
      return state.title
    },
    maskVisiable (state) {
      return state.show.mask
    },
    selectVisiable (state) {
      return state.show.select
    }
  }
})

export default store
