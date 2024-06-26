import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import useWindowResize from "@/hooks/useWindowSize";

const ImageSlider = ({
  imagePaths,
  imgAlt,
  imgblurDataURL,
  imgWidth,
  imgHeight,
}) => {
  const { isMobileView } = useWindowResize();

  let sliderSettings = {};
  if (isMobileView) {
    sliderSettings = {
      dots: false,
      infinite: false,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  }

  return (
    <div className="img_box_wrap slick_custom_slider slick_slider_dict_mob">
      <Slider {...sliderSettings}>
        {imagePaths.map((imgPath, index) => (
          <div key={index}>
            <Image
              priority={true}
              src={imgPath}
              width={imgWidth}
              height={imgHeight}
              alt={imgAlt}
              placeholder="empty"
              className="responsive-image mr_15 pr_30"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
