import { useRouter } from "next/router";
import Link from "next/link";
import Image from 'next/image'

import generateLinkComponent from "@/routes/generateLinkComponent";

const NavigationLinks = ({ links, isFixed, theme, t, onCloseToggle }) => {
  const router = useRouter();
  const linkComponent = generateLinkComponent(router, theme, t, isFixed);

  return (
    <ul className="nav main_nav navbar_collapse collapse">
      {links.map((link) => (
        <li key={link.id} className="nav_item">
          {link.url ? (
            <Link
              href={`/${router.locale}${link.url}`}
              className={`${
                isFixed
                  ? "sticky-menu"
                  : theme === "dark"
                  ? "textWhite"
                  : "textBlack"
              }`}
              onClick={onCloseToggle}
            >
              {t(link.title)}
            </Link>
          ) : (
            <span
              className={`${
                isFixed
                  ? "sticky-menu"
                  : theme === "dark"
                  ? "textWhite"
                  : "textBlack"
              }`}
            >
              {t(link.title)}

              {link.subLinks && (
                <Image
                src={theme !== "dark" || isFixed ? "/drop-down-arrow.svg" : "/drop-angle-white.svg"}
                width={10}
                height={5}
                alt="angleDown"
                className="ml_4"
              />
              )}
            </span>
          )}
          {link.subLinks && (
            <div className="main_submenu">
            <ul className="sub_menu">
              {link.subLinks.map((subLink) => (
                <li key={subLink.id} className="nav_sub_item">
                  <Link
                    href={`/${router.locale}${subLink.url}`}
                    className="textBlack"
                    onClick={onCloseToggle}
                  >
                    {t(subLink.title)}
                  </Link>
                </li>
              ))}
            </ul>
            </div>
          )}
        </li>
      ))}

      <li>{linkComponent}</li>
    </ul>
  );
};

export default NavigationLinks;
