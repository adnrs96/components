<template>
  <div :class="['boxed-container', { shadowed }]">
    <div class="boxed-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ABoxed',
  props: {
    shadowed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<docs>
### Playground

```jsx
  <section>
    <a-boxed>
      <h3 class="is-size-3 has-text-gray-2">Hello world</h3>
    </a-boxed>
  </section>
```
</docs>
