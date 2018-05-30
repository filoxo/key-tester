<template>
  <span class="key" :class="{[keyCode]: true}">
    <span
      class="label"
      :class="{
        active: isActive,
        'u-5':   size === '.5',
        'u1-25':  size === '1.25',
        'u1-5':  size === '1.5',
        'u1-75': size === '1.75',
        'u2':    size === '2',
        'u2-25': size === '2.25',
        'u2-75': size === '2.75',
        'u3':    size === '3',
        'u3-25': size === '3.25',
        'u5':    size === '5',
        'u6':    size === '6',
        'u7':    size === '7',
        pressed: isPressed
      }"
    >
      {{ label }}
    </span>
  </span>
</template>

<script>
export default {
  name: "key",
  props: ["keyCode", "label", "size", "isActive", "isPressed"]
};
</script>

<style>
.label {
  border: 2px solid lightgrey;
  border-radius: 5px;
  color: #666;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  padding: 0.5rem;
  text-align: center;
  transition: border-color 0.2s ease-in, transform 0.1s ease-in-out;
  width: 1.5rem;
}
.active {
  border-color: steelblue;
}
/* base unit of 1.5 rem */
.u-5 {
  width: 0.75rem;
}
.u1-25 {
  width: 1.845rem;
}
.u1-5 {
  width: 2.25rem;
}
.u1-75 {
  width: 2.625rem;
}
.u2 {
  width: 3rem;
}
.u2-25 {
  width: 3.375rem;
}
.u2-75 {
  width: 4.125rem;
}
.u3 {
  width: 4.5rem;
}
.u3-25 {
  width: 4.875rem;
}
.u5 {
  width: 7.5rem;
}
.u6 {
  width: 9rem;
}
.u7 {
  width: 10.5rem;
}
.pressed {
  transform: translateY(3px);
}
</style>
