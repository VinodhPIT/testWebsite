// homeSliderSettings.js

const sliderSettings = (isMobileView) => {
  return {
    infinite: false,
    arrows: isMobileView ? false : true,
    speed: 300,
    slidesToShow: isMobileView ? 1.5 : 5,
    slidesToScroll: isMobileView ? 1 : 5,
    swipe: false, // Disable swipe by default


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
          swipe:true,
          infinite: true,
        },
      },

      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          swipe:true,
          infinite: true
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          swipe:true,
          infinite: true
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          swipe:true,
          infinite: true
        },
      },

      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          swipe:true,
          infinite: true
        },
      },
    ],
  };
};

export default sliderSettings;
