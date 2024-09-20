/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        110: "110%",
      },

      keyframes: {
        "rotate-reverse": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
        scrollLeft: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-100%, 0, 0)" },
        },
        scrollRight: {
          "0%": { transform: "translate3d(0, 0, 0) rotate(180deg)" },
          "100%": { transform: "translate3d(100%, 0, 0) rotate(180deg)" },
        },
      },
      animation: {
        "rotate-reverse": "rotate-reverse 5s linear infinite",
        "scroll-left": "scrollLeft 260s linear infinite",
        "scroll-right": "scrollRight 260s linear infinite",
      },
      colors: {
        yellow: "#FFCB46",
        grey: {
          dark: "#BEBEBE",
        },
        dark: {
          primary: "#373737",
        },
      },
      fontFamily: {
        grtskGiga: ["GrtskGiga"],
        bodyGrotesque: ["Body-Grotesque"],
      },
    },
  },
  plugins: [],
};
