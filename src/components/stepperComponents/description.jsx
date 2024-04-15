
import React, { useState } from "react";
import { useRequestForm } from "@/store/requestManagement/requestForm"; 
import useTranslation from "next-translate/useTranslation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Description = () => {
  const { message, setDescription, nextPage } = useRequestForm(); // Zustand store and setter
  const { t } = useTranslation();
  const handleSubmit = (event) => {
    event.preventDefault();
    nextPage();
  };

  return ( 
    <>
    <div className="full_col_block h_126_vh m_h_118_vh">
      <div className="container">
        <div className="row">
          <div className="col-md-12 align_content">
            <section className="request_landing_content">
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
                          alert('You can write only up to 500 characters.'); 
                        }
                      }}
                      placeholder={t("common:stepper.typeDescription")}
                      rows={4} // Set the number of rows for the textarea
                      cols={50} // Set the number of columns for the textarea
                      onPaste={(event) => {
                        const pastedText = event.clipboardData.getData('text/plain');
                        if (message.length + pastedText.length > 500) {
                          event.preventDefault();
                          alert('You can only paste up to 500 characters.');
                        
                        }
                      }}
                      
                    />
                    {message && <button type="submit" className="btn_secondary btn_cutom_40 mt_15 pull_right">{t("common:next")}</button>}
                  </form>
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
