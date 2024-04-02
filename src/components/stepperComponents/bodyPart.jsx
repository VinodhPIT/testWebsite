// components/TattooComponent.js
import React from "react";
import { useRequestForm } from "@/store/requestManagement/requestForm";

const BodyPart = () => {
  const { bodyPart, setSelectedPart } = useRequestForm(); // Zustand store and setter

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
      <h2>Body Part</h2>
      {tattooValues.map((value, index) => (
        <button key={index} onClick={() => handleClick(value)}>
          {value}
        </button>
      ))}
      {bodyPart && <p>Selected BodyPart: {bodyPart}</p>}
    </div>
  );
};

export default BodyPart;
