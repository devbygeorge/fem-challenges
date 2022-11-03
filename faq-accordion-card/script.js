document.addEventListener("click", toggleAnswer);

function toggleAnswer(e) {
  if (e.target.classList.contains("accordion__title")) {
    const parentClassList = e.target.parentElement.classList;
    parentClassList.toggle("show");
  }
}
