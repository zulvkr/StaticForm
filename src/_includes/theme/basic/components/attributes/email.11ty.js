/**
 * @param {string} id 
 * @param {string} name 
 * @param {string} placeholder 
 * @param {Boolean} required 
 */

module.exports = (id, name, placeholder, required) => {
    return `
    class="basic-input"
    id="${id}"
    name="${name}"
    type="email"
    placeholder="${placeholder}"
    ${ required ? "required" : ""}
    `
}