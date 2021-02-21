const cssnano = require("cssnano");

module.exports = {
  plugins: [
    require("postcss-easy-import"), // Importing CSS in theme folder by Glob
    require("tailwindcss")("./src/styles/tailwind.config.js"),
    process.env.NODE_ENV === "production" ? require("autoprefixer") : null,
    process.env.NODE_ENV === "production"
      ? cssnano({ preset: "default" })
      : null
  ]
};
