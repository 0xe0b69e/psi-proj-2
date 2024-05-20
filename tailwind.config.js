/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInFromBottom: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)"
          }
        }
      },
      animation: {
        fadeInFromBottom: "fadeInFromBottom 1s ease-out"
      }
    },
    colors: {
      ...require("tailwindcss/colors"),
      background: {
        DEFAULT: "#edf2f9"
      },
    }
  },
  plugins: [],
};
