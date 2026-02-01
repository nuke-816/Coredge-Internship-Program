const navIcons = document.getElementById('nav-icons');
const navLinks = document.getElementById('nav-links');
const links = document.querySelectorAll('.nav-links li');

navIcons.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    navIcons.classList.toggle('toggle');
});
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
        navIcons.classList.remove('toggle');
    });
});
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
    this.reset();
});