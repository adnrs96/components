import Vue, { PluginFunction } from 'vue'

export { ThemeColorsEnum, AccentColorsEnum } from './theme'

import './storyscript'
import './vue'

declare const Plugin: Plugin
export default Plugin

export interface Plugin {
  install: PluginFunction<any>
}
