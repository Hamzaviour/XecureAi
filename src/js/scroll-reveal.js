/* ============================================
   XECURE AI — SCROLL REVEAL
   Intersection Observer text reveal + fade-in
   (Recreates Framer Text Reveal on Scroll)
   ============================================ */

export function initScrollReveal() {
  // Standard reveal elements
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -20px 0px',
  });

  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('revealed');
    } else {
      observer.observe(el);
    }
  });

  // Text reveal word-by-word
  const textRevealElements = document.querySelectorAll('.text-reveal');

  textRevealElements.forEach(el => {
    if (el.dataset.processed) return;
    el.dataset.processed = 'true';

    const text = el.textContent.trim();
    const words = text.split(/\s+/);
    el.innerHTML = words.map((word, i) =>
      `<span class="word" style="transition-delay: ${i * 0.05}s">${word}</span>`
    ).join(' ');
  });

  const textObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        textObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -20px 0px',
  });

  textRevealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('revealed');
    } else {
      textObserver.observe(el);
    }
  });
}

// Make globally available for router re-init
window.__initScrollReveal = initScrollReveal;
