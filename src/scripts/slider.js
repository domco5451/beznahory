import Swiper from "swiper/bundle";
import "swiper/css/bundle";

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    grabCursor: true,
    effect: "coverflow",
    centeredSlides: true,
    speed: 900,
    loop: true,
    slidesPerView: "1.5",
    coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 250,
      modifier: 1,
      slideShadows: false,
    },
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    a11y: {
      enabled: true,
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
    },
  });
});
