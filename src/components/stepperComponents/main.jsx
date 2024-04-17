import React, { useEffect } from "react";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useNavigation } from "@/hooks/useRouter";
export default function Main() {
  const { t } = useTranslation();
  const { router } = useNavigation();

  return (
    <>
      <div className="full_col_block min_h_100_vh">
        <div className="full_col_banner">
          <div className="banner_fixed_block">
            <Image
              priority
              alt="pexels cottonbro studio"
              src="/pexels-cottonbro-studio-4123767-1.png"
              fill
              objectFit="cover"
              objectPosition="center"
              blurDataURL={blurDataURL}
              className="m_object_position_center"
            />
          </div>
        </div>

        <section className="request_landing_block">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div class="request_back_arrow">
                  <Link href={`/${router.locale}/`}>
                    <Image
                      priority
                      alt="backArrow"
                      src="/back_arrow_left_white.svg"
                      width="24"
                      height="24"
                      blurDataURL={blurDataURL}
                      className="m_object_position_center"
                    />
                  </Link>
                </div>
                <div class="request_stepper">
                  <div class="request_stepper_item">
                    <div class="request_stepper_counter"></div>
                    <div class="request_stepper_name">
                      {t("common:stepper.tattooSize")}
                    </div>
                  </div>
                  <div class="request_stepper_item">
                    <div class="request_stepper_counter"></div>
                    <div class="request_stepper_name">
                      {t("common:stepper.bodyPart")}
                    </div>
                  </div>
                  <div class="request_stepper_item">
                    <div class="request_stepper_counter"></div>
                    <div class="request_stepper_name">
                      {t("common:stepper.description")}
                    </div>
                  </div>
                  <div class="request_stepper_item">
                    <div class="request_stepper_counter"></div>
                    <div class="request_stepper_name">
                      {t("common:stepper.reference")}
                    </div>
                  </div>
                  <div class="request_stepper_item">
                    <div class="request_stepper_counter"></div>
                    <div class="request_stepper_name">
                      {t("common:stepper.artists")}
                    </div>
                  </div>
                  <div class="request_stepper_item">
                    <div class="request_stepper_counter"></div>
                    <div class="request_stepper_name">
                      {t("common:stepper.contact")}
                    </div>
                  </div>
                </div>
                <div className="request_landing_caption">
                  <h1>
                    <span>{t("common:stepper.mainTitle")}</span>
                  </h1>
                  <p>{t("common:stepper.subText")}</p>

                  <Link
                    className="btn_default btn_cutom_40 mt_40 m_mt_0"
                    href={`/${router.locale}/request-Form`}
                  >
                    {t("common:stepper.startDescribe")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
