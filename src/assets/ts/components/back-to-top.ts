export const initBackToTop = (): void => {
  const btn = document.querySelector<HTMLElement>('[data-backtotop]');

  if (!btn) return;

  window.addEventListener(
    'scroll',
    () => {
      btn.classList.toggle('back-to-top--visible', window.scrollY > 1000);
    },
    { passive: true },
  );

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    document.body.focus();
  });
};
