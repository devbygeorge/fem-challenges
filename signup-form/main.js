let form = document.getElementById("form");

form.addEventListener("submit", validateForm);

function validateForm(e) {
  e.preventDefault();

  let firstName = document.getElementById("name");
  let lastName = document.getElementById("lastname");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  if (firstName.value.length <= 0) {
    showAlert(firstName, "First Name cannot be empty");
  }
  if (lastName.value.length <= 0) {
    showAlert(lastName, "Last Name cannot be empty");
  }

  let reg =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.value.length <= 0 || !reg.test(email.value)) {
    showAlert(email, "Looks like this is not an email");
  }
  if (password.value.length <= 0) {
    showAlert(password, "Password cannot be empty");
  }

  if (
    firstName.value.length > 0 &&
    lastName.value.length > 0 &&
    email.value.length > 0 &&
    reg.test(email.value) &&
    password.value.length > 0
  ) {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";
  }
}

function showAlert(element, message) {
  if (!form.innerText.includes(message)) {
    element.classList.add("input-error");
    let errorMessage = document.createElement("p");
    errorMessage.textContent = message;
    form.appendChild(errorMessage);
    form.insertBefore(errorMessage, element.nextSibling);

    setTimeout(() => {
      form.removeChild(errorMessage);
      element.classList.remove("input-error");
    }, 2000);
  }
}
