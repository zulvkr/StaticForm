"use strict";

const processData = (data, encoding) => {
  let dataArray = [];

  for (const entry of data.entries()) {
    dataArray.push(entry);
  }

  const flatten = (text, entry, index) =>
    index === 0
      ? entry[0] + ":" + entry[1]
      : text + "\n" + entry[0] + ":" + entry[1];

  const result = title + "\n\n" + dataArray.reduce(flatten, "");

  return encoding === "url" ? encodeURIComponent(result) : result;
};

const submit = event => {
  event.preventDefault();
  const formData = new FormData(form);

  mode === "log"
    ? console.log(waNumber + "\n\n" + processData(formData))
    : window.open(`https://wa.me/${waNumber}?text=${processData(formData, "url")}`);
};

const form = document.getElementById("main-form");

if (form) {
  form.addEventListener("submit", submit);
}
