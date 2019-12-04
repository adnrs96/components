<template>
  <component
    :is="getTag"
    :class="[
      'font-body',
      'leading-normal',
      alignment,
      fontSize,
      fontWeight,
      letterSpacing,
      defaultColor,
      { ease },
      { shimmer },
      { 'bg-transparent': !shimmer },
      { 'cursor-pointer': clickable }
    ]"
    @click="$emit('click', $event)"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { ThemeColorsEnum } from '&/theme'
import { Getter } from 'vuex-class'

@Component({
  name: 'SText'
})
export default class Text extends Vue {
  @Prop({ type: String, default: undefined, validator: v => ['li', 'span'].includes(v) }) readonly tag!: string
  @Prop({ type: Boolean, default: false }) readonly shimmer!: boolean
  @Prop({ type: Boolean, default: false }) readonly ease!: boolean
  @Prop({ type: Boolean, default: false }) readonly clickable!: boolean
  @Prop({ type: String, default: undefined, validator: v => ['center', 'right', 'justify'].includes(v) }) readonly align!: string
  @Prop({
    type: String,
    default: undefined,
    validator: v => ['1', '2'].includes(v)
  }) readonly h!: string | undefined

  @Prop({
    type: String,
    default: undefined,
    validator: v => ['1', '2', '3', '4', '5'].includes(v)
  }) readonly p!: string | undefined

  @Prop({
    type: String,
    default: 'regular',
    validator: v => ['regular', 'medium', 'semibold', 'bold'].includes(v)
  }) readonly weight!: string

  @Getter('getThemeColor')
  private readonly themeColor!: ThemeColorsEnum

  private get defaultColor (): string {
    /* text-black text-white */
    return `text-${this.themeColor === ThemeColorsEnum.LIGHT ? 'black' : 'white'}`
  }

  private get fontSize (): string {
    /* text-base text-5xl text-2xl text-lg text-sm text-xs */
    return `text-${this.h === '1' ? '5xl' : this.h === '2' ? '2xl' : this.p === '1' ? 'lg' : this.p === '3' ? 'sm' : this.p && ['4', '5'].includes(this.p) ? 'xs' : 'base'}`
  }

  private get letterSpacing (): string {
    /* tracking-normal tracking-wider tracking-wide */
    return `tracking-${this.p && ['3', '5'].includes(this.p) ? 'wider' : this.p && ['4', '6'].includes(this.p) ? 'wide' : 'normal'}`
  }

  private get fontWeight (): string {
    /* font-normal font-medium font-semibold font-bold */
    return `font-${this.weight === 'regular' ? 'normal' : this.weight}`
  }

  private get alignment (): string {
    /* text-left text-right text-center text-justify */
    return `text-${this.align ? this.align : 'left'}`
  }

  private get getTag (): string {
    return this.tag ? this.tag : this.h ? `h${this.h}` : 'p'
  }
}
</script>

<docs>
SText sizes

```jsx
<s-text h="1">Heading 1</s-text>
<s-text h="2">Heading 2</s-text>
<s-text p="1">Paragraphe 1</s-text>
<s-text p="2">Paragraphe 2</s-text>
<s-text p="3">Paragraphe 3</s-text>
<s-text p="4">Paragraphe 4</s-text>
```

SText weights
```jsx
<s-text p="1" weight="regular">Paragraphe 1 - Regular</s-text>
<s-text p="1" weight="medium">Paragraphe 1 - Medium</s-text>
<s-text p="1" weight="semibold">Paragraphe 1 - Semibold</s-text>
<s-text p="1" weight="bold">Paragraphe 1 - Bold</s-text>
```

SText alignments
```jsx
<s-text p="1" >Paragraphe 1 - Left</s-text>
<s-text p="1" align="center">Paragraphe 1 - Center</s-text>
<s-text p="1" align="right">Paragraphe 1 - Right</s-text>
<s-text p="1" align="justify" class="w-2/3">Paragraphe 1 - Justify<br>Lorem ipsum dolor sit amet,
consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</s-text>
```

SText supported tags
```jsx
<s-text tag="li">li</s-text>
<s-text tag="span">span</s-text>
<s-text h="2">h</s-text>
<s-text p="1">p</s-text>
```

SText color examples
```jsx
<s-text class="text-indigo-50">indigo 50</s-text>
<s-text class="text-gray-50">gray 50</s-text>
<s-text class="text-red-50">red 50</s-text>
<s-text class="text-lemon-50">lemon 50</s-text>
```

</docs>
