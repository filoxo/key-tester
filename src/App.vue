<template>
  <div id="app">
    <header>
      <span>Key Tester</span>
    </header>
    <main>
      <div>
        <Testarea />
        <button type="button" @click="$store.commit('reset')" >Reset</button>
      </div>
      <div>
        <div class="row" v-for="(row, index) in map.rows" :key=index >
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
  color: #fff;
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
button {
  background: steelblue;
  border: none;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px;
}
</style>
