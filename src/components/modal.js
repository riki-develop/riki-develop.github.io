export const modal = () => {
  const openBtns = document.querySelectorAll('.modal__btn-open');
  const closeBtns = document.querySelectorAll('.modal__close');
  const overlay = document.querySelector('.modal__overlay');
  const modals = document.querySelectorAll('.modal__box');

  const closeAllModals = () => {
    modals.forEach((modalBox) => {
      modalBox.style.display = 'none';
    });

    if (overlay) {
      overlay.style.display = 'none';
    }
  };

  openBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-target');
      const modalBox = document.getElementById(target);

      closeAllModals();

      if (modalBox) {
        modalBox.style.display = 'block';
      }
      if (overlay) {
        overlay.style.display = 'block';
      }
    });
  });

  closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeAllModals();
    });
  });

  if (overlay) {
    overlay.addEventListener('click', () => {
      closeAllModals();
    });
  }
};
