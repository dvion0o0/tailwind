module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkCyan: "hsl(185, 75%, 39%)",
      darkBlue: "hsl(229, 23%, 23%)",
      grayBlue: "hsl(227, 10%, 46%)",
      darkGray: "hsl(0, 0%, 59%)",
    },
    width: {
      c: "90vw",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      change: "hsl(185, 75%, 39%)",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
