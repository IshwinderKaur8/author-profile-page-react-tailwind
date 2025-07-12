/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your custom colors from the spec will go here!
        'light-off-white': '#F8F9FA',
        'dark-grey': '#212529',
        'electric-blue': '#7DF9FF',
        'seafoam-green': '#9FE2BF',
        'sky-blue': '#87CEEB',
        'turquoise': '#40E0D0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}