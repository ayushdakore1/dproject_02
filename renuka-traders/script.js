document.querySelector('.menu')?.addEventListener('click', () => document.querySelector('nav')?.classList.toggle('open'));
const shopWhatsApp = '918043823727';
document.querySelectorAll('.product-enquiry').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const product = link.dataset.product;
    const message = `Namaste Renuka Traders, mujhe ${product} ke baare mein price aur availability poochni hai.`;
    window.open(`https://wa.me/${shopWhatsApp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });
});
document.querySelector('form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const values = new FormData(form);
  const message = [
    'Namaste Renuka Traders, mujhe quotation chahiye.',
    `Name: ${values.get('name')}`,
    `Mobile: ${values.get('phone')}`,
    `Requirement: ${values.get('details')}`
  ].join('\n');
  window.open(`https://wa.me/${shopWhatsApp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  form.querySelector('.form-note').textContent = 'WhatsApp khulega. Apna message check karke Send dabayein.';
});
