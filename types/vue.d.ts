import Vue, { ComponentOptions } from 'vue'
import { StoryscriptPlugin } from './storyscript'

declare module 'vue/types/vue' {
  interface Vue {
    $storyscript: StoryscriptPlugin
  }
}
