module.exports = {
  plugins: [
    require('tailwindcss')('tailwind.config.js'),
    require('autoprefixer')(),
    require('postcss-font-magician')({
      formats: 'otf',
      custom: {
        Manrope: {
          variants: {
            normal: {
              400: { url: { otf: '//rawcdn.githack.com/sharanda/manrope/1a6035ff9cc9ce819ae2982dfa4cceb040aad77a/fonts/otf/manrope-regular.otf' } },
              500: { url: { otf: '//rawcdn.githack.com/sharanda/manrope/1a6035ff9cc9ce819ae2982dfa4cceb040aad77a/fonts/otf/manrope-medium.otf' } },
              600: { url: { otf: '//rawcdn.githack.com/sharanda/manrope/1a6035ff9cc9ce819ae2982dfa4cceb040aad77a/fonts/otf/manrope-semibold.otf' } },
              700: { url: { otf: '//rawcdn.githack.com/sharanda/manrope/1a6035ff9cc9ce819ae2982dfa4cceb040aad77a/fonts/otf/manrope-bold.otf' } }
            }
          }
        }
      }
    }),
    process.env.NODE_ENV === 'production' && require('@fullhuman/postcss-purgecss')({
      content: [
        './public/index.html',
        './src/**/*.vue'
      ],
      defaultExtractor: content => content.match(/[a-zA-Z0-9-_:/]+/g)
    })
  ]
}
