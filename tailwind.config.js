/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d03125",
        secondary: "#000000",
        black: "#000000",
        white: "#FFFFFF",
        red: "#ff2c1f",
      },
      fontFamily: {
        maven: ["Maven Pro", "sans-serif"],
        sans: ["Gothic A1", "sans-serif"],
      },
      screens: {
        mobile: { max: "425px" },
        tablet: { max: "768px", min: "426px" },
        laptop: { max: "1024px", min: "769px" },
        desktop: "1440px",
      },
      fontSize: {
        sm: "0.8rem", //14
        base: "1rem", //16
        xl: "1.25rem", //20
        "2xl": "1.563rem", //24
        "3xl": "1.953rem", //30
        "4xl": "2.441rem", //36
        "5xl": "3.052rem", //48
      },
    },
  },
  plugins: [],
};
