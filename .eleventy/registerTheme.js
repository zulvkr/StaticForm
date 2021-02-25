const fs = require("fs");

/**
 * Add all theme listed in site.json
 * as Eleventy plugin
 */

module.exports = eleventyConfig => {
  try {
    let site = JSON.parse(fs.readFileSync("./src/_data/site.json", "utf8"));
    console.log("site configuration found!");
    themes = site.themes;
  } catch (err) {
    // Fall gracefully
    themes = ["basic"];
    console.error(
      `Error: site configuration not found, loading basic theme.: ${err}`
    );
  }

  let themes = [];

  const register = theme => {
    const themeConfig = `./src/_includes/theme/${theme}/theme.eleventy.js`;

    try {
      fs.accessSync(themeConfig, fs.constants.R_OK);
      console.log(theme + " theme found!");
      eleventyConfig.addPlugin(require("." + themeConfig));
    } catch (err) {
      console.error(
        `Error: ${theme} Eleventy config not found! Skipped. ${err}`
      );
    }
  };

  themes[0]
    ? themes.forEach(theme => register(theme))
    : console.log("Error: No theme selected");
};
