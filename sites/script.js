// js/main.js
document.addEventListener('DOMContentLoaded', function () {
  // Detect current file and mark corresponding nav link as active
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar .nav-link');

  navLinks.forEach(link => {
    // compare by filename only (ex: index.html)
    const href = link.getAttribute('href');
    if (!href) return;
    const target = href.split('/').pop();

    if (target === path) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
});
