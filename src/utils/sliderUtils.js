
import { useRef, useState } from "react";

export const useSliderSettings = (isSmallDevice, data) => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderSettings = {
    infinite: false,
    arrows: isSmallDevice ? false : true,
    speed: 300,
    slidesToShow: isSmallDevice ? 1.5 : 5,
    slidesToScroll: 5,
    dots: true, 
    responsive: [
     

      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          swipe: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          swipe: true,
          arrows: true
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          swipe: true,
          infinite: false,
          dots: true,
        },
      },
    ],
    afterChange: (current) => {
      const newIndex = Math.round(current);
      setActiveIndex(newIndex);
    },
  };

  const totalSlides = data && data.length;
  const visibleSlides = Math.ceil(totalSlides - 3);
  const dotsToShow = 3;
  const totalDots = Math.min(dotsToShow, visibleSlides);

  return {
    sliderRef,
    sliderSettings,
    totalDots,
    activeDot: (index) => index % totalDots,
    activeIndex,
  };
};
