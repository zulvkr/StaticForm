const Group = require('./components/Group')
const Input = require('./components/Input')
const RadioButtons = require('./components/RadioButtons')
const SelectField = require('./components/SelectField')
const TextArea = require('./components/TextArea')
const CheckList = require('./components/CheckList')

module.exports = function (eleventyConfig) {
    eleventyConfig.addPairedShortcode("BasicGroup", Group);
    eleventyConfig.addShortcode("BasicInput", Input);
    eleventyConfig.addShortcode("BasicSelectField", SelectField);
    eleventyConfig.addShortcode("BasicTextArea", TextArea);
    eleventyConfig.addShortcode("BasicRadioButtons", RadioButtons);
    eleventyConfig.addShortcode("BasicCheckList", CheckList);
    eleventyConfig.addLayoutAlias("basic", 'theme/basic/index.njk');

    eleventyConfig.addPassthroughCopy({
        "src/_includes/theme/basic/preview/": "./admin/preview/basic/"
      });
}