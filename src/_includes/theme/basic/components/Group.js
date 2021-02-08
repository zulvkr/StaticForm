module.exports = (content, {id, label, required})=> {
    return `
    <div class="mb-6">
        <label class="basic-label" for="${id}">
            ${label}
            ${required ? "<span class='text-red-500'>*</span>" : "" }
        </label>
        ${content}
    </div>
    `
}