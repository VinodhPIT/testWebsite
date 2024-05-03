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
import "@/styles/requestForm.css";
import "@/styles/cms.css";
import loadGoogleMapsAPI from "@/components/google-maps";
import NProgress from "nprogress";
import { SessionProvider } from "next-auth/react";

import useStyleListing from "@/store/styleListing/styleListing";
import useDisplayAll from "@/store/exploreAll/exploreAll";


NProgress.configure({ showSpinner: false });

const figtree = Figtree({
  style: ["normal"],
  weight: ["300", "400", "700", "900", "500", "600"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    loadGoogleMapsAPI();
  }, []);

  useEffect(() => {
    router.replace(`/${router.locale}${router.asPath}`);
    router.events.on("routeChangeStart", (url) => {
      NProgress.start();
    });

    fetchStyle(router.locale.split("-")[1]);
    fetchAll(router.locale.split("-")[0]);


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
      case "/explore/[[...slug]]":
      case "/artists/[detail]":
      case `/explore/tattoos/[detail]`:
      case "/explore/flash-tattoos/[detail]":
      case "/404":
      case "/journal":
      case "/contact":
      case "/join-tattoo-artists":
      case "/faq":
      case "/privacy_policy":
      case "/terms&conditions":
      case "/impressum":
      case "/user_data_policy":
      case "/privacy-policy":
      case "/download/[[...download]]":
      case "/comingSoon":
      case "/explore-style/[detail]":
        return (
          <Header
            logo={"/inckd-logo.svg"}
            theme={"white"}
            isPosition={true}
            imgWidth="105"
            imgHeight="31"
            hamburger={"white"}
            languageSwitch="switcherThemeWhite"
            isFullwidth={true}
          />
        );
      default:
        return null;
    }
  }

  const { fetchAll } = useDisplayAll();
  const { fetchStyle } = useStyleListing();
  
  useEffect(() => {

    

    
  }, []);


  return (
    <>
      <SessionProvider session={pageProps.session}>
        <GlobalStateProvider>
          <div className={figtree.className}>
            {getHeaderComponent(router.locale, router.pathname)}

            <UseLayout pathname={router.pathname}>
              <Component {...pageProps} />
            </UseLayout>

            <Footer />
          </div>
        </GlobalStateProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
