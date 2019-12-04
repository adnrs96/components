<template>
  <s-text
    p="5"
    weight="medium"
    :class="[color]"
  >
    <slot />
  </s-text>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'SMessage'
})
export default class SMessage extends Vue {
  @Prop({ type: Boolean, default: false }) readonly darker!: boolean
  @Prop({ type: String, default: 'success', validator: v => ['success', 'warning', 'error'].includes(v) }) readonly level!: string

  private get color (): string {
    /* text-green-70 text-green-80 text-yellow-70 text-yellow-80 text-red-70 text-red-80  */
    return `text-${this.level === 'success' ? 'green' : this.level === 'warning' ? 'yellow' : 'red'}-${this.darker ? '80' : '70'}`
  }
}
</script>

<docs>
Error
```jsx
<s-message level="error">Invalid combination. Have another go.</s-message>
<s-message level="error" darker>Invalid combination. Have another go.</s-message>
```

Success
```jsx
<s-message>Great combination!</s-message>
<s-message level="success">Great combination!</s-message>
<s-message level="success" darker>Great combination!</s-message>
```

Warning
```jsx
<s-message level="warning">This combination already exists.</s-message>
<s-message level="warning" darker>This combination already exists.</s-message>
```

</docs>
