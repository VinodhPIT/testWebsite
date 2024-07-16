
import React from "react";

import useTranslation from "next-translate/useTranslation";
import { useRequestForm } from "@/store/requestManagement/requestForm";


const BodyPart = () => {
  const {setSelectedPart ,bodyPart ,bodyPartIndex ,nextPage ,prevPage } = useRequestForm(); // Zustand store and setter
  const { t } = useTranslation();
  
  const tattooValues = [
    { id: 0, title: t("common:stepper.head") ,key:"Head" },
    { id: 1, title: t("common:stepper.upperBody") ,key:"Upper Body"},
    { id: 2, title: t("common:stepper.back") ,key:"Back"},
    { id: 3, title: t("common:stepper.arm") ,key:"Arm"},
    { id: 4, title: t("common:stepper.leg") ,key:"Leg"},
    { id: 5, title: t("common:stepper.foot") ,key:"Foot"},
    { id: 6, title: t("common:stepper.other")  ,key:"Other"},
    { id: 7, title: t("common:stepper.dontKnowYet") ,key:"nil"}
  ]

  return (
    <>
      <div className="full_col_block h_126_vh m_h_60_vh">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align_content m_align_content">
              <section className="request_landing_content">
                <div className="request_landing_content_col">
                  <h2>{t("common:stepper.title2")}</h2>                  
                  <div className="request_list_item">
                    {tattooValues.map((el, index) => (
                      <button key={el.id} onClick={() => setSelectedPart(el.title ,index)}  className={bodyPartIndex === index ? 'requestActive' : 'inActiveRequest'}>
                        {el.title}
                      </button>
                    ))}
                  </div>
                  <div className="request_ref_btn rqst_btn_bottom request_mob_fixed m_gap_16 m_pb_15 m_pt_10">
                    <button className="button_primary_outline w_min_125 m_w_50pc" onClick={prevPage}>{t("common:goBack")}</button>
                    <button className="button_primary w_min_125 m_w_50pc"  onClick={nextPage}  disabled={bodyPart===""}>{t("common:next")}</button>
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

export default BodyPart;
