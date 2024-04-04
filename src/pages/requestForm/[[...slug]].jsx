import React from 'react'

import dynamic from "next/dynamic";
import TattooSize from "@/components/stepperComponents/tattooSize";
import BodyPart from "@/components/stepperComponents/bodyPart";
import Description from "@/components/stepperComponents/description";
import Reference from "@/components/stepperComponents/reference";
import Artist from "@/components/stepperComponents/artist";
import Contact from "@/components/stepperComponents/contact";
import Review from "@/components/stepperComponents/review";
import { useRequestForm } from "@/store/requestManagement/requestForm";
const StepperComponent = dynamic(
  () => import("@/components/stepperComponents/stepper"),
  {
    ssr: false,
  }
);

export default function Requestform() {
  const steps = [
    { title: "Tatto size" },
    { title: "Body part" },
    { title: "Descripton" },
    { title: "Reference" },
    { title: "Artist" },
    { title: "Contact" },
  ];

  

  const components = [
   
    <TattooSize />,
    <BodyPart />,
    <Description />,
    <Reference />,
    <Artist />,
    <Contact />,
    <Review />,
  ];


  const getPageComponent = (pageNo) => {
    if (pageNo >= 0 && pageNo < components.length) {
      return components[pageNo];
    } else {
      return null;
    }
  };

  const { pageNo, prevPage } = useRequestForm(); // Zustand store and setter

  const activeStep = pageNo;



  return (
    <>
    
   
    
      <StepperComponent steps={steps} activeStep={activeStep} />

      {getPageComponent(pageNo)}
    </>
  )
}



