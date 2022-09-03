const btnHamburger = document.querySelector("#btnHamburger");
const overlay = document.querySelector(".overlay");
const headerMenu = document.querySelector(".header__menu");
const headerMenuItems = document.querySelectorAll(".header__item");

function toggleMenu() {
  btnHamburger.classList.toggle("open");
  overlay.classList.toggle("open");
  headerMenu.classList.toggle("open");
}

headerMenuItems.forEach((item) => {
  const button = item.firstElementChild;
  button.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

btnHamburger.addEventListener("click", toggleMenu);
