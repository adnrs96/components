import VueLazyload from 'vue-lazyload'
import VueClipboard from 'vue-clipboard2'
import { vueUse } from './utils/plugins'

// Fonts
import './assets/fonts/font-awesome/font-awesome.css'
import './assets/fonts/nucleo/nucleo.css'
import './assets/fonts/gilroy/gilroy.css'

// Styles
import 'bootstrap/scss/bootstrap-reboot.scss'
import './styles/index.scss'

// Components
import * as components from './components'
import * as extraComponents from './extra-components'
import * as directives from './directives'

const VuePlugin = {
  install: function (Vue) {
    if (Vue._asyncy_vue_installed) {
      return
    }

    Vue._asyncy_vue_installed = true

    for (let item in components) {
      Vue.use(components[item])
    }

    for (let item in extraComponents) {
      Vue.use(extraComponents[item])
    }

    for (let item in directives) {
      Vue.use(directives[item])
    }

    Vue.use(VueLazyload)
    Vue.use(VueClipboard)
  }
}

vueUse(VuePlugin)

export default VuePlugin
