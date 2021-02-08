import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

export default (content, {id, label, required}) => {
    return html`
    <div class="mb-6">
        <label class="basic-label" for="${id}">
            ${label}
            ${required ? html`<span class='text-red-500'>*</span>` : "" }
        </label>
        ${content}
    </div>
    `
}

