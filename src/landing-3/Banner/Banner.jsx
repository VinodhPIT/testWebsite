import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BLUR_URL } from "@/constants/constants";
import styles from "./banner.module.css";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

export default function Banner({
  bannerTitle,
  bannerImg,
  bannerButton,
  textColor,
  position,
  altTag,
}) {
  const currentPage = typeof window !== "undefined" ? window.location.href : "";

  // drachen-tattoos.png

  return (
    <div className={styles.header}>
      <header>
        <div className="container">
          <div className={styles.block_wrap}>
            <span className="logo_section">
              <Link href={"/"} className={styles.header_logo}>
                <Image
                  src="/Inckd-logo-b.svg"
                  width={105}
                  height={31}
                  alt="logo"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR_URL}
                  //fill //position-absolute
                  //objectFit="cover"
                  //objectPosition='bottom'

                  layout="responsive"
                />
              </Link>
            </span>
          </div>
        </div>
      </header>

      <div className={styles.banner_block}>
        <div className={styles.banner_wrap}>
          <div className={styles.banner_item}>
            <div className={styles.banner}>
              <div className={styles.banner_inner}>
                <Image
                  src={bannerImg}
                  alt={altTag}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR_URL}
                  fill
                  objectFit="cover"
                  // objectPosition="bottom"
                  objectPosition={position}
                />
              </div>
            </div>
            <div className={`${""} ${styles.banner_content}`}>
              <div className={styles.banner_caption}>
                <h1 style={{ color: textColor }}>
                  <span className="m_dis_inline">{bannerTitle}</span>
                  {/* <span class="textBlock m_dis_inline">Mystische Kunst für </span>
                  <span class="textBlock m_dis_inline">deine Haut</span> */}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.social_icons}>
        <ul>
          <li>
            <WhatsappShareButton
              url={currentPage}
              title="Please share to your friends and keep supporting inckd"
              hashtag="#code"
            >
              <WhatsappIcon
                size={32}
                iconFillColor="#000"
                borderRadius={12}
                bgStyle={{ fill: "#fff" }}
              />
            </WhatsappShareButton>
          </li>
          <li>
            <FacebookShareButton
              url={currentPage}
              title="Please share to your friends and keep supporting inckd"
              hashtag="Inckd"
            >
              <Image
                src={"/icon-fb-header.svg"}
                alt="Facebook"
                width={33}
                height={33}
                priority
              />
            </FacebookShareButton>
          </li>
          <li>
            <LinkedinShareButton
              url={currentPage}
              title="Please share to your connections and keep supporting inckd"
            >
              <Image
                src={"/icon-inkd-header.svg"}
                alt="Facebook"
                width={33}
                height={33}
                priority
              />
            </LinkedinShareButton>
          </li>
          <li>
            <EmailShareButton
              url={currentPage}
              subject="inckd"
              body="Please share to your friends and keep supporting inckd"
            >
              <Image
                src={"/icon-mail-header.svg"}
                alt="Mail"
                width={33}
                height={33}
                priority
              />
            </EmailShareButton>
          </li>
        </ul>
      </div>
    </div>
  );
}
