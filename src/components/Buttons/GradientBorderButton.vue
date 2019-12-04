<template>
  <div
    class="flex items-center select-none bg-colorful p-1/2 w-fit-content"
    :class="{'disabled': disabled}"
  >
    <button
      :class="[
        rounded,
        bg,
        cursor,
        padding,
        active
      ]"
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
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { ThemeColorsEnum } from '&/theme'
import { Getter } from 'vuex-class'

@Component({
  name: 'SGradientBorderButton'
})
export default class GradientBorderButton extends Vue {
  @Prop({ type: Boolean, default: false }) readonly disabled!: boolean
  @Prop({ type: Boolean, default: false }) readonly secondary!: boolean

  @Getter('getThemeColor')
  private readonly themeColor!: ThemeColorsEnum

  private get bg (): string {
    /**
     * bg-white bg-black bg-gray-20
     **/
    if (this.disabled) {
      return 'bg-gray-20'
    }
    if (this.secondary) {
      return `bg-${this.themeColor !== ThemeColorsEnum.DARK ? 'white' : 'black'}`
    }
    return `bg-${this.themeColor === ThemeColorsEnum.DARK ? 'white' : 'black'}`
  }

  private get cursor ():string {
    /* cursor-pointer cursor-not-allowed */
    return `cursor-${this.disabled ? 'not-allowed' : 'pointer'}`
  }

  private get padding (): string {
    return 'px-3 py-1'
  }

  protected get rounded (): string {
    return 'rounded-md'
  }

  private get defaultColor (): string {
    /* text-white text-gray-100 */
    if (this.disabled) {
      return 'text-gray-100'
    }
    if (this.secondary) {
      return `text-${this.themeColor !== ThemeColorsEnum.LIGHT ? 'white' : 'gray-100'}`
    }
    return `text-${this.themeColor === ThemeColorsEnum.LIGHT ? 'white' : 'gray-100'}`
  }

  private get active (): string {
    /**
     * bg-gray-10 bg-gray-90
     * active:bg-gray-10 active:bg-gray-90
     */
    if (this.disabled) return ''
    if (this.secondary) {
      return `active:bg-gray-${this.themeColor !== ThemeColorsEnum.DARK ? '10' : '90'}`
    }
    return `active:bg-gray-${this.themeColor === ThemeColorsEnum.DARK ? '10' : '90'}`
  }
}
</script>

<docs>
SGradientBorderButton

```jsx
<s-gradient-border-button>Ceci n'est pas un bouton</s-gradient-border-button><br>
<s-gradient-border-button secondary>Ceci n'est pas un bouton</s-gradient-border-button><br>
<s-gradient-border-button disabled>Ceci n'est pas un bouton</s-gradient-border-button>
```
</docs>
