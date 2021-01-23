module.exports = (content, forId, label) => {
    const Label = require('./attributes/Label.11ty');

    return `
    <div class="mb-6">
        <label ${Label(forId)}>${label}</label>
        ${content}
    </div>
    `
}