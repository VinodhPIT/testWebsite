
import React from "react";
import Image from "next/image";
import Link from "next/link";
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
          <Image
            priority
            alt="Tatto Size"
            src="/icon-tick.svg"
            width="10" 
            height="8"
            className="v_align_top mt_4"
          />
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

    <div className="request_landing_header">
      <div class="request_back_arrow">
          <Link  href="">
            <Image
                priority
                alt="backArrow"
                src="/back_arrow_left_grey.svg" 
                width="24" 
                height="24"
            />
          </Link>
        </div>
      <div className="request_header_container">        
        <Stepper
          steps={steps.map((step, index) => ({
            title: generateStepTitle(step.title, index),
          }))}
          activeStep={activeStep}
          activeColor="#E1E4E8"
          completeColor="#388E3C"
          defaultColor="#fff"
          defaultBorderColor={"#E1E4E8"}
          defaultBorderWidth={1}
          defaultBorderStyle="solid"
          defaultBarColor="#E1E4E8"
          completeBarColor="#E1E4E8"
          completeBorderColor="#388E3C"
          completeBorderStyle="solid"
          size={16}
          circleFontSize={0}
          circleTop={0}
          lineMarginOffset={0}
          titleFontSize={12}
        />
      </div>
    </div>
    
  );
};

export default StepperComponent;
