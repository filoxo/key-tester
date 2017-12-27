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
    map,
    pressedKeys: {},
    testText: ''
  },
  mutations: {
    setActive (state, keyCode) {
      state.detectedKeys = {...state.detectedKeys, [keyCode]: true}
    },
    pressKey (state, keyCode) {
      state.pressedKeys = {...state.pressedKeys, [keyCode]: true}
    },
    releaseKey (state, keyCode) {
      state.pressedKeys = {...state.pressedKeys, [keyCode]: false}
    },
    reset (state) {
      for (let keyCode in state.detectedKeys) {
        state.detectedKeys[keyCode] = false
      }
      for (let keyCode in state.pressedKeys) {
        state.pressedKeys[keyCode] = false
      }
      state.testText = ''
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
    },
    updateTestText (state, text) {
      state.testText = text
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
