const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.desktop-nav');
menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  nav?.classList.toggle('mobile-open', !open);
});

document.querySelectorAll('.desktop-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    nav?.classList.remove('mobile-open');
  });
});

document.querySelector('.signup-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.querySelector('input').value;
  const message = form.querySelector('.form-message');
  message.textContent = `You're on the list — we'll reach out to ${email}.`;
  message.style.color = '#467d62';
  form.querySelector('input').value = '';
});

const modal = document.querySelector('.modal');
document.querySelector('.login')?.addEventListener('click', (event) => {
  event.preventDefault();
  modal?.classList.add('open');
  modal?.setAttribute('aria-hidden', 'false');
});
document.querySelector('.modal-close')?.addEventListener('click', () => {
  modal?.classList.remove('open');
  modal?.setAttribute('aria-hidden', 'true');
});
modal?.addEventListener('click', (event) => {
  if (event.target === modal) modal.classList.remove('open');
});
document.querySelector('.login-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = event.currentTarget.querySelector('.login-message');
  message.textContent = 'Demo login accepted — welcome back.';
});

document.querySelector('.contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  event.currentTarget.querySelector('.contact-message').textContent = 'Message received — we’ll be in touch soon.';
  event.currentTarget.reset();
});

document.querySelector('.theme-toggle')?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('lumen-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
if (localStorage.getItem('lumen-theme') === 'dark') document.body.classList.add('dark');
