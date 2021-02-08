module.exports = ({ id, name, placeholder="", required, type }) => {

    let inputType = "";

    switch (type) {
        case "textfield":
            inputType = "text";
            break;
        case "numberfield":
            inputType = "number";
            break;
        case "emailfield":
            inputType = "email";
            break;
        default:
            inputType = "text";
    }

    return `
    <input 
    class="basic-input"
    id="${id}"
    name="${name}"
    type="${inputType}"
    placeholder="${placeholder}"
    ${required ? "required" : ""}>
    `
}