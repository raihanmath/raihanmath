// Mobile burger menu
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');
if (burger && mobileNav) {
  burger.addEventListener('click', () => mobileNav.classList.toggle('open'));
}

// Highlight active nav link based on current page
const links = document.querySelectorAll('.main-nav a, .mobile-nav a');
links.forEach(l => {
  if (l.href === location.href) l.classList.add('active');
});

// Abstract toggle
document.querySelectorAll('.abstract-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const body = btn.nextElementSibling;
    if (body) {
      body.classList.toggle('open');
      btn.textContent = body.classList.contains('open') ? '▲ Hide abstract' : '▼ Show abstract';
    }
  });
});

// Pub filter tabs
document.querySelectorAll('.pf-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.pf-btn').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
  });
});
