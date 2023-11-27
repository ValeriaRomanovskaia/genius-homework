const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },
  navigation: {
    nextEl: '.scarousel-button next',
    prevEl: '.carousel-button',
  },
});
