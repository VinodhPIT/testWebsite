import React from "react";
import Modal from "react-modal";
import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  blurDataURL,
} from "@/constants/constants";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

import Link from "next/link";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(6, 6, 6, 0.78)",
    zIndex: 1000,
  },
  content: {
    border: "none",
    background: "transparent",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "0px",
    top: "0",
    bottom: "0px",
    right: "0px",
    left: "0px",
    overflow: "inherit",
    maxHeight: "inherit",
    borderRadius: "8px",
  },
};
const TattooSearchModalPopup = ({ isOpen, closeModal }) => {
  const { t } = useTranslation();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
    >


      <div className="popup_wrap join_artist_popup">
        <div className="popup_container">
          <div className="popup_box_inner">
            <div className="popup_left justify_content_center block_bg_white mob_hidden">
              <Image
                src="/join-artist.png"
                alt="Manage your business"
                className="  object_fit_contain object_position"
                width={410}
                height={576}
              />{" "}
            </div>
            <div className="popup_right">
              <button className="close_button" onClick={closeModal}>
                <Image
                  width={25}
                  height={25}
                  src="/popup-close.svg"
                  alt="close"
                />
              </button>
              <div className="popup_right_content">
                <h1 className="color_gray_550 custom_fs_34 fw_600 fw_m_700 mb_15 m_mt_15">
                  {t("common:joinartistPage.title1")}
                </h1>
                <section className="progress_block">
                  <ul className="progressbar">
                    <li className="dwld-app-step">
                      <div className="progressbar_block">
                        <h4>{t("common:joinartistPage.downloadTheApp")}</h4>
                        <p>{t("common:joinartistPage.getStartedDownload")}</p>
                        <div className="mt_15 app_dwld_img_wrap">
                          <Link href={APP_LINK_APPLE} target="_blank">
                            <Image
                              priority
                              src="/app-store-new.svg"
                              alt={t("common:appStoreDownload")}
                              width={134}
                              height={41}
                              placeholder="blur"
                              blurDataURL={blurDataURL}
                              className="custom_download_icons w_auto"
                            />
                          </Link>{" "}
                          <Link href={APP_LINK_GOOGLE} target="_blank">
                            <Image
                              priority
                              src="/g-play-new.svg"
                              alt={t("common:playStoreDownload")}
                              width={134}
                              height={41}
                              placeholder="blur"
                              blurDataURL={blurDataURL}
                              className="custom_download_icons w_auto"
                            />
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li className="create-account-step">
                      <div className="progressbar_block">
                        <h4>{t("common:joinartistPage.CreateYourAccnt")}</h4>
                        <p>
                          {t(
                            "common:joinartistPage.CompleteYourProfileByUpdate"
                          )}
                        </p>
                      </div>
                    </li>
                    <li className="boost-account-step">
                      <div className="progressbar_block">
                        <h4>{t("common:joinartistPage.BoostYourAccount")}</h4>
                        <p>
                          {t(
                            "common:joinartistPage.easyVerificationAccountProcess"
                          )}
                        </p>
                      </div>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TattooSearchModalPopup;
