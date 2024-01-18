import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import { APP_LINK_APPLE, APP_LINK_GOOGLE ,blurDataURL } from "@/constants/constants";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const ZodiacCarousel = ({ items, itemStyle }) => {
  const { t } = useTranslation();
  return (
    <Carousel
      showArrows={true}
      preventMovementUntilSwipeScrollTolerance={true}
      swipeScrollTolerance={50}
      renderArrowPrev={(onClickHandler, hasPrev) => (
        <button
          type="button"
          disabled={!hasPrev ? true : false}
          className={
            hasPrev
              ? "custom-carousel-arrow custom-carousel-prev "
              : "custom-carousel-arrow-disable custom-carousel-prev "
          }
          onClick={onClickHandler}
        >
          <Image src="/Alt Arrow Left.svg" alt="Left Arrow" width={32} height={32} />
        </button>
      )}
      renderArrowNext={(onClickHandler, hasNext) => (
        <button
          type="button"
          disabled={!hasNext ? true : false}
          className={
            hasNext
              ? "custom-carousel-arrow custom-carousel-next"
              : "custom-carousel-arrow-disable custom-carousel-next"
          }
          onClick={onClickHandler}
        >
          <Image src="/Alt Arrow Right.svg" alt="Right Arrow" width={32} height={32} />
        </button>
      )}
    >
      {items.map((item, index) =>
        item.image ? (
          <div key={index} className="custom_carousel_slider custom_type_one">            
            <div className="custom_carousel_slider_item">
              <Image
                src={item.image}
                alt={item.heading}
                width={289}
                height={200}
                className="align-self-center carousel-image"
                priority
              
              />
              <h4 className="custom_carousel_title">{item.heading}</h4>
              <p className="custom_carousel_data">{item.text}</p>
              <div className={itemStyle}>
                <div className="keywords_wrap">
                  <ul className="keywords_list">
                    <li>{item.button1}</li>
                    <li>{item.button2}</li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        ) : (
          <div className="download_app" key={index}>
              <h2 className='m_text_center'>
                <span>{t("common:download-app-forMore")} {t("common:download-app-forMore-sub")}</span>
              </h2>           

            <span className="download_app_img app_img_xs">
              <Link
                href={APP_LINK_APPLE}
                target="_blank"
                className="list_inline_item mr_5 mb_5"
              >
                <Image src="/app-store.svg" alt="AppStore" className="w_auto"  width={135} height={41} priority />
              </Link>

              <Link
                href={APP_LINK_GOOGLE}
                target="_blank"
                className="list_inline_item"
              >
                <Image src="/g-play.svg" alt="PlayStore" className="w_auto" width={135} height={41} priority />
              </Link>
            </span>
            {/* <p className="custom_carousel_data">
            {t("common:downloadContent")}
            </p> */}
          </div>
        )
      )}
    </Carousel>
  );
};

const MythologyCarousel = ({ items, itemStyle }) => {
  const { t } = useTranslation();
  return (
    <Carousel
      showArrows={true}
      preventMovementUntilSwipeScrollTolerance={true}
      swipeScrollTolerance={50}
      renderArrowPrev={(onClickHandler, hasPrev) => (
        <button
          type="button"
          disabled={!hasPrev ? true : false}
          className={
            hasPrev
              ? "custom-carousel-arrow custom-carousel-prev "
              : "custom-carousel-arrow-disable custom-carousel-prev "
          }
          onClick={onClickHandler}
        >
          <Image src="/Alt Arrow Left.svg" alt="Left Arrow" width={32} height={32} />
        </button>
      )}
      renderArrowNext={(onClickHandler, hasNext) => (
        <button
          type="button"
          disabled={!hasNext ? true : false}
          className={
            hasNext
              ? "custom-carousel-arrow custom-carousel-next"
              : "custom-carousel-arrow-disable custom-carousel-next"
          }
          onClick={onClickHandler}
        >
          <Image src="/Alt Arrow Right.svg" alt="Right Arrow" width={32} height={32} />
        </button>
      )}
    >
      {items.map((item, index) =>
        item.image ? (
          <div key={index} className="custom_carousel_slider custom_type_one">            
            <div className="custom_carousel_slider_item">
             

              <Image
                src={item.image}
                alt={item.heading}
                width={289}
                height={200}
                className="align-self-center carousel-image"
                priority
      
              />

              <h4 className="custom_carousel_title">{item.heading}</h4>
              <p className="custom_carousel_data">{item.text}</p>
              <div className={itemStyle}>
                <div className="keywords_wrap">
                  <ul className="keywords_list">
                    <li>{item.button1}</li>
                    <li>{item.button2}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="download_app" key={index}>
                    <h2 className='m_text_center'>
                      <span>{t("common:download-app-forMore")} {t("common:download-app-forMore-sub")}</span>
                    </h2>

            <span className="download_app_img app_img_xs">
              <Link
                href={APP_LINK_APPLE}
                target="_blank"
                className="list_inline_item mr_5 mb_5"
              >
                <Image src="/app-store.svg" alt="AppStore"  width={135} height={41} className="w_auto" />
              </Link>

              <Link
                href={APP_LINK_GOOGLE}
                target="_blank"
                className="list_inline_item"
              >
                <Image src="/g-play.svg" alt="PlayStore" width={135} height={41} className="w_auto" />
              </Link>
            </span>
            {/* <p className="custom_carousel_data">
            {t("common:downloadContent")}
            </p> */}
          </div>
        )
      )}
    </Carousel>
  );
};

const AztecCarousel = ({ items, itemStyle }) => {
  const { t } = useTranslation();

  return (
    <Carousel
      showArrows={true}
      preventMovementUntilSwipeScrollTolerance={true}
      swipeScrollTolerance={50}
      renderArrowPrev={(onClickHandler, hasPrev) => (
        <button
          type="button"
          disabled={!hasPrev ? true : false}
          className={
            hasPrev
              ? "custom-carousel-arrow custom-carousel-prev "
              : "custom-carousel-arrow-disable custom-carousel-prev "
          }
          onClick={onClickHandler}
        >
          <Image src="/Alt Arrow Left.svg" alt="Left Arrow" width={32} height={32} />
        </button>
      )}
      renderArrowNext={(onClickHandler, hasNext) => (
        <button
          type="button"
          disabled={!hasNext ? true : false}
          className={
            hasNext
              ? "custom-carousel-arrow custom-carousel-next"
              : "custom-carousel-arrow-disable custom-carousel-next"
          }
          onClick={onClickHandler}
        >
          <Image src="/Alt Arrow Right.svg" alt="Right Arrow" width={32} height={32} />
        </button>
      )}
    >
      {items.map((item, index) =>
        item.image ? (
          <div key={index} className="custom_carousel_slider custom_type_one">           
            <div
              className="custom_carousel_slider_item"
              style={{ position: "relative" }}
            >
              <Image
                src={item.image}
                alt={item.heading}
                width={289}
                height={200}
                className="align-self-center carousel-image"
                priority
               
              />

           

              <h4 className="custom_carousel_title">{item.heading}</h4>
              <p className="custom_carousel_data">{item.text}</p>
              <div className={itemStyle}>
              <div className="keywords_wrap">
                <ul className="keywords_list">
                  <li>{item.button1}</li>
                  <li>{item.button2}</li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        ) : (
          <div className="download_app" key={index}>
            <h2 className='m_text_center'>
              <span>{t("common:download-app-forMore")} {t("common:download-app-forMore-sub")}</span>
            </h2>

            <span className="download_app_img app_img_xs">
              <Link
                href={APP_LINK_APPLE}
                target="_blank"
                className="list_inline_item mr_5 mb_5"
              >
                <Image src="/app-store.svg" alt="AppStore" width={135} height={41} className="w_auto"  priority/>
              </Link>

              <Link
                href={APP_LINK_GOOGLE}
                target="_blank"
                className="list_inline_item"
              >
                <Image src="/g-play.svg" alt="PlayStore" className="w_auto" width={135} height={41} priority />
              </Link>
            </span>
            {/* <p className="custom_carousel_data">
            {t("common:downloadContent")}
            </p> */}
          </div>
        )
      )}
    </Carousel>
  );
};

export { ZodiacCarousel, MythologyCarousel, AztecCarousel };
