<template>
  <div class="level">
    <div
      v-if="$slots.left"
      class="level-left"
    >
      <div class="level-item">
        <slot name="left" />
      </div>
    </div>
    <div
      v-if="$slots.default"
      class="level-item"
    >
      <slot />
    </div>
    <div
      v-if="$slots.right"
      class="level-right"
    >
      <div class="level-item">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ALevel'
}
</script>

<docs>
## Playground

```jsx
  <a-layout background="light" full>
    <a-container>
      <a-div size="full">
        <a-level padding="none">
          <template slot="left">left</template>
          <template>center</template>
          <template slot="right">right</template>
        </a-level>
      </a-div>
      <a-div v-for="i in 12" background="dark">
        a
      </a-div>
    </a-container>
  </a-layout>
```
</docs>
