// Initialize AOS (Animate on Scroll) library
AOS.init({
  duration: 1200, // Animation duration
  easing: 'ease-in-out', // Easing function
  once: true, // Animation only happens once
  mirror: false, // Don't mirror animations when scrolling back
});

// Scroll to anchor links with smooth scrolling
const scrollLinks = document.querySelectorAll('.scrollto');
scrollLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 60, // Offset for fixed navbar
      behavior: 'smooth',
    });
  });
});

// Mobile Navigation Toggle
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navbar = document.querySelector('#navbar');
mobileNavToggle.addEventListener('click', () => {
  navbar.classList.toggle('navbar-mobile');
});

// Active link highlighting on scroll
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY + 200; // Scroll offset
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section.offsetTop <= currentScroll && section.offsetTop + section.offsetHeight > currentScroll) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
