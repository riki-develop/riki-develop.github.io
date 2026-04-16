export const newsAccordion = () => {
  const newsMoreBtns = document.querySelectorAll('.news__more-btn');

  newsMoreBtns.forEach((btn) => {
    const target = btn.getAttribute('data-target');
    const targetEl = target ? document.getElementById(target) : null;
    if (!targetEl) return;

    targetEl.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', targetEl.id);

    btn.addEventListener('click', (e) => {
      e.preventDefault();

      const isOpen = !targetEl.hidden;
      targetEl.hidden = isOpen;
      btn.textContent = isOpen ? 'もっと見る' : '閉じる';
      btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    });
  });
};
