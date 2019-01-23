<template>
  <section :class="['hero', 'jumbo', { 'is-stars': stars }, { [`is-${size}`]: size }]">
    <div class="hero-head">
      <slot name="header" />
    </div>
    <div class="hero-body">
      <div class="container">
        <p class="is-size-8 has-text-uppercase has-text-centered">
          {{ small }}
        </p>
        <h1 :class="['is-size-1', 'has-text-centered', { [`into-${into}`]: into }]">
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
    /** The outside character of the title
     *
     * possible values: `bracket, chevron, slash`
     */
    into: {
      type: String,
      default: undefined,
      validator: v => ['bracket', 'chevron', 'slash'].includes(v)
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

<docs>
### Playground

```jsx
<div>
  <a-jumbo size="fullheight" into="bracket" title="Asyncy amplifies the developer" />
</div>
```
</docs>
