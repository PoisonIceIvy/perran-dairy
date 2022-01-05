const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click',() => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))

const buttonOpen = document.querySelector('.button-open');
const menu = document.querySelector('.menu');
buttonOpen.addEventListener('click', () => {
    buttonOpen.classList.toggle('active');
    menu.classList.toggle('active');
})
document.querySelectorAll('menu').forEach(n => n.addEventListener('click',() => {
    buttonOpen.classList.remove('active');
    menu.classList.remove('active');
} ))