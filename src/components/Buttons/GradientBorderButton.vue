<template>
  <div
    class="flex items-center select-none bg-colorful p-1/2 w-fit-content"
    :class="{'disabled': disabled}"
  >
    <button
      class="flex items-center focus:outline-none"
      :class="[
        rounded,
        bg,
        cursor,
        padding,
        active,
        defaultColor
      ]"
      @click="$emit('click', $event)"
    >
      <div
        v-if="$slots.icon"
        class="mr-2"
      >
        <slot name="icon" />
      </div>
      <s-text
        p="5"
        weight="medium"
      >
        <slot />
      </s-text>
    </button>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { ThemeColorsEnum } from '&/theme'
import SButton from './Button.vue'

@Component({
  name: 'SGradientBorderButton'
})
export default class GradientBorderButton extends SButton {
  protected get bg (): string {
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

  protected get rounded (): string {
    return 'rounded-md'
  }

  protected get defaultColor (): string {
    /* text-white text-gray-100 */
    if (this.disabled) {
      return 'text-gray-100'
    }
    if (this.secondary) {
      return `text-${this.themeColor !== ThemeColorsEnum.LIGHT ? 'white' : 'gray-100'}`
    }
    return `text-${this.themeColor === ThemeColorsEnum.LIGHT ? 'white' : 'gray-100'}`
  }

  protected get active (): string {
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
<div class="flex w-full justify-between mb-4">
  <s-gradient-border-button>Ceci n'est pas un bouton</s-gradient-border-button>
  <s-gradient-border-button secondary>Ceci n'est pas un bouton</s-gradient-border-button>
  <s-gradient-border-button disabled>Ceci n'est pas un bouton</s-gradient-border-button>
</div>
<div class="flex w-full justify-between mb-4">
  <s-gradient-border-button size="medium">Ceci n'est pas un bouton</s-gradient-border-button>
  <s-gradient-border-button size="medium" secondary>Ceci n'est pas un bouton</s-gradient-border-button>
  <s-gradient-border-button size="medium" disabled>Ceci n'est pas un bouton</s-gradient-border-button>
</div>
<div class="flex w-full justify-between mb-4">
  <s-gradient-border-button size="small">Ceci n'est pas un bouton</s-gradient-border-button>
  <s-gradient-border-button size="small" secondary>Ceci n'est pas un bouton</s-gradient-border-button>
  <s-gradient-border-button size="small" disabled>Ceci n'est pas un bouton</s-gradient-border-button>
</div>
<div class="flex w-full justify-between mb-4">
  <s-gradient-border-button size="smaller">Ceci n'est pas un bouton</s-gradient-border-button>
  <s-gradient-border-button size="smaller" secondary>Ceci n'est pas un bouton</s-gradient-border-button>
  <s-gradient-border-button size="smaller" disabled>Ceci n'est pas un bouton</s-gradient-border-button>
</div>
<div class="flex w-full justify-between mb-4">
  <s-gradient-border-button size="smallest">Ceci n'est pas un bouton</s-gradient-border-button>
  <s-gradient-border-button size="smallest" secondary>Ceci n'est pas un bouton</s-gradient-border-button>
  <s-gradient-border-button size="smallest" disabled>Ceci n'est pas un bouton</s-gradient-border-button>
</div>
```

SGradientBorderButton with icon

```jsx
<div class="flex w-full justify-between mb-4">
  <s-gradient-border-button>
    <s-icon slot="icon" icon="paper-plane" />
    Ceci n'est pas un bouton
  </s-gradient-border-button>
  <s-gradient-border-button secondary>
    <s-icon slot="icon" icon="paper-plane" />
    Ceci n'est pas un bouton
  </s-gradient-border-button>
  <s-gradient-border-button disabled>
    <s-icon slot="icon" icon="paper-plane" />
    Ceci n'est pas un bouton
  </s-gradient-border-button>
</div>
<div class="flex w-full justify-between mb-4">
  <s-gradient-border-button size="medium">
    <s-icon slot="icon" icon="paper-plane" />
    Ceci n'est pas un bouton
  </s-gradient-border-button>
  <s-gradient-border-button size="medium" secondary>
    <s-icon slot="icon" icon="paper-plane" />
    Ceci n'est pas un bouton
  </s-gradient-border-button>
  <s-gradient-border-button size="medium" disabled>
    <s-icon slot="icon" icon="paper-plane" />
    Ceci n'est pas un bouton
  </s-gradient-border-button>
</div>
<div class="flex w-full justify-between mb-4">
  <s-gradient-border-button size="small">
    <s-icon slot="icon" icon="paper-plane" />
    Ceci n'est pas un bouton
  </s-gradient-border-button>
  <s-gradient-border-button size="small" secondary>
    <s-icon slot="icon" icon="paper-plane" />
    Ceci n'est pas un bouton
  </s-gradient-border-button>
  <s-gradient-border-button size="small" disabled>
    <s-icon slot="icon" icon="paper-plane" />
    Ceci n'est pas un bouton
  </s-gradient-border-button>
</div>
<div class="flex w-full justify-between mb-4">
  <s-gradient-border-button size="smaller">
    <s-icon slot="icon" icon="paper-plane" />
    Ceci n'est pas un bouton
  </s-gradient-border-button>
  <s-gradient-border-button size="smaller" secondary>
    <s-icon slot="icon" icon="paper-plane" />
    Ceci n'est pas un bouton
  </s-gradient-border-button>
  <s-gradient-border-button size="smaller" disabled>
    <s-icon slot="icon" icon="paper-plane" />
    Ceci n'est pas un bouton
  </s-gradient-border-button>
</div>
<div class="flex w-full justify-between mb-4">
  <s-gradient-border-button size="smallest">
    <s-icon slot="icon" icon="paper-plane" />
    Ceci n'est pas un bouton
  </s-gradient-border-button>
  <s-gradient-border-button size="smallest" secondary>
    <s-icon slot="icon" icon="paper-plane" />
    Ceci n'est pas un bouton
  </s-gradient-border-button>
  <s-gradient-border-button size="smallest" disabled>
    <s-icon slot="icon" icon="paper-plane" />
    Ceci n'est pas un bouton
  </s-gradient-border-button>
</div>
```
</docs>
