const { GroupText, GroupNumber, GroupEmail, GroupSelect } = require('./components/Groups.11ty');

module.exports = (fields, name, mode) => {
    const fieldIs = (field) => {
        const { id, required, label, enum: options, placeholder, type } = field;
        switch (type) {
            case "textfield":
                return GroupText(id, id, "", required, label)
            case "numberfield":
                return GroupNumber(id, id, "", required, label)
            case "emailfield":
                return GroupEmail(id, id, "", required, label)
            case "selectfield":
                return GroupSelect(id, id, null, required, options, label)
            default:
                return GroupText(id, id, "", required, label)
        }
    }

    return `
    <form
     class="max-w-xl py-5 mx-auto border-t-2 border-gray-500 border-dotted sm:border-t-2 sm:border-solid sm:shadow-xl sm:p-8 sm:border-gray-100 sm:rounded-lg"
     id="main-form" 
     name="${name}" 
     ${ mode === "netlify" ? "data-netlify=true" : "" }>
        ${fields.map(field => fieldIs(field)).join("")}
        <div class="flex flex-row-reverse">
            <button type="Submit" class="base-button">Submit</button>
        </div>
    </form>
    `
}