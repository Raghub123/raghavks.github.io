const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const toast = document.getElementById("toast");

menuToggle?.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll('#mainNav a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

// Reveal sections/cards as they enter the viewport.
const revealItems = document.querySelectorAll(
  '.section-heading, .service-card, .project-card, .system-card, .practice-card, .writing-card, .timeline-item, .edu-cards article, .contact-card'
);
revealItems.forEach(item => item.classList.add('reveal'));

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach(item => observer.observe(item));

// Placeholder links: show a helpful message rather than sending visitors to "#".
document.querySelectorAll('.placeholder-link').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const message = link.dataset.message || "Update this profile link in index.html.";
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  });
});
