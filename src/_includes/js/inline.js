function submit(event) {
    const formData = new FormData(document.querySelector('form'))
    for (var pair of formData.entries()) {
        console.log(pair)
    }
    window.alert('Check your console 😁')
    event.preventDefault();
}

const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', submit);
}