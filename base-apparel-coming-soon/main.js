let form = document.querySelector("#form");

form.addEventListener("submit", validateForm);

function validateForm(e) {
  e.preventDefault();
  let emailValue = e.target[0].value;
  let reg =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (reg.test(emailValue)) {
    e.target[0].value = "";
  } else {
    showAlert();
  }
}

function showAlert() {
  let node = document.createElement("p");
  let textnode = document.createTextNode("Please provide a valid email");
  node.appendChild(textnode);
  form.appendChild(node);
  node.style.position = "absolute";
  node.style.top = "60px";
  node.style.left = "20px";

  setTimeout(() => {
    form.removeChild(node);
  }, 2000);
}
