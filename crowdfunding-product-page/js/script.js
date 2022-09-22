/* Globally Used Components */
const overlay = document.querySelector("#overlay-js");

/* Mobile Navigation */
const primaryMenuButton = document.querySelector("#primary-menu-button-js");
const primaryNavList = document.querySelector("#primary-nav-list-js");

primaryMenuButton.addEventListener("click", () => {
  primaryMenuButton.classList.toggle("open");
  primaryNavList.classList.toggle("open");
  overlay.classList.toggle("open");
});

/* Bookmark Button */
const bookmarkButton = document.querySelector("#bookmark-button-js");
const isBookmarked = JSON.parse(localStorage.getItem("isBookmarked"));

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmarked");

  const isBookmarked = JSON.parse(localStorage.getItem("isBookmarked"));
  localStorage.setItem("isBookmarked", !isBookmarked);
});

if (isBookmarked) {
  bookmarkButton.classList.add("bookmarked");
}

/* About Buttons & Modal Selection & Success */
const backProjectButton = document.querySelector("#project-button-js");
const aboutItemButtons = document.querySelectorAll(".about__item-button");

const modalSelection = document.querySelector("#modal-selection-js");
const modalSelectionItems = document.querySelectorAll(".modal-selection__item");
const modalSelectionButtons = document.querySelectorAll(
  ".modal-selection__button"
);

const modalSuccess = document.querySelector("#modal-success-js");
const modalSuccessCloseButton = document.querySelector(
  "#modal-success-close-js"
);

backProjectButton.addEventListener("click", () => openSelectionModal());

aboutItemButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const aboutItemName = button.parentElement.getAttribute("data-name");

    openSelectionModal();
    cleanSelectionModalItems();

    modalSelectionItems.forEach((item) => {
      const modalItemName = item.getAttribute("data-name");

      if (modalItemName === aboutItemName) {
        item.classList.add("modal-selection__item--selected");
        console.log(modalItemName === aboutItemName);
      }
    });
  });
});

modalSelectionItems.forEach((item) => {
  item.addEventListener("click", () => {
    cleanSelectionModalItems();
    item.classList.add("modal-selection__item--selected");
  });
});

modalSelectionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openSuccessModal();
    cleanSelectionModalItems();
  });
});

modalSuccessCloseButton.addEventListener("click", () => {
  modalSuccess.classList.remove("open");
  overlay.classList.remove("open");
});

openSelectionModal = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  modalSelection.classList.add("open");
  overlay.classList.add("open");
};

openSuccessModal = () => {
  modalSelection.classList.remove("open");
  modalSuccess.classList.add("open");
};

cleanSelectionModalItems = () => {
  modalSelectionItems.forEach((item) => {
    item.classList.remove("modal-selection__item--selected");
  });
};
