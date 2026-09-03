/* ============================================
   XECURE AI — SPA ROUTER
   Hash-based client-side routing
   ============================================ */

const routes = {};
let currentCleanup = null;

export function registerRoute(path, handler) {
  routes[path] = handler;
}

export function navigate(path) {
  window.location.hash = path;
}

export function getCurrentRoute() {
  return window.location.hash.slice(1) || '/';
}

export function initRouter(appContainer) {
  async function handleRoute() {
    const path = getCurrentRoute();
    const handler = routes[path] || routes['/'];

    if (!handler) return;

    // Cleanup previous page
    if (typeof currentCleanup === 'function') {
      currentCleanup();
      currentCleanup = null;
    }

    try {
      // Transition out
      appContainer.style.opacity = '0';
      appContainer.style.transform = 'translateY(8px)';

      await new Promise(r => setTimeout(r, 150));

      // Render new page
      const result = handler();
      if (typeof result === 'object' && result && result.html) {
        appContainer.innerHTML = result.html;
        if (typeof result.init === 'function') {
          try {
            currentCleanup = result.init();
          } catch (initErr) {
            console.warn('[Router] Page init warning:', initErr);
          }
        }
      } else if (typeof result === 'string') {
        appContainer.innerHTML = result;
      }
    } catch (err) {
      console.error('[Router] Rendering error:', err);
      // Graceful fallback to prevent blank screen
      appContainer.innerHTML = `
        <section class="section text-center" style="min-height:70vh;display:flex;align-items:center;justify-content:center;">
          <div class="container">
            <h2 class="text-h2 mb-4">Page Not Found</h2>
            <p class="text-secondary mb-8">The requested page could not be loaded.</p>
            <a href="#/" data-route="/" class="btn btn-primary btn-lg">Return to Home</a>
          </div>
        </section>
      `;
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Transition in
    requestAnimationFrame(() => {
      appContainer.style.opacity = '1';
      appContainer.style.transform = 'translateY(0)';
    });

    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('data-route');
      link.classList.toggle('active', href === path);
    });

    // Re-init scroll reveals
    setTimeout(() => {
      if (window.__initScrollReveal) {
        window.__initScrollReveal();
      }
    }, 50);
  }

  // Page transitions
  appContainer.style.transition = 'opacity 0.2s ease, transform 0.2s ease';

  window.addEventListener('hashchange', handleRoute);

  // Handle initial load
  if (!window.location.hash) {
    window.location.hash = '/';
  } else {
    handleRoute();
  }

  // Handle nav link clicks
  document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-route]');
    if (link) {
      e.preventDefault();
      const route = link.getAttribute('data-route');
      navigate(route);

      // Close mobile menu if open
      const mobileMenu = document.querySelector('.mobile-menu');
      const menuBtn = document.querySelector('.menu-btn');
      if (mobileMenu?.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        menuBtn?.classList.remove('active');
        document.body.classList.remove('menu-open');
      }
    }
  });
}
