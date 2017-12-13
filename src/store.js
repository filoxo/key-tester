import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    detectedKeys: {
      '65': false // A
    }
  },
  mutations: {
    setActive (state, keyCode) {
      state.detectedKeys[keyCode] = true
    }
  }
})

export default store
