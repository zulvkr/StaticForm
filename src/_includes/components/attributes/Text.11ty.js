// must return strings or template literals

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