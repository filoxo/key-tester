<template>
  <textarea
    class="testarea"
    name="testarea"
    id="testarea"
    cols="30"
    rows="3"
    placeholder="Begin typing..."
    ref="testarea"
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
      if (e.code === 'Tab') {
        e.preventDefault()
      }
      this.$store.commit('setActive', e.code)
      this.$store.commit('pressKey', e.code)
    },
    releaseKey (e) {
      this.$store.commit('releaseKey', e.code)
    }
  }
}
</script>

<style scoped>
.testarea {
  border: 2px solid lightgrey;
  border-radius: 5px;
}
</style>
