import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript'
import postcss from 'rollup-plugin-postcss'

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
    postcss({
      use: ['sass']
    }),
    typescript(),
    vue({
      css: true
    })
  ]
}