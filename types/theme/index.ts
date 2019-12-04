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
