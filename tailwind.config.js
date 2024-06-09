/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        customRed: '#CE1A1B',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}