module.exports = ({ id, name, required, enum: options }) => {
  const radioButton = (option, i) => {
    return `
    <div>
        <input type="radio" id="${id + i}" name="${
      name ? name : id
    }" value="${option}"
         class="basic-radio"
         ${required ? "required" : ""}>
        <label for="${id + i}">${option}</label>
    </div>
    `;
  };

  return options.map((option, i) => radioButton(option, i)).join("");
};
