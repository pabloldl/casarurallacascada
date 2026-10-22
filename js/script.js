'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
const copyButton = document.getElementById('copy-phone');
const status = document.getElementById('copy-status');
const manualCopy = document.getElementById('manual-copy');
copyButton.hidden = false;
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('956727057');
    manualCopy.hidden = true;
    status.textContent = 'Teléfono copiado: 956 727 057';
  } catch {
    manualCopy.hidden = false;
    const field = document.getElementById('phone-value');
    field.focus();
    field.select();
    status.textContent = 'Copia el número seleccionado con el menú de tu dispositivo.';
  }
});
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('motion-ready');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('seen');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('[data-unfold], [data-soft]').forEach(element => observer.observe(element));
}
