import { ThemeColorsEnum, AccentColorsEnum } from './Theme'

export declare class StoryscriptPlugin {
  constructor(store: any)
  setThemeColor: (color: ThemeColorsEnum) => void
  setAccentColor: (accent: AccentColorsEnum) => void
}
