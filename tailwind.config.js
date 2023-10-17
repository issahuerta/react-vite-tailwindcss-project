/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E293B',
        'secondary': '#5C059B',
        'accent': '#FF6363',
      }
    },
  },
  plugins: [],
}

