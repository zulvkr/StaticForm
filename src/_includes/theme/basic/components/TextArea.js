module.exports = ({id, name, placeholder,required}) => {
    return `
    <textarea id="${id}" name="${name}" rows="5" cols="33"
     ${required ? "required" : ""} class="basic-input"
     >${placeholder ? placeholder : ""}</textarea>
    `
}