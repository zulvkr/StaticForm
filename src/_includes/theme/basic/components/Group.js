module.exports = (content, { id, label, required, type }) => {
  if (type === "radio" || type === "checklist") {
    return `
        <div class="mb-6">
            <p class="basic-label">
                ${label}
                ${required ? "<span class='text-red-500'>*</span>" : ""}
            </p>
            ${content}
        </div>       
        `;
  }

  return `
    <div class="mb-6">
        <label class="basic-label" for="${id}">
            ${label}
            ${required ? "<span class='text-red-500'>*</span>" : ""}
        </label>
        ${content}
    </div>
    `;
};
