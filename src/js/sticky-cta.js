/* ============================================
   XECURE AI — STICKY CTA COMPONENT
   Floating glassmorphic CTA on scroll
   ============================================ */

export function initStickyCTA() {
  const stickyCTA = document.getElementById('sticky-cta');
  if (!stickyCTA) return;

  const dismissBtn = stickyCTA.querySelector('.sticky-cta-close');
  let isDismissed = sessionStorage.getItem('xecure_cta_dismissed') === 'true';

  if (dismissBtn) {
    dismissBtn.addEventListener('click', () => {
      stickyCTA.classList.remove('visible');
      stickyCTA.classList.add('dismissed');
      isDismissed = true;
      sessionStorage.setItem('xecure_cta_dismissed', 'true');
    });
  }

  let ticking = false;

  function updateVisibility() {
    if (isDismissed) return;

    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Show after scrolling 350px
    const shouldShow = scrollY > 350;

    // Check if near bottom / within main page CTA
    const nearBottom = scrollY + windowHeight >= documentHeight - 350;

    // Check if overlapping any in-page .cta-section
    const ctaSections = document.querySelectorAll('.cta-section');
    let insideCtaSection = false;

    ctaSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < windowHeight - 80 && rect.bottom > 80) {
        insideCtaSection = true;
      }
    });

    if (shouldShow && !nearBottom && !insideCtaSection) {
      stickyCTA.classList.add('visible');
    } else {
      stickyCTA.classList.remove('visible');
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateVisibility);
      ticking = true;
    }
  }, { passive: true });

  // Initial check
  updateVisibility();
}
