
import React from "react";

import useTranslation from "next-translate/useTranslation";
import { useRequestForm } from "@/store/requestManagement/requestForm";


const BodyPart = () => {
  const {setSelectedPart ,bodyPart ,bodyPartIndex ,nextPage ,prevPage } = useRequestForm(); // Zustand store and setter
  const { t } = useTranslation();
  
  const tattooValues = [
    { id: 0, title: 'Head' ,key:"Head" },
    { id: 1, title: 'Upper Body' ,key:"Upper Body"},
    { id: 2, title: 'Back' ,key:"Back"},
    { id: 3, title: 'Arm' ,key:"Arm"},
    { id: 4, title: 'Leg'  ,key:"Leg"},
    { id: 5, title: 'Foot' ,key:"Foot"},
    { id: 6, title: 'Other'  ,key:"Other"},
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
                  <div className="btn_group rqst_btn_bottom m_pos_reset m_mt_auto m_bottom_none m_gap_16 m_pb_15 m_pt_30">
                    <button className="btn_outline_base m_w_50pc" onClick={prevPage}>Back</button>
                    <button className="btn_defult_base m_w_50pc"  onClick={nextPage}  disabled={bodyPart===""}>Next</button>
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
