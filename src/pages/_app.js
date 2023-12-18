
import {useEffect} from 'react'
import { useRouter } from "next/router";
import Header from "@/components/header/header";
import Header1 from "@/components/header-downloads/header";
import Footer from "@/components/footer/footer";
import { GlobalStateProvider } from "@/context/Context";
import { Figtree } from "next/font/google";
import UseLayout from "@/hooks/useLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "@/styles/customStyles.css";
import loadGoogleMapsAPI from '@/components/google-maps'; 
import NProgress from  "nprogress"
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
      router.events.off("routeChangeStart", (url) => {
      
      });

      router.events.off("routeChangeComplete", (url) => {
       
      });
    };
  }, []);







  function getHeaderComponent( locale ,pathname) {
    switch (locale ,pathname) {
      case "/":
      case "/klarna":
        return <Header logo={'/inckd-logo.svg'} theme={"normal"} isPosition={true} 
        imgWidth="105"
            imgHeight="31"
        />;

      case "/explore/[[...slug]]":
      case "/artists/[detail]":
      case `/explore/tattoos/[detail]`:
      case "/explore/flash-tattoos/[detail]":
      case "/404":
        
       
        return (
          <Header
            logo={"/tattooSearch.svg"}
            theme={"white"}
            isPosition={false}
            imgWidth="109"
            imgHeight="52"
          />
        );

        case "/contact":
         case "/join-tattoo-artists":
          case "/tattoo-dictionary":
            case "/journal":
      
          return <Header logo={'/inckd-logo.svg'} theme={"black"} isPosition={true} 
          
          imgWidth="105"
            imgHeight="31"
          
          />;
        
  

      case "/faq":
        case "/privacy-policy":
          
        
        return (
          <Header
            logo={"/Inckd-logo-footer-black.svg"}
            theme={"white"}
            isPosition={false}
                  
          imgWidth="105"
          imgHeight="31"
          />
        );

      case "/tattoo-styleguide":
        return (
          <Header
            logo={"/styleGuideLogo.svg"}
            theme={"normal"}
            isPosition={true}
                  
          imgWidth="109"
          imgHeight="52"
          />
        );

      case "/for-tattoo-artists":
       
        return (
          <Header
            logo={"/artistHeaderLogo.svg"}
            theme={"normal"}
            isPosition={true}
            imgWidth="109"
            imgHeight="52"
          />
        );
      case "/klarna-downloads":
      case "/offer-downloads":
       
        return (
          <Header1
            logo={"/Inckd-logo-b.svg"}
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
        {getHeaderComponent( router.locale, router.pathname)}

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