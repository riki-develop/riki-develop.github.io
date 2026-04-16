export const shopAccordion = () => {
  const shopListTitles = document.querySelectorAll('.shop__list-title');

  shopListTitles.forEach((title) => {
    const target = title.getAttribute('data-target');
    const shopList = target ? document.getElementById(target) : null;
    if (!shopList) return;

    shopList.hidden = true;
    title.setAttribute('aria-expanded', 'false');
    title.setAttribute('aria-controls', shopList.id);

    title.addEventListener('click', (e) => {
      e.preventDefault();

      const isOpen = !shopList.hidden;
      shopList.hidden = isOpen;
      title.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    });
  });
};
