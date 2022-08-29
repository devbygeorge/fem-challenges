const form = document.getElementById("form");
const regexpEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", validateForm);

function validateForm(e) {
  e.preventDefault();

  const firstName = document.getElementById("name");
  const lastName = document.getElementById("lastname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  let validated = true;

  if (firstName.value.length <= 0) {
    showError(firstName, "First Name cannot be empty");
    validated = false;
  }
  if (lastName.value.length <= 0) {
    showError(lastName, "Last Name cannot be empty");
    validated = false;
  }

  if (email.value.length <= 0 || !regexpEmail.test(email.value)) {
    showError(email, "Looks like this is not an email");
    validated = false;
  }
  if (password.value.length <= 0) {
    showError(password, "Password cannot be empty");
    validated = false;
  }

  if (validated) {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";
  }
}

function showError(element, message) {
  if (!form.innerText.includes(message)) {
    const messageNode = document.createElement("p");
    messageNode.textContent = message;
    messageNode.classList.add("input__text--error");
    form.insertBefore(messageNode, element.nextSibling);

    element.classList.add("input--error");

    setTimeout(() => {
      form.removeChild(messageNode);
      element.classList.remove("input--error");
    }, 2000);
  }
}
