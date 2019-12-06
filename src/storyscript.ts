import { ThemeColorsEnum, AccentColorsEnum } from '&/theme'
import Vue from 'vue'

export default class StoryscriptPlugin {
  private readonly store: any
  private readonly _event: Vue

  constructor (store: any) {
    this.store = store
    this._event = new Vue()
  }

  public setThemeColor (color: ThemeColorsEnum): void {
    this.store.commit('setThemeColor', color)
  }

  public setAccentColor (accent: AccentColorsEnum): void {
    this.store.commit('setAccentColor', accent)
  }

  public get event (): Vue {
    return this._event
  }
}
