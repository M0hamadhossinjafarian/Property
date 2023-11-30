/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "main":"#00693d",
        "maingrey":"#838383"


      },
      fontWeight:{
        'mainf':'600px'
      }
    },
  },
  plugins: [],
}

