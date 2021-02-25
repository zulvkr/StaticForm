const cssnano = require("cssnano");
const env = process.env.NODE_ENV;

module.exports = {
  plugins: [
    require("postcss-easy-import"),
    require("tailwindcss")("./src/styles/tailwind.config.js"),
    env === "production" ? require("autoprefixer") : null,
    env === "production"
      ? cssnano({ preset: "default" })
      : null
  ]
};
