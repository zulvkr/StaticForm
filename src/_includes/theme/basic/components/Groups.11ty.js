const Group = require('./Group.11ty');
const text = require('./attributes/text.11ty');
const email = require('./attributes/email.11ty');
const number = require('./attributes/number.11ty');
const SelectField = require('./SelectField.11ty');

/**
 * 
 * @param {string} id 
 * @param {string} name 
 * @param {string} placeholder 
 * @param {Boolean} required 
 * @param {string} label 
 */
exports.GroupText = (id, name, placeholder, required, label) => {
    const content = `<input ${text(id, name, placeholder, required)}>` 
    return `
        ${Group(content, id, label)}
        `
}

/**
 * 
 * @param {string} id 
 * @param {string} name 
 * @param {string} placeholder 
 * @param {Boolean} required 
 * @param {string} label 
 */
exports.GroupEmail = (id, name, placeholder, required, label) => {
    const content = `<input ${email(id, name, placeholder, required)}>` 
    return `
        ${Group(content, id, label)}
        `
}

/**
 * 
 * @param {string} id 
 * @param {string} name 
 * @param {string} placeholder 
 * @param {Boolean} required 
 * @param {string} label 
 */
exports.GroupNumber = (id, name, placeholder, required, label) => {
    const content = `<input ${number(id, name, placeholder, required)}>` 
    return `
        ${Group(content, id, label)}
        `
}

/**
 * 
 * @param {string} id 
 * @param {string} name 
 * @param {string} placeholder 
 * @param {Boolean} required 
 * @param {Array} options 
 * @param {string} label 
 */
exports.GroupSelect = (id, name, placeholder, required, options, label) => {
    return `
        ${Group(SelectField(id, name, required, placeholder, options), id, label)}
        `
}