const _ = require('lodash')
const colors = require('./src/utils/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        ...colors
      },
      borderRadius: {
        sm: '.25rem',
        md: '.3125rem',
        xl: '.4375rem',
        '2xl': '.625rem',
        '3xl': '1.875rem'
      },
      spacing: {
        initial: 'initial',
        'fit-content': 'fit-content',
        'max-content': 'max-content',
        '2full': '200%',
        '1/2': '.125rem', // 2px
        '7/8': '.875rem', // 14px
        14: '3.5rem', // 56px
        22: '5.5rem', // 88px
        28: '7rem'
      },
      boxShadow: {
        sm: '0 3px 5px rgba(0, 0, 0, 0.05)',
        card: '0px 5px 18px rgba(0, 0, 0, 0.06)'
      },
      inset: {
        min: '.125rem',
        1: '.25rem',
        half: '50%',
        full: '100%'
      },
      maxWidth: {
        xxs: '10rem'
      },
      opacity: {
        65: '.65'
      }
    },
    letterSpacing: {
      normal: '0', // 0%
      wide: '.01em', // 1%
      wider: '.02em' // 2%
    },
    fontSize: {
      xs: '.75rem', // 12px
      sm: '.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '2.5rem', // 40px
      '6xl': '3.75rem' // 60px
    },
    fontFamily: {
      body: ['Manrope', 'Helvetica', 'Arial', 'sans-serif'],
      monospace: ['SFMono-Regular', 'Monaco', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace']
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'current-color': 'currentColor'
    })
  },
  variants: {
    display: ['responsive', 'hover'],
    spacing: ['responsive'],
    shadow: ['responsive', 'hover'],
    textColor: [
      'responsive',
      'hover',
      'focus',
      'active',
      'group-hover',
      'group-active'
    ],
    backgroundColor: [
      'responsive',
      'odd',
      'even',
      'hover',
      'focus',
      'active',
      'group-hover',
      'group-active'
    ]
  },
  plugins: [
    function ({
      addUtilities,
      addVariant,
      config,
      e
    }) {
      const rotations = {
        '.rotate': {
          transform: 'rotate(0deg)'
        },
        '.rotate-45deg': {
          transform: 'rotate(45deg)'
        },
        '.rotate-90deg': {
          transform: 'rotate(90deg)'
        },
        '.rotate-135deg': {
          transform: 'rotate(135deg)'
        },
        '.rotate-180deg': {
          transform: 'rotate(180deg)'
        },
        '.rotate-225deg': {
          transform: 'rotate(225deg)'
        },
        '.rotate-270deg': {
          transform: 'rotate(270deg)'
        },
        '.rotate-315deg': {
          transform: 'rotate(315deg)'
        },
        '.rotate-360deg': {
          transform: 'rotate(360deg)'
        }
      }

      const beforeSpacing = _.map(config('theme.spacing'), (value, key) => {
        return {
          [`.${e(`before-ml-${key}`)}:before`]: {
            'margin-left': value
          },
          [`.${e(`before-mr-${key}`)}:before`]: {
            'margin-right': value
          }
        }
      })

      const minusInsets = _.map(config('theme.inset'), (value, key) => {
        return {
          [`.${e(`-top-${key}`)}`]: {
            top: `-${value}`
          },
          [`.${e(`-right-${key}`)}`]: {
            right: `-${value}`
          },
          [`.${e(`-bottom-${key}`)}`]: {
            bottom: `-${value}`
          },
          [`.${e(`-left-${key}`)}`]: {
            left: `-${value}`
          }
        }
      })

      addUtilities(rotations)
      addUtilities(beforeSpacing)
      addUtilities(minusInsets)
      addVariant('group-active', ({
        modifySelectors,
        separator
      }) => {
        modifySelectors(({
          className
        }) => {
          return `.group:active .${e(`group-active${separator}${className}`)}`
        })
      })
    }
  ]
}
