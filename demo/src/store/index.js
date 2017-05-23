import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    title: 'weex-uikit'
  },
  mutations: {
    SET_TITLE (state, title) {
      state.title = title
    }
  },
  actions: {
    setTitle ({ commit }, title) {
      commit('SET_TITLE', title)
    }
  },
  getters: {
    title (state) {
      return state.title
    }
  }
})

export default store
