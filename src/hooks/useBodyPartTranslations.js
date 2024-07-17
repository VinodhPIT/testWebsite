import useTranslation from "next-translate/useTranslation";

const useBodyPartTranslations = () => {
  const { t } = useTranslation();

  const tattooValues = [
    { id: 0, title: t("common:stepper.head"), key: "head" },
    { id: 1, title: t("common:stepper.upperBody"), key: "upper_body" },
    { id: 2, title: t("common:stepper.back"), key: "back" },
    { id: 3, title: t("common:stepper.arm"), key: "arm" },
    { id: 4, title: t("common:stepper.leg"), key: "leg" },
    { id: 5, title: t("common:stepper.foot"), key: "foot" },
    { id: 6, title: t("common:stepper.other"), key: "other" },
    { id: 7, title: t("common:stepper.dontKnowYet"), key: "nil" }
  ];

  return {
    tattooValues
  };
};

export default useBodyPartTranslations;
