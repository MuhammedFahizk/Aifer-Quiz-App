/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        primary: "#8C53C8",
        primaryLight: "#58347d",
        secondary: "#EFC605",
      }
    },
  },
  plugins: [],
}