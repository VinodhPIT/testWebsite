import React, { useState } from "react";
import { useRequestForm } from "@/store/requestManagement/requestForm"; // Import Zustand store hook
import useTranslation from "next-translate/useTranslation";
import Modal from "@/components/modalPopup/newUser";
import Modal1 from "@/components/modalPopup/existingUser";
import Image from "next/image";
import { getCountry } from "@/helpers/helper";
import axios from "axios";
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

  const uploadDataToAPI = () => {
    setLoading(true)
    const formData = new FormData();

    formData.append("body_part", bodyPart);
    formData.append("artist_uids", array.join(","));
    formData.append("size", tattooSize);
    formData.append("comments", message);
    formData.append("customer_email", email);
    formData.append("customer_phone_no",phone);
 

    // images.forEach((image, index) => {
    //   formData.append(`secondary_images[${index}]`, image.data);
    //   formData.append(`secondary_images[${index}]`, image.type);
    //   formData.append(`secondary_images[${index}]`, image.filename);
    //   formData.append(`secondary_images[${index}]`, image.name);
    // });



    axios
      .post("https://admin.inckd.com/web/api/customer-request/save", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setLoading(false)
        setSuccess(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="full_col_block h_126_vh m_h_118_vh">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align_content">
              <section className="request_landing_content">
                <div className="request_landing_content_col align_self_stretch">
                  <h2>{t("common:stepper.title7")}</h2>

                  <div className="request_review_block">
                    <div class="request_review_filter">
                      <div class="request_filter_opt">
                        <h6>{t("common:stepper.tattooSize")}</h6>
                        <p>{tattooSize}</p>
                      </div>
                      <div class="request_filter_opt">
                        <h6>{t("common:stepper.tatooPosition")}</h6>
                        <p>{bodyPart}</p>
                      </div>
                    </div>

                    <div class="request_review_desc">
                      <h6>{t("common:stepper.description")}</h6>
                      <p>{message}</p>
                    </div>

                    <div class="request_review_contact_info">
                      <h6>{t("common:stepper.contactInformation")}</h6>
                      <div class="request_contact_info_wrap">
                        {phone && (
                          <div class="request_contact_info_col">
                            <Image
                              src="/review_call.svg"
                              width={16}
                              height={16}
                              alt="Review call"
                            />
                            <p>{phone}</p>
                          </div>
                        )}
                        <div class="request_contact_info_col">
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

                    <div class="request_review_desc">
                      <h6>{t("common:stepper.referenceImages")}</h6>
                      <div class="request_review_ref">
                        {images.map((el, id) => {
                          return (
                            <div class="request_review_ref_img">
                              <Image
                                src={images[id].url}
                                width={175}
                                height={175}
                                alt="Reference"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div class="request_review_selected_artist">
                      <h6>{t("common:stepper.selectedArtists")}</h6>
                      <div class="request_filter_wrap">
                        <div class="request_filter_col">
                          {selectedArtists.map((el, index) => {
                            return (
                              <div class="request_filter_grid" key={index}>
                                <div class="request_filter_img">
                                  <Image
                                    src={el.image}
                                    fill
                                    objectFit="cover"
                                    objectPosition="center"
                                    alt={el.slug}
                                  />
                                </div>
                                <div class="request_filter_dtls">
                                  <div class="request_filter_profile">
                                    <Image
                                      src={el.artistImage}
                                      width={36}
                                      height={36}
                                      alt={el.slug}
                                    />
                                  </div>
                                  <div class="request_filter_profile_dtls">
                                    <h6 class="request_filter_profile_title">
                                      {el.names}
                                    </h6>
                                    <span class="request_filter_profile_address">
                                      {getCountry(el.studios, el.location)}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <button
                      onClick={() => prevPage()}
                      class="btn_outline_secondary btn_cutom_40 mt_15 align_self"
                    >
                      {t("common:goBack")}
                    </button>
                    <button
                      class="btn_secondary btn_cutom_40 mt_15 pull_right align_self_end"
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
