// Carousel Module - Simple slideshow without bxSlider
export const carousel = () => {
  const carouselList = document.querySelector('.carousel__list');
  if (!carouselList) return;

  const slides = carouselList.querySelectorAll('li');
  let currentSlide = 0;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  };

  // Initialize
  showSlide(0);

  // Auto rotate every 4 seconds with 2 second transition
  setInterval(nextSlide, 6000);
};
