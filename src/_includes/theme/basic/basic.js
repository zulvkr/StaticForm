const { GroupText, GroupNumber, GroupEmail, GroupSelect } = require('./components/Groups.11ty');

module.exports = (fields, mode) => {
    const fieldIs = (field) => {
        const { id, name, required, label, enum: options, placeholder, type } = field;
        switch (type) {
            case "textfield":
                return GroupText(id, name, "", required, label)
            case "numberfield":
                return GroupNumber(id, name, "", required, label)
            case "emailfield":
                return GroupEmail(id, name, "", required, label)
            case "selectfield":
                return GroupSelect(id, name, null, required, options, label)
            default:
                return GroupText(id, name, "", required, label)
        }
    }

    return `
    <form
     class="max-w-xl py-5 mx-auto border-t-2 border-gray-500 border-dotted sm:border-t-2 sm:border-solid sm:shadow-xl sm:p-8 sm:border-gray-100 sm:rounded-lg"
     id="main-form" 
     name="main-{{ page.fileSlug }}" 
     ${ mode === "netlify" ? "data-netlify=true" : "" }>
        ${fields.map(field => fieldIs(field)).join("")}
        <div class="flex flex-row-reverse">
            <button type="Submit" class="button">Submit</button>
        </div>
    </form>
    `
}