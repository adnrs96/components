<template>
  <div :class="['media', {'is-media-centered': centered}]">
    <div
      v-if="$slots.left"
      class="media-left"
    >
      <slot name="left" />
    </div>
    <div
      v-if="$slots.default"
      class="media-content"
    >
      <slot />
    </div>
    <div
      v-if="$slots.right"
      class="media-right"
    >
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AMedia',
  props: {
    centered: { type: Boolean, default: false }
  }
}
</script>

<docs>
## Playground

```jsx
  <a-layout background="light" full>
    <a-container>
      <a-div size="full">
        <a-media padding="none">
          <template slot="left">left</template>
          <template>content</template>
          <template slot="right">right</template>
        </a-media>
      </a-div>
      <a-div v-for="i in 12" background="dark">
        a
      </a-div>
    </a-container>
  </a-layout>
```
</docs>
