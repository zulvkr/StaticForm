module.exports = (content, forId, label,required) => {
    return `
    <div class="mb-6">
        <label class="label" for="${forId}">
            ${label}
            ${required ? "<span class='text-red-500'>*</span>" : null }
        </label>
        ${content}
    </div>
    `
}