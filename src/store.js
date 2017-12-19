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
    },
    reset (state) {
      for (let keyCode in state.detectedKeys) {
        state.detectedKeys[keyCode] = false
      }
    },
    setMap (state, map) {
      const hasRows = map.rows && map.rows.length > 0
      if (hasRows) {
        state.map = map
        const detectedKeys = {}
        map.rows.forEach(row => {
          row.forEach(keyDef => {
            detectedKeys[keyDef.code] = false
          })
        })
      }
    }
  },
  actions: {
    loadMap ({commit}, mapName) {
      import(`./keymaps/${mapName}.json`)
        .then(map => commit('setMap', map))
    }
  },
  getters: {
    getDetectedKey: state => code => {
      return state.detectedKeys[code]
    }
  }
})

export default store
