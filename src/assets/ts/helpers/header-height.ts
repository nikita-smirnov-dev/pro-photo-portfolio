export const getHeaderheight = (): number | void => {
  const heightHeader = document.querySelector<HTMLElement>('.header');
  const root = document.querySelector<HTMLElement>(':root');

  if (heightHeader && root) {
    const height = heightHeader.offsetHeight;

    root.style.setProperty('--header-height', `${height}px`);

    return height;
  }
};
