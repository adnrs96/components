<template>
  <div
    :class="['column', {[`is-${size}`]: size}]"
  >
    <div :class="{[`has-background-${background}`]: background}">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ACol',
  props: {
    size: { type: String, default: undefined },
    background: { type: String, default: undefined }
  }
}
</script>
