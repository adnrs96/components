/* eslint-disable-next-line no-unused-vars */
import Vue, { PluginFunction } from 'vue'

import './storyscript'
import './vue'

export { ThemeColorsEnum, AccentColorsEnum } from './theme'
export { IDisplay } from './display'
export { IScrollbar } from './scrollbar'

declare const Plugin: Plugin
export default Plugin

export interface Plugin {
  install: PluginFunction<any>
}
