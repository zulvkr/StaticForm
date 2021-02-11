module.exports = ({checklist}) => {
    
    const checkBox = ({id, required, label}) => {
        return `
    <div>
        <input type="checkbox" id="${id}" name="${id}"
         class="basic-radio"
         ${required ? "required" : ""}>
        <label for="${id}">${label}</label>
    </div>
    `}
    
    return checklist.map((cb) => checkBox(cb)).join("");
}