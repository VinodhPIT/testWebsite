import { useRef, useState } from "react";

export const JournalSliderSettings = (isSmallDevice, data) => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderSettings = {
    infinite: false,
    arrows: isSmallDevice ? false : true,
    speed: 300,
    slidesToShow: isSmallDevice ? 1 : 3,
    slidesToScroll: isSmallDevice ? 1 : 3,
    dots: false,

    responsive: [ 
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          swipe: true,
          infinite: false,
          arrows: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          infinite: false,
        },
      },
    ],
    afterChange: (current) => {
      const newIndex = Math.round(current);
      setActiveIndex(newIndex);
    },
  };

  const totalDots = data && data.length;
  const dotsToShow = 3; // Number of dots to show at a time
  const dotWidth = 14; 
  const maxTransform = (totalDots - dotsToShow) * dotWidth;

  // Center the current dot, but avoid centering for the last slide
  const centerOffset = Math.floor(dotsToShow / 2);
  const isLastSlide = activeIndex === totalDots - 1;
  const currentTransform = isLastSlide
    ? maxTransform
    : Math.min(Math.max((activeIndex - centerOffset) * dotWidth, 0), maxTransform);

  const transformValue = `translateX(-${currentTransform}px)`;

  return {
    sliderRef,
    sliderSettings,
    totalDots,
    activeDot: (index) => index % totalDots,
    activeIndex,
    transformValue,
  };
};

export const UseSliderSettings = (isSmallDevice, data) => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderSettings = {
    infinite: false,
    arrows: isSmallDevice ? false : true,
    speed: 300,
    slidesToShow: isSmallDevice ? 1.5 : 4,
    slidesToScroll: 1,
    dots: false, // We will handle dots manually
    swipe: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          swipe: true,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          swipe: true,
          infinite: false,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.25,
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

  const totalDots = data && data.length;
  const dotsToShow = 3; // Number of dots to show at a time
  const dotWidth = 14; 
  const maxTransform = (totalDots - dotsToShow) * dotWidth;

  // Center the current dot, but avoid centering for the last slide
  const centerOffset = Math.floor(dotsToShow / 2);
  const isLastSlide = activeIndex === totalDots - 1;
  const currentTransform = isLastSlide
    ? maxTransform
    : Math.min(Math.max((activeIndex - centerOffset) * dotWidth, 0), maxTransform);

  const transformValue = `translateX(-${currentTransform}px)`;

  return {
    sliderRef,
    sliderSettings,
    totalDots,
    activeDot: (index) => index % totalDots,
    activeIndex,
    transformValue,
  };
};


export const UseSliderSetting = (isSmallDevice, data) => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
 
  const sliderSettings = {
    infinite: false,
    arrows: isSmallDevice ? false : true,
    speed: 300,
    slidesToShow: isSmallDevice ? 1.5 : 4,
    slidesToScroll: 1,
    dots: false, // We will handle dots manually
    swipe: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          swipe: true,
        },
      },
 
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          swipe: true,
          infinite: false,
          arrows: true,
        },
      },
 
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2,
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
 
  const totalDots = data && data.length;
  const dotsToShow = 3; // Number of dots to show at a time
  const dotWidth = 14; 
  const maxTransform = (totalDots - dotsToShow) * dotWidth;
  // Center the current dot, but avoid centering for the last slide
  const centerOffset = Math.floor(dotsToShow / 2);
  const isLastSlide = activeIndex === totalDots - 1;
  const currentTransform = isLastSlide
    ? maxTransform
    : Math.min(Math.max((activeIndex - centerOffset) * dotWidth, 0), maxTransform);
  const transformValue = `translateX(-${currentTransform}px)`;
 
  return {
    sliderRef,
    sliderSettings,
    totalDots,
    activeDot: (index) => index % totalDots,
    activeIndex,
    transformValue,
  };
};


export const UseStyleSettings = (isSmallDevice, data) => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderSettings = {
    infinite: false,
    arrows: isSmallDevice ? false : true,
    speed: 300,
    slidesToShow: isSmallDevice ? 1.5 : 3,
    slidesToScroll: 1,
    dots: false, // We will handle dots manually
    swipe: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          swipe: true,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          swipe: true,
          infinite: false,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.25,
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

  const totalDots = data && data.length;
  const dotsToShow = 3; // Number of dots to show at a time
  const dotWidth = 14; 
  const maxTransform = (totalDots - dotsToShow) * dotWidth;

  // Center the current dot, but avoid centering for the last slide
  const centerOffset = Math.floor(dotsToShow / 2);
  const isLastSlide = activeIndex === totalDots - 1;
  const currentTransform = isLastSlide
    ? maxTransform
    : Math.min(Math.max((activeIndex - centerOffset) * dotWidth, 0), maxTransform);

  const transformValue = `translateX(-${currentTransform}px)`;

  return {
    sliderRef,
    sliderSettings,
    totalDots,
    activeDot: (index) => index % totalDots,
    activeIndex,
    transformValue,
  };
};