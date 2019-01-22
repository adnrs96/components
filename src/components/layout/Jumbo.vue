<template>
  <section :class="['hero', { 'is-stars': stars }, { [`is-${size}`]: size }]">
    <div class="hero-head">
      <slot name="header" />
    </div>
    <div class="hero-body">
      <div class="container">
        <p class="is-size-8 has-text-uppercase has-text-centered">
          {{ small }}
        </p>
        <h1 class="is-size-1 has-text-centered">
          {{ title }}
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AJumbo',
  props: {
    /**
     * The title of the jumbo
     */
    title: {
      type: String,
      default: 'Hello'
    },
    /**
     * The top description
     */
    small: {
      type: String,
      default: 'hello world'
    },
    /**
     * Sets the stars background
     */
    stars: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: undefined,
      validator: v => ['medium', 'large', 'fullheight'].includes(v)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/scss/variables/index.scss";

.is-stars {
  background-image: url('~@/assets/img/bg/header.png');
  background-position: center center;
  background-size: cover;

  h1, p {
    color: $white;
  }
}
</style>

<docs>
### Playground

```jsx
<a-jumbo />
```
</docs>
