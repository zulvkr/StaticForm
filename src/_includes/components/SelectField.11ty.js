module.exports = (id, name, required, placeholder, options) => {
    const Select = require('./attributes/Select.11ty');

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