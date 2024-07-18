import React from "react";
import Image from "next/image";
import Link from "next/link";

import useAppStoreLink from "@/hooks/useAppStoreLink";
import useWindowResize from "@/hooks/useWindowSize";


import { useQrModal } from "@/context/ModalContext";

import { APP_LINK_APPLE, BLUR_URL } from "@/constants/constants";

export default function Banner({
  bannerImage,
  mobileBanner,
  altText,
  title,
  description,
  buttonText,
  titleWidth,
  descriptionWidth,
  buttonBg,
  textColor,
  mob_textColor,
  isBadge,
  badge,
}) {
  const { appStoreLink, imageSrc } = useAppStoreLink();
  const { openModal } = useQrModal();
  const { isMobileView ,isMobileToTablet } = useWindowResize();


  return (
    <div>
      <section className="full_block_banner">
        <div class="row g-0">
          <div class="col-md-12">
            <div className="banner_block banner_mob_fit">
              <div className="banner_col m_min_h_inherit">
                <div className="banner_img_wrap position_relative">
                  <Image
                    src={bannerImage}
                    alt={altText}
                    fill
                    placeholder="blur"
                    blurDataURL={BLUR_URL}
                    className="object_fit_cover object_center_top position_relative mob_hidden"
                  />
                  <Image
                    src={mobileBanner}
                    alt={altText}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={BLUR_URL}
                    fill
                    className="object_fit_cover desk_hidden"
                  />
                </div>
                <div className="banner_caption position_absolute h_100pc">
                  <div className="d_inline_block">
                    {isBadge && (
                      <div className="klarna_badge mb_8 m_mb_15">
                        <Image
                          src={badge}
                          alt="klarna"
                          width={95}
                          height={40}
                          loading="eager"
                        />
                      </div>
                    )}

                    <div className="banner_content">
                      <h1
                        className={`custom_fs_80 fw_800 custom_fs_m_60 mt_0 ${titleWidth} ${
                          isMobileView ? mob_textColor : textColor
                        } m_max_100`}
                      >
                        {Object.values(title).map((part, index) => (
                          <span key={index} className="textBlock">
                            {part}
                          </span>
                        ))}
                      </h1>

                      <p
                        className={`mt_10 mb_40 m_mb_30 ${descriptionWidth} ${
                          isMobileView ? mob_textColor : textColor
                        }  m_max_100`}
                      >
                        {description}
                      </p>
                      {isMobileToTablet ? (
                        <Link href={appStoreLink} target="_blank">
                          <Image
                            priority
                            src={imageSrc}
                            alt={
                              appStoreLink === APP_LINK_APPLE
                                ? "App store"
                                : "GooglePlay"
                            }
                            width={134}
                            height={41}
                            placeholder="blur"
                            blurDataURL={BLUR_URL}
                            className="custom_download_icons"
                          />
                        </Link>
                      ) : (
                        <button
                          onClick={openModal}
                          className={`${buttonBg} button_primary`}
                        >
                          {buttonText}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
