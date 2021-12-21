const navbar = document.getElementsByName('navbar');
const ham = 
document.getElementsByName('ham');
ham.addEventListener('click',() => {
    navbar.classList.ham('active');
})