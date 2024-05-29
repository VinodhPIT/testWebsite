import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useNavigation } from "@/hooks/useRouter";

import Modal from "react-modal";
import { useRequestForm } from "@/store/requestManagement/requestForm";
import useTranslation from "next-translate/useTranslation";
import figtree from "@/helpers/fontHelper";
import { blurDataURL } from "@/constants/constants";
import { getCountry } from "@/helpers/helper";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(6, 6, 6, 0.78)",
    zIndex: 1000,
  },
  content: {
    border: "none",
    background: "transparent",
    maxWidth: "750px",
    margin: "auto auto",
    padding: "0px",
    top: "0",
    bottom: "0px",
    right: "0px",
    left: "0px",
    overflow: "inherit",
    maxHeight: "578px",
    borderRadius: "8px",
  },
};
const SelectedArtist = ({ toggleModel, onCloseModel }) => {
  const { router } = useNavigation();
  const { t } = useTranslation();
  const { selectedArtists, checkBoxTrigger, removeUncheckArtist } =
    useRequestForm();

  const handleCheckboxChange = (id) => {
    checkBoxTrigger(id);
  };

  const onsubmit = () => {
    removeUncheckArtist();
    onCloseModel();
  };

  const anyDeselected = selectedArtists.some((artist) => !artist.isSelected);

  return (
    <Modal isOpen={toggleModel} style={customStyles} ariaHideApp={false}>
      <div className={`popup_wrap custom_popup_design reqst_form_popup  ${figtree.className}`}>
        <div className="popup_container">
          <div className="popup_box_inner">
            <div className="selected_artistblock">
              <h2 className="color_gray_550 custom_fs_26 custom_fs_m_20 mb_10 text_center mb_20 fw_600">
              {t("common:stepper.selectedArtists")}
              </h2>

              <button className="close_button" onClick={onCloseModel}>
                <Image
                  width={25}
                  height={25}
                  src="/popup-close.svg"
                  alt="close"
                />
              </button>

              <div className="picked_artists_panel">
                <div className="request_filter_col">
                  {selectedArtists.map((e) => {
                    return (
                      <div className="request_filter_grid" key={e.id} onClick={() => handleCheckboxChange(e.id)}>
                        <div className="request_filter_dtls">
                          <div className="request_filter_profile">
                            <Image
                              src={e.artistImage}
                              width={46}
                              height={46}
                              alt={e.slug}
                            />
                          </div>
                          <div className="request_filter_profile_dtls">                            
                              <h6 className="request_filter_profile_title">
                                {e.names}
                                <Link 
                                href={`/${router.locale}/artists/${e.slug}`}
                                target="_blank" className="ml_5">
                                  <Image
                                    src="/icon_link.svg"
                                    width={12}
                                    height={13}
                                    alt="Link"
                                  />
                                </Link>
                              </h6>
                              <span className="request_filter_profile_address">
                                {getCountry(e.studios, e.location)}
                              </span>
                          </div>
                        </div>

                        <div className="request_ref_checkbox">
                          <input
                            type="checkbox"
                            checked={e.isSelected}
                            onChange={() => {}}
                          />
                        </div>    
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="d_flex justify_space_between">
                <button
                  onClick={onCloseModel}
                  className="btn_outline_base"
                >
                   {t("common:cancel")}
                </button>

                <button
                  onClick={onsubmit}
                  disabled={!anyDeselected}
                  className={
                    anyDeselected
                      ? "btn_defult_base"
                      : "btn_defult_base" 
                  }
                >
                 {t("common:stepper.save")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SelectedArtist;
