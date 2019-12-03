import Vue from 'vue'
import Vuex from 'vuex'
import store from '@/store'

Vue.use(Vuex)

export default previewComponent => {
  // https://vuejs.org/v2/guide/render-function.html
  return {
    store,
    render (createElement) {
      return createElement(previewComponent)
    }
  }
}
