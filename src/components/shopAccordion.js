// Shop List Accordion Module
export const shopAccordion = () => {
  const shopListTitles = document.querySelectorAll('.shop__list-title');

  shopListTitles.forEach(title => {
    title.addEventListener('click', (e) => {
      e.preventDefault();
      const target = title.getAttribute('data-target');
      const shopList = document.getElementById(target);

      if (shopList) {
        shopList.style.display = shopList.style.display === 'none' ? 'block' : 'none';
      }
    });
  });
};
