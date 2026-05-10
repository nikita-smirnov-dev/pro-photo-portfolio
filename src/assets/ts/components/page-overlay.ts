export const initPageOverlay = () => {
  const getOverlay = () =>
    document.querySelector<HTMLElement>('[data-overlay]');

  document.addEventListener('astro:before-preparation', () => {
    const overlay = getOverlay();
    if (overlay) {
      overlay.style.transition = 'transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)';
      overlay.style.transform = 'translateY(0)';
    }
  });

  document.addEventListener('astro:page-load', () => {
    const overlay = getOverlay();
    if (overlay) {
      setTimeout(() => {
        overlay.style.transition =
          'transform 0.6s cubic-bezier(0.7, 0, 0.3, 1)';
        overlay.style.transform = 'translateY(-100%)';
      }, 600);
    }
  });
};

initPageOverlay();
