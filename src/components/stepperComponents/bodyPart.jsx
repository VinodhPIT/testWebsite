// components/TattooComponent.js
import React from "react";
import { useRequestForm } from "@/store/requestManagement/requestForm";
import useTranslation from "next-translate/useTranslation";

const BodyPart = () => {
  const { bodyPart, setSelectedPart } = useRequestForm(); // Zustand store and setter
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

  // Function to handle button click and update Zustand state
  const handleClick = (value) => {
    setSelectedPart(value);
  };

  return (
    <div>
      <h2>{t("common:stepper.title2")}</h2>
      {tattooValues.map((value, index) => (
        <button key={index} onClick={() => handleClick(value)}>
          {value}
        </button>
      ))}
    
    </div>
  );
};

export default BodyPart;
