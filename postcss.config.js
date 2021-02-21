const cssnano = require("cssnano");
const env = process.env.NODE_ENV;

module.exports = {
  plugins: [
    require("postcss-easy-import"), // Importing CSS in theme folder by Glob
    require("tailwindcss")("./src/styles/tailwind.config.js"),
    env === "production" ? require("autoprefixer") : null,
    env === "production"
      ? cssnano({ preset: "default" })
      : null
  ]
};
