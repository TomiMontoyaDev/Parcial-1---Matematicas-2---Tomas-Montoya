/* ============================================================
   INTEGRA — Utilidades comunes
   ============================================================ */

// Revela elementos al hacer scroll (Intersection Observer)
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  els.forEach((el) => io.observe(el));
}

// Acordeones de ejemplos resueltos
function initExampleAccordions() {
  document.querySelectorAll('.example__head').forEach((head) => {
    head.addEventListener('click', () => {
      const example = head.closest('.example');
      const body = example.querySelector('.example__body');
      const isOpen = example.classList.contains('is-open');

      if (isOpen) {
        body.style.maxHeight = '0px';
        example.classList.remove('is-open');
      } else {
        example.classList.add('is-open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
}

// Renderiza todas las fórmulas KaTeX marcadas con data-katex (modo display u inline)
function renderKatexBlocks() {
  if (typeof katex === 'undefined') return;
  document.querySelectorAll('[data-katex]').forEach((el) => {
    const display = el.dataset.katex === 'display';
    try {
      katex.render(el.textContent.trim(), el, { throwOnError: false, displayMode: display });
    } catch (e) {
      console.warn('KaTeX render error:', e);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initExampleAccordions();
  renderKatexBlocks();
});
