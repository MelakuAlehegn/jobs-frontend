/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    screen: {
      sm: '375px',
      md: '500px',
      lg: '768px',
      xl: '1440'
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      fontWeight: {
        normal: '500',
        bold: '700'
      }
    },
  },
  plugins: [],
}

