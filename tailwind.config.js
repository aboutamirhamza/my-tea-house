/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        primary: "1140px"
      },
      fontFamily: {
        manrope: '"Manrope", sans-serif',
      },
      colors: {
        'header-heading': "#1C1C1C",
        'header-text': "#777777",
        'white': "#FFFFFF",
        'black': "#000000",
      },
      fontSize: {
        'heading-header': "80px",
        'paragraph': "16px",
        'heading-para': "18px",
      },
      screens:{
        'extrasmall': "320px",
      },
    },
  },
  plugins: [],
}

