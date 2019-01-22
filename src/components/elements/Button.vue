<template>
  <button
    class="button"
    :class="['button', `is-${state}`, { [`is-${size}`]: size !== 'normal' }, { 'is-loading': loading }, { 'is-fullwidth': full }, { 'is-rounded': rounded }]"
    @click="handleClick"
  >
    <!-- @slot Use this slot to place the button content -->
    <slot />
    <template v-if="arrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 45.81 18.82"
        class="arrow"
      >
        <path
          d="M1502,4202l8,7.99-8,8.01"
          transform="translate(-1467 -4200.59)"
        />
        <path
          d="M1467,4210l42-.01"
          transform="translate(-1467 -4200.59)"
        />
      </svg>
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
      validator: v => ['primary', 'secondary', 'link'].includes(v)
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
<a-button state="primary">Push Me</a-button>
```
</docs>
