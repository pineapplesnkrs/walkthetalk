/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-color': '#F74902',
        'kelly-green': '#046A38',
        'gray-color': '#252726',
      },
    },
  },
  plugins: [],
} 