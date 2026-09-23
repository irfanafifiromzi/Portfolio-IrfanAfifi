/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0a0a0a",
          700: "#333333",
          500: "#5b5e6c",
          400: "#787c8d",
          300: "#979aaa",
          200: "#e3e3eb",
          100: "#f4f4f4",
          50: "#fafafa",
        },
        accent: {
          DEFAULT: "#4c32ff",
          dark: "#3b26cc",
          light: "#c9c1ff",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};
