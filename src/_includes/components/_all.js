const Group = require('./FieldGroup.11ty');
const SelectField = require('./SelectField.11ty');

const Button = require('./attributes/Button.11ty');
const Label = require('./attributes/Label.11ty');
const Select = require('./attributes/Select.11ty');
const Text = require('./attributes/Text.11ty');

    
module.exports = {
    Group: Group,
    SelectField: SelectField,
    att: {
        Button: Button,
        Label: Label,
        Select: Select,
        Text: Text
    }
}