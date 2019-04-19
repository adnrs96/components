const path = require('path')
const version = require('./package.json').version

module.exports = {
  // set your styleguidist configuration here
  title: 'Asyncy',
  pagePerSection: true,
  version: version,
  usageMode: 'expand',
  exampleMode: 'expand',
  template: {
    favicon: 'https://storage.googleapis.com/asyncyapp.com/http_assets/favicon.ico'
  },
  require: [
    path.join(__dirname, 'src/scss/asyncy.scss'),
    path.join(__dirname, 'src/styleguide.js')
  ],
  sections: [{
    name: 'Introduction',
    content: 'src/docs/introduction.md'
  },
  {
    name: 'Documentation',
    sections: [{
      name: 'Installation',
      content: 'src/docs/installation.md'
    },
    {
      name: 'Configuration',
      content: 'src/docs/configuration.md'
    }
    ]
  },
  {
    name: 'Styelguide',
    sections: [{
      name: 'Typography',
      content: 'src/docs/typography.md'
    },
    {
      name: 'Color palette',
      content: 'src/docs/colors.md'
    }
    ]
  },
  {
    name: 'Elements Components',
    content: 'src/docs/elements.md',
    components: 'src/components/elements/*.vue'
  },
  {
    name: 'Form Components',
    content: 'src/docs/form.md',
    components: 'src/components/form/*.vue'
  },
  {
    name: 'Layout Components',
    content: 'src/docs/layout.md',
    components: 'src/components/layout/*.vue'
  }
  ]
}
