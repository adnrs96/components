import components from '@/components'
import modules from '@/store/modules'
import './assets/styles/tailwind.scss'
import _Vue, { PluginFunction, VueConstructor } from 'vue'
import StoryscriptPlugin from '@/storyscript'
import icons from '@/components/Icon/icons.json'

const install: PluginFunction<any> = (Vue: typeof _Vue, options?: any): void => {
  if (!options.store) {
    throw new Error('Please provide vuex store.')
  }

  if (Vue !== _Vue) {
    console.error('multiple instances of Vue detected')
  }

  const Modules = modules as {[_:string]: any }
  for (const key in modules) {
    options.store.registerModule(key, Modules[key], { preserveState: !!options.store.state[key] })
  }

  const plugin = new StoryscriptPlugin(options.store)

  Object.defineProperty(Vue.prototype, '$storyscript', {
    get: () => plugin
  })

  const Components = components as { [_: string]: VueConstructor }
  for (const key in Components) {
    const component = Components[key]
    if (component) {
      Vue.component(key, component as typeof Vue)
    }
  }

  if (options.styleguide) {
    Object.defineProperty(Vue.prototype, '$icons', {
      get () { return Object.values(icons) }
    })
  }
}

export { ThemeColorsEnum, AccentColorsEnum } from '&/theme'

export default {
  install
}
