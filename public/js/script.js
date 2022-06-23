const body = document.querySelector('body')
const menu = document.querySelector('.menu')
const menuHamburger = document.querySelector('.menu-hamburguer')
const menuL = document.querySelector('.menu-l')
const menuLateral = document.querySelector('.menu-lateral')

menuHamburger.addEventListener('click', click => {
    // menuLateral.classList.toggle('menu-lateral-display')
    menu.classList.toggle('menu-l')
    menu.classList.toggle('menu-lateral')
    body.classList.toggle('body-menu-lateral')
})