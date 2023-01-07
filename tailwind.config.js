/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  // titi theme
  //primary #0E0E10 secondry #0e9c75

  theme: {
    extend: {},
    fontFamily: {
      Saira: ["Saira"],
    },
    colors: {
      primary: "#0E0E10",
      primaryRgba: "rgba(14, 14, 16, 0.6)",
      secondry: "#0e9c75",
      secondryRgba: "rgba(14, 156, 117, 0.6)",
      accent: "#9abdb6",
      red: "#dd4333",
      grayDark: "#273444",
      gray: "#8492a6",
      grayLight: "#d3dce6",
      white: "#fff",
    },
  },
  plugins: [],
};
