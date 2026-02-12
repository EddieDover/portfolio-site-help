document.addEventListener('DOMContentLoaded', () => {
  const carouselSlide = document.querySelector('.carousel-slide');
  const carouselImages = document.querySelectorAll('.carousel-slide img');

  if (!carouselSlide || carouselImages.length === 0) return;

  let counter = 0;

  function showNextSlide() {
    // Recalculate size each time to handle window resizes gracefully
    // Assuming all images are same width
    const size = carouselImages[0].clientWidth;
    
    counter++;
    if(counter >= carouselImages.length) {
      counter = 0;
    }
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

  setInterval(showNextSlide, 3000); // rotate every 3 seconds
});
