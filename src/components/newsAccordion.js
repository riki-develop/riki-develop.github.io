// News Accordion Module
export const newsAccordion = () => {
  const newsMoreBtns = document.querySelectorAll('.news__more-btn');
  
  newsMoreBtns.forEach(btn => {
    let isOpen = false;

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-target');
      const targetEl = document.getElementById(target);

      if (!targetEl) return;

      if (isOpen) {
        targetEl.style.display = 'none';
        btn.textContent = 'もっと見る';
        isOpen = false;
      } else {
        targetEl.style.display = 'block';
        btn.textContent = '閉じる';
        isOpen = true;
      }
    });
  });
};
