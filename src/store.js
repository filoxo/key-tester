import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    detectedKeys: {},
    map: {},
    mapName: '',
    pressedKeys: {},
    styles: ``,
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
      state.styles = map.style || ''
    },
    setMapName (state, mapName) {
      state.mapName = mapName
    },
    updateTestText (state, text) {
      state.testText = text
    }
  },
  actions: {
    loadMap ({commit}, mapName) {
      commit('setMapName', mapName)
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
