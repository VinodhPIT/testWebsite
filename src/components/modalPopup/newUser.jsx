import React from "react";
import Image from "next/image";
import Link from "next/link";

import Modal from "react-modal";
import useTranslation from "next-translate/useTranslation";
import { UseResetRequestFormState } from "@/store/requestManagement/requestForm";

import { useQrModal } from '@/context/ModalContext';
import useAppStoreLink from "@/hooks/useAppStoreLink";

import {
  APP_LINK_APPLE,
  BLUR_URL,
} from "@/constants/constants";

import figtree from "@/helpers/fontHelper";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(6, 6, 6, 0.78)",
    zIndex: 1000,
  },
  content: {
    border: "none",
    background: "transparent",
    maxWidth: "800px",
    margin: "auto auto",
    padding: "0px",
    top: "0",
    bottom: "0px",
    right: "0px",
    left: "0px",
    overflow: "inherit",
    maxHeight: "500px",
    borderRadius: "0",
    paddingLeft: "15px",
    paddingRight: "15px"
  },
};
const SucessModal = ({}) => {
  const { t } = useTranslation();

  const { appStoreLink, imageSrc } = useAppStoreLink();
  const { openModal } = useQrModal();
  
  function handleClick() {
    openModal();
    UseResetRequestFormState()
  }

  return (
    <Modal
      isOpen={true}
      contentLabel="Example Modal"
      style={customStyles}
      ariaHideApp={false}
    >
      
        <div className={`popup_wrap ${figtree.className}`}>
          <div className="popup_container">
            <div className="popup_box_inner m_justify_content_center">
              <div className="popup_left justify_content_center block_bg_green_100 mob_hidden">
                <Image
                  src="/Great-idea-tattoo.png"
                  alt="Manage your business"
                  className="w_auto max_w_100pc object_fit_contain object_position"
                  width={398}
                  height={500}
                />
              </div>
              <div className="popup_right">
                <button
                  className="close_button"
                  onClick={UseResetRequestFormState}
                >
                  <Image
                    width={25}
                    height={25}
                    src="/popup-close.svg"
                    alt="close"
                  />
                </button>
                <div className="popup_right_content justify_content_center pl_16 pr_16 m_pb_30">
                  <div className="popup_content_wrap mt_0">
                    <div class="max_w_100pc text_center custom_text_with_icon">
                      <div class="icon mb_15">
                        <Image
                          priority
                          src="/icon_pallete.svg"
                          alt="pallete"
                          width={40}
                          height={41}
                          className="custom_download_icons"
                        />
                      </div>
                      <h5 class="color_gray_550 mb_0">
                        {t("common:stepper.ideaForTattoo")}
                      </h5>
                      <p class="custom_fs_16 text_fs_m_14 fw_400 color_gray_550 mb_0 mt_10">
                        {t("common:stepper.bringYouridea")}
                      </p>



                      <button
                        onClick={handleClick}
                        className="button_primary_outline mt_30 w_100pc d_max_248 mob_hidden"
                      >
                         {t("common:getApp")}
                      </button>

                           <div className="desk_hidden mt_24">
                           <h6 className="text_center custom_fs_14 fw_700 mb_8">
                          {t("common:downloadOurApp")}
                        </h6>
                     
                       <Link href={appStoreLink} target="_blank" className="d_inline_block ">
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
                          className="custom_download_icons "
                        />
                      </Link> 
                      </div>
                    </div>                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </Modal>
  );
};

export default SucessModal;
