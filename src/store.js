import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    detectedKeys: {
      'CapsLock': false, //
      'KeyA': false,
      'KeyS': false,
      'KeyD': false,
      'KeyF': false,
      'KeyG': false,
      'KeyH': false,
      'KeyI': false,
      'KeyJ': false,
      'KeyK': false,
      'KeyL': false,
      'Semicolon': false,
      'Quote': false,
      'Enter': false
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
