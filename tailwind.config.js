/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Libre_Franklin": ['"Libre Franklin"', ...defaultTheme.fontFamily.sans],
      },
      colors : {
        "blue" : "#4f7df3",
        "paleBlue" : "#c2d3ff",
        "lightRed" : "#ff5263",
        "gray" : "#969696",
        "darkBlue" : "#151f29"  
      }
    },
  },
  plugins: [],
}