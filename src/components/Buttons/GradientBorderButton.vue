<template>
  <div
    class="flex items-center select-none bg-colorful p-1/2 w-fit-content"
    :class="{'disabled': disabled}"
  >
    <s-button
      :disabled="disabled"
      size="smallest"
    >
      <s-text
        p="5"
        weight="medium"
        :class="[
          defaultColor
        ]"
      >
        <slot />
      </s-text>
    </s-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import SButton from './Button.vue'
import SText from '@/components/Text.vue'
import { ThemeColorsEnum } from '&/theme'
import { Getter } from 'vuex-class'

@Component({
  name: 'SGradientBorderButton',
  components: {
    SButton,
    SText
  }
})
export default class GradientBorderButton extends Vue {
  @Prop({ type: Boolean, default: false }) readonly disabled!: boolean

  @Getter('getThemeColor')
  private readonly themeColor!: ThemeColorsEnum

  private get defaultColor (): string {
    /* text-white text-black */
    if (this.disabled) {
      return 'text-gray-90'
    }
    return `text-${this.themeColor === ThemeColorsEnum.LIGHT ? 'white' : 'gray-90'}`
  }
}
</script>

<docs>
SGradientBorderButton

```jsx
<s-gradient-border-button>Ceci n'est pas un bouton</s-gradient-border-button><br>
<s-gradient-border-button disabled>Ceci n'est pas un bouton</s-gradient-border-button>
```
</docs>
