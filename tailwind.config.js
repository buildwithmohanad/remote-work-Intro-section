module.exports = {
  content: ["./**/*.{html,js}"],
  media: false,
  theme: {
    extend: {
      fontFamily: {
        primary: ["Epilogue", "sans-serif"],
      },
      colors: {
        almostWhite: "hsl(0, 0%, 98%)",
        mediumGray: "hsl(0, 0%, 41%)",
        almostBlack: "hsl(0, 0%, 8%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
