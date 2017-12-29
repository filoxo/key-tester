<template>
  <div class="upload">
    <input id="mapUpload" type="file" accept=".json" @change="uploadMapJson"/>
    <label class="custom-file-input" for="mapUpload">
      Upload map
    </label>
  </div>
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

<style scoped>
.upload {
  align-items: center;
  background-color: steelblue;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #fff;
  display: flex;
  font-size: 11px;
  font-weight: bold;
  padding: 10px;
  text-transform: uppercase;
}
[type=file] {
  position:absolute;
  left:-10000px;
  top:auto;
  width:1px;
  height:1px;
  overflow:hidden;
}
[type=file]:focus + label {
  outline: 1px solid steelblue;
	outline: -webkit-focus-ring-color auto 5px;
}
</style>
