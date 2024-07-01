import React from "react";
import Image from "next/image";
import Link from "next/link";

import useOpenApp from "@/hooks/useOpenApp";
import useAppStoreLink from "@/hooks/useAppStoreLink";

import { APP_LINK_APPLE, BLUR_URL } from "@/constants/constants";

export default function Banner({
    bannerImage ,mobileBanner,altText,
  title,
  description,
  buttonText,
  titleWidth,
  descriptionWidth,buttonBg,
  textColor,isBadge ,badge
}) {
    
  const { openApp } = useOpenApp();
  const { appStoreLink, imageSrc } = useAppStoreLink();

  return (
    <div>
      <section className="full_block_banner">
        <div class="row g-0">
          <div class="col-md-12">
            <div className="banner_block m_min_h_698">
              <div className="banner_col banner_grad_lft_mob_btm">
                <div className="banner_img_wrap">
                  <Image
                    src={bannerImage}
                    alt={altText}
                    fill
                    objectFit="cover"
                    objectPosition="center top"
                    placeholder="blur"
                    blurDataURL={BLUR_URL}
                    className="mob_hidden"
                  />
                  <Image
                    src={mobileBanner}
                    alt={altText}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={BLUR_URL}
                    fill
                    objectFit="cover"
                    objectPosition="center top"
                    className="desk_hidden "
                  />
                </div>
                <div className="banner_caption">
                  <div className="d_inline_block">
                {isBadge &&
                     <div className="klarna_badge">
                        <Image
                          src={badge}
                          alt="klarna"
                          width={70}
                          height={29}
                          loading="eager"
                        />
                      </div>
}

                    <div className="banner_content">
                      <h1 className={`custom_fs_80 fw_800 custom_fs_m_60 mt_0 ${titleWidth} ${textColor} m_max_100`}>
                       {Object.values(title).map((part, index) => (
                          <span key={index} className="textBlock">
                            {part}
                          </span>
                        ))}
                      </h1>

                      <p className={`mt_10 mb_40 m_mb_30 ${descriptionWidth} ${textColor}  m_max_100`}>
                        {description}
                      </p>

                      <button
                        onClick={openApp}
                        className={`${buttonBg} button_primary mob_hidden`}
                      >
                        {buttonText}
                      </button>

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
                          className="custom_download_icons desk_hidden"
                        />
                      </Link>
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
