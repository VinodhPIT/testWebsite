import React, { useState, useEffect } from "react";
import Head from "next/head";

import useCanonicalUrl from '@/hooks/useCanonicalUrl'; 

import useTranslation from "next-translate/useTranslation";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

import Search from "@/components/exploreScreens/searchField";
import style from "@/pages/explore/search.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

export default function FAQ({ }) {

const canonicalUrl =useCanonicalUrl()

  const router = useRouter();
  const [state, setState] = useState("general");
  const { t } = useTranslation();

  const changeTab = (id) => {
    setState(id);
  };

  const FAQ_ARTISTS = [
    {
      id: 7,
      summary: t("common:faqScreen.title7"),
      details: t("common:faqScreen.content7"),
    },

    {
      id: 8,
      summary: t("common:faqScreen.title8"),
      details: t("common:faqScreen.content8"),
    },

    {
      id: 9,
      summary: t("common:faqScreen.title9"),
      details: t("common:faqScreen.content9"),
    },

    {
      id: 10,
      summary: t("common:faqScreen.title10"),
      details: t("common:faqScreen.content10"),
    },

    {
      id: 11,
      summary: t("common:faqScreen.title11"),
      details: t("common:faqScreen.content11"),
    },

    {
      id: 12,
      summary: t("common:faqScreen.title12"),
      details: t("common:faqScreen.content12"),
    },
  ];

  const FAQ_CUSTOMERS = [
    {
      id: 13,
      summary: t("common:faqScreen.title13"),
      details: t("common:faqScreen.content13"),
    },

    {
      id: 14,
      summary: t("common:faqScreen.title14"),
      details: t("common:faqScreen.content14"),
    },

    {
      id: 15,
      summary: t("common:faqScreen.title15"),
      details: t("common:faqScreen.content15"),
    },

    {
      id: 16,
      summary: t("common:faqScreen.title16"),
      details: t("common:faqScreen.content16"),
    },
  ];

  const FAQ_GENERAL = [
    {
      id: 1,
      summary: t("common:faqScreen.title1"),
      details: t("common:faqScreen.content1"),
    },
    {
      id: 2,

      summary: t("common:faqScreen.title2"),
      details: t("common:faqScreen.content2"),
    },
    {
      id: 3,
      summary: t("common:faqScreen.title3"),
      details: t("common:faqScreen.content3"),
    },
    {
      id: 4,

      summary: t("common:faqScreen.title4"),
      details: t("common:faqScreen.content4"),
    },

    {
      id: 5,

      summary: t("common:faqScreen.title5"),
      details: t("common:faqScreen.content5"),
    },

    {
      id: 6,

      summary: t("common:faqScreen.title6"),
      details: t("common:faqScreen.content6"),
    },
  ];

  const faqTab = [
    {
      id: "general",
      label: t("common:tabs.general"),
      image: "/all.svg",
      activeImage: "/all-active.svg",
    },
    {
      id: "artist",
      label: t("common:tabs.artist"),
      image: "/colour-palette-new.svg",
      activeImage: "/colour-palette-active.svg",
    },

    {
      id: "tattoo",
      label: t("common:tabs.tattooLovers"),
      image: "/flame-new.svg",
      activeImage: "/Flame-active.svg",
    },
  ];

  return (
    <>
      <Head>
      <title>{t("common:faqScreen_Meta.title")}</title>
      <link rel="canonical" href={canonicalUrl}  />
        <meta
          name="description"
          content={t("common:faqScreen_Meta.description")}
        />
        <meta name="keywords" content={t("common:faqScreen_Meta.keyword")} />

        <meta
          property="og:title"
          content={t("common:faqScreen_Meta.title")}
        />
        <meta
          property="og:description"
          content= {t("common:faqScreen_Meta.description")}
        />
        <meta property="og:image" content={`${process.env.LIVE_URL}/metaFAQ.png`} />
        <meta
          property="og:url"
          content={canonicalUrl}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={t("common:faqScreen_Meta.title")}
        />
        <meta
          name="twitter:description"
          content={t("common:faqScreen_Meta.description")}
        />
        <meta name="twitter:image"  content={`${process.env.LIVE_URL}/metaFAQ.png`} />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        
      </Head>

      <main>
        <div className="faq_search_wrap">
          <div className="container">
            <Search currentTab={"all"} router={router} isDetail={true} />
          </div>
        </div>

        <div className="faq_wrap">
          <div className="container">
            <h1>{t("common:faqScreen.head1")}</h1>
          </div>
          <div className="faq_tab_wrap">
            <div className="container">
              <div className="tabSection">
                <ul>
                  {faqTab.map((tab) => (
                    <li
                      key={tab.id}
                      className={state === tab.id ? "activeTab" : "inActivetab"}
                      onClick={() => changeTab(tab.id)}
                    >
                      <div className={style.tabBox}>
                        <Image
                          width={25}
                          height={25}
                          src={state === tab.id ? tab.activeImage : tab.image}
                          alt={tab.id}
                        />
                        <p style={{ margin: "0" }}>{tab.label}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="faq_accordion_wrap">
            <div className="container">
              <Accordion allowZeroExpanded={true}>
                {state === "general" &&
                  FAQ_GENERAL.map((e, index) => (
                    <AccordionItem
                      expanded={state === "general" && index === 0}
                      key={e.id}
                    >
                      <AccordionItemHeading>
                        <AccordionItemButton>{e.summary}</AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>{e.details}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  ))}
                {state === "artist" &&
                  FAQ_ARTISTS.map((e, index) => (
                    <AccordionItem
                      expanded={state === "artist" && index === 0}
                      key={e.id}
                    >
                      <AccordionItemHeading>
                        <AccordionItemButton>{e.summary}</AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>{e.details}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  ))}
                {state === "tattoo" &&
                  FAQ_CUSTOMERS.map((e, index) => (
                    <AccordionItem
                      expanded={state === "tattoo" && index === 0}
                      key={e.id}
                    >
                      <AccordionItemHeading>
                        <AccordionItemButton>{e.summary}</AccordionItemButton>
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
      </main>
    </>
  );
}
