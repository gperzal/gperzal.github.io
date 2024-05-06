document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var typed = new Typed('#typed-text', {
    strings: ["Developer Full Stack.", "Developer Database.", "UI/UX Designer."],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

document.addEventListener('DOMContentLoaded', function () {
    const yearSpan = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});
