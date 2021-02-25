"use strict";

const processData = (data, encoding) => {
  const makeArray = iterator => {
    const array = [];
    for (const entry of iterator.entries()) {
      array.push(entry);
    }
    return array;
  };

  const flatten = arr =>
    arr.reduce(
      (accumulate, entry, index) =>
        index === 0
          ? entry[0] + ": " + entry[1]
          : accumulate + "\n" + entry[0] + ": " + entry[1],
      ""
    );

  const format = string => title + "\n\n" + string;

  const encode = string =>
    encoding === "url" ? encodeURIComponent(string) : string;

  return encode(format(flatten(makeArray(data))));
};

const whatsAppApi = (waNumber, text) =>
  `https://wa.me/${waNumber}?text=${text}`;

const submit = event => {
  event.preventDefault();
  const formData = new FormData(form);
  const openWA = () =>
    open(whatsAppApi(waNumber, processData(formData, "url")), "_self");

  if (mode === "log") {
    confirm(`Send to ${waNumber}?` + "\n\n" + processData(formData))
      ? openWA()
      : alert("message not sent");
    return;
  }

  openWA();
};

const form = document.getElementById("main-form");

if (form) {
  form.addEventListener("submit", submit);
}
