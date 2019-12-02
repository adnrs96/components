<template>
  <div>Hello World [Theme is: {{ theme + '|' + accent }}]</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ThemeColorsEnum, AccentColorsEnum } from '&/theme'
import { Getter } from 'vuex-class'

@Component({
  name: 'HelloWorld'
})
export default class HelloWorld extends Vue {

  @Getter('getThemeColor') private themeColor!: ThemeColorsEnum
  @Getter('getThemeAccent') private themeAccent!: AccentColorsEnum
  @Getter('isThemeLight') private isThemeLight!: boolean

  private get accent (): string {
    return AccentColorsEnum[this.themeAccent].toLowerCase()
  }

  private get theme (): string {
    return ThemeColorsEnum[this.themeColor].toLowerCase()
  }
}
</script>
