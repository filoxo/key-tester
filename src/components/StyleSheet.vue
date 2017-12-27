<template>
  <span style="display: none;" :data-styles="styles"></span>
</template>

<script>
export default {
  name: 'stylesheet',
  styleEl: null,
  mounted () {
    this.addStyleSheet(this.$store.state.styles)
  },
  computed: {
    styles () {
      this.addStyleSheet(this.$store.state.styles)
    }
  },
  methods: {
    addStyleSheet (styles) {
      if (this.styleEl) {
        const { parentNode } = this.styleEl
        parentNode.removeChild(this.styleEl)
        this.styleEl = null
      }
      if (styles !== '') {
        const s = document.createElement('style')
        s.type = 'text/css'
        s.appendChild(document.createTextNode(''))
        s.id = 'ktStyleSheet'
        s.innerHTML = styles
        document.head.appendChild(s)
        this.styleEl = s
      }
    }
  }
}
</script>
