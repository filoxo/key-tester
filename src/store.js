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
    },
    map: {
      rows: [
        [
          {code: 'CapsLock', label: 'CAPS', size: '2.25'},
          {code: 'KeyA', label: 'A'},
          {code: 'KeyS', label: 'S'},
          {code: 'KeyD', label: 'D'},
          {code: 'KeyF', label: 'F'},
          {code: 'KeyG', label: 'G'},
          {code: 'KeyH', label: 'H'},
          {code: 'KeyJ', label: 'J'},
          {code: 'KeyK', label: 'K'},
          {code: 'KeyL', label: 'L'},
          {code: 'Semicolon', label: ';'},
          {code: 'Quote', label: '\''},
          {code: 'Enter', label: 'ENTER', size: '2.25'}
        ]
      ]
    }
  },
  mutations: {
    setActive (state, keyCode) {
      state.detectedKeys[keyCode] = true
    }
  },
  getters: {
    getDetectedKey: state => code => {
      return state.detectedKeys[code]
    }
  }
})

export default store
