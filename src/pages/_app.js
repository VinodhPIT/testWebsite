import { useEffect } from "react";
import { useRouter } from "next/router";
import { Figtree } from 'next/font/google'
import { SessionProvider } from "next-auth/react";
import UseLayout from "@/hooks/useLayout";
import NProgress from "nprogress";
import useStyleListing from "@/store/styleListing/styleListing";
import useDisplayAll from "@/store/exploreAll/exploreAll";
import { GlobalStateProvider } from "@/context/Context";
import loadGoogleMapsAPI from "@/utils/google-maps";

import Header from "@/common/header";
import Footer from "@/common/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "@/styles/customStyles.css";
import "@/styles/analytics.css";
import "@/styles/requestForm.css";
import "@/styles/cms.css";

import { AxiosProvider } from '@/apiConfig/axios.instance'; // Adjust the import path as needed


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
      case "/join-as-artist":
      case "/faq":
      case "/privacy_policy":
      case "/terms&conditions":
      case "/impressum":
      case "/user_data_policy":
      case "/privacy-policy":
      case "/download/[[...download]]":
      case "/comingSoon":
      case "/explore-style":
        return (
          <Header
            logo={"/inckd-logo.svg"}
            theme={"white"}
            imgWidth="105"
            imgHeight="31"
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
      </AxiosProvider>
    </>
  );
}

export default MyApp;


