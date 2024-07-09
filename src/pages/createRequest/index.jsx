import React from "react";
import Head from "next/head";

import { UseResetRequestFormState} from "@/store/requestManagement/requestForm";

import Main from "@/components/stepperComponents/main";

export default function Requestform() {
  
  UseResetRequestFormState();

  return (
    <>
     <Head>
        <title>Create Request</title>
      </Head>

      <Main />
    </>
  );
}
