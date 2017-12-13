<template>
  <textarea class="testarea" name="testarea" id="testarea" cols="30" rows="3" placeholder="Begin typing..." v-on:keydown="detectKey"></textarea>
</template>

<script>
export default {
  name: 'testarea',
  methods: {
    detectKey (e) {
      console.log(e.which)
      if (e.which === 9) {
        e.preventDefault()
      }
      this.$store.commit('setActive', e.which)
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
