const inspect = require("util").inspect;

module.exports = function (eleventyConfig) {

  // Use .eleventyignore
  //
  eleventyConfig.setUseGitIgnore(false);

  const Form = require("./src/_includes/components/_all");

  eleventyConfig.addShortcode(
    "Text", Form.att.Text); /* arguments: id, name, placeholder, required:bool */

  eleventyConfig.addShortcode(
    "Select", Form.att.Select); /* arguments: id, name, required:bool */

  eleventyConfig.addShortcode(
    "SelectField", Form.SelectField); /* arguments: id, name, required:bool, placeholder:string||null, [options] */

  eleventyConfig.addPairedShortcode(
    "Group", Form.Group); /* arguments: content, for, label, required */


  // Trigger reload when CSS updated
  //
  if (!process.env.ELEVENTY_PRODUCTION) {
    eleventyConfig.addWatchTarget("src/_tmp/style.css");
    eleventyConfig.addPassthroughCopy({ "src/_tmp/style.css": "./style.css" });
  }

  eleventyConfig.addPassthroughCopy({
    "favicon.png": "./favicon.png",
    "src/static/admin/": "./admin/",
    "src/static/img/": "./img"
  });

  eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`);

  return {
    dir: {
      input: "src"
    }
  };
}