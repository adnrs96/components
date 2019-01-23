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
        <slot />
      </div>
    </div>
    <div class="hero-footer">
      <slot name="footer" />
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
  <a-jumbo size="fullheight" into="bracket" title="Asyncy amplifies the developer" small="developer marketplace runtime">
    <a-navbar slot="header" dark :items="[{ name: 'Blog' }, { name: 'Documentation' }]" />
    <div class="columns is-centered is-desktop">
      <div class="column is-half">
        <form-beta />
      </div>
    </div>
    <div slot="footer" class="has-text-centered">
      <p>Discover our mission to raise any developer <br />into a 10x developer.</p>
    </div>
  </a-jumbo>
</div>
```
</docs>
