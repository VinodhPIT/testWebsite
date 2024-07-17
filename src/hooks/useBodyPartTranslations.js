import useTranslation from "next-translate/useTranslation";

const useBodyPartTranslations = () => {
  const { t } = useTranslation();

  const tattooValues = [
    { id: 0, title: t("common:stepper.head"), key: "Head" },
    { id: 1, title: t("common:stepper.upperBody"), key: "Upper Body" },
    { id: 2, title: t("common:stepper.back"), key: "Back" },
    { id: 3, title: t("common:stepper.arm"), key: "Arm" },
    { id: 4, title: t("common:stepper.leg"), key: "Leg" },
    { id: 5, title: t("common:stepper.foot"), key: "Foot" },
    { id: 6, title: t("common:stepper.other"), key: "Other" },
    { id: 7, title: t("common:stepper.dontKnowYet"), key: "nil" }
  ];

  return {
    tattooValues
  };
};

export default useBodyPartTranslations;
