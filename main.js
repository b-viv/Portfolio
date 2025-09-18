const nav = document.querySelector(".navbar-toggler");
const navItems = document.querySelectorAll(".nav-item");
const navbarCollapse = document.querySelector(".navbar-collapse");
const navIcon = document.querySelector('.nav-icon');
const navbar = document.querySelector(".navbar");

let isNavOpen = false;

nav.addEventListener("click", () => {
    navIcon.classList.toggle('bi-x');
    navIcon.classList.toggle('bi-list');
    navbarCollapse.classList.toggle("active");
});

navItems.forEach(item => {
    item.addEventListener("click", () => {
      navIcon.classList.add('bi-list');
      navIcon.classList.remove('bi-x');
      navbarCollapse.classList.remove("active");

    })
});

function revealFunction() {
    window.sr = ScrollReveal({ duration: 1050, distance: '250px', easing: 'ease-out'});

    sr.reveal('.profile .profile-container', {origin: 'right', interval: 800, delay: 500, reset: false})

    sr.reveal('.reveal-left', {origin: 'left', reset: false});
    sr.reveal('.reveal-right', {origin: 'right', reset: false});
    sr.reveal('.reveal-top', {origin: 'top', reset: false});
    sr.reveal('.reveal-bottom', {origin: 'bottom', reset: false});

    sr.reveal('.reveal-left-1', {origin: 'left', delay: 700, reset: false});
    sr.reveal('.reveal-left-2', {origin: 'left', delay: 600, reset: false});
    sr.reveal('.reveal-left-3', {origin: 'left', delay: 500, reset: false});
    sr.reveal('.reveal-left-4', {origin: 'left', delay: 400, reset: false});
    sr.reveal('.reveal-left-5', {origin: 'left', delay: 300, reset: false});
    sr.reveal('.reveal-left-6', {origin: 'left', delay: 200, reset: false});

    sr.reveal('.skill-list-2 li', {origin: 'right', delay: 500, interval: 100, reset: false});

    sr.reveal('.soft-skills .reveal-card', {origin: 'bottom', delay: 1000, interval: 300, reset: false});


    sr.reveal('.big-font', {opacity: 0.2});

    sr.reveal('.bottom-reveal .interval-col', {origin: 'bottom', interval: 500, reset: false})

    sr.reveal('.hero-text-container .hero-text', {origin: 'left', delay: 1000, interval: 400, reset: false});

}

window.addEventListener('load', () => {
    revealFunction();
});

window.addEventListener('scroll', () => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
});

const svgCodeLines = document.querySelectorAll('.svg-text-line');

svgCodeLines.forEach((item, index) => {
    const delay = index * 0.2;
    item.style.animationDelay = `${delay}s`
})

 document.addEventListener('DOMContentLoaded', () => {
  const binaryCodes = document.querySelectorAll('.binary-codes path');
  
  function toggleOpacity() {
    binaryCodes.forEach(code => {
      const delayShow = Math.random() * 30000;
      setTimeout(() => {
        code.style.opacity = 0.6;
      }, delayShow);
      
      const delayHide = delayShow + 5500 + Math.random() * 10000;
      setTimeout(() => {
        code.style.opacity = 0;
      }, delayHide);
    });
  }

  toggleOpacity();
  setInterval(toggleOpacity, 5000);
});












