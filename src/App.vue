<template>
  <div id="app">
    <header>
      <span>Key Tester</span>
    </header>
    <main>
      <div>
        <Testarea />
      </div>
      <div class="row">
        <Key label="`" />
        <Key label="1" />
        <Key label="2" />
        <Key label="3" />
        <Key label="4" />
        <Key label="5" />
        <Key label="6" />
        <Key label="7" />
        <Key label="8" />
        <Key label="9" />
        <Key label="0" />
        <Key label="-" />
        <Key label="=" />
        <Key label="DEL" size="1.5" />
      </div>
      <div class="row">
        <Key label="TAB" size="1.5" />
        <Key label="Q" />
        <Key label="W" />
        <Key label="E" />
        <Key label="R" />
        <Key label="T" />
        <Key label="Y" />
        <Key label="U" />
        <Key label="I" />
        <Key label="O" />
        <Key label="P" />
        <Key label="[" />
        <Key label="]" />
        <Key label="\" />
      </div>
      <div class="row">
        <Key label="CAPS" :is-active=this.detectedKeys.CapsLock size="2.25" />
        <Key label="A" :is-active=this.detectedKeys.KeyA />
        <Key label="S" :is-active=this.detectedKeys.KeyS />
        <Key label="D" :is-active=this.detectedKeys.KeyD />
        <Key label="F" :is-active=this.detectedKeys.KeyF />
        <Key label="G" :is-active=this.detectedKeys.KeyG />
        <Key label="H" :is-active=this.detectedKeys.KeyH />
        <Key label="J" :is-active=this.detectedKeys.KeyJ />
        <Key label="K" :is-active=this.detectedKeys.KeyK />
        <Key label="L" :is-active=this.detectedKeys.KeyL />
        <Key label=";" :is-active=this.detectedKeys.Semicolon />
        <Key label="'" :is-active=this.detectedKeys.Quote />
        <Key label="ENTER" :is-active=this.detectedKeys.Enter size="2.25" />
      </div>
      <div class="row">
        <Key label="SHIFT" size="3.25" />
        <Key label="Z" />
        <Key label="X" />
        <Key label="C" />
        <Key label="V" />
        <Key label="B" />
        <Key label="N" />
        <Key label="M" />
        <Key label="," />
        <Key label="." />
        <Key label="/" />
        <Key label="SHIFT" size="3.25" />
      </div>
      <div style="margin-top: 50px;">
        <div class="row" v-for="(row, index) in map.rows" :key=index>
          <Key
            v-for="key in row"
            :key=key.code
            :label=key.label
            :size=key.size
            :is-active=getDetectedKey(key.code) />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Testarea from './components/Testarea'
import Key from './components/Key'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    Testarea,
    Key
  },
  computed: {
    ...mapState(['detectedKeys', 'map']),
    ...mapGetters(['getDetectedKey'])
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
  width: 58vw;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: steelblue;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
.row {
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
}
</style>
