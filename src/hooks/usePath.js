import useTranslation from "next-translate/useTranslation";

const usePath = () => {

  const { t } = useTranslation();

  const pathUrls = {
    tattoo: {
      url: t("common:routes.explore-tattoos"),
    },
    flash: {
      url: t("common:routes.explore-flash"),
    },
    all: {
      url: t("common:routes.explore-all"),
    },
    artist: {
      url: t("common:routes.tattoo-artists"),
    },
  };

  const getTranslatedUrl = (currentTab) => {
    return pathUrls[currentTab] ? pathUrls[currentTab].url : '';
  };

  return {
    getTranslatedUrl,
  };
};

export default usePath;
