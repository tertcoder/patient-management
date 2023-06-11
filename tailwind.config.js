module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      animation: {
        fadeOut: "fadeOut 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeOut: {
          "0%, 100%": { opacity: "1", scale: "1" },
          "50%": { opacity: ".5", scale: "1.5" },
        },
      },
    },
  },
  plugins: [],
};
