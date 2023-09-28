/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "768px" },
      md: { min: "768px", max: "1024px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1279px" },
    },
    extend: {
      colors: {
        customgreen: "#5FE26C",
        lightgreen: "#39DB4A",
        palmgreen: "#C1F1C6",
        darkgreen: "#90BD95",
        red: "#FF6868",
        black: "#4A4A4A",
        yellow: "#FFE605",
      },
      borderRadius: {
        40: "40px",
        "50percent": "50%",
        custom1: "0px 37.5px 0px 42.5px", // FOR LOVE LOGO ON CARD SPECIAL DISHES CONTENT
        custom2: "140px 140px 41px 41px;", // FOR TESTIMONIAL IMAGE BACKGROUND
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      width: {
        W500: "500px",
        W400: "400px",
        W700: "540px",
        54: "210px",
        58: "233px",
        66: "265px",
        82: "500px",
      },
      height: {
        H500: "500px",
        H400: "400px",
        H780: "630px",
      },
      boxShadow: {
        custom1: "7px 35px 51px 0px rgba(0, 0, 0, 0.14)",
        custom2: "2px 10px 30px 0px rgba(0, 0, 0, 0.10)",
      },
      inset: {
        10.5: "43px",
        25: "101px",
        46: "186px",
        45: "180px",
        74: "297px",
        66: "266px",
      },
      spacing: {
        0.5: "2px",
      },
    },
  },
  plugins: [],
};
