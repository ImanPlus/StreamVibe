/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black06: "#0F0F0F",
        black08: "#141414",
        black10: "#1A1A1A",
        black15: "#262626",
        gray60: "#999999",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Manrope", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
