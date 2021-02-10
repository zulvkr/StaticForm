const Group = require('./components/Group')
const Input = require('./components/Input')
const SelectField = require('./components/SelectField')

module.exports = function (eleventyConfig) {
    eleventyConfig.addPairedShortcode("BasicGroup", Group);
    eleventyConfig.addShortcode("BasicInput", Input);
    eleventyConfig.addShortcode("BasicSelectField", SelectField);
    eleventyConfig.addLayoutAlias("basic", 'theme/basic/index.njk');
}