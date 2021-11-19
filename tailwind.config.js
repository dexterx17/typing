module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '3xl': '1800px',
      },
      colors:{
        // azul: {
        //   light: '#3295db',
        //   DEFAULT: '#3295db',
        //   dark: '#3295db',
        // },
        azul: '#3295db',
        amarillo: '#ffcf46',
        cafe: '#6d5825'
      },
    },
    fontFamily:{
      'museo100': ['museo-100'],
      'museo300': ['museo-300'],
      'museo500': ['museo-500'],
      'museo700': ['museo-700'],
      'museo900': ['museo-900']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({addUtilities}) {
        const extendUnderline = {
            '.underline': {
                'textDecoration': 'underline',
                'text-decoration-thickness': '2px',
                'text-decoration-color': '#ffcf46'
            },
        }
        addUtilities(extendUnderline)
    }
  ]
}
