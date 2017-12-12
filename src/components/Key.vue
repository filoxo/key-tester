<template>
  <span class="key" v-bind:class="{
    active: isActive,
    'u1-5': size=== '1.5',
    'u2': size === '2',
    'u2-25': size=== '2.25',
    'u2-75': size=== '2.75'
  }">
    {{ label }}
  </span>
</template>

<script>
export default {
  name: 'key',
  props: ['label', 'size', 'isActive']
}
</script>

<style scoped>
.key {
  border: 2px solid lightgrey;
  border-radius: 5px;
  display: inline-block;
  padding: .75vmax;
  text-align: center;
  width: 2vmax;
}
.active { border-color: lightgreen; }
.u1-5 { width: 3vmax; }
.u2 { width: 4vmax; }
.u2-25 { width: 4.5vmax; }
.u2-75 { width: 5.5vmax; }
</style>
