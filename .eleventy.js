require("dotenv").config();
const { inspect } = require("util");
const dateFormat = require("dateformat");
const registerTheme = require("./.eleventy/registerTheme");
const minifyHtml = require("./.eleventy/minifyHtml");

module.exports = function(eleventyConfig) {
  // Use .eleventyignore
  eleventyConfig.setUseGitIgnore(false);

  // Register Themes
  registerTheme(eleventyConfig);

  // Trigger reload when CSS updated
  if (!process.env.ELEVENTY_PRODUCTION) {
    eleventyConfig.addPassthroughCopy({ "src/_tmp/style.css": "./style.css" });
  }

  eleventyConfig.addPassthroughCopy({
    "src/img/": "./img/",
    "src/admin/gitpr.js": "./admin/gitpr.js"
  });

  eleventyConfig.addWatchTarget("./src/admin/");

  // Print eleventy data object
  eleventyConfig.addFilter(
    "debug",
    content => `<pre>${inspect(content)}</pre>`
  );

  // Format readable date
  eleventyConfig.addFilter("readable", date => dateFormat(date, "mediumDate"));

  // Minify HTML, including inlined JavaScript
  eleventyConfig.addTransform("htmlmin", minifyHtml);

  return {
    dir: {
      input: "src"
    }
  };
};
