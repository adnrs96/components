import { ThemeColorsEnum, AccentColorsEnum } from './theme'
import Vue from 'vue'

export declare class StoryscriptPlugin {
  constructor (store: any)
  setThemeColor: (color: ThemeColorsEnum) => void
  setAccentColor: (accent: AccentColorsEnum) => void
  event: () => Vue
}
