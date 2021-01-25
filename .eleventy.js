const inspect = require("util").inspect;

module.exports = function (eleventyConfig) {

  // Use .eleventyignore
  eleventyConfig.setUseGitIgnore(false);

  // Register Shortcodes
  const Form = require("./src/_includes/components/Index");
  eleventyConfig.addShortcode("Text", Form.att.text);
  eleventyConfig.addShortcode("Select", Form.att.select);
  eleventyConfig.addShortcode("SelectField", Form.SelectField);
  eleventyConfig.addPairedShortcode("Group", Form.Group);


  // Trigger reload when CSS updated
  if (!process.env.ELEVENTY_PRODUCTION) {
    eleventyConfig.addWatchTarget("src/_tmp/style.css");
    eleventyConfig.addPassthroughCopy({ "src/_tmp/style.css": "./style.css" });
  }

  eleventyConfig.addPassthroughCopy({
    "favicon.png": "./favicon.png",
    "src/static/admin/": "./admin/",
    "src/static/img/": "./img"
  });

  // Print eleventy data object
  eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`);

  return {
    dir: {
      input: "src"
    }
  };
}