import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

export default function Faq({ title, dscription, data }) {
  return (
    <div className="faq_wrap landing_faq">
      <div className="container">
        <h3 className="color_gray_550 mb_0 heading_h2 text_center mb_30">
          {title}
        </h3>
        <p
          className="custom_fs_20 w_1090 max_w_100pc lh_30 custom_fs_m_16 color_gray_550 mb_0 text_center"
          style={{ margin: "0 auto" }}
        >
          {dscription}
        </p>
      </div>

      <div className="faq_accordion_wrap">
        <div className="container">
          <Accordion allowZeroExpanded={true}>
            {data.map((e, index) => (
              <AccordionItem key={index} expanded={index === 0}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span className="faq_count">{e.id}</span>
                    <h4>{e.summary}</h4>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>{e.details}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
