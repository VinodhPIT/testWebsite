import React,{useEffect} from 'react'
import _Form from '@/components/form/form'
import useTranslation from "next-translate/useTranslation";
import { useGlobalState } from "@/context/Context";
import { getLocaleProps } from '@/utils/getlocale';
import Head from 'next/head';




export default function Contact({locale}) {

  const {getLocale } = useGlobalState();

  const { t } = useTranslation();


  useEffect(() => {
    try {
      getLocale({
        locale,
      });
    } catch (error) {}
  }, [locale]);

  return (  
<>
<Head>
        <title>
        Get in touch with us
        </title>
         <meta
          name="description"
          content="Contact us for tattoo inquiries or any questions. We're here to help you with all your tattoo-related queries and concerns"
        />
           <meta
          name="keywords"
          content="Tattoo inquiry form, Ink-related queries, Get in touch with tattooist"
        />
      </Head> 
   
<main>


    <div className="page-wrapper">
      <section class="forms_section default_form_block contact_form_block">
        <div class="container">
          <div class="full_block_wrap">
            <div class="form_block_left">
              <h1 class="page_title">{t("common:contactUsPage.contact-us")}</h1>
              <p>{t("common:contactUsPage.getInTouch")}</p>
             					
            </div>
            <div class="form_block_right">

              
                  <_Form/>
            
              
            </div>
          </div>
        </div>
      </section>
    </div>
    </main>
    </>
  )
}


export async function getServerSideProps(context) {
  const { props } = await getLocaleProps(context);
  return {
    props:{
      locale:props.locale
    }
  };
}
