/**
 * This forms preview is built in a quite hackish way.
 * I am not sure if immutable.js traversing has been done the right way.
 * Put caution to not use style attribute here, possibly break react"
 */
import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

import Group from "./components/Group.js";
import Input from "./components/Input.js";
import SelectField from "./components/SelectField.js";
import TextArea from "./components/TextArea.js";
import RadioButtons from "./components/RadioButtons.js";
import CheckList from "./components/CheckList.js";


const FormsPreview = createClass({
    render() {
        // Data from NetlifyCMS
        const entry = this.props.entry;
        const fields = this.props.widgetsFor("form");

        const renderField = data => {
            
            switch (data.toJS().type) {
                case "selectfield":
                    return SelectField(data.toJS())
                case "numberfield":
                case "emailfield":
                case "textfield":
                    return Input(data.toJS())
                case "textarea":
                    return TextArea(data.toJS())
                case "radio":
                    return RadioButtons(data.toJS())
                case "checklist":
                    return CheckList(data.toJS())
                default:
                    return html`
                    <div class="mb-6 py-10 w-full text-center bg-gray-200 text-gray-700">
                        Field Preview for ${data.toJS().type} not available
                    </div>
                    `
            }
        }

        const renderGroup = data => {
            return Group(renderField(data), data)
        }

        /**
         * Render Form conditionally only after user input
         * on form section
         * @param {boolean} condition fields.toArray()[0] !== undefined
         */
        const renderForm = (condition) => {
            if (condition) {
                return html`
                  <form id="main-form" 
                    class="max-w-xl py-5 mx-auto border-t-2 border-gray-500 border-dotted sm:border-t-2 sm:border-solid sm:shadow-xl sm:p-8 sm:border-gray-100 sm:rounded-lg">
                      ${fields.map(field => html`${renderGroup(field.get("data"))}`)}
                    <div class="flex flex-row-reverse">
                      <button type="Submit" class="basic-button" disabled>Submit</button>
                    </div>
                  </form>
            `} else {
                return "";
            }
        }

        return html`
                <header class="flex flex-col items-center mx-8">
                    <div
                        class="my-5 text-3xl tracking-tight text-center text-gray-600 transition sm:leading-normal sm:text-3xl sm:my-9 md:text-4xl">
                        ${entry.getIn(["data", "title"])}
                    </div>
                </header>

                <div class="px-5 py-10 mx-auto border-t border-gray-200 md:border-gray-800">

                    <article class="mb-5 overflow-auto prose">${this.props.widgetFor("body")}</article>
                    ${renderForm(fields.toArray()[0] !== undefined)}
                </div>            
      `;
    }
})

CMS.registerPreviewTemplate("basic", FormsPreview);
CMS.registerPreviewStyle("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap");