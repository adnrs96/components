<template>
  <button
    class="button"
    :class="['button', `is-${state}`, { [`is-${size}`]: size !== 'normal' }, { 'is-loading': loading }, { 'is-fullwidth': full }, { 'is-rounded': rounded }, { 'is-link': link }, { 'is-outlined': outlined }, { 'is-borderless': borderless }]"
    @click="handleClick"
  >
    <span
      v-if="icon"
      class="icon"
    >
      <i :class="`mdi mdi-${icon}`" />
    </span>
    <!-- @slot Use this slot to place the button content -->
    <span :class="{ 'is-hidden-mobile': arrowMobile }">
      <slot />
    </span>
    <template v-if="arrow">
      <a-icon
        class="arrow"
        icon="arrow"
      />
    </template>
    <template v-else-if="arrowMobile">
      <a-icon
        class="arrow is-hidden-tablet"
        icon="arrow"
      />
    </template>
  </button>
</template>

<script>
export default {
  name: 'AButton',
  props: {
    /**
     * Sets the button state
     */
    state: {
      type: String,
      default: 'primary',
      validator: v => ['primary', 'secondary'].includes(v)
    },
    /**
     * Sets the button as a link
     */
    link: {
      type: Boolean,
      default: false
    },
    /**
     * Sets background color of the button
     */
    size: {
      type: String,
      default: 'normal',
      validator: v => ['small', 'normal', 'medium', 'large'].includes(v)
    },
    /**
     * Sets the button full-width
     */
    full: {
      type: Boolean,
      default: false
    },
    /**
     * Sets the button rounded
     */
    rounded: {
      type: Boolean,
      default: true
    },
    /**
     * Sets the button state to loading
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * Sets arrow at the right of the button
     */
    arrow: {
      type: Boolean,
      default: false
    },
    /**
     * Replace the button text by an arrow (for mobile sizes only)
     */
    arrowMobile: {
      type: Boolean,
      default: false
    },
    /**
     * Sets the outlined style button
     */
    outlined: {
      type: Boolean,
      default: false
    },
    /**
     * Sets the button icon
     */
    icon: {
      type: String,
      default: undefined
    },
    /**
     * Remove the button padding
     */
    borderless: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    /** Triggered when button is clicked
     * @event click
     * @type {Event}
     * @returns {Void}
     * @argument {Event} e
     */
    handleClick: function (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<docs>
### Playground

```jsx
<div class="columns is-vcentered has-text-centered is-multiline">
  <div class="column">
    <a-button state="primary">Primary</a-button>
  </div>
  <div class="column">
    <a-button state="primary" link>Push Me</a-button>
  </div>
  <div class="column">
    <a-button state="primary" outlined arrow borderless>Secondary</a-button>
  </div>
  <div class="column">
    <a-button state="primary" outlined icon="check-circle">Tertiary</a-button>
  </div>
</div>
```
</docs>
