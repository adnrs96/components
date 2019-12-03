import Vue, { PluginFunction } from 'vue'

export { ThemeColorsEnum, AccentColorsEnum } from './theme'
export { IStop, IPath, ILinearGradient, IIcon, IDef, ICircle } from './icon'

import './storyscript'
import './vue'

declare const Plugin: Plugin
export default Plugin

export interface Plugin {
  install: PluginFunction<any>
}
