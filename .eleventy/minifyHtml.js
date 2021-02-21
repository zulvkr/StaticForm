const htmlmin = require("html-minifier-terser");
const env = process.env.NODE_ENV;

module.exports = (content, outputPath) =>
  env === "production" && outputPath.indexOf(".html") > -1
    ? htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true
      })
    : content;
