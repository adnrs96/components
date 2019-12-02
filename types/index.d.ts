import Vue, { PluginFunction } from 'vue'

export { AccentColorsEnum, ThemeColorsEnum } from './theme'

import './storyscript'
import './vue'

declare const Plugin: Plugin
export default Plugin

export interface Plugin {
  install: PluginFunction<any>
}
