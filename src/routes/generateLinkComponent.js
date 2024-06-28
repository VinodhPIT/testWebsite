
import Link from 'next/link';

const generateLinkComponent = (router, theme, t) => {
  switch (router.locale) {
    case "gb-en":
    case "de-de":
      return (
        <Link
          href={`/${router.locale}/journal`}
          className= {`${theme==="dark" ? "textWhite":"textBlack"}`}
        >
          {t("common:menus.journal")}
        </Link>
      );
    default:
      return null;
  }
};

export default generateLinkComponent;
