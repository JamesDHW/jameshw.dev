/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
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
          100: "#5acdff",
          200: "#4cc7ff",
          300: "#3ec0ff",
          400: "#2fbaff",
          500: "#1fb4ff",
          600: "#0dadff",
          700: "#00a6ff",
          800: "#009fff",
        },
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
      animation: {
        "waving-hand": "wave 5s linear infinite",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        blink: "blink infinite 2s",
      },
      boxShadow: {
        "3xl":
          "rgba(0, 0, 0, 0.25) 0px 20px 20px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -1px 2px;",
      },
    },
  },
  plugins: [],
  darkMode: "class",
  safelist: [
    {
      pattern: /bg-gradient-to-br/,
    },
    {
      pattern: /from-ice-(0|100|200|300|400|500|600|700|800)/,
      variants: ["dark"],
    },
    {
      pattern: /to-ice-(0|100|200|300|400|500|600|700|800)/,
      variants: ["dark"],
    },
    {
      pattern: /from-gray-(0|100|200|300|400|500|600|700|800|900)/,
      variants: ["dark"],
    },
    {
      pattern: /to-gray-(0|100|200|300|400|500|600|700|800|900)/,
      variants: ["dark"],
    },
  ],
};
