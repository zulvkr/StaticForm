const htmlmin = require("html-minifier-terser");

module.exports = (content, outputPath) => {
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
}