import { useEffect } from "react";
import { useRouter } from "next/router";

import { Figtree } from 'next/font/google'
import { SessionProvider } from "next-auth/react";
import NProgress from "nprogress";

import UseLayout from "@/hooks/useLayout";

import useStyleListing from "@/store/styleListing/styleListing";
import useDisplayAll from "@/store/exploreAll/exploreAll";

import { GlobalStateProvider } from "@/context/Context";
import { ModalProvider } from "@/context/ModalContext";
import loadGoogleMapsAPI from "@/utils/google-maps";
import { AxiosProvider } from '@/apiConfig/axios.instance'; 


import Header from "@/common/header";
import Footer from "@/common/footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import "@/styles/customStyles.css";
import "@/styles/analytics.css";
import "@/styles/requestForm.css";
import "@/styles/cms.css";
import "@/styles/main.css";



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

  function getHeaderComponent(locale, pathname) {
    switch ((locale, pathname)) {
      case "/explore/[[...slug]]":
      case "/artists/[detail]":
      case `/explore/tattoos/[detail]`:
      case "/explore/flash-tattoos/[detail]":
      case "/404":
      case "/privacy_policy":
      case "/terms&conditions":
      case "/impressum":
      case "/user_data_policy":
      case "/privacy-policy":
       case "/faq":
        return (
          <Header
            logo={"/Inckd_logo_black.svg"}
            theme={"light"}
            imgWidth="105"
            imgHeight="31"
            isPosition={false}
           
          />
        );
        
        case "/":      
      case "/comingSoon":
      case "/explore-style":
      case "/contact":
      case "/join-as-artist":
        return (
          <Header
            logo={"/Inckd_logo_black.svg"}
            theme={"light"}
            imgWidth="105"
            imgHeight="31"
            isPosition={true}
          />
        );
          case "/klarna":
          case "/for-tattoo-artists":
          case "/journal":
          case "/download/[[...download]]":
          return (
            <Header
              logo={"/inckd-logo.svg"}
              theme={"dark"}
              imgWidth="105"
              imgHeight="31"
              isPosition={true}
            />
          );
      default:
        return null;
    }
  }

  const { fetchAll } = useDisplayAll();
  const { fetchStyle } = useStyleListing();
  
  useEffect(() => {
    fetchStyle(router.locale.split("-")[1]);
    fetchAll(router.locale.split("-")[0]);

  }, []);

  return (
    <>

     <AxiosProvider>
      <SessionProvider session={pageProps.session}>
      <ModalProvider>
        <GlobalStateProvider>
          <div className={figtree.className}>
            {getHeaderComponent(router.locale, router.pathname)}
            <UseLayout pathname={router.pathname}>
              <Component {...pageProps} />
            </UseLayout>
            <Footer />
          </div>
        </GlobalStateProvider>
        </ModalProvider>
      </SessionProvider>
      </AxiosProvider>

    </>
  );
}

export default MyApp;


