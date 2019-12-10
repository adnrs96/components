const path = require('path')

module.exports = {
  // set your styleguidist configuration here
  title: 'Storyscript',
  serverPort: process.env.PORT || 6060,
  components: 'src/components/**/[A-Z]*.vue',
  pagePerSection: true,
  version: require('./package.json').version,
  exampleMode: 'expand',
  usageMode: 'expand',
  renderRootJsx: path.join(__dirname, 'config/styleguide.root.js'),
  require: [
    path.join(__dirname, 'src/assets/styles/tailwind.scss'),
    path.join(__dirname, 'src/styleguide.ts')
  ],
  sections: [{
    name: 'Styleguide',
    components: 'src/docs/**/[A-Z]*.vue'
  }, {
    name: 'Components',
    components: 'src/components/**/[A-Z]*.vue'
  }]
}
