/**
 * This forms preview is built in a quite hackish way.
 * I am not sure if immutable.js traversing has been done the right way.
 * Put caution to not use style attribute here, possibly break react"
 */
import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

import Group from "./Group.js";

const FormsPreview = createClass({
    render() {
        // Data from NetlifyCMS
        const entry = this.props.entry;
        const fields = this.props.widgetsFor("form");

        /**
         * Render label and required mark
         * @param {object} data fields.getIn([n,"data"])
         */
        const renderLabel = data => {
            return html`
            <label class="base-label">
            ${data.get("label")}
            ${data.toJS().required ? html`
            <span class='text-red-500'>*</span>` : null}
            </label>
            `
        }


        /**
         * Render field preview not avilable
         * @param {object} data fields.getIn([n,"data"])
         */
        const renderPreviewNA = data => {
            return html`
            <div class="mb-6 py-10 w-full text-center bg-gray-200 text-gray-700">
                Field Preview for ${data.toJS().type} not available
            </div>
            `
        }

        /**
         * Render text field
         * @param {object} data fields.getIn([n,"data"])
         */
        const renderTextField = data => {
            return html`
            <div class="mb-6">
                ${renderLabel(data)}
                ${/* React break when using non-self-closing input tag here */''}
                <input class="base-input" type="text" placeholder="" />
            </div>
            `
        }

        /**
         * Render number field
         * @param {object} data fields.getIn([n,"data"])
         */
        const renderNumberField = data => {
            return html`
            <div class="mb-6">
                ${renderLabel(data)}
                ${/* React break when using non-self-closing input tag here */''}
                <input class="base-input" type="number" placeholder="" />
            </div>
            `
        }

        /**
         * Render email field
         * @param {object} data fields.getIn([n,"data"])
         */
        const renderEmailField = data => {
            return html`
            <div class="mb-6">
                ${renderLabel(data)}
                ${/* React break when using non-self-closing input tag here */''}
                <input class="base-input" type="email" placeholder="" />
            </div>
            `
        }

        /**
         * Render select field
         * @param {object} data fields.getIn([n,"data"])
         */
        const renderSelectField = data => {
            return html`
            <div class="mb-6">    
                ${renderLabel(data)}
                <select class="base-input">
                    ${/* enum array must be checked before mapping to prevent error */''}
                    ${data.toJS().enum ? data.get("enum").map(a => html`<option>${a}</option>`) : null}
                </select>
            </div>  
            `
        }

        /**
         * Render Field: Select Field or Text Field
         * @param {object} field fields.getIn([n,"data"])
         */
        const renderField = data => {
            if (data.toJS().type === "selectfield") {
                return html`
                ${renderSelectField(data)}`
            } else if (data.toJS().type === "numberfield") {
                return html`
                ${renderNumberField(data)}`
            } else if (data.toJS().type === "emailfield") {
                return html`
                ${renderEmailField(data)}`
            } else if (data.toJS().type === "textfield") {
                return html`
                ${renderTextField(data)}`
            } else {
                return html`
                ${renderPreviewNA(data)}`
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
                            <button class="base-button" disabled>Submit</button>
                        </div>
                    </form>
            `} else {
                return null;
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

CMS.registerPreviewTemplate("forms", FormsPreview);