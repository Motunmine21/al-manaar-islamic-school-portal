/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: "media", 
  theme: {
    extend: {
      colors: {
        'deep-wine': '#4B0C2B',
        'navy-dark' :'#00153A',    
        'navy-blue': '#001F54', 
        'gold'   :'#F4C430',
        'gold-light':'#FFF3B0',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

