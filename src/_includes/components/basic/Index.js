/**
 * Components are .11ty.js files that registered as Shortcodes
 * Components must return string or template literal
 */ 

const Group = require('./FieldGroup.11ty');
const SelectField = require('./SelectField.11ty');

/**
 * Attribute-level component provide more flexibility
 * to add attributes when layouting.
 * 
 * Class and style only component can use tailwind 
 * "@apply" feature to have better style sharing 
 * between Eleventy and Netlify CMS
 */

const select = require('./attributes/select.11ty');
const text = require('./attributes/text.11ty');
const email = require('./attributes/email.11ty')
const number = require('./attributes/number.11ty')


module.exports = {
    Group: Group,
    SelectField: SelectField,
    att: {
        select: select,
        text: text,
        email: email,
        number: number
    }
}