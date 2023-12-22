
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    console.log("click")

});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log("click")
        document.body.classList.remove('nav-open');
    })
})

document.addEventListener('DOMContentLoaded', function () {
    const navbarButtons = document.getElementById('navbarButtons');
    const hamburgerMenu = document.getElementById('hamburgerMenu');

    hamburgerMenu.addEventListener('click', function () {
        navbarButtons.style.display = (navbarButtons.style.display === 'flex') ? 'none' : 'flex';
    });
});


function handleHover(index) {
    console.log('Button Hovered!', index);
    // Add your JavaScript logic here
}