// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// Animate numbers on scroll
function animateCounters() {
  document.querySelectorAll('.stat-num, .kpi-num').forEach(el => {
    const target = parseFloat(el.textContent.replace(/[^0-9.]/g, ''));
    if (isNaN(target)) return;
    const suffix = el.textContent.replace(/[0-9.]/g, '');
    let start = 0;
    const duration = 1200;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { start = target; clearInterval(timer); }
      el.textContent = (Number.isInteger(target) ? Math.round(start) : start.toFixed(target < 10 ? 2 : 0)) + suffix;
    }, 16);
  });
}

// Intersection observer for animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .stat-card, .kpi-card, .rec-card, .metric-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Add visible class styles via JS
const style = document.createElement('style');
style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);

// Trigger counter animation when hero is visible
const heroSection = document.querySelector('.hero, .kpi-grid');
if (heroSection) {
  const heroObs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { animateCounters(); heroObs.disconnect(); }
  }, { threshold: 0.3 });
  heroObs.observe(heroSection);
}
