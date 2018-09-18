import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    detectedKeys: {},
    map: {},
    pressedKeys: {},
    styles: ``,
    testText: "",
    keyboard: {
      layouts: []
    }
  },
  mutations: {
    setActive(state, keyCode) {
      state.detectedKeys = { ...state.detectedKeys, [keyCode]: true };
    },
    pressKey(state, keyCode) {
      state.pressedKeys = { ...state.pressedKeys, [keyCode]: true };
    },
    releaseKey(state, keyCode) {
      state.pressedKeys = { ...state.pressedKeys, [keyCode]: false };
    },
    reset(state) {
      for (let keyCode in state.detectedKeys) {
        state.detectedKeys[keyCode] = false;
      }
      for (let keyCode in state.pressedKeys) {
        state.pressedKeys[keyCode] = false;
      }
      state.testText = "";
    },
    updateTestText(state, text) {
      state.testText = text;
    },
    setKeyboard(state, keyboard) {
      state.keyboard = keyboard;
    },
    setLayout(state, layout) {
      state.layout = layout;
      localStorage.setItem(
        "kt-kb",
        `${state.keyboard.keyboard_name}/${layout}`
      );
    }
  },
  actions: {
    loadKeyboard({ commit }, keyboard) {
      import(`./keymaps/${keyboard.toLowerCase()}.json`).then(map => {
        commit("setKeyboard", map);
        commit("setLayout", Object.keys(map.layouts)[0]);
      });
    },
    selectLayout({ commit }, layout) {
      commit("setLayout", layout);
    }
  },
  getters: {
    getDetectedKey: state => code => state.detectedKeys[code]
  }
});
