const form = document.querySelector("#form");
const emailInput = document.querySelector("#email");
const messageNode = document.querySelector("#message");
const regexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let timeout;

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
  clearClassLists();
  messageNode.innerText = message;
  messageNode.classList.add(type);
  emailInput.classList.add(type);

  clearTimeout(timeout);

  timeout = setTimeout(() => {
    emailInput.classList.remove(type);
    messageNode.classList.remove(type);
    messageNode.innerText = "";
  }, 2000);
}

function clearClassLists() {
  emailInput.classList.remove("success");
  emailInput.classList.remove("failure");
  messageNode.classList.remove("success");
  messageNode.classList.remove("failure");
}
