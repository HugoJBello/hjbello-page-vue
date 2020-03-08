import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mainTags:["Coding", "Teaching", "Research"],

  },
  mutations: {
    setTags(state, tags) {
      state.mainTags = tags
    },
  },
  actions: {

  },
  modules: {
  }
})
