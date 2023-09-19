/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px" },
    },
    extend: {
      colors: {
        lightgreen: "#39DB4A",
        palmgreen: "#C1F1C6",
        red: "#FF6868",
        black: "#4A4A4A",
        yellow: "#FFE605",
      },
      borderRadius: {
        40: "40px",
        "50percent": "50%",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      width: {
        W500: "500px",
        W700: "540px",
      },
      height: {
        H500: "500px",
        H780: "630px",
      },
    },
  },
  plugins: [],
};
