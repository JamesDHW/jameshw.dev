/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          0: "#fff",
          100: "#fafafa",
          200: "#eaeaea",
          300: "#999999",
          400: "#888888",
          500: "#666666",
          600: "#444444",
          700: "#333333",
          800: "#222222",
          900: "#111111",
        },
        ice: {
          0: "#67d3ff",
          100: "#5acdf",
          200: "#4cc7ff",
          300: "#3ec0ff",
          400: "#2fbaff",
          500: "#1fb4ff",
          600: "#0dadff",
          700: "#00a6ff",
          800: "#009fff",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
