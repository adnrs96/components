import { DirectiveOptions } from 'vue'
import ClickOutside from '@/directives/ClickOutside'

export const directives: { [key: string]: DirectiveOptions } = {
  ClickOutside
}

export default {
  ...directives
}
