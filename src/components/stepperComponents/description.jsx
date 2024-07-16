
import React  from "react";
import useTranslation from "next-translate/useTranslation";


import { useRequestForm } from "@/store/requestManagement/requestForm"; 


const Description = () => {
  const { message, setDescription, nextPage ,prevPage } = useRequestForm(); // Zustand store and setter
  const { t } = useTranslation();
  const handleSubmit = (event) => {
    event.preventDefault();
    nextPage();
  };

  return ( 
    <>
    <div className="full_col_block h_126_vh m_h_60_vh">
      <div className="container">
        <div className="row">
          <div className="col-md-12 align_content">
            <section className="request_landing_content m_align_content">
              <div className="request_landing_content_col">
                <h2>{t("common:stepper.title3")}</h2>
                <div className="request_text_area">
                  <form onSubmit={handleSubmit}>
                    <textarea
                      value={message}
                      onChange={(event) => {
                        if (event.target.value.length <= 500) {
                          setDescription(event.target.value);
                        }
                        else {
                          alert(t("common:writeUp500char")); 
                        }
                      }}
                      placeholder={t("common:stepper.typeDescription")}
                      rows={4} // Set the number of rows for the textarea
                      cols={50} // Set the number of columns for the textarea
                      onPaste={(event) => {
                        const pastedText = event.clipboardData.getData('text/plain');
                        if (message.length + pastedText.length > 500) {
                          event.preventDefault();
                          alert(t("common:pasteUp500char")); 
                        
                        }
                      }}
                      
                    />                 

                  </form>
              
                </div>
                <div className="request_ref_btn rqst_btn_bottom request_mob_fixed m_gap_16 m_pb_15 m_pt_10">
                  <button className="button_primary_outline w_min_125 m_w_50pc" onClick={prevPage}>{t("common:goBack")}</button>
                  <button className="button_primary w_min_125 m_w_50pc" onClick={nextPage}>{t("common:next")}</button>
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

export default Description;
