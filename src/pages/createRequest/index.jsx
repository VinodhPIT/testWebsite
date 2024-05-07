import React from "react";
import Main from "@/components/stepperComponents/main";
import { useResetRequestFormState } from "@/store/requestManagement/requestForm";

export default function Requestform() {
  
  useResetRequestFormState();

  return (
    <>
      <Main />
    </>
  );
}
