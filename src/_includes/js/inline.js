'use strict';

/**
 * Process data by input for output
 * @param {Object} data formData Object  
 * @param {string} separator separate between form entries
 * @param {Boolean} showID show id in the output
 * @param {Boolean} uri true -> encodeURI
 */

function processData(data, separator, showId, uri) {

    let entries = [];

    for (const pair of data.entries()) {
        entries.push([pair[0], pair[1]])
    }

    const mapId = (pair) => {
        if (showId) {
            return pair[0] + ": " + pair[1];
        } else {
            return pair[1];
        }
    }

    const encode = (item) => {
        if (item === "\n") {
            return "%0A"
        } else {
            return encodeURIComponent(item);
        }
    }

    const mapUri = (item) => {
        if (uri) {
            return encode(item) + encode(separator);
        } else {
            return item + separator;
        }
    }

    let text = "";

    entries.map(i => mapId(i))
        .map(i => mapUri(i))
        .forEach(i => {
            text += i
        });

    if (uri) {
        text = text.slice(0, text.length - encode(separator).length)
    } else {
        text = text.slice(0, text.length - separator.length)
    }

    return text;
}

function waURL(number, text) {
    return `https://wa.me/${number}?text=${text}`
};


function submit(event) {
    event.preventDefault();
    const formData = new FormData(form);

    if (mode === "log") {
        stringData = processData(formData, "\n", true, false);
        window.alert("Check your console 🚧\n\nSend to:\n+" + waNumber + "\n\nText:\n" + stringData)
        console.log("Check your console 🚧\n\nSend to:\n+" + waNumber + "\n\nText:\n" + stringData)
    } else if (mode === "netlify") {
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        }).then(() => console.log('Form successfully submitted')).catch((error) =>
            alert(error))
    } else {
        stringData = processData(formData, "#", false, true);
        window.open(waURL(waNumber, stringData));
    }
}

form = document.getElementById("main-form");

if (form) {
    form.addEventListener('submit', submit);
}