module.exports = {
  purge: ["./_site/**/*.html", "./_site/**/*.js"],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["poppins", "ui-sans-serif", "system-ui"]
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")]
};
