import React, { useState } from "react";
import Link from "next/link";

import { useNavigation } from "@/hooks/useRouter";

import Image from "next/image";

import axios from "axios";
import useTranslation from "next-translate/useTranslation";
import { useRequestForm } from "@/store/requestManagement/requestForm"; // Import Zustand store hook
import Modal from "@/components/modalPopup/newUser";
import Modal1 from "@/components/modalPopup/existingUser";

import { getCountry } from "@/helpers/helper";
import { CustomerRequestSize, BodyPart } from "@/utils/customerRequestType";




const Review = () => {
  const {
    bodyPart,
    tattooSize,
    message,
    email,
    phone,
    prevPage,
    images,
    selectedArtists,
    userExists,
  } = useRequestForm();

  const array = selectedArtists.map((e) => e.artistId);

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const { router } = useNavigation();

  const uploadDataToAPI = () => {
    setLoading(true);
    const formData = new FormData();

    const sizeKey = Object.keys(CustomerRequestSize).find(
      (key) => CustomerRequestSize[key] === tattooSize
    );

    const isSizePresent = Object.values(CustomerRequestSize).includes(tattooSize);
    const isBodyPartPresent = Object.values(BodyPart).includes(bodyPart);
    formData.append("body_part", !isBodyPartPresent ? "nil" : bodyPart);
    formData.append("artist_uids", array.join(","));
    formData.append("size", !isSizePresent ? "nil" : sizeKey);
    formData.append("comments", message);
    formData.append("customer_email", email);
    formData.append("customer_phone_no", '+'+phone);
    formData.append("source", 'web');
    images.map((el) => {
      formData.append("secondary_images", el.File);
    });
    axios
      .post(
        `${process.env.apiDomain}/web/api/customer-request/save`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        setLoading(false);
        setSuccess(true);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="full_col_block h_126_vh m_h_60_vh">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <section className="request_landing_content pt_30 m_pt_10">
                <div className="request_landing_content_col align_self_stretch">
                  <h2>{t("common:stepper.title7")}</h2>

                  <div className="request_review_block">
                    <div className="request_review_filter">
                      <div className="request_filter_opt">
                        <h6>{t("common:stepper.tattooSize")}</h6>
                        <p>{tattooSize}</p>
                      </div>
                      <div className="request_filter_opt">
                        <h6>{t("common:stepper.tatooPosition")}</h6>
                        <p>{bodyPart}</p>
                      </div>
                    </div>

                    <div className="request_review_desc">
                      <h6>{t("common:stepper.description")}</h6>
                      <p>{message}</p>
                    </div>

                    <div className="request_review_contact_info">
                      <h6>{t("common:stepper.contactInformation")}</h6>
                      <div className="request_contact_info_wrap">
                        {phone && (
                          <div className="request_contact_info_col">
                            <Image
                              src="/review_call.svg"
                              width={16}
                              height={16}
                              alt="Review call"
                            />
                            <p>+{phone}</p>
                          </div>
                        )}
                        <div className="request_contact_info_col">
                          <Image
                            src="/review_mail.svg"
                            width={16}
                            height={16}
                            alt="Review mail"
                          />
                          <p>{email}</p>
                        </div>
                      </div>
                    </div>

                    <div className="request_review_desc">
                      <h6>{t("common:stepper.referenceImages")}</h6>
                      <div className="request_review_ref">
                        {images.map((el, id) => {
                          return (
                            <div className="request_review_ref_img" key={id}>
                              <Image
                                src={images[id].imageUrl}
                                width={175}
                                height={175}
                                alt="Reference"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="request_review_selected_artist">
                      <h6>{t("common:stepper.selectedArtists")}</h6>
                      <div className="request_filter_wrap">
                        <div className="request_filter_col">
                          {selectedArtists.map((el, index) => {
                            return (
                              <div className="request_filter_grid" key={index}>                                
                                <div className="request_filter_dtls">
                                  <div className="request_filter_profile">
                                    <Image
                                      src={el.artistImage}
                                      width={46}
                                      height={46}
                                      alt={el.slug}
                                    />
                                  </div>
                                  <div class="request_filter_profile_dtls">
                                    <Link  href={`/${router.locale}/artists/${el.slug}`}  target="_blank">
                                  
                                    <h6 class="request_filter_profile_title">
                                      {el.names}
                                    </h6>
                                    <span className="request_filter_profile_address">
                                      {getCountry(el.studios, el.location)}
                                    </span>

                                    </Link>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="request_ref_btn rqst_btn_bottom request_mob_fixed m_gap_16 m_pb_15 m_pt_10">
                    <button
                      onClick={() => prevPage()}
                      className="btn_outline_base mt_10 align_self m_w_50pc m_mt_0"
                      >
                      {t("common:goBack")}
                    </button>

                    <button
                      className="btn_defult_base mt_10 pull_right align_self_end m_w_50pc m_mt_0"
                      onClick={() => uploadDataToAPI()}
                    >
                      {t("common:submit")}
                      {loading ? (
                        <span
                          className="spinner-border spinner-border-sm"
                          aria-hidden="true"
                        ></span>
                      ) : null}
                    </button>                   
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {success && !userExists && <Modal />}
      {success && userExists && <Modal1 />}

    </>
  );
};

export default Review;
