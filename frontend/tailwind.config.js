/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary':'#87CEEB',
        'secondary':'#FFCE1A',
        'blackBG':'#F3F3F3',
        'Favourite':'#F5F5F5',
        'lightBlue': '#ADD8E6',
        'dark-blue': '#1E3A8A',
        'aqua': '#00FFFF'


      },
      fontFamily:{
        'primary':["Montserrat", "sans-serif"],
        'secondary':["Nunito Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
};
