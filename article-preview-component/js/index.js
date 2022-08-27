let shareButton = document.querySelector(".preview__share");
let socialsList = document.querySelector(".preview__socials");

/* toggle share button */
function toggleShare(e) {
  const shareClicked = e.target === shareButton;
  if (shareClicked && socialsList.style.display !== "flex") {
    socialsList.style.display = "flex";
  } else {
    socialsList.style.display = "none";
  }
}

document.addEventListener("click", toggleShare);
