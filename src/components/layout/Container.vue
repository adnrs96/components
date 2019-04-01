<template>
  <div :class="['columns', ...classes, {'is-multiline': !row}, {'is-vcentered': centeredV || centeredVH}, {'is-centered': centeredH || centeredVH}, ...getPadding]">
    <slot />
  </div>
</template>

<script>
import Padding from '@/mixins/Padding'

export default {
  name: 'AContainer',
  mixins: [Padding],
  inject: {
    classes: {
      type: Array,
      default: () => []
    }
  },
  props: {
    row: { type: Boolean, default: false },
    centeredV: { type: Boolean, default: false },
    centeredH: { type: Boolean, default: false },
    centeredVH: { type: Boolean, default: false }

  }
}
</script>
