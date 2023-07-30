/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors:{
      //tailwind colors
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      pink: colors.pink,
      orange: colors.orange,

      //Custom colors
      nuvemBlue: '#2e516d',
      nuvemGreen: '#b5d05f'
    },
    extend: {},
  },
  plugins: [],
}

