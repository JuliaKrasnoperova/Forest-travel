// preloader
window.onload = function () {
  let preloader = document.getElementById("preloader");
  preloader.style.display = "none";
};

// Анимация меню при клике
const navIcon = document.querySelector(".nav-icon");
const body = document.body;

navIcon.addEventListener("click", function () {
  document
    .querySelector(".nav-icon__middle")
    .classList.toggle("nav-icon-active");
  document
    .querySelector(".header-nav-mobile")
    .classList.toggle("header-nav-mobile--active");
  body.classList.toggle("locked");
});
