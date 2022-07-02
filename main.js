// Анимация меню при клике
const navIcon = document.querySelector('.nav-icon')


navIcon.addEventListener('click', function () {
    document.querySelector('.nav-icon__middle').classList.toggle('nav-icon-active');
    document.querySelector(".header-nav-mobile").classList.toggle('header-nav-mobile--active');
})