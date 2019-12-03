import { ThemeColorsEnum, AccentColorsEnum, ITheme } from '&/theme'

const state: ITheme = {
  color: ThemeColorsEnum.LIGHT,
  accent: AccentColorsEnum.INDIGO
}

const getters = {
  getTheme: (state: any) => state,
  getThemeColor: (state: any) => state.color,
  getThemeAccent: (state: any) => state.accent
}

const mutations = {
  setThemeColor: (state: any, color: ThemeColorsEnum) => {
    state.color = color
  },
  setAccentColor: (state: any, accent: AccentColorsEnum) => {
    state.accent = accent
  }
}

export default {
  state, getters, mutations
}
