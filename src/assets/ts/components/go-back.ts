export const initGoBack = (): void => {
  const btn = document.querySelector<HTMLElement>('[data-go-back]');

  if (!btn) return;

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const isInternalReferrer =
      document.referrer &&
      new URL(document.referrer).host === window.location.host;

    if (isInternalReferrer) {
      history.back();
      return;
    }

    window.location.href = '/';
  });
};
