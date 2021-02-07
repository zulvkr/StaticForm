/**
 * Components are .11ty.js files that registered as Shortcodes
 * Components must return string or template literal
 */ 

const basic = require('./basic');
const { GroupText, GroupNumber, GroupEmail, GroupSelect } = require('./components/Groups.11ty');


module.exports = function (eleventyConfig) {

    eleventyConfig.addShortcode("BaseGroupText", GroupText);
    eleventyConfig.addShortcode("BaseGroupEmail", GroupEmail);
    eleventyConfig.addShortcode("BaseGroupNumber", GroupNumber);
    eleventyConfig.addShortcode("BaseGroupSelect", GroupSelect);
    eleventyConfig.addShortcode("BaseForm", basic);
}