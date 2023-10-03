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
        poppins: ['Poppins', "sans-serif"],
        inter: ['Inter', 'sans-serif'],
        sans: ['League Spartan', "sans-serif"],

      },
      fontWeight: {
        normal: '500',
        thin: '500',
        bold: '700'
      },
      colors: {
        desaturatedDarkCyan: 'hsl(180, 29%, 50%)',
        lightGreyishCyanBg: 'hsl(180, 52%, 96%)',
        lightGrayishCyanFilter: 'hsl(180, 31%, 95%)',
        darkGrayishCyan: 'hsl(180, 8%, 52%)',
        veryDarkGrayishCyan: 'hsl(180, 14%, 20%)',
        coralRed: "#ff694b",
        loginPrimary: '#444444'
      },
    },
  },
  plugins: [],
}

