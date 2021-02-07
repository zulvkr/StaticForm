/**
 * @param {string} id 
 * @param {string} name 
 * @param {Boolean} required 
 */

module.exports = (id, name, required) => {
    return `
    class="base-input"
    id="${id}"
    name="${ name ? name : id }"
    ${ required ? "required" : ""}
    `
}