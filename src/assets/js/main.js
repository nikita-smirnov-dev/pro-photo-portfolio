import { getHeaderheight } from '../js/helpers/header-height';
import { initFancybox } from './components/project-gallery-fancy';

document.addEventListener('astro:page-load', () => {
  getHeaderheight();
  initFancybox();
});
