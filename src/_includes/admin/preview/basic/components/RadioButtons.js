import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

export default ({id, name, required, enum: options}) => {
    
    const radioButton = (option, i) => {
        return html`
    <div>
        <input type="radio" id="${id+i}" name="${name}" value="${option}"
         class="basic-radio"
         ${required ? "required" : ""}/>
        <label for="${id+i}">${option}</label>
    </div>
    `}
    
    return options ? options.map((option, i) => radioButton(option, i)) : "";
}