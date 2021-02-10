function processData(data) {
    let text = "";
    for (var pair of data.entries()) {
        text = text + pair[1] + "#";
    }
    text = text.slice(0, text.length - 1)
    return text;
}

function waURL(number, text) {
    return `https://wa.me/${number}?text=${text}`
};


function submit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    stringData = processData(formData);

    if (mode === "log") {
        window.alert("check your console 🚧")
        console.log(waNumber+":"+stringData)
    } else if (mode === "netlify") {
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        }).then(() => console.log('Form successfully submitted')).catch((error) =>
            alert(error))
    } else {
        encoded = encodeURIComponent(stringData);
        window.open(waURL(waNumber, encoded));
    }
}

form = document.getElementById("main-form");

if (form) {
    form.addEventListener('submit', submit);
}