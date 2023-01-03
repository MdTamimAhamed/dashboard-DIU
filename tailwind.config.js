/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        primary : '#A8BE98',
        secondary: '#0C105A',
        secondaryShade: '#0f1471',
        secondaryLight:'#121887',
        onHover : '#64C2A6',
        headerBlack: '#262626',
        textBlack:'#3B3B3B',
        white: '#ffffff',
        gray: '#5f6368',
        lightGray:'#A9A9A9',
        bodyBg: '#F6F7F9',
        optional: '#212be1',
      },
      fontFamily:{
        openSans : ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
