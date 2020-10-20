const btnMenu = document.getElementById("btn-menu")
const iconMenu = document.getElementById("iconMenu");
const menu = document.getElementById("navMenu");

btnMenu.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active')
        iconMenu.src = "./assets/img/menu.png"
    } else {
        menu.classList.add('active')
        iconMenu.src = "./assets/img/close.png"
    }
});

const hideMenu = document.getElementsByClassName("hide");

hideMenu[0].addEventListener('click', () => {
    menu.classList.remove('active')
    iconMenu.src = "./assets/img/menu.png"
});

hideMenu[1].addEventListener('click', () => {
    menu.classList.remove('active')
    iconMenu.src = "./assets/img/menu.png"
});

hideMenu[2].addEventListener('click', () => {
    menu.classList.remove('active')
    iconMenu.src = "./assets/img/menu.png"
});

hideMenu[3].addEventListener('click', () => {
    menu.classList.remove('active')
    iconMenu.src = "./assets/img/menu.png"
});