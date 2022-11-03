let shareButton = document.querySelector(".article-preview__share-button");
let socialsList = document.querySelector(".article-preview__user-socials");

/* toggle share button */
function toggleSocials() {
  socialsList.classList.toggle("show");
  shareButton.classList.toggle("show");
}

shareButton.addEventListener("click", toggleSocials);
