import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    detectedKeys: {
      20: false, // CAPS
      65: false, // A
      83: false, // S
      68: false, // D
      70: false // F
    }
  },
  mutations: {
    setActive (state, keyCode) {
      state.detectedKeys[keyCode] = true
    }
  },
  getters: {
    getDetectedKey: state => which => {
      return state.detectedKeys[which]
    }
  }
})

export default store
