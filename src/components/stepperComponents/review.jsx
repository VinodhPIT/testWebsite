import React from "react";
import { useRequestForm } from "@/store/requestManagement/requestForm"; // Import Zustand store hook
import useTranslation from "next-translate/useTranslation";


const Review = () => {
  const { pageNo, bodyPart, tattooSize, message, email, phone, prevPage } =
    useRequestForm(); // Zustand store and setter
    const { t } = useTranslation();
  return (
    <div>
      <h2>{t("common:stepper.title7")}</h2>

      <p>{t("common:stepper.tattooSize")} : {tattooSize}</p>
      <p>{t("common:stepper.tatooPosition")} :{bodyPart}</p>

     
      <p>  {t("common:stepper.description")}  {message}</p>


      <p> {t("common:stepper.contactInformation")} </p>
        
        
        <p>  {email}</p>

      <p>{phone}</p>




<h5>{t("common:stepper.referenceImages")}</h5>


<h5>{t("common:stepper.selectedArtists")}</h5>
   

      <button onClick={() => prevPage()}>{t("common:goBack")}</button>


      <button>{t("common:submit")}</button>
    </div>
  );
};

export default Review;
