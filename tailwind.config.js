/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Lato': ['Poppins', 'sans-serif'],
      },

      screens: {
        'phone': '320px',
        'tablet': '640px', 
        'laptop': '1024px',
        'desktop': '1280px',
      },
    },
  },
  plugins: [],
}