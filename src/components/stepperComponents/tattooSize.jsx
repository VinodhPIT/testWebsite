// components/TattooComponent.js
import React from 'react';
import { useRequestForm } from '@/store/requestManagement/requestForm'; // Import Zustand store hook
import useTranslation from "next-translate/useTranslation";


const TattooSize = () => {
  const { tattooSize, setTattooSize } = useRequestForm(); // Zustand store and setter

  const { t } = useTranslation();
 
  const tattooValues = ['1-5 cm', '5-10 cm','10-20 cm' ,'20-40 cm', "I don't Know yet"];



  // Function to handle button click and update Zustand state
  const handleClick = (value) => {
    setTattooSize(value);


  };

  return (
    <>
      <div className="full_col_block h_126_pc">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align_content">
              <section className="request_landing_content">
                <div className="request_landing_content_col">
                  <h2>{t("common:stepper.title1")}</h2>
                  <div className="request_list_item">
                    {tattooValues.map((value, index) => (                    
                      <button key={index} onClick={() => handleClick(value)}>
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

export default TattooSize;
