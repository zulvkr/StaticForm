/**
 * Components are .11ty.js files that registered as Shortcodes
 * Components must return string or template literal
 */ 

const Group = require('./FieldGroup.11ty');
const SelectField = require('./SelectField.11ty');

/**
 * Attribute-level component is used to provide flexibility
 * to add more attributes in form layout.
 * For styling-only components consider using tailwind apply
 */

const select = require('./attributes/select.11ty');
const text = require('./attributes/text.11ty');


module.exports = {
    Group: Group,
    SelectField: SelectField,
    att: {
        select: select,
        text: text
    }
}