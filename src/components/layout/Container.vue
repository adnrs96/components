<template>
  <div
    :class="['columns', {'is-multiline': multiline}, {'is-variable': margin}, {[`is-${margin}`]: margin},
             {'is-vcentered': vCentered || vhCentered}, {'is-centered': hCentered || vhCentered}]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AContainer',
  props: {
    multiline: { type: Boolean, default: false },
    margin: { type: String, default: undefined, validator: v => '012345678'.includes(v) && v.length === 1 },
    vCentered: { type: Boolean, default: false },
    hCentered: { type: Boolean, default: false },
    vhCentered: { type: Boolean, default: false }
  }
}
</script>
