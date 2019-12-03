<template>
  <s-button
    :disabled="disabled"
    :size="size"
    :accent="accent"
  >
    <s-text
      :p="['regular', 'medium'].includes(size) ? '2' : ['small', 'smaller'].includes(size) ? '3' : '5'"
      :weight="['regular', 'medium', 'small'].includes(size) ? 'semibold' : 'medium'"
      tag="span"
      :class="[
        defaultColor
      ]"
    >
      <slot />
    </s-text>
  </s-button>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import SButton from './Button.vue'
import SText from '@/components/Text.vue'

@Component({
  name: 'STextButton',
  components: {
    SText
  }
})
export default class STextButton extends SButton {
  private get defaultColor (): string {
    /* text-white text-black */
    if (this.disabled) {
      return 'text-white'
    }
    return `text-${this.themeColor === this.themeColors.LIGHT ? 'white' : 'black'}`
  }
}
</script>

<docs>
STextButton sizes
```jsx
<s-text-button>Regular</s-text-button>
<s-text-button size="medium">Medium</s-text-button>
<s-text-button size="small">Small</s-text-button>
<s-text-button size="smaller">Smaller</s-text-button>
<s-text-button size="smallest">Smallest</s-text-button>
```

STextButton disabled
```jsx
<s-text-button disabled>Regular</s-text-button>
<s-text-button disabled size="medium">Medium</s-text-button>
<s-text-button disabled size="small">Small</s-text-button>
<s-text-button disabled size="smaller">Smaller</s-text-button>
<s-text-button disabled size="smallest">Smallest</s-text-button>
```

STextButton with accent color sizes
```jsx
<s-text-button accent>Regular</s-text-button>
<s-text-button accent size="medium">Medium</s-text-button>
<s-text-button accent size="small">Small</s-text-button>
<s-text-button accent size="smaller">Smaller</s-text-button>
<s-text-button accent size="smallest">Smallest</s-text-button>
```

STextButton with accent color disabled
```jsx
<s-text-button accent disabled>Regular</s-text-button>
<s-text-button accent disabled size="medium">Medium</s-text-button>
<s-text-button accent disabled size="small">Small</s-text-button>
<s-text-button accent disabled size="smaller">Smaller</s-text-button>
<s-text-button accent disabled size="smallest">Smallest</s-text-button>
```
</docs>
