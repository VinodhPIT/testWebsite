// import { useState, useRef } from "react";

// export const useSliderSettings = (isSmallDevice, data) => {

//   const sliderRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const sliderSettings = {
//     infinite: false,
//     arrows: isSmallDevice ? false : true,
//     speed: 300,
//     slidesToShow: isSmallDevice ? 1.5 : 5,
//     slidesToScroll: isSmallDevice ? 1 : 5,
//     swipe: false, // Disable swipe by default
//     responsive: [
//       {
//         breakpoint: 1365,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 4,
//         },
//       },
//       {
//         breakpoint: 1199,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 4,
//           swipe: true,
//           infinite: false,
//         },
//       },

//       {
//         breakpoint: 1025,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 4,
//           swipe: true,
//           infinite: false,
//         },
//       },

//       {
//         breakpoint: 900,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           swipe: true,
//           infinite: true,
//         },
//       },

//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1.5,
//           slidesToScroll: 1,
//           swipe: true,
//           infinite: false,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 500,
//         settings: {
//           infinite: false,
//           slidesToShow: 1.5,
//           slidesToScroll: 1,
//           dots: false,
//           swipe: true,
//         },
//       },
//     ],
//    afterChange: (current) => {
//       const newIndex = Math.round(current);
//       setActiveIndex(newIndex);
//     },
//   };

//   // const handleDotClick = (index) => {
//   //   setActiveIndex(index);
//   //   sliderRef.current.slickGoTo(index);
//   // };

//   const totalSlides = data && data.length;
//   const visibleSlides = Math.ceil(totalSlides - 0.5);
//   const dotsToShow = 3;
//   const totalDots = Math.min(dotsToShow, visibleSlides);

//   return {
//     sliderRef,
//     sliderSettings,
//     activeIndex,
//     // handleDotClick,
//     totalDots,
//     startDot,
//     endDot,
//   };
// };

import { useRef, useState } from "react";

export const useSliderSettings = (isSmallDevice, data) => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderSettings = {
    infinite: false,
    arrows: isSmallDevice ? false : true,
    speed: 300,
    slidesToShow: isSmallDevice ? 1.5 : 5,
    slidesToScroll: 1,
    dots: false, // We will handle dots manually
    responsive: [
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          swipe: true,
          
        },
      },

      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          swipe: true,
          
        },
      },

      {
        breakpoint: 870,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          swipe: true,
          infinite: false,
         arrows:true
        },
      },

      
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          swipe: true,
          infinite: false,
          dots: false,
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