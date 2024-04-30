import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useNavigation } from "@/hooks/useRouter";

import Modal from "react-modal";
import { useRequestForm } from "@/store/requestManagement/requestForm";
import useTranslation from "next-translate/useTranslation";

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
      <div className="popup_wrap custom_popup_design">
        <div className="popup_container">
          <div className="popup_box_inner">
            <div className="selectedArtistblock">
              <h2 className="custom_fs_26 mb_10 text_center mb_20">
                Selected artists
              </h2>

              <button className="close_button" onClick={onCloseModel}>
                <Image
                  width={25}
                  height={25}
                  src="/popup-close.svg"
                  alt="close"
                />
              </button>

              <div className="picked_ArtistsPanel">
                <div className="request_filter_col">
                  {selectedArtists.map((e) => {
                    return (
                      <div className="request_filter_grid" key={e.id}>
                        <div
                          className="request_filter_img"
                          onClick={() => handleCheckboxChange(e.id)}
                        >
                          <div className="request_ref_checkbox">
                            <input
                              type="checkbox"
                              checked={e.isSelected}
                              onChange={() => {}}
                            />
                          </div>
                          <Image
                            src={e.image}
                            fill
                            objectFit="cover"
                            objectPosition="center"
                            alt={e.slug}
                            placeholder="blur"
                            blurDataURL={blurDataURL}
                          />
                        </div>

                        <div className="request_filter_dtls">
                          <div className="request_filter_profile">
                            <Image
                              src={e.artistImage}
                              width={36}
                              height={36}
                              alt={e.slug}
                            />
                          </div>

                          <div className="request_filter_profile_dtls">
                            <Link
                              href={`/${router.locale}/artists/${e.slug}`}
                              target="_blank"
                            >
                              <h6 className="request_filter_profile_title">
                                {e.names}
                              </h6>
                              <span className="request_filter_profile_address">
                                {getCountry(e.studios, e.location)}
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="d_flex justify_space_between">
                <button
                  onClick={onCloseModel}
                  className="btn_outline_secondary btn_cutom_40 "
                >
                  Cancel
                </button>

                <button
                  onClick={onsubmit}
                  disabled={!anyDeselected}
                  className={
                    anyDeselected
                      ? "btn_secondary btn_cutom_40"
                      : "btn_disabled_40"
                  }
                >
                  Save
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
