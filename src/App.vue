<template>
  <div id="app">
    <header>
      <span>Key Tester</span>
    </header>
    <main>
      <div class="container">
        <div class="action">
          <div class="action-left">
            <Testarea />
            <button
              type="button"
              @click="$store.commit('reset')" >
              Reset
            </button>
          </div>
          <div>
            <div class="custom-select">
              <select
                name="keymapSelector"
                id="keymapSelector"
                @change="changeMap" >
                <option value="apple">Standard (Mac)</option>
                <option value="windows">Standard (Windows)</option>
                <option value="orthodox">Orthodox</option>
                <option value="gherkin">Gherkin</option>
              </select>
            </div>
            <MapUploader />
          </div>
        </div>
      </div>
      <div class="container" style="overflow-x: scroll;">
        <div class="keyboard">
          <div
            class="row"
            v-for="(row, index) in map.rows"
            :key="index" >
            <Key
              v-for="key in row"
              :key="key.code"
              :keyCode="key.code"
              :label="key.label"
              :size="key.size"
              :is-active="detectedKeys[key.code]"
              :is-pressed="pressedKeys[key.code]" />
          </div>
        </div>
      </div>
    </main>
    <StyleSheet />
  </div>
</template>

<script>
import Testarea from './components/Testarea'
import Key from './components/Key'
import MapUploader from './components/MapUploader'
import StyleSheet from './components/StyleSheet'
import { mapState } from 'vuex'
import 'fg-select-css/src/select-css.css'

export default {
  name: 'app',
  components: {
    Testarea,
    Key,
    MapUploader,
    StyleSheet
  },
  computed: {
    ...mapState(['detectedKeys', 'map', 'pressedKeys'])
  },
  methods: {
    changeMap (e) {
      this.$store.commit('reset')
      this.$store.dispatch('loadMap', e.target.value)
    }
  }
}
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  margin: 20px auto;
  max-width: 700px;
  width: 100%;
}

header {
  margin: 0;
  padding: 16px;
  background-color: steelblue;
  color: #fff;
}
@media screen and (max-width: 750px) {
  header { display: none; }
}
header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
}
.custom-select {
  background-color: steelblue;
  border-radius: 5px;
}
.custom-select::after {
	width: 0;
	height: 0;
	border-left: 4px solid transparent;
	border-right: 4px solid transparent;
	border-top: 7px solid #fff;
	margin-top: -3px;
}
.custom-select select {
  border: 0;
  color: #fff;
  padding: .6em .6em .7em .6em;
}
.action {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}
.action-left {
  display: flex;
  align-items: center;
}
.container {
  margin-top: 15px;
  width: 100%;
}
.keyboard {
  min-width: 500px;
  padding: 0 10px;
}
.row {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
}
button {
  background: steelblue;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px;
}
</style>
