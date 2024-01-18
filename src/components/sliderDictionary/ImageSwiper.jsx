import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import swiper from "swiper";
import "swiper/swiper-bundle.min.css"; // Import the CSS file from your styles directory
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);
const images = ["/dragon_swiper.png","/pitched_please_a_full_screen_book_page_of_an_old_dictonary_on_t_d7be560b-425e-40d0-b2d0-fd850e9c4ce3.png","/butterfly.png"];
const ImageSwiper = () => {
  swiper.om;
  const params = {
    autoHeight: false,

    pagination: { clickable: true },
    preventInteractionOnTransition: true,
    grabCursor: true,
    centeredSlides: true,

    slidesPerView: 1.5,
    loop: true,
    speed: 600,
    grabCursor: false,
    effect: "coverflow",

    coverflowEffect: {
      rotate: 1,
      depth: 200,
      slideShadows: false,
      modifier: 1,
    },

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: false,

      clickable: true,
    },

    noSwiping: true, // Disable swiping
    noSwipingClass: "swiper-no-swiping",
    simulateTouch: false,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    }, 
    breakpoints: {
      768: {
        slidesPerView: 1.5,
        spaceBetween: 0,
        simulateTouch: true,
      },
    820: {
        slidesPerView: 1.5,
        spaceBetween: 0,
        simulateTouch: true,
      
      },
    },
  };

  return (
    <Swiper
      {...params}
      style={{ transform: `translateX(0)` }}
      className="swiper-container"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="swiper-slide">
            <img src={image} alt="" />
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

export default ImageSwiper;
