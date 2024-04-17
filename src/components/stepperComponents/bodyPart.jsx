// components/TattooComponent.js
import React from "react";
import { useRequestForm } from "@/store/requestManagement/requestForm";
import useTranslation from "next-translate/useTranslation";

const BodyPart = () => {
  const {setSelectedPart ,bodyPartIndex } = useRequestForm(); // Zustand store and setter
  const { t } = useTranslation();
  
  const tattooValues = [
    "Head",
    "Upper Body",
    "Back",
    "Arm",
    "Leg",
    "Foot",
    "Other",
    "I don't Know yet",
  ];


  return (
    <>
      <div className="full_col_block h_126_vh m_h_118_vh">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align_content">
              <section className="request_landing_content">
                <div className="request_landing_content_col">
                  <h2>{t("common:stepper.title2")}</h2>
                  <div className="request_list_item">
                    {tattooValues.map((value, index) => (
                      <button key={index} onClick={() => setSelectedPart(value ,index)}  className={bodyPartIndex === index ? 'requestActive' : 'inActiveRequest'}>
                        {value}
                      </button>
                    ))}
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
