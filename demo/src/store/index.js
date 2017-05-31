import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    title: 'weex-uikit',
    mask: {
      show: false,
      justify: 'center'
    },
    select: {
      show: false
    },
    loading: {
      show: false
    }
  },
  mutations: {
    SET_TITLE (state, title) {
      state.title = title
    },
    TOGGLE_MASK_VISIABLE (state, visiable) {
      state.mask.show = visiable
      state.mask.justify = 'center'
    },
    TOGGLE_SELECT_VISIABLE (state, visiable) {
      state.select.show = visiable
      state.mask.show = visiable
      state.mask.justify = 'flex-end'
    },
    TOGGLE_LOADING_VISIABLE (state, visiable) {
      state.loading.show = visiable
      state.mask.show = visiable
      state.mask.justify = 'center'
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
    },
    toggleLoading ({ commit }, visiable) {
      commit('TOGGLE_LOADING_VISIABLE', visiable)
    }
  },
  getters: {
    title (state) {
      return state.title
    },
    maskVisiable (state) {
      return state.mask.show
    },
    selectVisiable (state) {
      return state.select.show
    },
    loadingVisiable (state) {
      return state.loading.show
    }
  }
})

export default store
