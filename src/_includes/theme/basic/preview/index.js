/**
 * htm is an awesome module created by the team who create Preact.js
 * as alternative to JSX that run in browser and has minimal size.
 *
 * The syntax is is extending template literal, which is the same way
 * we create 11ty component.
 *
 * Watch out some differences and quirkness of React + htm:
 * - Input tag must be self closed manually: <input />
 * - Style attributes must not be used
 * - All string ("" / `` / '') must be replaced with html`string`
 * - Array is evaluated at every end of user input. Using map()
 *   method before array exist can break React. Ternary operator 
 *   is very useful here.
 */

import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

import Group from "./components/Group.js";
import Input from "./components/Input.js";
import SelectField from "./components/SelectField.js";
import TextArea from "./components/TextArea.js";
import RadioButtons from "./components/RadioButtons.js";
import CheckList from "./components/CheckList.js";

const Basic = createClass({
  render() {
    /**
     * Entry and widgetsFor props are Immutable.
     *
     * Use Immutable method like get() / getIn() to access the data.
     * Use toJS() method to convert it to native JS object.
     *
     * For further guide, see:
     * - https://immutable-js.github.io/immutable-js/
     * - https://www.netlifycms.org/docs/customization/
     */
    const entry = this.props.entry;
    const fields = this.props.widgetsFor("form");

    const renderField = data => {
      switch (data.type) {
        case "selectfield":
          return SelectField(data);
        case "numberfield":
        case "emailfield":
        case "textfield":
          return Input(data);
        case "textarea":
          return TextArea(data);
        case "radio":
          return RadioButtons(data);
        case "checklist":
          return CheckList(data);
        default:
          return html`
            <div
              class="mb-6 py-10 w-full text-center bg-gray-200 text-gray-700"
            >
              Field Preview for ${data.type} not available
            </div>
          `;
      }
    };

    const renderGroup = data => {
      return Group(renderField(data), data);
    };

    const renderForm = fields => {
      // Check array is not empty before rendering the form
      if (fields.toArray()[0] !== undefined) {
        return html`
          <form
            id="main-form"
            class="max-w-xl py-5 mx-auto border-t-2 border-gray-500 border-dotted sm:border-t-2 sm:border-solid sm:shadow-xl sm:p-8 sm:border-gray-100 sm:rounded-lg"
          >
            ${fields.map(field => renderGroup(field.get("data").toJS()))}
            <div class="flex flex-row-reverse">
              <button type="Submit" class="basic-button" disabled>
                Submit
              </button>
            </div>
          </form>
        `;
      } else {
        return "";
      }
    };

    return html`
      <header class="flex flex-col items-center mx-8">
        <div
          class="my-5 text-3xl tracking-tight text-center text-gray-600 transition sm:leading-normal sm:text-3xl sm:my-9 md:text-4xl"
        >
          ${entry.getIn(["data", "title"])}
        </div>
      </header>

      <div
        class="px-5 py-10 mx-auto border-t border-gray-200 md:border-gray-800"
      >
        <article class="mb-5 overflow-auto prose">
          ${this.props.widgetFor("body")}
        </article>
        ${renderForm(fields)}
      </div>
    `;
  }
});

CMS.registerPreviewTemplate("basic", Basic);
CMS.registerPreviewStyle(
  "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap"
);
