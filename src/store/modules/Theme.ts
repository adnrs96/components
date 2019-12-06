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
    const body = document.querySelector('body')

    state.color = color
    if (body?.classList.contains('text-black') && color === ThemeColorsEnum.DARK) {
      body.classList.remove('text-black')
      body.classList.add('text-white')
    } else if (body?.classList.contains('text-white') && color === ThemeColorsEnum.LIGHT) {
      body.classList.remove('text-white')
      body.classList.add('text-black')
    }
  },
  setAccentColor: (state: any, accent: AccentColorsEnum) => {
    state.accent = accent
  }
}

export default {
  state, getters, mutations
}
