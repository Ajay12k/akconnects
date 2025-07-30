// FAB Toggle
const fab = document.querySelector('.fab');
const fabLinks = document.querySelector('.fab-links');
const fabMain = document.querySelector('.fab-main');

fabMain.addEventListener('click', () => {
  fab.classList.toggle('open');
});

// Loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.opacity = '0';
  setTimeout(() => loader.style.display = 'none', 500);
});

// Scroll Fade In Animation
const fadeInElems = document.querySelectorAll('section, header, main');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
});

fadeInElems.forEach(elem => observer.observe(elem));
