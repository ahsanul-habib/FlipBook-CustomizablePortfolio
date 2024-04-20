/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#00a0de',
        secondary: '#001c2a',
        page_first: '#FDFEFF',
        page_last: '#DAD8DA',
        next_first: "#fffdff",
        next_last: "#dbdedc"
      },
      spacing: {
        '25': '25px',
        '26': '26px'
      },
      textAlign: {
        justify: 'justify',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

