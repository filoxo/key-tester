<template>
  <span class="key" v-bind:class="{
    active: isActive,
    'u1-5': size === '1.5',
    'u1-75': size === '1.75',
    'u2': size === '2',
    'u2-25': size === '2.25',
    'u2-75': size === '2.75',
    'u3': size === '3',
    'u3-25': size === '3.25'
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
.u1-75 { width: 3.5vmax; }
.u2 { width: 4vmax; }
.u2-25 { width: 4.5vmax; }
.u2-75 { width: 5.5vmax; }
.u3 { width: 6vmax; }
.u3-25 { width: 6.5vmax; }
</style>
