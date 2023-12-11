import React, { useState } from "react";
import Banner from "@/landing-3/Banner/Banner";
import FullWidthcarosuel from "@/landing-1/FullwidthCarousel/FullwidthCarousel";
import DownloadApps from "@/landing-3/DownloadApps/DownloadApps";
import Head from "next/head";
import CarouselSection from "@/landing-1/CarouselSection/CarosuelSection";
import { useNavigation } from "@/hooks/useRouter";
import Link from "next/link";
import ContentImageLayout from "@/landing-3/ContentImageLayout/ContentImageLayout";
import SideBySideContentWithImage from "@/landing-1/SideBySideContentWithImage/SideBySideContentWithImage";
import VerticalImageLayout from "@/landing-3/VerticalImageLayout/VerticalImageLayout";

export default function TattooIdeen() {
  const { router } = useNavigation();

  const [butterflyTattoos, setButterflyTattoos] = useState([
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/17357_20230203124234258-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/13fe7e6b-27e2-4862-8cd1-63ae887aa835`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/2047_20220824091834377-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/2b4313f4-42f7-4b5c-a0fe-9a1048cd509a`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/1631_20220810120118508-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/f4acb3da-cb6d-4698-aeb7-c7a3d4f9cf31`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8798_20221112103645427-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/33cc6a48-fc2a-4fd8-bf44-a7589ab5c31e`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/17242_20230202192308433-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/dd0d7b99-4446-4d55-8f94-8b03462704ab`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/5729_20221016233810380-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/1db18a75-80fb-4374-91cb-1ec789bb1631'`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/3844_20220927191141628-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/485ad340-8b0f-43eb-81ce-6f36d6232432`,
    },
  ]);

  const [floweTattoos, setFloweTattoos] = useState([
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/10830_20221205152235958-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/a1d1cc8d-a1d7-41b9-8eb4-6e58f424bd8d`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/12301_20221218153728182-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/1e8f3636-49ed-43a0-b6a2-d591e5fa5428`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/19408_20230215200910408-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/021b10eb-7d3d-4c35-b29c-2b03ae9c0a89'`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/5856_20221018160121840-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/073846e5-ebab-4134-873b-53f5efbd2cbf`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/19410_20230215200912069-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/55406ad4-6437-4c8c-9ce9-4300847fdfb5`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/3161_20220921165323756-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/d3b87c6a-066e-423b-b07e-8f4bb031dc4b`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4041_20220929063719022-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/fa69ed9a-755f-461c-bc48-13371981b4b3`,
    },
  ]);

  const [rosenTattos, setRosenTattoos] = useState([
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/1626_20220810115446943-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/4bab0757-ead6-4924-8969-ace472d4e636`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/2181_20220901165222178-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/d41d185e-7952-49c2-9998-6a00efa4eb32`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/29251_20231113025339771-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/865f541e-b3a0-4214-bad6-ee409032bc61`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/23798_20230411211346424-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/8238ce6f-c34e-48a4-a31c-481ec603b823`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8832_20221112125030016-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/450b4b33-e8c3-48c8-bbfa-4aadad8203d0`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/7344_20221028090211336-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/03b6ef98-6cb3-4f9c-9cd2-2cae2da24e04`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/7239_20221027125241846-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/0184995e-d820-4ad4-bef6-3b6472709086`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4343_20221001230226996-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/e01601b2-cac2-4cfb-978a-537c2eec1203`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/20716_20230228081436105-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/61e536ad-9327-4eb0-a51c-6799903f96c5`,
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
        bannerTitle={
          "Tattoos für Frauen: Vielfalt und Symbolik bei weiblichen Tätowierungen."
        }
        bannerImg={"/Tattoos-für-Fraue.jpg"}
        bannerButton={"Know more about inckd"}
        textColor="#fff"

      />

      <ContentImageLayout
        title={"Tattoos für Frauen"}
        content="Herzlich willkommen auf unserer umfassenden Seite, die sich leidenschaftlich der faszinierenden Welt der Tattoos für Frauen widmet. Hier möchten wir nicht nur den künstlerischen Aspekt von Tätowierungen betonen, sondern auch die vielfältige Symbolik, die jede Tätowierung einzigartig macht.
        Die Beliebtheit von Tattoos bei Frauen ist in den vergangenen Jahren erheblich gestiegen. Unsere Seite ist keine Plattform nur für Frauen, sondern eine Ressource für alle, die sich für die Vielfalt und Symbolik femininer Tätowierungen interessieren."
        img="/tattoo-for-women.jpg"
        alt="tattoos-for-women"
        bgColor={"#f8f8f8"}
      />

      <FullWidthcarosuel
        title="Schmetterling Tattoos: Leichtigkeit und Transformation"
        content="Schmetterlinge sind Symbole der Verwandlung und Veränderung. Ihre zarten Flügel und leuchtenden Farben machen sie zu beliebten Motiven für Frauen. Tauche ein in die Welt der Schmetterlinge Tattoos und entdecke, wie sie die Leichtigkeit des Lebens und die Schönheit der Wandlung einfangen. Wir präsentieren unterschiedliche Designs und erläutern ihre symbolische Bedeutung."
        buttonName="Entdecke mehr Schmetterling Tattoos"
        datas={butterflyTattoos}
        keyword={"butterfly"}
      />

      <div className="text_box_wrap full-block-wrap ">
        <div className="img_text_box_inner">
          <div className="justify_content_start container w_100pc">
            <div className="text_box_content_inner pt_20  pb_45 max_w_100pc m_pt_pb_50">
              <h4 className="color_gray_550 mb_0 heading_h2">
                Die Vielfalt der Tattoo Motive
              </h4>
            </div>
          </div>
        </div>
      </div>

      <CarouselSection
        title="Blumen Tattoos"
        content={
          <>
            Blumen sind nicht nur ästhetisch ansprechend, sondern tragen auch
            eine Fülle von Bedeutungen. In unserem{" "}
            <Link href={`/${router.locale}/tattoo-dictionary`}> Tattoo Lexikon</Link> über Blumen Tattoos erfährst
            du die Bedeutung verschiedener Blumen und ihre kulturellen
            Hintergründe. Von der romantischen Rose bis zur reinen Lilie bieten
            Blumen Tattoos viele Möglichkeiten, deine Persönlichkeit
            auszudrücken.
          </>
        }
        buttonName="Entdecke mehr Blumen Tattoos
        "
        datas={floweTattoos}
        keyword={"flower"}
      />

      <CarouselSection
        title="Rosen Tattoos: Liebe, Schönheit, Weiblichkeit"
        content="Rosen gelten als zeitlose Symbole für Liebe und Schönheit. Wir erkunden Rosen Tattoos in verschiedenen Stilen und beleuchten ihre vielschichtige Bedeutung. Entdecke, wie du mit einem Rosen Tattoo deine eigene Geschichte auf faszinierende Weise erzählen kannst."
        buttonName="Entdecke mehr Rosen Tattoos"
        datas={rosenTattos}
        keyword={"rose"}
      />

      <SideBySideContentWithImage
        mainTitle="Pflege und Heilung deiner Tattoos"
        title1="Hautpflege nach dem Stechen"
        content1={
          <>
            Nachdem du das perfekte Tattoo gefunden hast, ist die richtige
            Pflege entscheidend. Erfahre, wie du deine Haut nach dem Stechen
            optimal versorgt, um eine schnelle Heilung und langanhaltende
            Farbbrillanz zu gewährleisten. Unsere Tipps helfen dabei,
            Irritationen zu vermeiden und dein Tattoo in seiner vollen Pracht
            erstrahlen zu lassen.
            <Link href={"/tattoo-Pflege"}>Tipps für die Tattoo Pflege </Link>
          </>
        }
        title2=""
        content2=""
        title3="Emotionale Bedeutung: Ein Tattoo mit Herz und Seele"
        content3="Tattoos tragen nicht nur ästhetischen Wert, sondern auch emotionale Tiefe. Ergründe, wie die emotionale Bedeutung deines Tattoos mit deiner Persönlichkeit verschmilzt. Wir geben Einblicke, wie du ein Tattoo wählst, das nicht nur äußerlich, sondern auch innerlich strahlt, und wie dies zu einem wichtigen Teil deiner Identität werden kann."
        title4=""
        content4=""
        leftSectionImage="/emotional-meaning-tattoo.jpg"
        rightSecImage="/heartTattoo.jpg"
      />

      <VerticalImageLayout
        maintitle="Die Kunst des Cover-ups: Veränderung mit Stil"
        title1="Cover-up Tattoos: Eine Neue Geschichte Schreiben"
        content1={
          <>
            Manchmal will man alte Tattoos überdecken und Platz für neue
            schaffen. Cover-up Tattoos verwandeln alte Tattoos in etwas Neues.
            Unsere Tipps helfen dir, das beste Design für dein Cover-up zu
            wählen. Du kannst eine neue Geschichte auf deiner Haut erzählen.
            <Link href={"/cover-up-tattoos"}>
              Tipps für ein Cover up Tattoo
            </Link>
          </>
        }
        title2="Tattoo Motive: Vielfalt und Individualität"
        content2="Unsere Seite erkundet nicht nur die Welt der Tattoos, sondern auch die Vielfalt an Motiven, die deine Persönlichkeit widerspiegeln. Von Schmetterlingen und Federn bis zu individuellen Symbolen - finde das perfekte Tattoo Motiv, das deine Einzigartigkeit betont. Unser Tattoo Lexikon präsentiert eine breite Palette inspirierender Designs, um deine kreative Reise zu bereichern."
        title3="Fazit: Deine Reise in die Welt der Weiblichen Tattoos"
        content3="Die Vielfalt der weiblichen Tattoos ist faszinierend und unendlich. Wir sind hier, um dich bei deiner Tattoo-Reise zu unterstützen. Egal, ob du nach neuen Motiven suchst, Pflegetipps benötigst oder dich für das Cover-up interessierst.
Deine Haut ist die Leinwand, und wir stehen bereit, dir bei der Gestaltung deines einzigartigen Meisterwerks zu helfen. Finde Inspiration, entdecke die Symbolik hinter den Motiven und lass dich von der kreativen Vielfalt der weiblichen Tattoo-Kunst begeistern. Dein Weg zu einem einzigartigen Ausdruck deiner Persönlichkeit beginnt hier. Wir freuen uns darauf, Teil deiner faszinierenden Tattoo-Reise zu sein."
        image1="/artCoverupTattoo-1.png"
        image2="/artCoverUpTattoo2.png"
        image3="/artCoverupTattoo-3.svg"
        alt="CoverUp-Tattoos"
        bgColor="#fff"
      />

      <DownloadApps title="Download the" subTitle="App & Explore more!" />
    </div>
  );
}
