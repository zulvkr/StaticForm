/**
 * 
 * @param {string} id 
 * @param {string} name 
 * @param {Boolean} required 
 */

module.exports = (id, name, required) => {
    return `
    class="input bg-select-arrow"
    id="${id}"
    name="${ name ? name : id }"
    ${ required ? "required" : ""}
    `
}