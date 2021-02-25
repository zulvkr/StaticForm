require("dotenv").config();
const { inspect } = require("util");
const dateFormat = require("dateformat");
const registerTheme = require("./.eleventy/registerTheme");
const minifyHtml = require("./.eleventy/minifyHtml");
const obfuscateJs = require("./.eleventy/obfuscateJs");

const env = process.env.NODE_ENV;

module.exports = function(eleventyConfig) {
  registerTheme(eleventyConfig);

  // print Eleventy data
  eleventyConfig.addFilter(
    "debug",
    content => `<pre>${inspect(content)}</pre>`
  );

  eleventyConfig.addFilter("readable", date => dateFormat(date, "mediumDate"));

  // obfuscate JavaScript
  eleventyConfig.addFilter("obfuscate", js => obfuscateJs(js));

  // minify output
  eleventyConfig.addTransform("htmlmin", minifyHtml);

  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addWatchTarget("./src/admin/");

  eleventyConfig.addPassthroughCopy({
    "src/img/": "./img/",
    "src/admin/aboutPreview.js": "./admin/aboutPreview.js",
    "src/_includes/_tmp/style.css": "./style.css"
  });

  return {
    dir: {
      input: "src"
    }
  };
};
