import { getHeaderheight } from './helpers/header-height';
import { initFancybox } from './components/project-gallery-fancy';
import { initBackToTop } from './components/back-to-top';

document.addEventListener('astro:page-load', () => {
  getHeaderheight();
  initFancybox();
  initBackToTop();
});
