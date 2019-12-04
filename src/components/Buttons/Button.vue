<template>
  <component
    :is="'button'"
    :class="[
      rounded,
      bg,
      cursor,
      padding,
      active,
      border,
      'focus:outline-none'
    ]"
    @click="!disabled ? $emit('click') : ''"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { ThemeColorsEnum, AccentColorsEnum } from '&/theme'
import { Getter } from 'vuex-class'

@Component({
  name: 'SButton'
})
export default class SButton extends Vue {
  @Prop({ type: Boolean, default: false }) readonly disabled!: boolean
  @Prop({
    type: String,
    default: 'regular',
    validator: (v: string) => ['regular', 'medium', 'small', 'smaller', 'smallest'].includes(v)
  }) readonly size!: string

  @Prop({ type: Boolean, default: false }) readonly accent!: boolean

  @Prop({ type: Boolean, default: false }) readonly secondary!: boolean

  @Getter('getThemeColor')
  public readonly themeColor!: ThemeColorsEnum

  @Getter('getThemeAccent')
  public readonly themeAccent!: AccentColorsEnum

  protected get rounded (): string {
    /* rounded-xl rounded-md */
    return `rounded-${['regular', 'medium'].includes(this.size) ? 'xl' : 'md'}`
  }

  private get border (): string {
    if (this.secondary) {
      return !this.disabled && !this.accent && this.themeColor === ThemeColorsEnum.LIGHT ? 'border border-gray-30' : ''
    }
    return !this.disabled && !this.accent && this.themeColor === ThemeColorsEnum.DARK ? 'border border-gray-30' : ''
  }

  private get bg (): string {
    /**
     * bg-white bg-black bg-gray-90 bg-gray-20
     * bg-pink-20 bg-pink-70
     * bg-magenta-20 bg-magenta-70
     * bg-orange-20 bg-orange-70
     * bg-lemon-20 bg-lemon-70
     * bg-blue-20 bg-blue-70
     * bg-red-20 bg-red-70
     * bg-green-20 bg-green-70
     * bg-yellow-20 bg-yellow-70
     * bg-indigo-20 bg-indigo-70
     **/
    if (this.disabled) {
      return `bg-${this.themeAccent !== undefined && this.accent
      ? AccentColorsEnum[this.themeAccent].toLowerCase()
      : 'gray'}-20`
    }
    if (this.themeAccent !== undefined && this.accent) {
      return `bg-${AccentColorsEnum[this.themeAccent].toLowerCase()}-70`
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
    return this.size === 'small' ? 'p-3'
      : this.size === 'medium' ? 'p-7/8'
        : this.size === 'smaller' ? 'px-3 py-2'
          : this.size === 'smallest' ? 'px-3 py-1' : 'p-4'
  }

  private get active (): string {
    /**
     * bg-gray-10 bg-gray-90
     * bg-pink-90
     * bg-pink-90
     * bg-magenta-90
     * bg-orange-90
     * bg-lemon-90
     * bg-blue-90
     * bg-red-90
     * bg-green-90
     * bg-yellow-90
     * bg-indigo-90
     */
    if (this.disabled) return ''
    if (this.themeAccent !== undefined && this.accent) {
      return `active:bg-${AccentColorsEnum[this.themeAccent].toLowerCase()}-90`
    }
    return `active:bg-gray-${this.themeColor === ThemeColorsEnum.DARK ? '10' : '90'}`
  }
}
</script>
