// components/TattooComponent.js
import React from 'react';
import { useRequestForm } from '@/store/requestManagement/requestForm'; // Import Zustand store hook

const TattooSize = () => {
  const { tattooSize, setTattooSize } = useRequestForm(); // Zustand store and setter


 
  const tattooValues = ['1-5 cm', '5-10 cm','10-20 cm' ,'20-40 cm', "I don't Know yet"];



  // Function to handle button click and update Zustand state
  const handleClick = (value) => {
    setTattooSize(value);


  };

  return (
    <div>
      <h2>How big would you like your tattoo to be?</h2>
      {/* Render buttons for each tattoo value */}
      {tattooValues.map((value, index) => (
        <button key={index} onClick={() => handleClick(value)}>
          {value}
        </button>
      ))}
      {/* Display selected value */}
      {tattooSize && <p>Selected Tattoo Location: {tattooSize}</p>}
    </div>
  );
};

export default TattooSize;
