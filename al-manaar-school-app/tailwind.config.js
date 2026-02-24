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
        'ash-white': '#F5F5F5',    
        'navy-blue': '#001F54',    
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

