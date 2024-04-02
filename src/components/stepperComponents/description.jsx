
import React, { useState } from "react";
import { useRequestForm } from "@/store/requestManagement/requestForm"; 
import useTranslation from "next-translate/useTranslation";


const Description = () => {
  const { message, setDescription, nextPage } = useRequestForm(); // Zustand store and setter
  const { t } = useTranslation();
  const handleSubmit = (event) => {
    event.preventDefault();

    nextPage();
  };

  return (
    <div>
       <h2>{t("common:stepper.title3")}</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(event) => setDescription(event.target.value)}
          placeholder={t("common:stepper.typeDescription")}
          rows={4} // Set the number of rows for the textarea
          cols={50} // Set the number of columns for the textarea
        />
        {message && <button type="submit">{t("common:next")}</button>}
      </form>
    </div>
  );
};

export default Description;
