// const colors = require('windicss/colors')
const plugin = require('windicss/plugin')

module.exports = {
  preflight: {
    safelist: 'h1 h2 h3 p img',
  },
  // darkMode: false, // or 'media' or 'class'
  darkMode: 'class',
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      arial: ['Arial'],
      menu: ['Segoe UI']
    },
    extend: {
      colors: {
        'main-bg': '#f5f8fa',
        'primary': '#106ba3',
        'success': '#0d8050',
        'warning': '#bf7326',
        'danger': '#c23030',
        blue: {
          50: '#B3CFFF',
          100: '#A4BFF3',
          200: '#95B0E8',
          300: '#86A0DC',
          400: '#7791D1',
          500: '#6783C6',
          600: '#5874BA',
          700: '#4766AF',
          800: '#3558A4',
          900: '#1F4B99'
        },
        green: {
          50: '#E8F9B6',
          100: '#DBECA5',
          200: '#CDE095',
          300: '#C0D385',
          400: '#B3C775',
          500: '#A6BB65',
          600: '#99AF55',
          700: '#8CA345',
          800: '#7F9835',
          900: '#728C23'
        },
        yellow: {
          50: '#FFE4A0',
          100: '#F6D890',
          200: '#ECCB80',
          300: '#E2BF71',
          400: '#D9B361',
          500: '#CFA752',
          600: '#C59B42',
          700: '#BB9032',
          800: '#B08420',
          900: '#A67908'
        },
        gray: {
          50: '#F5F8FA',
          100: '#EBF1F5',
          200: '#E1E8ED',
          300: '#D8E1E8',
          400: '#CED9E0',
          500: '#BFCCD6',
          600: '#A7B6C2',
          700: '#8A9BA8',
          800: '#738694',
          900: '#5C7080',
          1000: '#394B59',
          1100: '#30404D',
          1200: '#293742',
          1300: '#293742',
          1400: '#202B33',
          1500: '#182026'
        }
      },
      opacity: {
        0: '0',
        5: '0.05',
        10: '0.1',
        20: '0.2',
        25: '0.25',
        30: '0.3',
        40: '0.4',
        50: '0.5',
        60: '0.6',
        70: '0.7',
        75: '0.75',
        80: '0.8',
        90: '0.9',
        95: '0.95',
        100: '1'
      }
    }
  },
  // shortcuts: {
  //   btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
  //   'btn-green': 'text-white bg-green-500 hover:bg-green-700'
  // },

  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        h1: {
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.medium')
        },
        h2: {
          fontSize: theme('fontSize.lg'),
          fontWeight: theme('fontWeight.medium')
        },
        ol: {
          listStyle: 'revert',
          margin: 'revert',
          padding: 'revert'
        },
        ul: {
          listStyle: 'revert',
          margin: 'revert',
          padding: 'revert'
        }
      })
    })

    // plugin(({ addComponents }) => {
    //   const buttons = {
    //     '.btn': {
    //       padding: '.5rem 1rem',
    //       borderRadius: '.25rem',
    //       fontWeight: '600'
    //     },
    //     '.btn-blue': {
    //       backgroundColor: '#3490dc',
    //       color: '#fff',
    //       '&:hover': {
    //         backgroundColor: '#2779bd'
    //       }
    //     },
    //     '.btn-red': {
    //       backgroundColor: '#e3342f',
    //       color: '#fff',
    //       '&:hover': {
    //         backgroundColor: '#cc1f1a'
    //       }
    //     }
    //   }
    //   addComponents(buttons)
    // }),
    // plugin(({ addDynamic, variants }) => {
    //   addDynamic(
    //     'skew',
    //     ({ Utility, Style }) => {
    //       return Utility.handler
    //         .handleStatic(Style('skew'))
    //         .handleNumber(0, 360, 'int', (number) => `skewY(-${number}deg)`)
    //         .createProperty('transform')
    //     },
    //     variants('skew')
    //   )
    // }),
    // require('windicss/plugin/filters'),
    // require('windicss/plugin/forms'),
    // require('windicss/plugin/aspect-ratio'),
    // require('windicss/plugin/line-clamp'),
    // require('windicss/plugin/typography')({
    //   modifiers: ['DEFAULT', 'sm', 'lg', 'red']
    // })
  ]
}
