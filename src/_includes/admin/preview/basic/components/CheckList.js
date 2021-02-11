import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

export default ({ checklist }) => {

    const checkBox = ({id, required, label}) => {
        return html`
    <div>
        <input type="checkbox" id="${id}" name="${id}"
         class="basic-radio"
         ${required ? html`required` : ""}/>
        <label for="${id}">${label}</label>
    </div>
    `}

    return checklist ? checklist.map((cb) => checkBox(cb)) : "";
}