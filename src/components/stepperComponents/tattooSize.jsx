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
    <div>
      <h2>{t("common:stepper.title1")}</h2>
      {tattooValues.map((value, index) => (
        <button key={index} onClick={() => handleClick(value)}>
          {value}
        </button>
      ))}
      
     
    </div>
  );
};

export default TattooSize;
