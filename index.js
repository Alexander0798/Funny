import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const gallerySwiper = new Swiper('.gallery__swiper',
  {
    slidesPerView: 3.2,
    spaceBetween: 20,
    freeMode: true,
    pagination: {
      el: ".gallery__swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.gallery__swiper-button-next',
      prevEl: '.gallery__swiper-button-prev',
    },
  });
const fedbackSwiper = new Swiper('.feedback__swiper',
  {
    slidesPerView: 1.4,
    spaceBetween: 80,
    freeMode: true,
    pagination: {
      el: ".feedback__swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.feedback__swiper-button-next',
      prevEl: '.feedback__swiper-button-prev',
    },
  });