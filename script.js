const popup = document.getElementById("contact-popup");
const form = document.getElementById("contact-form");
const responseMsg = document.getElementById("response-message");

function togglePopup() {
  popup.classList.toggle("hidden");
  responseMsg.classList.add("hidden");
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const data = new FormData(form);
  
  fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    form.reset();
    responseMsg.classList.remove("hidden");
  }).catch(error => {
    responseMsg.textContent = "Oops! Something went wrong.";
    responseMsg.classList.remove("hidden");
  });
});

document.querySelector(".cta-button").addEventListener("click", function(e) {
  e.preventDefault();
  togglePopup();
});