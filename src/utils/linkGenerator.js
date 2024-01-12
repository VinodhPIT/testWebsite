// linkGenerator.js
import Link from 'next/link';

const generateLinkComponent = (router, theme, t) => {
  switch (router.locale) {
    case "uk-en":
    case "de-de":
      return (
        <Link
          href={`/${router.locale}/journal`}
          className={
            theme === "black"
              ? "textWhite"
              : theme === "normal"
              ? "textWhite"
              : "textBlack"
          }
        >
          {t("common:menus.journal")}
        </Link>
      );
    default:
      return null;
  }
};

export default generateLinkComponent;
