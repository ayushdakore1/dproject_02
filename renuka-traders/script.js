document.querySelector('.menu')?.addEventListener('click', () => document.querySelector('nav')?.classList.toggle('open'));
document.querySelector('form')?.addEventListener('submit', (event) => { event.preventDefault(); event.currentTarget.querySelector('.form-note').textContent = 'Thank you — Renuka Traders will contact you shortly.'; event.currentTarget.reset(); });
