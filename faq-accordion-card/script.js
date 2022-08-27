document.addEventListener("click", toggleAnswer);

function toggleAnswer(e) {
  if (e.target.classList.contains("card__title")) {
    const parentClassList = e.target.parentElement.classList;
    parentClassList.contains("show")
      ? parentClassList.remove("show")
      : parentClassList.add("show");
  }
}
