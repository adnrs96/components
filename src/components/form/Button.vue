<template>
  <button
    class="button"
    :class="['button', `is-${state}`, { [`is-${size}`]: size !== 'normal' }]"
    @click="handleClick"
  >
    <!-- @slot Use this slot to place the button content -->
    <slot />
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
      default: 'primary'
    },
    /** Sets background color of the button
     * @since 1.2.0
     */
    size: {
      type: String,
      default: 'normal'
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
This button is amazing, use it responsibly.

### Playground

```jsx
<a-button state="warning" size="large">Push Me</a-button>
```
</docs>
