<template>
  <section
    :class="[{[`has-background-${background}`]: background}]"
  >
    <div :class="['container', 'is-widescreen', {'is-marginless': full}]">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'ALayout',
  props: {
    background: { type: String, default: undefined },
    full: { type: Boolean, default: false }
  }
}
</script>

<docs>
```jsx
<a-layout background="success">
  <a-container multiline margin="3" vh-centered>
    <a-col size="one-quarter" background="light">
      hello
    </a-col>
    <a-col size="full">
      hello
    </a-col>
    <a-col v-for="i in 4" size="one-quarter" background="light">
      hello
    </a-col>
  </a-container>
</a-layout>
```
</docs>
