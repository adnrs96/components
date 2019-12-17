export enum ThemeColorsEnum {
  LIGHT,
  DARK
}

export enum AccentColorsEnum {
  PINK,
  MAGENTA,
  ORANGE,
  LEMON,
  BLUE,
  RED,
  GREEN,
  YELLOW,
  INDIGO
}

export interface ITheme {
  color: ThemeColorsEnum
  accent?: AccentColorsEnum
}

export interface ThemeStore {
  state: ITheme,
  getters: {
    getTheme: (state: ITheme) => ITheme,
    getThemeColor: (state: ITheme) => ThemeColorsEnum,
    getAccentColor: (state: ITheme) => AccentColorsEnum
  },
  mutations: {
    setThemeColor: (state: ITheme, color: ThemeColorsEnum) => void,
    setAccentColor: (state: ITheme, color: AccentColorsEnum) => void,
  }
}
