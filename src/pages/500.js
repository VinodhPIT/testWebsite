import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const Custom500 = () => {
  const { t } = useTranslation();

  return (
    <>
      <main>
        <div className="page-wrapper">
          <section className="page_error_wrap">
            <div className="container">
              <div className="error_block">
                <Image
                  src="/error.png"
                  alt="500"
                  width={128}
                  height={128}
                  priority
                />

                <div className="mt_25 mb_25">
                  <h1 className="page_title">
                    We&apos;re experiencing technical difficulties. Please try
                    again later. In the meantime, feel free to explore some of
                    our other pages.
                  </h1>
                </div>

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

export default Custom500;
