// This Form Preview is currently very hackish, since I'm not
// proficient in react and htm. Spent tons of time to traverse immutable.js

import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

const FormsPreview = createClass({
    render() {
        // get data from netlifyCMS
        const entry = this.props.entry;
        const fields = this.props.widgetsFor("form");

        // render textfield or selectfield
        const renderField = field => {
            if (field.toJS().data.type === "selectfield") {
                return html`
                <div class="mb-6">    
                    <label class="label">${field.getIn(["data", "label"])}</label>
                    <select class="input bg-select-arrow">

                        <!-- render options, check enum is available to prevent get() error --> 
                        ${field.get("data").toJS().enum ? field
                            .getIn(["data", "enum"])
                            .map(a => html`<option>${a}</option>`) : null}

                    </select>
                </div>               
                `;
            } else {
                return html`
                <div class="mb-6">
                    <label class="label">${field.getIn(["data", "label"])}</label>
                    <input class="input" type="text" placeholder="" />
                </div>
                `;
            }
        }

        // render form if user already input
        const renderForm = (condition) => {
            if (condition) {
                return html`
                    <form class="max-w-xl py-5 mx-auto border-t-2 border-gray-500 border-dotted sm:border-t-2 sm:border-solid sm:shadow-xl sm:p-8 sm:border-gray-100 sm:rounded-lg">
                        ${fields.map(field => html`${renderField(field)}`)}
                        <div class="flex flex-row-reverse">
                            <button type="submit" class="button">Submit</button>
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
                    ${entry.getIn(["data", "title"], null)}
                </div>

                <div class="mx-auto px-5 border-t border-gray-200 py-10 sm:border-t-4 sm:border-gray-500 sm:border-dotted">
                    <article class="overflow-auto mb-5 prose lg:prose-lg">
                        ${this.props.widgetFor("body")}
                    </article>

                    <!-- Check array is not empty before render to prevent artifact on initial render -->  
                    ${renderForm(fields.toArray()[0] !== undefined)}
                </div>
            </main>
      `;
    }
})


CMS.registerPreviewTemplate("forms", FormsPreview);