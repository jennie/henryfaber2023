/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts,md}",
    "./content/**/*.{js,vue,ts,md}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./**/*.vue",
    "./tailwind-theme.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: "Noto Sans",
        display: "GT Maru",
        sans: "Noto Sans",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
