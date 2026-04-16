// Modal Module
export const modal = () => {
  const openBtns = document.querySelectorAll('.modal__btn-open');
  const closeBtn = document.querySelector('.modal__close');
  const overlay = document.querySelector('.modal__overlay');

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-target');
      const modalBox = document.getElementById(target);

      if (modalBox) {
        modalBox.style.display = 'block';
      }
      if (overlay) {
        overlay.style.display = 'block';
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = closeBtn.getAttribute('data-target');
      const modalBox = document.getElementById(target);

      if (modalBox) {
        modalBox.style.display = 'none';
      }
      if (overlay) {
        overlay.style.display = 'none';
      }
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      overlay.style.display = 'none';
      const modals = document.querySelectorAll('.modal__box');
      modals.forEach(modal => {
        modal.style.display = 'none';
      });
    });
  }
};
