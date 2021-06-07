let shareBtn = document.querySelector("#share");
let socials = document.querySelector("#socials");

// Show socials when button is clicked
document.addEventListener("click", (e) => {
  if (e.target == shareBtn) {
    if (socials.style.display != "flex") {
      socials.style.display = "flex";
    } else {
      socials.style.display = "none";
    }
  } else {
    socials.style.display = "none";
  }
});
