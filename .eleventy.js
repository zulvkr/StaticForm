const inspect = require("util").inspect;
const htmlmin = require("html-minifier-terser");
const dateFormat = require("dateformat");

module.exports = function (eleventyConfig) {

  // Use .eleventyignore
  eleventyConfig.setUseGitIgnore(false);

  // Register Basic Theme Shortcodes
  eleventyConfig.addPlugin(require("./src/_includes/theme/basic/basic.eleventy"))

  // Trigger reload when CSS updated
  if (!process.env.ELEVENTY_PRODUCTION) {
    eleventyConfig.addWatchTarget("src/_tmp/style.css");
    eleventyConfig.addPassthroughCopy({ "src/_tmp/style.css": "./style.css" });
  }

  eleventyConfig.addPassthroughCopy({
    "src/_includes/admin/": "./admin/",
    "src/img/": "./img/"
  });

  // Print eleventy data object
  eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`);

  // Format Date
  eleventyConfig.addFilter("readable", (date) => dateFormat(date, "mediumDate"));

  // Minify JS in Production
  eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
    code,
    callback
  ) {
    try {
      if (process.env.ELEVENTY_PRODUCTION) {
        const minified = await terser.minify(code);
        callback(null, minified.code);
      } else {
        callback(null, code)
      }
    } catch (err) {
      console.error("Terser error: ", err);
      callback(null, code);
    }
  });

  // Minify HTML output in Production
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (process.env.ELEVENTY_PRODUCTION && outputPath.indexOf(".html") > -1) {
      const minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true
      });
      return minified;
    }
    return content;
  });

  return {
    dir: {
      input: "src"
    }
  };
}