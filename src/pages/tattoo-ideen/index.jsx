import React, { useState } from "react";
import Banner from "@/landingComponents-3/banner/banner";
import FullWidthcarosuel from "@/landingComponents/fullwidthCarousel/fullwidthCarousel";
import PartnerTattoos from "@/landingComponents-3/partnerTattoos/tattoos";
import DragonTattoo from "@/landingComponents-3/dragonTattoo/dragonTattoo";
import DragonSlider from "@/landingComponents-3/dragonSlider/dragonSlider";
import WhydragonTattoo from "@/landingComponents-3/whydragonTattoo/whydragonTattoo";
import ProcessdragonTattoo from "@/landingComponents-3/processdragonTattoo/processdragonTattoo";
import Traditiondragontattoo from "@/landingComponents-3/traditiondragonTattoo/traditiondragonTattoo";
import DownloadApps from "@/landingComponents-3/downloadApps/downloadApps";
import Head from "next/head";
import FullWidthSecwithIcon from "@/landingComponents-2/uniquePartner/uniquePartner";
import UniquePartner from "@/landingComponents/uniquePartner-1/uniquePartner";
import CarouselSection from "@/landingComponents/carouselSection/carosuelSection";
import TrendinginckdArtist from "@/landingComponents/trendinginckdArtist/trendinginckdArtist";
import FullWidthBlock from "@/landingComponents/fullwidthBlock/fullwidthBlock";

import {Link} from 'next/link'

import OrangeTwoRowBlock from "@/landingComponents/orangeTwoRowBlock/orangeTwoRowBlock";


export default function TattooIdeen() {
  const [carosuelForMen, setcarosuelForMen] = useState([
    { image: "/tattoo-ideen-slider1.jpg" },

    {
      image: "/tattoo-iden-slider2.jpg",
    },
  ]);

  const [roseTattoo, SetRoseTattoo] = useState([
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/25952_20230803202843159-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/06f72262-a7e0-4efc-9ba0-8bbcb58acd83`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4655_20221006175730757-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/7f05e7fa-c207-40a3-8317-a436c2471667`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/5110_20221011114420674-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/04439aa9-0acf-41dc-a16d-136328c65a7c`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4306_20221001155133303-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/9759134b-3b0c-48fa-a149-dcac92bcf1f8`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/14804_20230112222439519-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/aad2a915-1b60-4c92-9f3f-4aca4ba7e8e7`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/12975_20221228101248952-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/b142600d-2e6c-4049-8591-d77231cb3170`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/6139_20221021094548634-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/19e7be11-fbb8-4354-aebc-a20816b18734`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/24532_20230501120026877-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/0f83c045-8bce-4aa5-bfd4-42540272bd4a`,
    },
  ]);

  const [religiousTatoo, SetreligiousTatoo] = useState([
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4291_20221001153943791-medium.jpg",

      url: `${process.env.LIVE_URL}/tattoo/c51d3e40-cfb1-4e86-8432-d83b8d6a2e20`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8350_20221108105938536-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/4c7af161-15e3-42b6-a328-f0ec9aa2b1f8`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/5616_20221015095453238-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/38c7c3ca-cde0-4abe-ba47-24d68991cc25`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/15821_20230123171559560-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/9ddbcdbf-727a-4bb3-9797-e27f96d54f51`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4284_20221001153221281-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/d4715777-560f-402a-bdfe-dbfbb03934a2`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/26991_20230926142809293-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/9c76fbd4-07c4-49bb-b28a-6dd058b18553`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4593_20221005165006941-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/1f0a2b0a-7bf2-4e4b-aa3d-9906210afc59`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/27176_20230928214857544-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/62ade9d9-6398-4350-bf95-0a3c0a39f37f`,
    },
  ]);

  const [trendingArtist, setTendingArtist] = useState([
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/1048_484EAC34-6F4B-4438-A8C2-33928DD44B38.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4620_20221006100342954-medium.jpg",
      name: "Chris harvey",
      city: "London",
      country: "United Kingdom",

      url: `${process.env.LIVE_URL}/artists/chrisharvey_bghfm1a3`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/732_2E380F59-A6D7-489A-A63D-8EDBCD930746.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/2415_20220913092008354-medium.jpg",
      name: "Southgate SG Tattoo",
      city: "London",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/artists/southgatesgtattoo_x0xn3epc`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/1012_a6338e0d-9888-4ca1-b6dc-06f911cd3361.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4373_20221003072650823-medium.jpg",
      name: "pennygrit",
      city: "Redhill",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/artists/pennygrit_ufotb8kc`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/3585_inckd/image/20230204141144902_C9621048-27B5-40BB-A611-4A7596955485.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/17570_20230204154920550-medium.jpg",
      name: "Nhong Niramit",

      city: "Nottinghamshire",
      country: "United Kingdom",

      url: `${process.env.LIVE_URL}/artists/nhong-niramit_oca540jq`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/1711_18448F13-4566-46B1-ABFB-05C708D51B88.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8444_20221108224339907-medium.jpg",
      name: "Hugoink_bristol",
      city: "Weston-super-Mare",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/artists/hugoink_bristol_mp015xjp`,
    },
  ]);

  return (
    <div>
      <Head>
        <title>Tattoo Ideen: Entdecke einzigartige Tattoomotive</title>
        <meta
          name="description"
          content="Herzlich willkommen auf unserer Seite, die sich der Faszination und Vielfalt von Tattoo Ideen verschrieben hat. Lass dich von unserer umfangreichen Sammlung inspirieren und begleite uns auf deiner Tattooreise"
        />
        <meta
          name="keywords"
          content="Tattoo Ideen, Tattoo stechen, Schmetterlings Tattoos, Mini Tattoos, Finger Tattoos, Herz Tattoos, Löwen Tattoos, Drachen Tattoos, Tätowierer"
        />

        <meta
          property="og:title"
          content="Tattoo Ideen: Entdecke einzigartige Tattoomotive"
        />
        <meta
          property="og:description"
          content="Herzlich willkommen auf unserer Seite, die sich der Faszination und Vielfalt von Tattoo Ideen verschrieben hat. Lass dich von unserer umfangreichen Sammlung inspirieren und begleite uns auf deiner Tattooreise."
        />
        <meta
          property="og:url"
          content="https://www.inckd.com/tattoo/landingpage"
        />
        <meta
          property="og:image"
          content="https://www.inckd.com/tattoo/landingpage-image.jpg"
        />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tattoo Ideen: Entdecke einzigartige Tattoomotive"
        />
        <meta
          name="twitter:description"
          content="Herzlich willkommen auf unserer Seite, die sich der Faszination und Vielfalt von Tattoo Ideen verschrieben hat. Lass dich von unserer umfangreichen Sammlung inspirieren und begleite uns auf deiner Tattooreise."
        />
        <meta
          name="twitter:image"
          content="https://www.inckd.com/tattoo/landingpage-image.jpg"
        />
      </Head>

      <Banner
        bannerTitle={"Tattoo Ideen: Entdecke einzigartige Tattoomotive"}
        bannerImg={"/TattooIdeenBanner.jpg"}
        bannerButton={"Know more about inckd"}
      />

      <FullWidthSecwithIcon
        img="/studio.svg"
        alt="studio"
        title={""}
        content="Herzlich willkommen auf unserer Seite, die sich der Faszination und Vielfalt von Tattoo Ideen verschrieben hat. Tattoo stechen ist persönlich. Wir helfen dir, die perfekte Inspiration für deine einzigartige Tätowierung zu finden."
        bgColor="#f8f8f8"
      />

      <UniquePartner
        title="Das Stechen lassen eines Tattoos"
        subTitle=""
        content1="Das Stechen lassen eines Tattoos ist eine Kunst, die Präzision und Professionalität erfordert. Unsere erfahrenen Künstler verstehen die Bedeutung deines Tattoos und setzen deine Ideen mit Hingabe und Können um. Bei uns erhältst du nicht nur inspirierende Tattoo Ideen, sondern auch eine erstklassige Erfahrung beim Tätowieren. Von der Beratung bis zur Umsetzung - unsere Tätowierer begleiten dich auf deiner Tattooreise.
          "
        content2=""
        img="/pexels-cottonbro-studio-5320037.jpg"
        alt="Celebrate Your Love Journey with Unique Partner Tattoos"
        carousel={carosuelForMen}
      />

      <FullWidthcarosuel
        title="Schmetterlings Tattoos"
        content="Schmetterlings Tattoos sind mehr als nur kunstvolle Designs – sie symbolisieren Transformation und Schönheit. Tauche ein in unsere Sammlung von atemberaubenden Schmetterlingsmotiven, die deine Tätowierung zu einem kraftvollen Ausdruck machen. Von realistischen Schmetterlingen bis zu abstrakten Darstellungen bieten wir eine Vielzahl von Möglichkeiten, Deine Geschichte zu erzählen. Schmetterlings Tattoos stehen für Wandel, Freiheit und Selbstentfaltung - lass dich  von diesen Symbolen der Metamorphose inspirieren."
        buttonName="Mehr Schmetterlings Tattoos"
        datas={roseTattoo}
        keyword={"Rose"}
      />

      <CarouselSection
        title="Mini Tattoos"
        content="Für diejenigen, die eine zarte Note bevorzugen, sind Mini Tattoos eine wunderbare Wahl. Entdecke winzige Kunstwerke, die trotz ihrer Größe starke Bedeutungen tragen. Mini Tattoos sind perfekt für subtile Statements und können genauso kraftvoll sein wie größere Designs.
          Egal ob ein winziges Tiermotiv, ein Symbol oder ein Wort – Mini Tattoos bieten Raum für kreative Individualität. In unserer Mini Tattoo Galerie findest du eine vielfältige Auswahl an inspirierenden Designs. Lass dich sich von den feinen Details und der kunstvollen Umsetzung dieser kleinen Kunstwerke inspirieren. Denn manchmal sagt ein Mini Tattoo mehr als tausend Worte.
          "
        buttonName="Mehr mini Tattoos"
        datas={religiousTatoo}
        keyword={"mini"}
      />

      <CarouselSection
        title="Finger Tattoos"
        content="Beginnen wir mit den zarten und eleganten Finger Tattoos. Unsere umfangreiche Galerie präsentiert eine Vielzahl von Finger Tattoo Ideen, von minimalistisch bis hin zu detailverliebt. Ein filigranes Herz am Finger oder ein dezentes Blumenmotiv – lass dich von diesen zarten Kreationen inspirieren. Finger Tattoos sind nicht nur ästhetisch, sondern bieten auch eine diskrete Möglichkeit, deine Persönlichkeit zu zeigen.
          "
        buttonName="Mehr finger Tattoos"
        datas={religiousTatoo}
        keyword={"finger"}
      />

      <CarouselSection
        title="Herz Tattoos:"
        content=" Unsere Sammlung erstreckt sich über eine Vielzahl von Tattoo-Motiven, darunter nicht nur Finger Tattoos, Schmetterlings Tattoos und Mini Tattoos, sondern auch eine exquisite Auswahl an Herz-Tattoos. Ob dunach romantischen Herz-Tattoos oder einzigartigen Motiven suchen – bei uns findest du die Inspiration, die du benötigen. Ein Herz-Tattoo kann Liebe und Leidenschaft auf kunstvolle Weise verkörpern.
          Lass dich von unseren Herz-Tattoo Ideen inspirieren und entdecke sie, wie ein scheinbar kleines Symbol starke Gefühle und tiefe Emotionen ausdrücken kann. Die Vielfalt unserer Herz-Tattoos bietet dir kreative Möglichkeiten, deine Liebe oder deine persönlichen Erfahrungen auf einzigartige Weise zu symbolisieren.
          "
        buttonName="Mehr Herz Tattoos"
        datas={religiousTatoo}
        keyword={"Herz"}
      />

      <CarouselSection
        title="Löwen Tattoo Ideen"
        content=" Ein beeindruckendes Löwen-Tattoo symbolisiert Stärke und Selbstbewusstsein. Löwen stehen für Mut und königliche Macht. Unsere Kollektion bietet eine Vielfalt von realistischen bis abstrakten Löwenbildern.
          Die Mähne des Löwen kann detailliert gestaltet werden, um eine starke Wirkung zu erzielen. Ein Löwen-Tattoo ist nicht nur schön anzusehen, sondern hat auch eine tiefe symbolische Bedeutung. Entdeckd die faszinierende Welt der Löwen Tattoos und lass dich von ihrer starken Ausstrahlung inspirieren. Wir bieten eine große Auswahl an subtilen und beeindruckenden Darstellungen, um deine persönliche Stärke zu betonen.
          "
        buttonName="Mehr Löwen Tattoos"
        datas={religiousTatoo}
        keyword={"Löwen"}
      />

      <FullWidthcarosuel
        title="Drachen Tattoo Ideen"
        content="Drachen Tattoos sind faszinierende Kunstwerke, die Macht und Mystik verkörpern. Von Glücks-Drachen bis zu Abenteuer-Drachen - Drachen Tattoos sind vielfältig und beeindruckend in ihrer Symbolik. Ein Drachen Tattoo kann mit lebendigen Farben und detailreichen Designs gestaltet werden, um eine atemberaubende Wirkung zu erzielen. Lass dich von der mythologischen Welt der Drachen zu einer einzigartigen Tätowierung inspirieren.
          "
        buttonName={"Entdecke mehr Drachen Tattoos"}
        datas={religiousTatoo}
        keyword={"Rose"}
      />
      <FullWidthBlock
        title={"Deine Tattoo Träume Wirklichkeit werden lassen:"}
        content={
          "Bei uns geht es darum, deine Tattoo Träume Wirklichkeit werden zu lassen. Entdecke die tolle Tattoo Ideen für deinen Stil. Mini Tattoos, Finger Tattoos, Schmetterlings Tattoos, Löwen Tattoos, Drachen Tattoos und mehr setzen dein individuelles Statement. Tauchen ein in die Welt der Tätowierung Kunst und lass dich von unserer Expertise begleiten."
        }
        sectionBackgrounColor={"#eaffc0"}
      />

      <TrendinginckdArtist
        title=" "
        title_sub=""
        content=""
        button="Entdecke mehr Tätowierer"
        trendingArtist={trendingArtist}
      />





<OrangeTwoRowBlock
          mainTitle=""
          img1="/LinkRound.svg"
          title1="Erfahre mehr über die Tattoo-Motive"
          
          content1={
           
            'Wir freuen uns darauf, dich bei jedem Schritt deiner Tattoo-Reise zu begleiten. Wir helfen dir von Ideen bis zur Umsetzung, ein Tattoo zu bekommen. Das Tattoo soll nicht nur schön aussehen, sondern auch eine Bedeutung für dich haben. Erfahre mehr über die Tattoo-Motive in unserem '
          }
          img2="/Album.svg"
          title2="Erforsche unsere umfangreiche Sammlung von Tattoo Ideen
          "
          content2="Erforsche unsere umfangreiche Sammlung von Tattoo Ideen, lasse dich inspirieren und schaffe gemeinsam mit uns dein persönliches Meisterwerk. Jedes Tattoo erzählt eine besondere Geschichte. Wir sorgen dafür, dass deine Geschichte künstlerisch und individuell in deinem Tattoo dargestellt wird."
          bgColor="#FFD5C0"
        />




      <DownloadApps />
      </div>
  )
}
