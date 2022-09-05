const navToggle = document.querySelector("#toggle");
const headerNav = document.querySelector("#header-nav");
const headerDropdownLabels = document.querySelectorAll(
  ".header__dropdown-label"
);

navToggle.addEventListener("click", () => {
  headerNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  headerNav.toggleAttribute("data-visible");
});

headerDropdownLabels.forEach((label) => {
  const list = label.nextElementSibling;

  label.addEventListener("click", () => {
    list.hasAttribute("data-visible")
      ? label.setAttribute("aria-expanded", false)
      : label.setAttribute("aria-expanded", true);
    list.toggleAttribute("data-visible");
  });
});
