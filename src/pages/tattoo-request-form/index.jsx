import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

import useCanonicalUrl from "@/hooks/useCanonicalUrl";
import loadTranslation from "next-translate/loadNamespaces";

import TattooSize from "@/components/stepperComponents/tattooSize";
import BodyPart from "@/components/stepperComponents/bodyPart";
import Description from "@/components/stepperComponents/description";
import Reference from "@/components/stepperComponents/reference";
import Artist from "@/components/stepperComponents/artist";
import Contact from "@/components/stepperComponents/contact";
import Review from "@/components/stepperComponents/review";
import { useRequestForm } from "@/store/requestManagement/requestForm";
import useTranslation from "next-translate/useTranslation";

const StepperComponent = dynamic(
  () => import("@/components/stepperComponents/stepper"),
  {
    ssr: false,
  }
);

export default function Requestform({translations}) {
  
  const { t } = useTranslation("common", { i18n: translations });
  const canonicalUrl = useCanonicalUrl();

  const steps = [
    { title: t("common:stepper.tattooSize") },
    { title: t("common:stepper.bodyPart") },
    { title: t("common:stepper.description") },
    { title: t("common:stepper.reference") },
    { title: t("common:stepper.artists") },
    { title: t("common:stepper.contact") },
  ];

  const components = [
    <TattooSize key="tattooSize" />,
    <BodyPart key="bodyPart" />,
    <Description key="description" />,
    <Reference key="reference" />,
    <Artist key="artist" />,
    <Contact key="contact" />,
    <Review key="review" />,
  ];

  const getPageComponent = (pageNo) => {
    if (pageNo >= 0 && pageNo < components.length) {
      return components[pageNo];
    } else {
      return null;
    }
  };

  const { stepNumber } = useRequestForm();

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <meta
          property="og:url"
          content={canonicalUrl}
        />

      </Head>

      <StepperComponent steps={steps} activeStep={stepNumber} />

      {getPageComponent(stepNumber)}
    </>
  );
}


export async function getServerSideProps(context) {
  const { locale } = context;

  try {
    const translations = await loadTranslation("common", locale);
    return {
      props: {
        translations,
      },
    };
  } catch (error) {
    return {
      props: {
        translations: {}, 
      },
    };
  }
}
