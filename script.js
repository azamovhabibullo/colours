const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const linkBtn = document.querySelectorAll('.navbar__menu  a')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)



linkBtn.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.toggle('is-active')
        menuLinks.classList.toggle('active')
    })
});




















