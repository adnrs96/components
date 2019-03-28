<template>
  <a-layout :full="full">
    <a-container
      multiline
      :background="background"
      rounded
      :marged="marged"
      :shadow="shadow"
    >
      <a-div
        v-if="$slots.head"
        size="full"
      >
        <slot name="head" />
      </a-div>
      <a-div size="full">
        <slot />
      </a-div>
    </a-container>
  </a-layout>
</template>

<script>
export default {
  name: 'ACard',
  props: {
    full: { type: Boolean, default: false },
    marged: { type: String, default: 'none', validator: v => ['none', 'small', 'medium', 'large'].includes(v) },
    background: { type: String, default: 'light' },
    shadow: { type: Boolean, default: false }
  }
}
</script>

<docs>
### Playground

```jsx
<div>
  <a-card shadow>
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
