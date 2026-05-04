import { getHeaderheight } from '../js/helpers/header-height';

document.addEventListener('astro:page-load', () => {
  getHeaderheight();
});
