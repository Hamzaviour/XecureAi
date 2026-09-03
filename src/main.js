/* ============================================
   XECURE AI — MAIN ENTRY POINT
   ============================================ */
import './styles/index.css';
import './styles/animations.css';
import './styles/components.css';

import { registerRoute, initRouter } from './js/router.js';
import { initScrollReveal } from './js/scroll-reveal.js';
import { initThemeToggle } from './js/theme-toggle.js';
import { initMenu } from './js/menu.js';

import { homePage } from './pages/home.js';
import { servicesPage } from './pages/services.js';
import { caseStudiesPage } from './pages/case-studies.js';
import { aboutPage } from './pages/about.js';
import { careerPage } from './pages/career.js';
import { blogPage } from './pages/blog.js';

// --- Register Routes ---
registerRoute('/', homePage);
registerRoute('/services', servicesPage);
registerRoute('/case-studies', caseStudiesPage);
registerRoute('/blog', blogPage);
registerRoute('/about', aboutPage);
registerRoute('/career', careerPage);

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  // Init global modules
  initThemeToggle();
  initMenu();

  // Init router
  initRouter(app);

  // Init scroll reveal (will re-init on route change)
  setTimeout(initScrollReveal, 300);

  // Header scroll effect
  const header = document.querySelector('.header');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        header?.classList.toggle('scrolled', window.scrollY > 50);

        // Scroll progress
        const progress = document.querySelector('.scroll-progress');
        if (progress) {
          const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
          progress.style.width = `${Math.min(scrolled * 100, 100)}%`;
        }

        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
});
