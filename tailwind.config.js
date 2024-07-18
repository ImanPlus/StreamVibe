/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/dist/esm/**/*.{js,mjs}",
  ],
  theme: {
    extend: {
      colors: {
        black_06: "#0F0F0F",
        black_08: "#141414",
        black_10: "#1A1A1A",
        black_12: "#1F1F1F",
        black_15: "#262626",
        black_20: "#333333",
        gray_60: "#999999",
        red_45: "#E50000",
        red_50: "#FF0000",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Manrope", ...defaultTheme.fontFamily.serif],
      },
      height: {
        114: "458px",
      },
      fontSize: {
        invisible: "0",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
