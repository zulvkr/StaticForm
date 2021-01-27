/**
 * @param {string} id 
 * @param {string} name 
 * @param {Boolean} required 
 * @param {string} placeholder Null -> no placeholder
 * @param {Array} options 
 */

module.exports = (id, name, required, placeholder, options) => {
    const Select = require('./attributes/select.11ty');

    let optionHtml = "";

    if(Array.isArray(options)) {
        options.forEach(option => {
            optionHtml += `<option>${option}</option>`;
        });
    }

    if(placeholder) {
        placeholder = `<option selected disabled>${placeholder}</option>`
    }

    return `
        <select ${Select(id, name, required)}>
            ${placeholder ? placeholder : ""}
            ${optionHtml}
        </select>
    `
}