/* ============================================
   XECURE AI — THEME TOGGLE
   (Recreates Framer ThemeChanger component)
   ============================================ */

export function initThemeToggle() {
  const saved = localStorage.getItem('xecure-theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.theme-toggle');
    if (!btn) return;

    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('xecure-theme', next);
  });
}
