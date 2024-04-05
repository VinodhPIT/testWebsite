// components/Reference.js
import React from "react";
import Image from "next/image";
import { useRequestForm } from "@/store/requestManagement/requestForm"; // Import Zustand store hook
import useTranslation from "next-translate/useTranslation";
const Artist = () => {
  const { nextPage, prevPage } = useRequestForm(); // Zustand store and setter
  const { t } = useTranslation();
  return (
    <>
      <div className="full_col_block h_126_pc">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align_content">
              <section className="request_landing_content">
                <div className="request_landing_content_col align_self_stretch">
                  <h2>{t("common:stepper.title5")}</h2>

                  <div class="request_filter_wrap">
                    <div class="request_filter_col">
                      <div class="request_filter_grid">
                        <div class="request_filter_img">
                          <Image
                            src="/landing_01.png"
                            fill
                            objectFit="cover"
                            objectPosition="center"
                            alt="Landing"
                          />
                        </div>
                        <div class="request_filter_dtls">
                          <div class="request_filter_profile">
                            <Image
                              src="/landing_pro.png"
                              width={36}
                              height={36}
                              alt="Landing profile"
                            />
                          </div>
                          <div class="request_filter_profile_dtls">
                            <h6 class="request_filter_profile_title">James Franco</h6>
                            <span class="request_filter_profile_address">London , United Kingdom</span>
                          </div>
                        </div>
                      </div>

                       <div class="request_filter_grid">
                        <div class="request_filter_img">
                          <Image
                            src="/landing_02.png"
                            fill
                            objectFit="cover"
                            objectPosition="center"
                            alt="Landing"
                          />
                        </div>
                        <div class="request_filter_dtls">
                          <div class="request_filter_profile">
                            <Image
                              src="/landing_pro.png"
                              width={36}
                              height={36}
                              alt="Landing profile"
                            />
                          </div>
                          <div class="request_filter_profile_dtls">
                            <h6 class="request_filter_profile_title">James Franco</h6>
                            <span class="request_filter_profile_address">London , United Kingdom</span>
                          </div>
                        </div>
                      </div>

                      <div class="request_filter_grid">
                        <div class="request_filter_img">
                          <Image
                            src="/landing_01.png"
                            fill
                            objectFit="cover"
                            objectPosition="center"
                            alt="Landing"
                          />
                        </div>
                        <div class="request_filter_dtls">
                          <div class="request_filter_profile">
                            <Image
                              src="/landing_pro.png"
                              width={36}
                              height={36}
                              alt="Landing profile"
                            />
                          </div>
                          <div class="request_filter_profile_dtls">
                            <h6 class="request_filter_profile_title">James Franco</h6>
                            <span class="request_filter_profile_address">London , United Kingdom</span>
                          </div>
                        </div>
                      </div>

                      <div class="request_filter_grid">
                        <div class="request_filter_img">
                          <Image
                            src="/landing_01.png"
                            fill
                            objectFit="cover"
                            objectPosition="center"
                            alt="Landing"
                          />
                        </div>
                        <div class="request_filter_dtls">
                          <div class="request_filter_profile">
                            <Image
                              src="/landing_pro.png"
                              width={36}
                              height={36}
                              alt="Landing profile"
                            />
                          </div>
                          <div class="request_filter_profile_dtls">
                            <h6 class="request_filter_profile_title">James Franco</h6>
                            <span class="request_filter_profile_address">London , United Kingdom</span>
                          </div>
                        </div>
                      </div>

                       <div class="request_filter_grid">
                        <div class="request_filter_img">
                          <Image
                            src="/landing_02.png"
                            fill
                            objectFit="cover"
                            objectPosition="center"
                            alt="Landing"
                          />
                        </div>
                        <div class="request_filter_dtls">
                          <div class="request_filter_profile">
                            <Image
                              src="/landing_pro.png"
                              width={36}
                              height={36}
                              alt="Landing profile"
                            />
                          </div>
                          <div class="request_filter_profile_dtls">
                            <h6 class="request_filter_profile_title">James Franco</h6>
                            <span class="request_filter_profile_address">London , United Kingdom</span>
                          </div>
                        </div>
                      </div>

                      <div class="request_filter_grid">
                        <div class="request_filter_img">
                          <Image
                            src="/landing_01.png"
                            fill
                            objectFit="cover"
                            objectPosition="center"
                            alt="Landing"
                          />
                        </div>
                        <div class="request_filter_dtls">
                          <div class="request_filter_profile">
                            <Image
                              src="/landing_pro.png"
                              width={36}
                              height={36}
                              alt="Landing profile"
                            />
                          </div>
                          <div class="request_filter_profile_dtls">
                            <h6 class="request_filter_profile_title">James Franco</h6>
                            <span class="request_filter_profile_address">London , United Kingdom</span>
                          </div>
                        </div>
                      </div>

                      <div class="request_filter_grid">
                        <div class="request_filter_img">
                          <Image
                            src="/landing_01.png"
                            fill
                            objectFit="cover"
                            objectPosition="center"
                            alt="Landing"
                          />
                        </div>
                        <div class="request_filter_dtls">
                          <div class="request_filter_profile">
                            <Image
                              src="/landing_pro.png"
                              width={36}
                              height={36}
                              alt="Landing profile"
                            />
                          </div>
                          <div class="request_filter_profile_dtls">
                            <h6 class="request_filter_profile_title">James Franco</h6>
                            <span class="request_filter_profile_address">London , United Kingdom</span>
                          </div>
                        </div>
                      </div>

                       <div class="request_filter_grid">
                        <div class="request_filter_img">
                          <Image
                            src="/landing_02.png"
                            fill
                            objectFit="cover"
                            objectPosition="center"
                            alt="Landing"
                          />
                        </div>
                        <div class="request_filter_dtls">
                          <div class="request_filter_profile">
                            <Image
                              src="/landing_pro.png"
                              width={36}
                              height={36}
                              alt="Landing profile"
                            />
                          </div>
                          <div class="request_filter_profile_dtls">
                            <h6 class="request_filter_profile_title">James Franco</h6>
                            <span class="request_filter_profile_address">London , United Kingdom</span>
                          </div>
                        </div>
                      </div>

                      <div class="request_filter_grid">
                        <div class="request_filter_img">
                          <Image
                            src="/landing_01.png"
                            fill
                            objectFit="cover"
                            objectPosition="center"
                            alt="Landing"
                          />
                        </div>
                        <div class="request_filter_dtls">
                          <div class="request_filter_profile">
                            <Image
                              src="/landing_pro.png"
                              width={36}
                              height={36}
                              alt="Landing profile"
                            />
                          </div>
                          <div class="request_filter_profile_dtls">
                            <h6 class="request_filter_profile_title">James Franco</h6>
                            <span class="request_filter_profile_address">London , United Kingdom</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>








                  {/* Add your content related to the reference here */}
                  <div className="">
                    <button onClick={() => prevPage()} className="btn_outline_secondary btn_cutom_40 mt_15">{t("common:goBack")}</button>
                    <button onClick={() => nextPage()} className="btn_secondary btn_cutom_40 mt_15 pull_right align_self_end">{t("common:next")}</button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>






  );
};

export default Artist;
