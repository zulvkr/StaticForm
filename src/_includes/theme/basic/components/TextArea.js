module.exports = ({ id, name, placeholder, required }) => {
  return `
    <textarea
      id="${id}"
      name="${name ? name : id}"
      rows="5"
      cols="33"
      ${required ? "required" : ""}
      class="basic-input"
      placeholder="${placeholder ? placeholder : ""}"
    ></textarea>
  `;
};
