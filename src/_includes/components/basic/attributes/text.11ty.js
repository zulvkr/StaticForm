/**
 * @param {string} id 
 * @param {string} name 
 * @param {string} placeholder 
 * @param {Boolean} required 
 */

module.exports = (id, name, placeholder, required) => {
    return `
    class="input"
    id="${id}"
    name="${name}"
    type="text"
    placeholder="${placeholder}"
    ${ required ? "required" : ""}
    `
}