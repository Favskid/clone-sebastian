const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.onclick = () => {
  mobileMenu.classList.add("active");
};

menuClose.onclick = () => {
  mobileMenu.classList.remove("active");
};
