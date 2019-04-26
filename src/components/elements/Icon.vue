<template>
  <component
    :is="`s-icon-${icon}`"
    v-if="icon"
    v-bind="props"
  />
</template>

<script>
// All icons must be named AIconName
// names is an array of the names, previously removed from AIcon and kebab-cased (e.g. AIconMyIconTest => my-icon-test)
import Icons from './icons'
const names = Object.keys(Icons).reduce((arr, i) => [...arr, i.slice(5, i.length).replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase()], [])

export default {
  name: 'SIcon',
  components: { ...Icons },
  props: {
    icon: {
      type: String,
      default: undefined,
      required: true,
      validator: v => names.includes(v)
    },
    props: {
      type: Object,
      default: undefined,
      required: false
    }
  },
  data: () => ({ values: names })
}
</script>

<docs>
### Playground

```jsx noeditor
const Icons = require('./icons').default;
const names = Object.keys(Icons).reduce((arr, i) => [...arr, i.slice(5, i.length).replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase()], []);

<div class="columns is-vcentered is-centered is-gapless is-multiline">
  <s-icon
    v-for="icon of names"
    class="column"
    :title="icon"
    :key="'icon-list-' + icon"
    :icon="icon" />
</div>
```
</docs>
