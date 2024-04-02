import React from "react";
import { useRequestForm } from "@/store/requestManagement/requestForm"; 
import StyleDropdown from '@/components/styleDropdown/styleDropdown'
import Location from '@/components/filterByLocation/location'

import useTranslation from "next-translate/useTranslation";

export default function Reference() {
  const { t } = useTranslation();
 
  const { nextPage, prevPage } = useRequestForm(); // Zustand store and setter

  return (
    <div>
      <h5>{t("common:stepper.title4")}</h5>




      <button onClick={() => nextPage()}>{t("common:next")}</button>

    

    </div>
  );
}
