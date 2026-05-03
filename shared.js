/* ============================================================
   shared.js — include on every page
   <script src="shared.js"></script>
   ============================================================ */

(function () {
  const btn     = document.getElementById('sidebar-toggle');
  const overlay = document.getElementById('sidebar-overlay');
  const isMobile = () => window.innerWidth <= 768;

  if (btn) {
    btn.addEventListener('click', () => {
      if (isMobile()) document.body.classList.toggle('mobile-open');
      else            document.body.classList.toggle('sidebar-collapsed');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => document.body.classList.remove('mobile-open'));
  }

  window.addEventListener('resize', () => {
    if (!isMobile()) document.body.classList.remove('mobile-open');
    else             document.body.classList.remove('sidebar-collapsed');
  });
})();
