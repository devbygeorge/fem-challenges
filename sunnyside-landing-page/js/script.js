const mobileMenu = document.querySelector("#mobile-menu");
const primaryNav = document.querySelector("#primary-nav");

mobileMenu.addEventListener('click', () => {
  primaryNav.classList.toggle('open');
});