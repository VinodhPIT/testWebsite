
import React from "react";
import Stepper from "react-stepper-horizontal";

const StepperComponent = ({ steps, activeStep }) => {
  const generateStepTitle = (title, index) => {
    const isCompleted = index < activeStep; 

    return (
      <div style={{ textAlign: "center" }}>
        {isCompleted ? ( 
          <span
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              left: 0,
              color: "#fff",
            }}
          >
            &#10003;
          </span>
        ) : (
          // If step is not completed, display an empty null
          <span></span>
        )}

        {title}
      </div>
    );
  };

  return (


    <Stepper
      steps={steps.map((step, index) => ({
        title: generateStepTitle(step.title, index),
      }))}
      activeStep={activeStep}
      activeColor="#E1E4E8"
      completeColor="#388E3C"
      defaultColor="#fff"
      defaultBorderColor={"#E1E4E8"}
      defaultBorderWidth={2}
      defaultBorderStyle="solid"
      defaultBarColor="#E1E4E8"
      completeBarColor="#E1E4E8"
      completeBorderColor="#388E3C"
      completeBorderStyle="solid"
      size={16}
      circleFontSize={0}
      circleTop={0}
    />

    
  );
};

export default StepperComponent;
