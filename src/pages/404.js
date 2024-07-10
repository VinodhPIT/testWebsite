
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
  
  // useEffect(() => {
  //   const { asPath } = router;
  //   const link = (os === 'iOS' || os === 'Mac OS') ? APP_LINK_APPLE : APP_LINK_GOOGLE;
  //   if (asPath.startsWith("/session") || asPath.startsWith("/chat") || asPath.startsWith("/onboard")) {
  //     window.location.href = link; // Redirect to external link
  //   }
  // }, [router]);

  useEffect(() => {
    const { asPath } = router;
    const link = (os === 'iOS' || os === 'Mac OS') ? APP_LINK_APPLE : APP_LINK_GOOGLE;
    if (asPath.startsWith("/session") || asPath.startsWith("/chat") || asPath.startsWith("/onboard") || asPath.startsWith("/request")) {
      window.location.replace(link);
    }
  }, [router.asPath, os]);

  return (
    <>
      <section className="container_full">
        <div class="row g-0">
          <div class="col-md-12">
            <div className="page_error_wrap">
              <div className="error_block">
                <Image
                  src="/404_img.svg"
                  alt="404"
                  width={410}
                  height={198}
                  priority
                />
                <h1 className="page_title">{t("common:pageNotfound")}</h1>
                <p>{t("common:cantfind")}</p>
                <Link
                  href="/"
                  alt="back to home"
                  className="button_primary"
                >
                  {t("common:backHome")}
                </Link>              
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Custom404;
