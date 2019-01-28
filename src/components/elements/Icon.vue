<template>
  <component
    :is="`a-icon-${icon}`"
    v-if="icon"
  />
</template>

<script>
// All icons must be named AIconName
// names is an array of the names, previously removed from AIcon and kebab-cased (e.g. AIconMyIconTest => my-icon-test)
import Icons from './icons'
const names = Object.keys(Icons).reduce((arr, i) => [...arr, i.slice(5, i.length).replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase()], [])

export default {
  name: 'AIcon',
  components: { ...Icons },
  props: {
    icon: {
      type: String,
      default: undefined,
      required: true,
      validator: v => names.includes(v)
    }
  },
  data: () => ({ values: names })
}
</script>

<docs>
### Playground

```jsx
const Icons = require('./icons').default;
const names = Object.keys(Icons).reduce((arr, i) => [...arr, i.slice(5, i.length).replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase()], []);

<div class="columns is-vcentered is-centered is-gapless is-multiline">
  <a-icon
    v-for="icon of names"
    class="column"
    :key="'icon-list-' + icon"
    :icon="icon" />
</div>
```
</docs>
