
var menuSP = document.querySelector(".header__nav");
var iconOpenMenu = document.querySelector('.hamburger-box');
var iconCloseMenu = document.querySelector('.mobile-hambuger__close');

iconOpenMenu.addEventListener("click", function(e) {
    this.classList.remove('show');
    menuSP.classList.add('show');
    document.body.classList.add('hidden');
    iconCloseMenu.classList.add('show');
});

iconCloseMenu.addEventListener("click", function(e) {
    this.classList.remove('show');
    document.body.classList.remove('hidden');
    menuSP.classList.remove('show');
    iconOpenMenu.classList.add('show');
});