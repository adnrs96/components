<template>
  <div
    :class="[
      'columns',
      {'is-multiline': !row},
      {'is-vcentered': vCentered || vhCentered},
      {'is-centered': hCentered || vhCentered}
    ]"
  >
    <slot />
  </div>
</template>

<script>
// padding 5rem 4.5rem can be vcentered
export default {
  name: 'AContainer',
  props: {
    row: { type: Boolean, default: false },
    vCentered: { type: Boolean, default: false },
    hCentered: { type: Boolean, default: false },
    vhCentered: { type: Boolean, default: false }
  }
}
</script>
