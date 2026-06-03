import { getHeaderheight } from './helpers/header-height';
import { initFancybox } from './components/project-gallery-fancy';
import { initBackToTop } from './components/back-to-top';
import { initPageOverlay } from './components/page-overlay';
import { initBurgerMenu } from './components/burger';
import { initGoBack } from './components/go-back';

initPageOverlay();

document.addEventListener('astro:page-load', () => {
  getHeaderheight();
  initFancybox();
  initBackToTop();
  initBurgerMenu();
  initGoBack();
});
