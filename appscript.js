const scriptURL = "https://script.google.com/macros/s/AKfycbx8iIZF8CZd6OyTufZbyHMIlKxhY2lzzr78CwRIyE_rDNBWpqc5gg27wSXmCx0YYDkpGw/exec" 

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Thank You, your message has been submitted!"))
    .then(() => {window.location.reload(); })
    .catch(error => console.error('Error!', error))
})