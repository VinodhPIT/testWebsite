import React from "react";
import Image from "next/image";
import { useEffect } from "react";

import { useNavigation } from "@/hooks/useRouter";

import useTranslation from "next-translate/useTranslation";
import { useRequestForm } from "@/store/requestManagement/requestForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const StepperComponent = () => {

const { navigateTo, router } = useNavigation();
const { prevPage, stepNumber, locationDenied } = useRequestForm();
const { t } = useTranslation();
const currentStep = stepNumber === 0 ? 1 : (stepNumber === 6 ? 6 : stepNumber + 1);



// const generateStepTitle = (title, index) => {
//   const isCompleted = index < activeStep;

//   return (
//     <div style={{ textAlign: "center" }}>
//       {isCompleted ? (
//         <span
//           style={{
//             position: "absolute",
//             top: 0,
//             right: 0,
//             left: 0,
//             color: "#fff",
//           }}
//         >
//           <Image
//             priority
//             alt="tick"
//             src="/icon-tick.svg"
//             width="10"
//             height="8"
//             className="v_align_top mt_4"
//           />
//         </span>
//       ) : (
//         // If step is not completed, display an empty null
//         <span></span>
//       )}

//        <span className="fw_400">{!isSmallDevice && title}</span> 
//       </div>
//     );
//   };
  const onNavigate = () => {
    // Defined the base URL 
    const baseUrl = `${router.locale}/`;
  
    // Defined the target URL based on the step number and view mode
     const targetUrl = stepNumber === 0 ? `${baseUrl}${t("common:routes.tattoo-request")}` : null;
    // Navigate to the target URL or go back to stepper 
    if (targetUrl) {
      navigateTo(targetUrl);
    } else {
      prevPage();
    }
  };



  useEffect(() => {
    if (locationDenied === true)
      toast.error(t("common:deniedGeolocation"), {
        position: toast.POSITION.TOP_CENTER,
      });
  }, [locationDenied]);

  return (
  

    <div className="request_landing_header">
      <button onClick={onNavigate} className="pr_0 pl_0 request_back_arrow">
        <Image
          priority
          alt="backArrow"
          src="/back_arrow_left_grey.svg"
          width="24"
          height="24"
        />
      </button>
      <ToastContainer />
      <div class="request_stepper_count">
        <span>{currentStep}</span>
        <span>/6</span>
      </div>

      {/* {isSmallDevice && stepNumber === 0 && (
        <div className="request_landing_caption_mob">
          <h1>
            <span>{t("common:stepper.mainTitle")}</span>
          </h1>
          <p>{t("common:stepper.subText")}</p>
        </div>
      )} */}

      {/* <div className="request_header_container">
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
          defaultTitleColor="#212121"
          
        />
      </div> */}      
    </div>
  );
};

export default StepperComponent;
