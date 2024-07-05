import React from "react";
import Image from "next/image";

import Modal from "react-modal";
import useTranslation from "next-translate/useTranslation";

import figtree from "@/helpers/fontHelper";
import { BLUR_URL } from "@/constants/index";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(6, 6, 6, 0.78)",
    zIndex: 1000,
  },
  content: {
    border: "none",
    background: "transparent",
    maxWidth: "1288px",
    margin: "auto auto",
    padding: "15px 15px",
    top: "0",
    bottom: "0px",
    right: "0px",
    left: "0px",
    overflow: "inherit",
    maxHeight: "inherit",
    borderRadius: "0",
    height: "100%",
  },
};
const QrCodeDownloadModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  if (!isOpen) return null;
  return (
    <Modal
      isOpen={true}
      contentLabel="Example Modal"
      style={customStyles}
      ariaHideApp={false}
    >
      <div className={`qr-model ${figtree.className}`}>
        <button className="close_button" onClick={onClose}>
          <Image width={32} height={32} src="/popup-close.svg" alt="close" />
        </button>

        <h4 className="custom_fs_60 fw_800 text_center ">{"Get the inckd. app"}</h4>
        <div className="qrimage-wrapper mt_40 mb_40">
          <Image
            src={"/onelinkto.png"}
            width={215}
            height={215}
            className="mt_40 mb_40"
            alt="QR"
            placeholder="blur"
            blurDataURL={BLUR_URL}
          />
        </div>
        <p
          className="custom_fs_18 fw_600 text_center color_gray_400"
        >
         {"Scan the QR code on your mobile phone camera to download the inckd. app"}
        </p>
      </div>
    </Modal>
  );
};

export default QrCodeDownloadModal;
