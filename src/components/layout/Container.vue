<template>
  <div
    :class="['columns', {'is-multiline': multiline}, {'is-variable': margin}, {[`is-${margin}`]: margin},
             {'is-vcentered': vCentered || vhCentered}, {'is-centered': hCentered || vhCentered},
             {[`has-background-${background}`]: background}, {'is-rounded': rounded}, {[`marged-${marged}`]: marged},
             {'has-shadow': shadow}]"
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
    background: { type: String, default: undefined },
    rounded: { type: Boolean, default: false },
    vCentered: { type: Boolean, default: false },
    hCentered: { type: Boolean, default: false },
    vhCentered: { type: Boolean, default: false },
    shadow: { type: Boolean, default: false },
    marged: { type: String, default: 'none', validator: v => ['none', 'small', 'medium', 'large'].includes(v) }
  }
}
</script>
