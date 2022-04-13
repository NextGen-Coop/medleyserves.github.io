var form = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("contact-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.classList.add("success");
    status.innerHTML = "Thank you, we will contact you soon.";
    form.reset()
  }).catch(error => {
    status.classList.add("error");
    status.innerHTML = "Your message was not sent. Please try again later.";
  });
}
form.addEventListener("submit", handleSubmit)
