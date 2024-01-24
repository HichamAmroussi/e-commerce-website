/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '976px',
      lg: '1200px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        customFont: ['"Custom Font"', "sans-serif"],
      },
    },
  },
  plugins: [],
}

