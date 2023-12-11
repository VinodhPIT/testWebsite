

import React, { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";



export default function Faq({locale}) {

  const FAQ_GENERAL = [
    {
      id: "01",
      summary: 'How do I start the process?',
      details: 'Download inckd, explore artists, and initiate a conversation directly through the app to begin your partner tattoo journey.',
    },
    {
      id: "02",

      summary: 'Is my personal information secure?',
      details: 'Absolutely. inckd prioritizes the security of your information, utilizing encrypted technology for all transactions.',
    },
    {
      id: "03",
      summary: 'How do I start the process?',
      details: 'Download inckd, explore artists, and initiate a conversation directly through the app to begin your partner tattoo journey.',

    },
    {
      id: "04",

      summary: 'Is my personal information secure?',
      details: 'Absolutely. inckd prioritizes the security of your information, utilizing encrypted technology for all transactions.',

    },
  ];

  return (

    <div className="faq_wrap landing_faq" >
      <div className="container">
        <h2 className="color_gray_550 mb_0 heading_h2 text_center">Frequently asked questions</h2>
      </div>
      <div className="faq_accordion_wrap">
        <div className="container">        
            <Accordion allowZeroExpanded={true} >
              {FAQ_GENERAL.map((e) => {
                return (
                  <>
                    <AccordionItem    >
                      <AccordionItemHeading >
                        <AccordionItemButton>
                         <span className="faq_count"> {e.id} </span><h4>{e.summary}</h4>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>{e.details}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </>
                );
              })}
            </Accordion>
          
         
        </div>
      </div>
    </div>
  );
}










