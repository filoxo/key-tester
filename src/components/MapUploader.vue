<template>
  <input type="file" accept=".json" @change="uploadMapJson"/>
</template>

<script>
export default {
  name: 'map-uploader',
  methods: {
    uploadMapJson (e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      const reader = new FileReader()
      reader.onload = (r) => {
        this.$store.commit('setMap', JSON.parse(r.target.result))
        e.target.value = ''
      }
      reader.readAsText(files[0])
    }
  }
}
</script>
