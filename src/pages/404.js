
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import useTranslation from "next-translate/useTranslation";

import {APP_LINK_APPLE ,APP_LINK_GOOGLE} from '@/constants/constants'
import { getOs } from "../lib/os-detector";


const Custom404 = () => {

  const { t } = useTranslation();
  const router = useRouter();
  const os = getOs();
  
  useEffect(() => {
    const { asPath } = router;
    const link = (os === 'iOS' || os === 'Mac OS') ? APP_LINK_APPLE : APP_LINK_GOOGLE;
    if (asPath.startsWith("/session") || asPath.startsWith("/chat") || asPath.startsWith("/onboard")) {
      window.location.href = link; // Redirect to external link
    }
  }, [router]);

  
  return (
    <>
      <main>
        <div className="page-wrapper">
          <section className="page_error_wrap">
            <div className="container">
              <div className="error_block">
                <Image
                  src="/404_img.svg"
                  alt="404"
                  width={410}
                  height={98}
                  priority
                />

                <h1 className="page_title">{t("common:pageNotfound")}</h1>
                <p>{t("common:cantfind")}</p>
                <Link
                  href="/"
                  alt="back to home"
                  className="btn_secondary btn_custom_m"
                >
                  {t("common:backHome")}
                </Link>
              
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Custom404;
