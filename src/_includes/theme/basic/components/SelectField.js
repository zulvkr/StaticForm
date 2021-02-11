module.exports = ({ id, name, required, placeholder, enum: options }) => {

    if (placeholder) {
        placeholder = `<option selected disabled>${placeholder}</option>`
    }

    return `
        <select 
        class="basic-input"
        id="${id}"
        name="${name? name : id}"
        ${required ? "required" : ""}
        >
            ${placeholder ? placeholder : ""}
            ${options.map(option => `<option>${option}</option>`).join("")}
        </select>
    `
}