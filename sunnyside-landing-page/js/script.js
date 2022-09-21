const mobileMenu = document.querySelector("#mobile-menu");
const headerNavList = document.querySelector("#header-nav-list");

mobileMenu.addEventListener('click', () => {
  headerNavList.classList.toggle("open");
});