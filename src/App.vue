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
        <Key label="CAPS" size="2.25" />
        <Key label="A" />
        <Key label="S" />
        <Key label="D" />
        <Key label="F" />
        <Key label="G" />
        <Key label="H" />
        <Key label="J" />
        <Key label="K" />
        <Key label="L" />
        <Key label=";" />
        <Key label="'" />
        <Key label="ENTER" size="2.25" />
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
    </main>
  </div>
</template>

<script>
import Testarea from './components/Testarea'
import Key from './components/Key'

export default {
  name: 'app',
  components: {
    Testarea,
    Key
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
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
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
</style>
