<template>
  <component
    :is="`a-icon-${icon}`"
    v-if="icon"
  />
</template>

<script>
import Icons from './icons'

export default {
  name: 'AIcon',
  components: { ...Icons },
  props: {
    icon: {
      type: String,
      default: undefined,
      required: true,
      validator: v => ['heart'].includes(v)
    }
  }
}
</script>

<docs>
### Playground

```jsx
<a-icon icon="heart" />
```
</docs>
