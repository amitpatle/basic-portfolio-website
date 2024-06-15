const scriptURL = 'https://script.google.com/macros/s/AKfycbxJMUy-BxaBLOQeknRCvexKIDH0MGtmbrSx-QRyXH0J48MEuyok15HNh52Kf36YCBlT/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Twój formularz został przesłany."))
    .then(() => { window.location.reload(); })
    .catch(errror => console.error('Error!', error.message))
})