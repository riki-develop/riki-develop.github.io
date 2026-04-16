export const carousel = () => {
  const carouselList = document.querySelector('.carousel__list');
  if (!carouselList) return;

  const slides = carouselList.querySelectorAll('li');
  if (slides.length <= 1) return;

  let currentSlide = 0;
  let intervalId;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === index);
      slide.setAttribute('aria-hidden', i === index ? 'false' : 'true');
    });
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  };

  const startAutoplay = () => {
    intervalId = window.setInterval(nextSlide, 6000);
  };

  const stopAutoplay = () => {
    if (!intervalId) return;
    window.clearInterval(intervalId);
    intervalId = undefined;
  };

  showSlide(0);
  startAutoplay();

  carouselList.addEventListener('mouseenter', stopAutoplay);
  carouselList.addEventListener('mouseleave', startAutoplay);
};
