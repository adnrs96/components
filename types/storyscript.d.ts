import { ThemeColorsEnum, AccentColorsEnum } from './theme'

export declare class StoryscriptPlugin {
  constructor (store: any)
  setThemeColor: (color: ThemeColorsEnum) => void
  setAccentColor: (accent: AccentColorsEnum) => void
}
