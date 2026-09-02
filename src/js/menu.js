/* ============================================
   XECURE AI — ANIMATED MENU
   (Recreates Framer Motion Menu Icon)
   ============================================ */

export function initMenu() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.menu-btn');
    if (!btn) return;

    const menu = document.querySelector('.mobile-menu');
    const isOpen = menu?.classList.contains('open');

    btn.classList.toggle('active');
    menu?.classList.toggle('open');
    document.body.classList.toggle('menu-open');
  });
}
