// components/Reference.js
import React from "react";
import { useRequestForm } from "@/store/requestManagement/requestForm"; // Import Zustand store hook
import useTranslation from "next-translate/useTranslation";
const Artist = () => {
  const { nextPage, prevPage } = useRequestForm(); // Zustand store and setter
  const { t } = useTranslation();
  return (
    <div>
         <h5>{t("common:stepper.title5")}</h5>
      {/* Add your content related to the reference here */}

      <button onClick={() => prevPage()}>{t("common:goBack")}</button>
      <button onClick={() => nextPage()}>{t("common:next")}</button>

     
    </div>
  );
};

export default Artist;
