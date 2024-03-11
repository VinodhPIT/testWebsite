
import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";






const Custom404 = () => {
  const { t } = useTranslation();


  
  return (
    <>
    

      <main>
        <div className="page-wrapper">
          <section className="page_404_wrap">
            <div className="container">
              <div className="page_404_block">
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
