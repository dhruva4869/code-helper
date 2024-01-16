/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './**/*.html',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display' : ['Playfair Display', 'serif'],
        'heading' : ['Fira Sans Condensed', 'serif'],
        'sans' : ['Overpass', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
}

