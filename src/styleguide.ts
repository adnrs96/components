import Vue from 'vue'
import plugin from '@/index'
import store from '@/store'
import icons from './components/Icon/icons.json'
import './assets/styles/custom/_fonts.scss'
import './assets/styles/tailwind.scss'

Vue.use(plugin, { store })

Object.defineProperty(Vue.prototype, '$icons', {
  get () { return Object.values(icons) }
})
