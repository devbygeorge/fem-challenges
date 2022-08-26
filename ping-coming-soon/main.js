document.querySelector("form").addEventListener("submit", validateForm);

function validateForm(e) {
  e.preventDefault();

  let input = document.querySelector("#email");
  let submit = document.querySelector("#submit");
  let form = document.querySelector("form");

  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!regex.test(input.value) && !form.innerText.includes("Please provide")) {
    let errorNode = document.createElement("p");
    errorNode.textContent = "Please provide a valid email address";
    form.insertBefore(errorNode, submit);

    input.style.borderColor = "hsl(354, 100%, 66%)";
    errorNode.style.color = "hsl(354, 100%, 66%)";
    errorNode.style.fontSize = "0.7rem";

    setTimeout(() => {
      input.style.borderColor = "hsl(223, 87%, 63%)";
      form.removeChild(errorNode);
    }, 2000);
  } else if (!form.innerText.includes("Please provide")) {
    input.value = "";
  }
}
