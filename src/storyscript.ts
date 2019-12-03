import { ThemeColorsEnum, AccentColorsEnum } from '&/theme'

export default class StoryscriptPlugin {
  private readonly store: any

  constructor (store: any) {
    this.store = store
  }

  public setThemeColor (color: ThemeColorsEnum): void {
    this.store.commit('setThemeColor', color)
  }

  public setAccentColor (accent: AccentColorsEnum): void {
    this.store.commit('setAccentColor', accent)
  }
}
