import useTranslation from "next-translate/useTranslation";

const ConversionDataComponent = () => {
  const { t } = useTranslation();

  const customerConversion = [
    {id:1 ,title:t("common:TableConversion.Registered"),value:"Registered"},
    {id:2 ,title:t("common:TableConversion.Contacted"),value:"Contacted"},
    {id:3 ,title:t("common:TableConversion.Offer pending"),value:"Offer pending"}
  ];


  const artistConversion = [
    {id:1 ,title:t("common:TableConversion.Registered"),value:"Registered"},
    {id:2 ,title:t("common:TableConversion.Contacted"),value:"Contacted"},
    {id:3 ,title:t("common:TableConversion.Public artist"),value:"Public artist"},
    {id:4 ,title:t("common:TableConversion.Offer created count"),value:"Offer created count"},
  ];

  const keyMappings = {
    "public artist": "public_artist",
    "offer created count": "offer_created_count",
    "offer pending": "offer_pending",
  };

  // Export your arrays and mappings
  return {
    customerConversion,
    artistConversion,
    keyMappings,
  };
};
export default ConversionDataComponent;
