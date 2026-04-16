// Sticky Header Module
export const stickyHeader = () => {
  const headerTitle = document.getElementById('header_ttl');
  if (!headerTitle) return;

  const offset = headerTitle.offsetTop;

  window.addEventListener('scroll', () => {
    if (window.scrollY > offset) {
      headerTitle.classList.add('header__title--fixed');
    } else {
      headerTitle.classList.remove('header__title--fixed');
    }
  });
};
