import Vue from 'vue'
import Vuex from 'vuex'
import map from './keymaps/apple'

Vue.use(Vuex)

const detectedKeys = {}

map.rows.forEach(row => {
  row.forEach(keyDef => {
    detectedKeys[keyDef.code] = false
  })
})

const store = new Vuex.Store({
  state: {
    detectedKeys,
    map
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
