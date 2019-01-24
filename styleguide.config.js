const path = require('path')

module.exports = {
  // set your styleguidist configuration here
  title: 'Λsyncy',
  pagePerSection: true,
  version: '1.0.0',
  usageMode: 'expand',
  exampleMode: 'expand',
  template: {
    favicon: 'https://storage.googleapis.com/asyncyapp.com/http_assets/favicon.ico'
  },
  require: [
    path.join(__dirname, 'src/scss/asyncy.scss')
  ],
  sections: [
    {
      name: 'Introduction',
      content: 'src/docs/introduction.md'
    },
    {
      name: 'Documentation',
      sections: [
        {
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
      name: 'Typography',
      content: 'src/docs/typography.md'
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
