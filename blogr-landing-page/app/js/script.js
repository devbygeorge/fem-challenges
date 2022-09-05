const navToggle = document.querySelector("#toggle");
const headerNav = document.querySelector("#header-nav");

navToggle.addEventListener("click", () => {
  headerNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  headerNav.toggleAttribute("data-visible");
});

// const headerMenuItems = document.querySelectorAll(".header__item");

// headerMenuItems.forEach((item) => {
//   const button = item.firstElementChild;
//   button.addEventListener("click", () => {
//     item.classList.toggle("open");
//   });
// });