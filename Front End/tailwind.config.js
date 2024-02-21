/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'avent-pro': ["'Advent Pro', sans-serif;"]
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}

