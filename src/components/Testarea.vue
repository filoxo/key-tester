<template>
  <textarea
    class="testarea"
    name="testarea"
    id="testarea"
    cols="45"
    rows="2"
    placeholder="Begin typing here to detect keys..."
    ref="testarea"
    :value="testText"
    @input="updateTestText"
    @keydown="detectKey"
    @keyup="releaseKey" />
</template>

<script>
export default {
  name: 'testarea',
  mounted () {
    this.$refs.testarea.focus()
  },
  methods: {
    detectKey (e) {
      console.log(e.code)
      if (e.code === 'Tab' || e.code === 'F5') {
        e.preventDefault()
      }
      this.$store.commit('setActive', e.code)
      this.$store.commit('pressKey', e.code)
    },
    releaseKey (e) {
      this.$store.commit('releaseKey', e.code)
    },
    updateTestText (e) {
      this.$store.commit('updateTestText', e.target.value)
    }
  },
  computed: {
    testText () {
      const { testText } = this.$store.state
      if (this.$refs.testarea !== undefined && testText === '') {
        this.$refs.testarea.focus()
      }
      return testText
    }
  }
}
</script>

<style>
.testarea {
  border: 2px solid steelblue;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-right: 1px;
  padding: .25rem;
}
</style>
