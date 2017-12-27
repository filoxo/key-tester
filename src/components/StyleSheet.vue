<template>
  <span style="display: none;"></span>
</template>

<script>
export default {
  name: 'stylesheet',
  styleSheet: null,
  mounted () {
    const style = document.createElement('style')
    style.appendChild(document.createTextNode(''))
    document.head.appendChild(style)
    this.styleSheet = style.sheet
    this.addStyleSheet(this.$store.state.styles)
  },
  computed: {
    styles () {
      const { styles } = this.$store.state
      if (this.styleSheet) this.addStyleSheet(styles)
    }
  },
  methods: {
    addStyleSheet (styles) {
      if (styles !== '') this.styleSheet.insertRule(styles)
    }
  }
}
</script>
