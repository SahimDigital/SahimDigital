const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  const opened = navLinks.classList.toggle('active');
  menuBtn.setAttribute('aria-expanded', String(opened));
  menuBtn.textContent = opened ? '✕' : '☰';
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
