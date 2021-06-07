document.addEventListener("click", showAnswer);

function showAnswer(e) {
  if (e.target.classList.contains("question-title")) {
    if (e.target.parentElement.classList.contains("show")) {
      e.target.parentElement.classList.remove("show");
    } else {
      e.target.parentElement.classList.add("show");
    }
  }
}
