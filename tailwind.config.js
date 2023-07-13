/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        primary: '#EC261F',
        secondary: "#FCF9FA"
      }
    },
  },
  plugins: [require("daisyui")],
}

