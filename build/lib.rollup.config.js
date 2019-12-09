import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript'
import copy from 'rollup-plugin-copy'
import json from '@rollup/plugin-json'

process.env.NODE_ENV = 'production'

export default {
  external: ['vue', 'vuex'],
  input: 'src/index.ts',
  output: [{
    format: 'cjs',
    file: 'dist/vue.storyscript.cjs.js'
  }, {
    format: 'esm',
    file: 'dist/vue.storyscript.esm.js'
  }],
  plugins: [
    typescript(),
    vue({
      css: true
    }),
    json({ compact: true }),
    copy({
      targets: [
        { src: 'src/assets/styles', dest: 'dist/styles' }
      ],
      verbose: true
    })
  ]
}
