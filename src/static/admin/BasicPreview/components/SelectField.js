import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

export default ({ id, name, required, placeholder, enum: options }) => {

    if (placeholder) {
        placeholder = `<option selected disabled>${placeholder}</option>`
    }

    return html`
        <select 
        class="basic-input"
        id="${id}"
        name="${name}"
        ${required ? html`required` : ""}
        >
            ${placeholder ? placeholder : ""}
            ${options ? options.map(option => html`<option>${option}</option>`) : ""}
        </select>
    `
}