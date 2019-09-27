import Vue from 'vue'
import Vuex from 'vuex'
import entries from "@/assets/entries.json";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mainTags:["Coding", "Teaching", "Research"],
    entries: entries.entries

  },
  mutations: {
    setTags(state, tags) {
      state.mainTags = tags
    },
  },
  actions: {

  }
})
