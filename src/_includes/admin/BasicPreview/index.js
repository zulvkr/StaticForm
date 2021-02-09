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

const FormsPreview = createClass({
    render() {
        // Data from NetlifyCMS
        const entry = this.props.entry;
        const fields = this.props.widgetsFor("form");

        const renderField = data => {

            switch (data.toJS().type) {
                case "selectfield":
                    return html`${Group(SelectField(data.toJS()), data.toJS())}`
                case "numberfield":
                case "emailfield":
                case "textfield":
                    return html`${Group(Input(data.toJS()), data.toJS())}`
                default:
                    return html`
                    <div class="mb-6 py-10 w-full text-center bg-gray-200 text-gray-700">
                        Field Preview for ${data.toJS().type} not available
                    </div>
                    `
            }
        }

        /**
         * Render Form conditionally only after user input
         * on form section
         * @param {boolean} condition fields.toArray()[0] !== undefined
         */
        const renderForm = (condition) => {
            if (condition) {
                return html`
                    <form class="max-w-xl py-5 mx-auto border-t-2 border-gray-500 border-dotted sm:border-t-2 sm:border-solid sm:shadow-xl sm:p-8 sm:border-gray-100 sm:rounded-lg">
                        ${fields.map(field => html`${renderField(field.get("data"))}`)}
                        <div class="flex flex-row-reverse">
                            <button class="basic-button" disabled>Submit</button>
                        </div>
                    </form>
            `} else {
                return "";
            }
        }

        return html`
            <main>
                <div class="bg-gradient-to-r from-blue-300 via-green-300 to-green-200 h-3"></div>
                <div class="tracking-tight text-center text-3xl my-5 sm:leading-normal sm:text-5xl sm:my-9 text-gray-600 transition font-bold">
                    ${entry.getIn(["data", "title"])}
                </div>
                <div class="mx-auto px-5 border-t border-gray-200 py-10 sm:border-t-4 sm:border-gray-500 sm:border-dotted">
                    <article class="overflow-auto mb-5 prose lg:prose-lg">
                        ${this.props.widgetFor("body")}
                    </article>
                    ${renderForm(fields.toArray()[0] !== undefined)}
                </div>
            </main>
      `;
    }
})

CMS.registerPreviewTemplate("basic", FormsPreview);
CMS.registerPreviewStyle("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap");