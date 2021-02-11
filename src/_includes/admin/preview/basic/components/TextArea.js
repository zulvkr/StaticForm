import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

export default ({ id, name, placeholder, required }) => {
    return html`
    <textarea id="${id}" name="${name}" rows="5" cols="33"
     ${required ? html`required` : ""} class="basic-input"
     >${placeholder ? placeholder : ""}</textarea>
    `
}