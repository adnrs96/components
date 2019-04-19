import Vue from 'vue'
import directives from '@/directives'

for (let item in directives) {
  Vue.directive(item, directives[item])
}
