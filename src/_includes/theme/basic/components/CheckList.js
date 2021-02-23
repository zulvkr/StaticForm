module.exports = ({ checklist }) => {
  const checkBox = ({ id, name, required, label }) => {
    return `
      <div>
          <input
            type="checkbox" id="${id}"
            name="${name ? name : id}"
            class="basic-radio"
            ${required ? "required" : ""}
          >
          <label for="${id}">
            ${label}
            ${required ? "<span class='text-red-500'>*</span>" : ""}
          </label>
      </div>
    `;
  };

  return checklist.map(cb => checkBox(cb)).join("");
};
