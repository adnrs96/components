<template>
  <section :class="[...getBackground, ...getMargin]">
    <slot name="absolute" />
    <div
      v-if="$slots.default"
      :class="['container', {'is-widescreen': !full}, {'is-fluid': full}, ...getContainerClasses(!narrow), ...getPadding, ...isOutside]"
    >
      <slot />
    </div>
  </section>
</template>

<script>
import Background from '@/mixins/Background'
import Padding from '@/mixins/Padding'

export default {
  name: 'ALayout',
  mixins: [Background, Padding],
  provide () {
    return {
      classes: this.getContainerClasses(this.narrow)
    }
  },
  props: {
    foreground: { type: String, default: undefined },
    rounded: { type: Boolean, default: false },
    shadow: { type: Boolean, default: false },
    full: { type: Boolean, default: false },
    margin: { type: [Array, String], default: 'none' },
    outside: { type: Boolean, default: false },
    narrow: { type: Boolean, default: false }
  },
  computed: {
    isOutside: function () {
      const top = typeof this.margin === typeof '' ? this.margin : this.margin[0]
      return this.outside ? [`has-top-outside-${top}`] : []
    },
    getContainerClasses: function () {
      return (slot) => {
        return slot ? [`${this.foreground ? 'has-background-' + this.foreground : ''} ${this.rounded ? 'is-rounded' : ''} ${this.shadow ? 'has-shadow' : ''}`] : []
      }
    },
    getMargin: function () {
      if (typeof this.margin === typeof '') {
        return [`has-padding-${this.margin}`]
      } else if (this.margin.length === 1) {
        return [`has-padding-${this.margin[0]}`]
      }
      return [`has-padding-top-${this.margin[0]}`, `has-padding-bottom-${this.margin[1]}`]
    }
  }
}
</script>

<docs>
```jsx
<a-layout background="light" foreground="white" rounded shadow padding="large" margin="max" outside>
  <a-container vh-centered>
    <a-div size="one-quarter" background="light">
      hello
    </a-div>
    <a-div size="half">
      <a-container>
        <a-div size="1" v-for="i in 6" background="black">
          <p>d</p>
        </a-div>
        <a-div background="dark">a</a-div>
      </a-container>
    </a-div>
    <a-div v-for="i in 15" size="1" background="dark">
      hello
    </a-div>
  </a-container>
</a-layout>
```
</docs>
