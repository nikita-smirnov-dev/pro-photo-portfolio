export const initBurgerMenu = () => {
  const burger = document.querySelector<HTMLElement>('[data-burger]');
  const nav = document.querySelector<HTMLElement>('[data-nav]');

  if (!burger || !nav) return;

  const openMenu = (): void => {
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Закрыть меню');
    nav.classList.add('header__nav--visible');
    document.body.classList.add('stop-scroll');
  };

  const closeMenu = (): void => {
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Открыть меню');
    nav.classList.remove('header__nav--visible');
    document.body.classList.remove('stop-scroll');
  };

  const toggleMenu = (): void => {
    const expanded = burger.getAttribute('aria-expanded') === 'true';

    expanded ? closeMenu() : openMenu();
  };

  burger.addEventListener('click', toggleMenu);

  nav.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.closest('[data-nav-link]')) {
      closeMenu();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('header__nav--visible')) {
      closeMenu();
    }
  });

  window.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const isClickInsideNav = target.closest('[data-nav]');
    const isClickOnBurger = target.closest('[data-burger]');

    if (!isClickInsideNav && !isClickOnBurger) {
      closeMenu();
    }
  });
};
