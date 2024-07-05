import React from "react";
import Image from "next/image";
import Link from "next/link";

import Modal from "react-modal";
import useTranslation from "next-translate/useTranslation";

import { useQrModal } from '@/context/ModalContext';
import useAppStoreLink from "@/hooks/useAppStoreLink";

import figtree from "@/helpers/fontHelper";

import {
  APP_LINK_APPLE,
  BLUR_URL,
} from "@/constants/index";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(6, 6, 6, 0.78)",
    zIndex: 1000,
  },
  content: {
    border: "none",
    background: "transparent",
    maxWidth: "851px",
    margin: "auto auto",
    padding: "0px",
    top: "0",
    bottom: "0px",
    right: "0px",
    left: "0px",
    overflow: "inherit",
    maxHeight: "564px",
    borderRadius: "0",
    paddingLeft: "15px",
    paddingRight: "15px"
  },
};
const TattooSearchModalPopup = ({ isOpen, closeModal }) => {
  const { t } = useTranslation();
  const { appStoreLink, imageSrc } = useAppStoreLink();
  const { openModal } = useQrModal();

  function handleClick() {
    openModal();
    closeModal();
  }
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className={`popup_wrap join_artist_popup ${figtree.className}`}>
        <div className="popup_container">
          <div className="popup_box_inner m_justify_content_center">
            <div className="popup_left justify_content_start block_bg_white mob_hidden">
              <Image
                src="/join-artist-n.png"
                alt="Manage your business"
                className="  object_fit_contain object_position"
                width={398}
                height={564}
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
                <h1 className="color_gray_550 custom_fs_38 fw_800 mb_15 m_mt_0">
                  {t("common:joinartistPage.title1")}
                </h1>
                <section className="progress_block">
                  <ul className="progressbar">
                    <li className="dwld-app-step">
                      <div className="progressbar_block">
                        <h4>{t("common:joinartistPage.downloadTheApp")}</h4>
                        <p>{t("common:joinartistPage.getStartedDownload")}</p>

                        <button
                          onClick={handleClick}
                          target="_blank"
                          className="button_primary button_primary mob_hidden mt_15"
                        >
                        {t("common:download_app")}
                        </button>
                        <Link href={appStoreLink} target="_blank" className="d_inline_block m_mt_15">
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
