const form = document.querySelector("#hero-form-js");
const messageArea = document.querySelector("#hero-message-js");
const regexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", validateForm);

function validateForm(e) {
  e.preventDefault();
  if (regexp.test(e.target[0].value)) {
    e.target[0].value = "";
    showAlert("success", "Email successfully added");
  } else {
    showAlert("failure", "Please provide a valid email");
  }
}

function showAlert(type, message) {
  messageArea.innerText = message;
  messageArea.classList.remove("success");
  messageArea.classList.remove("failure");
  messageArea.classList.add(type);

  setTimeout(() => {
    messageArea.classList.remove(type);
    messageArea.innerText = "";
  }, 2000);
}
