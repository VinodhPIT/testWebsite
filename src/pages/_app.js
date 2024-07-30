import { useEffect } from "react";
import { useRouter } from "next/router";

import { Figtree } from 'next/font/google'
import { SessionProvider } from "next-auth/react";
import NProgress from "nprogress";

import UseLayout from "@/hooks/useLayout";

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
  weight: ["300", "400", "700", "900", "500", "600","800"],
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

  function getHeaderComponent(locale, pathname, query) {
  
    const generalPaths = [
        "/explore/[[...slug]]",
        "/artists/[detail]",
        "/explore/tattoos/[detail]",
        "/explore/flash-tattoos/[detail]",
        "/privacy_policy",
        "/terms&conditions",
        "/impressum",
        "/user_data_policy",
        "/privacy-policy",
        "/faq"
    ];

    const positionTruePaths = [
        "/",
        "/comingSoon",
        "/explore-style",
        "/contact",
        "/join-as-artist",
        "/404",
    ];

    const darkThemePaths = [
        "/tattoo-financing",
        "/for-tattoo-artists",
        "/journal",
        "/download/[[...download]]"
    ];

    if (generalPaths.includes(pathname) ) {
        return (
            <Header
                logo={"/Inckd_logo_black.svg"}
                theme={"light"}
                imgWidth="105"
                imgHeight="31"
                isPosition={false}
            />
        );
    }
    
    if (query.type === "general") {
      return (
          <Header
              logo={"/Inckd_logo_black.svg"}
              theme={"light"}
              imgWidth="105"
              imgHeight="31"
              isPosition={true}
          />
      );
  }
    else if (positionTruePaths.includes(pathname)) {
        return (
            <Header
                logo={"/Inckd_logo_black.svg"}
                theme={"light"}
                imgWidth="105"
                imgHeight="31"
                isPosition={true}
            />
        );
    } else if (darkThemePaths.includes(pathname)) {
        return (
            <Header
                logo={"/inckd-logo.svg"}
                theme={"dark"}
                imgWidth="105"
                imgHeight="31"
                isPosition={true}
            />
        );
    } else {
        return null;
    }
}
  const { fetchAll } = useDisplayAll(); 
  useEffect(() => {
    if (router.pathname!=="/404") {
      router.replace(`/${router.locale}${router.asPath}`);
    }
    fetchAll(router.locale.split("-")[0]);
  }, []);

  return (
    <>
     <AxiosProvider>
      <SessionProvider session={pageProps.session}>
      <ModalProvider>
        <GlobalStateProvider>
          <div className={figtree.className}>
            {getHeaderComponent(router.locale, router.pathname ,router.query)}
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


