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



  const onNavigate = () => {
    // Defined the base URL 
    const baseUrl = `${router.locale}/`;
  
    // Defined the target URL based on the step number and view mode
    let targetUrl;
     targetUrl = stepNumber === 0 ? `${baseUrl}createRequest` : null;  
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
    <>

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
      <p>{currentStep}/6</p>
     
    </div>
     <ToastContainer />
     </>
  );
};

export default StepperComponent;
