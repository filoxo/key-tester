<template>
  <div id="app">
    <header>
      <span>Key Tester</span>
    </header>
    <main>
      <div class="row">
        <Key label="CAPS" size="1.5"/>
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
        <Key label="ENTER" size="2.25"/>
      </div>
    </main>
  </div>
</template>

<script>
import Key from './components/Key'

export default {
  name: 'app',
  components: {
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
