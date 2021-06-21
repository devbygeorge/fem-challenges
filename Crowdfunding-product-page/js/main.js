// Global Variables
const blackBG = document.querySelector(".black-bg");

const bookmarkBtn = document.querySelector(".btn-bookmark");

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".nav");

const aboutItems = document.querySelectorAll(".about-item");

const modalBtn = document.getElementById("modal-btn");
const modal = document.querySelector(".modal");
const modalItems = document.querySelectorAll(".modal-item");

const modalEndBtn = document.getElementById("end-btn");
const modalSuccess = document.querySelector(".success");

// Bookmark button
bookmarkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  bookmarkBtn.classList.toggle("bookmarked");
  const bookmarkText = document.getElementById("bookmark-text");
  if (bookmarkText.textContent === "Bookmark") {
    bookmarkText.innerText = "Bookmarked";
  } else {
    bookmarkText.innerText = "Bookmark";
  }
});

// Mobile menu appears on icon click
menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  blackBG.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  menuBtn.classList.toggle("icon-active");
});

// Modal appears when button clicked
modalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal-active");
  blackBG.classList.add("modal-active");

  // Close nav if opened
  blackBG.classList.remove("active");
  mobileMenu.classList.remove("active");
  menuBtn.classList.remove("icon-active");
});

// Add events when modal item is checked
function changeHandler(e) {
  const modalRadios = document.querySelectorAll(".modal-radio");

  modalRadios.forEach((radio) => {
    const button =
      radio.parentElement.parentElement.querySelector(".modal-continue");
    const modalItem = radio.parentElement.parentElement;

    radio.checked
      ? (modalItem.classList.add("modal-item-active"),
        button && button.addEventListener("click", successPart))
      : (modalItem.classList.remove("modal-item-active"),
        button && button.removeEventListener("click", successPart));
  });
}

// Goes on Success Window
function successPart(e) {
  const priceInput =
    e.target.previousElementSibling.querySelector(".price-input");
  priceInput.value !== "" && priceInput.value !== "0"
    ? (modal.classList.remove("modal-active"),
      modalSuccess.classList.add("modal-active"))
    : alert("Please enter your pledge");
}

// Radio Checks when section is clicked
modalItems.forEach((item) => {
  const disabledItem = item.classList.contains("item-disabled");
  !disabledItem &&
    item.addEventListener("click", (e) => {
      const itemBtn = e.target.classList.contains("modal-continue");
      const itemRadio = item.querySelector(".modal-radio");
      !itemBtn && ((itemRadio.checked = "true"), changeHandler(e));
    });
});

// Selected item appears on modal window
aboutItems.forEach((item) => {
  item.querySelector(".btn").addEventListener("click", aboutToModal);
});

function aboutToModal(e) {
  const aboutItemName = e.target.parentElement.querySelector("h3").textContent;

  modalItems.forEach((item) => {
    const itemRadio = item.querySelector(".modal-radio");

    item.innerHTML.includes(aboutItemName)
      ? ((itemRadio.checked = true),
        changeHandler(),
        modal.classList.add("modal-active"),
        blackBG.classList.add("modal-active"),
        window.scrollTo(0, 100))
      : false;
  });
}

// Ends Success Window
modalEndBtn.addEventListener("click", (e) => {
  e.preventDefault();
  blackBG.classList.remove("modal-active");
  modalSuccess.classList.remove("modal-active");
});
