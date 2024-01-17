import { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/components/header/header";
import MarketngScreens from "@/marketingScreens/Header/header";
import useWindowResize from "@/hooks/useWindowSize";
import Footer from "@/components/footer/footer";
import { GlobalStateProvider } from "@/context/Context";
import { Figtree } from "next/font/google";
import UseLayout from "@/hooks/useLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "@/styles/customStyles.css";
import "@/styles/analytics.css";
import loadGoogleMapsAPI from "@/components/google-maps";
import NProgress from "nprogress";
NProgress.configure({ showSpinner: false });

const figtree = Figtree({
  style: ["normal"],
  weight: ["400", "700", "900", "600"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    loadGoogleMapsAPI();
  }, []);

  useEffect(() => {
    router.events.on("routeChangeStart", (url) => {
      NProgress.start();
    });

    router.events.on("routeChangeComplete", (url) => {
      NProgress.done();
    });
    return () => {
      router.events.off("routeChangeStart", (url) => {});

      router.events.off("routeChangeComplete", (url) => {});
    };
  }, []);

  const { isMobileView } = useWindowResize();

  function getHeaderComponent(locale, pathname) {
    switch ((locale, pathname)) {
      case "/":
      case "/for-tattoo-artists":
      case "/klarna":
      case "/tattoo-dictionary":
        case "/tattoo-styleguide":
        return (
          <Header
            logo={
              isMobileView ? "/inckd-logo.svg" : "/Inckd-logo-footer-black.svg"
            }
            theme={"white"}
            isPosition={true}
            imgWidth="105"
            imgHeight="31"
            hamburger={"white"}
            languageSwitch="switcherThemeWhite"
            isFullwidth={true}
          />
        );

      case "/explore/[[...slug]]":
      case "/artists/[detail]":
      case `/explore/tattoos/[detail]`:
      case "/explore/flash-tattoos/[detail]":
      case "/404":
        return (
          <Header
            logo={"/Inckd-logo-footer-black.svg"}
            theme={"white"}
            isPosition={false}
            imgWidth="105"
            imgHeight="31"
            hamburger={"black"}
            languageSwitch="switcherThemeBlack"
            isFullwidth={true}
          />
        );

      case "/journal":
        return (
          <Header
            logo={"/inckd-logo.svg"}
            theme={"normal"}
            isPosition={true}
            imgWidth="105"
            imgHeight="31"
            hamburger={"white"}
            languageSwitch="switcherThemeWhite"
            isFullwidth={false}
          />
        );

      case "/contact":
      case "/join-tattoo-artists":
        return (
          <Header
            logo={"/Inckd-logo-footer-black.svg"}
            theme={"black"}
            isPosition={true}
            imgWidth="105"
            imgHeight="31"
            hamburger={"black"}
            languageSwitch={
              isMobileView ? "switcherThemeBlack" : "switcherThemeWhite"
            }
            isFullwidth={true}
          />
        );

      case "/faq":
      case "/privacy-policy":
        return (
          <Header
            logo={"/Inckd-logo-footer-black.svg"}
            theme={"white"}
            isPosition={false}
            imgWidth="105"
            imgHeight="31"
            hamburger={"black"}
            languageSwitch={"switcherThemeBlack"}
            isFullwidth={false}
          />
        );     

   

      case "/download/[[...download]]":
        return (
          <MarketngScreens
            logo={
              isMobileView &&
              (router.query.type === "campaign" ||
                router.query.type === "klarna")
                ? "/inckd-logo.svg"
                : "/Inckd-logo-b.svg"
            }
            theme={"white"}
            isPosition={true}
            imgWidth="109"
            imgHeight="52"
          />
        );

      default:
        return null;
    }
  }
  return (
    <>
      <GlobalStateProvider>
        <div className={figtree.className}>
          {getHeaderComponent(router.locale, router.pathname)}

          <UseLayout pathname={router.pathname}>
            <Component {...pageProps} />
          </UseLayout>

          <Footer />
        </div>
      </GlobalStateProvider>
    </>
  );
}

export default MyApp;
