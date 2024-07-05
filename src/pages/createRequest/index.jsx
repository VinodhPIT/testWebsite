import React from "react";
import Main from "@/components/stepperComponents/main";
import { UseResetRequestFormState } from "@/store/requestManagement/requestForm";

export default function Requestform() {
  
  UseResetRequestFormState();

  return (
    <>
      <Main />
    </>
  );
}
