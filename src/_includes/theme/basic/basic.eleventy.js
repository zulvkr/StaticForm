/**
 * Components are .11ty.js files that registered as Shortcodes
 * Components must return string or template literal
 */ 

const basic = require('./basic');
const { GroupText, GroupNumber, GroupEmail, GroupSelect } = require('./components/Groups.11ty');


module.exports = function (eleventyConfig) {

    eleventyConfig.addShortcode("BasicGroupText", GroupText);
    eleventyConfig.addShortcode("BasicGroupEmail", GroupEmail);
    eleventyConfig.addShortcode("BasicGroupNumber", GroupNumber);
    eleventyConfig.addShortcode("BasicGroupSelect", GroupSelect);
    eleventyConfig.addShortcode("BasicForm", basic);
}