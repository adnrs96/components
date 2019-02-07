<template>
  <div class="a-card">
    <card-svg position="top" />
    <div class="a-card-container">
      <div :class="['a-card-background', { 'a-card-bg-alternative': alternative && !noBackground }, { 'a-card-no-bg': noBackground }]" />
      <div class="a-card-content">
        <div class="container">
          <div
            v-if="$slots.head"
            class="a-card-head"
          >
            <slot name="head" />
          </div>
          <slot />
        </div>
      </div>
    </div>
    <card-svg position="bottom" />
  </div>
</template>

<script>
import CardSvg from './svgs/CardSvg'

export default {
  name: 'ACard',
  components: { CardSvg },
  props: {
    alternative: {
      type: Boolean,
      default: false
    },
    noBackground: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<docs>
### Playground

```jsx
<div>
  <a-card>
    <template slot="head">
      <h2 class="is-size-2 has-text-dark">Hello world <b>Bold</b></h2>
      <h5 class="is-size-5 has-text-gray-2">lorem ipsum dolor sit amet</h5>
    </template>
    <p class="is-size-6 has-text-dark">Place your content here</p>
  </a-card>
  <a-card alternative>
    <template slot="head">
      <h3 class="is-size-3 has-text-dark">Hello world <b>bold</b></h3>
      <p class="is-size-6 has-text-gray-2">lorem ipsum dolor sit amet</p>
    </template>
    <p class="is-size-6 has-text-dark">Place your content here</p>
  </a-card>
  <a-card no-background>
    <template slot="head">
      <h3 class="is-size-3 has-text-dark">Hello world <b>bold</b></h3>
      <p class="is-size-6 has-text-gray-2">lorem ipsum dolor sit amet</p>
    </template>
    <p class="is-size-6 has-text-dark">Place your content here</p>
  </a-card>
</div>
```
</docs>
