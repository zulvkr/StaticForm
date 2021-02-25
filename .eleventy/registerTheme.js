const fs = require("fs");

/**
 * This function adds all theme configuration file
 * listed in site.json to .eleventy.js using addPlugin method
 */

module.exports = eleventyConfig => {
  let themes = [];

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

  const register = theme => {
    const themeConfig = `./src/_includes/theme/${theme}/theme.eleventy.js`;

    try {
      // Check if theme configuration file exist.
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
