// Top Button Module
export const topButton = () => {
  const topBtnWrap = document.getElementById('top_btn-wrap');
  if (!topBtnWrap) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      topBtnWrap.style.display = 'block';
    } else {
      topBtnWrap.style.display = 'none';
    }
  });

  topBtnWrap.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};
