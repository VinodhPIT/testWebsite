import React, { useState } from "react";
import Banner from "@/landing-3/Banner/Banner";
import FullWidthcarosuel from "@/landing-1/FullwidthCarousel/FullwidthCarousel";
import DownloadApps from "@/landing-3/DownloadApps/DownloadApps";
import Head from "next/head";
import FullWidthSecwithIcon from "@/landing-2/FullWidthSecwithIcon/FullWidthSecwithIcon";
import UniquePartner from "@/landing-1/LeftContentRightImage/LeftContentRightImage";
import CarouselSection from "@/landing-1/CarouselSection/CarosuelSection";
import ThreeColumCarousel from "@/landing-1/ThreeColumCarousel/ThreeColumnCarousel";
import FullWidthBlock from "@/landing-1/FullwidthBlock/FullwidthBlock";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import { useNavigation } from "@/hooks/useRouter";
import Link from "next/link";
import OrangeTwoRowBlock from "@/landing-1/orangeTwoRowBlock/orangeTwoRowBlock";
import ListingGridTwoColumn from "@/landing-1/ListingGrid-TwoColumn/ListingGridTwoColumn";

export default function TattooIdeen() {
  const { router } = useNavigation();

  const [carosuelForMen, setcarosuelForMen] = useState([
    { image: "/tattoo-ideen-slider1.png" },

    {
      image: "/tattoo-iden-slider2.png",
    },

    {
      image: "/tattoo-iden-slider3.png",
    },
  ]);

  const [Schmetterlings, setSchmetterlings] = useState([
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/10568_20221201163816017-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/cb8ffe67-49c6-423a-b5dd-0619883532f6`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/11301_20221209092538720-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/bcbb2029-b85b-4bc5-9dc9-02c75b3fec09`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/17446_20230203192121997-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/294e004c-3be5-4a19-838d-bb1aa1bbd8da`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/6302_20221022172609949-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/b8328de8-73b1-4813-b3f4-40e1e81de7a4`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/2136_20220827094033444-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/5d1afc9e-fa55-47e0-8d69-3fcbd3c32530`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/24481_20230428081127883-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/7b412796-b79d-40e0-be60-7259b36fa3b0`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/5420_20221013111725878-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/ae03c700-746c-4f38-b8d2-5593d7900b03`,
    },
  ]);

  const [miniTattoo, setminiTattoo] = useState([
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4759_20221007142629676-medium.jpg",

      url: `${process.env.LIVE_URL}/tattoo/b366870d-e38c-45a4-9a3b-09837ccdac2c`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/11829_20221214220031111-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/b366870d-e38c-45a4-9a3b-09837ccdac2c`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4271_20221001104905877-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/ba87286c-f36b-4309-95c0-68641af215e5`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4765_20221007144052865-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/8ea3d9d6-cc02-4731-87dc-866f4ff74e94`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8645_20221110120829339-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/5e748d74-6d7f-4493-8360-537fc108ef4a`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4724_20221007115056435-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/2143f598-771a-414a-8b68-650e91931986`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/13224_20221230180227465-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/8ecdc357-8efc-4122-8067-274cbedc9fa4`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/15180_20230116183801253-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/3d40a303-91be-4213-be44-1a43d79903d9`,
    },
  ]);

  const [fingerTattos, setFinger] = useState([
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/9406_20221117211556552-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/012b0ec7-56ed-4d0c-b442-cdbf7049bf87`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/26177_20230819154213258-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/92f01137-ae86-492d-aab7-cfc61a22d20b'`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/16636_20230130112845332-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/49f32bf5-7cdb-431a-888f-21bb2c5111fc`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/6302_20221022172609949-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/b8328de8-73b1-4813-b3f4-40e1e81de7a4`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/10986_20221207121731029-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/cabd0c1a-8f27-42d8-99db-e73b954ec2ee`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/9951_20221123204308600-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/c382163e-8a72-4cd3-96c7-613457eae938`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4387_20221003125711877-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/a122477d-0a7c-49c7-a872-a3fcc0fa9e71`,
    },
  ]);

  const [herzTattos, setHerzTattos] = useState([
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/17385_20230203140845606-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/112271c8-6598-4298-b99c-8730550925a6`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/7129_20221026184216461-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/c944187c-de8d-4fd6-b6a7-fec01f63c8c5'`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/6174_20221021123236817-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/70748663-94f2-4e9b-abf7-0b3f0d5a9c13`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/23879_20230412103608255-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/e005fe2b-d04d-4018-af59-28e57725e5ff`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8832_20221112125030016-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/450b4b33-e8c3-48c8-bbfa-4aadad8203d0`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/5625_20221015123203120-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/4edaede2-3233-411e-bc7d-c52bb6db4dca`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/5074_20221011092521390-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/742cb818-1fd5-4f99-98e6-75a1a9ed6ad0`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/9013_20221114205459607-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/f7d99388-5987-476c-ad0d-e19b9b6329ad`,
    },
  ]);

  const [löwenTattoo, setLöwenTattoo] = useState([
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/13131_20221229171132742-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/732aaf7f-466d-4612-a05b-c5ff2aa1dff4`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/14318_20230109134143790-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/640cf4fa-119c-47a6-a6eb-3622750468c6`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/14810_20230112223717411-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/ca0b9583-f532-4c89-b7e7-6aeda1ee092e`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/12033_20221215200412686-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/1d3f7944-ea2d-4229-8e2b-3c5e5e2b8604`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/6229_20221021181735788-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/0544c3a5-2f08-4d8e-bfea-b4f1f912c47a`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/14428_20230110025908112-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/59733e6c-4264-4bf9-a8b6-8a321ed9581d`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/2900_20220918163734264-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/8df81485-40d2-4996-a640-03a3e136790d`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/24519_20230501115106273-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/74cd289e-f1d6-4696-9c7a-4e4c13651589`,
    },
  ]);

  const [dragonTattoo, setDragonTattoo] = useState([
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/2697_20220915102023751-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/d0ead812-65af-4cfd-9d3c-f3488f253cf8'`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/6969_20221025174135791-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/b38d0b4b-c942-4a83-9c6a-30a503a7f6a6`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/3771_20220927130845510-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/58226d7e-d364-4769-abc7-59f0a5a2934d`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/2755_20220916120728076-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/cc04e93a-28ac-4832-8ce7-7d5da4dafbd4`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/2381_20220911184739543-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/ca14475a-7571-453d-9482-84067f9f6c64`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/24776_20230516040125015-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/6fdd3b00-767b-44bc-9e72-f750114d316f`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/9615_20221121131123062-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/74084fe2-c1be-422f-bf12-32bc33c5a245`,
    },
  ]);

  const [trendingArtist, setTendingArtist] = useState([
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/1606_71406e34-f904-4c32-849e-dc750d5a2a16.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8176_20221105120303810-medium.jpg",
      name: "Cheap Handjobs",
      city: "Leipzig",
      country: "Germany",

      url: `${process.env.LIVE_URL}/artists/cheaphandjobs_cbv6hal1`,
    },

    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/8647_20231109084816116_E71AB428-A00F-4FAE-A84C-3CA13ED3BD62.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/28933_20231109084136407-medium.jpg",
      name: "Nastis_ink",
      city: "Saalfeld",
      country: "Germany",
      url: `${process.env.LIVE_URL}/artists/nastis_ink_zxh0r3o5`,
    },

    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/2568_90F5A97E-84DA-49F7-A7D1-6A172A66D839.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/None_4DD667E5-4C20-465F-A080-68054F9E055F.jpg",
      name: "Rose",
      city: "Weimar",
      country: "United Germany",
      url: `${process.env.LIVE_URL}/artists/pennygrit_ufotb8kc`,
    },

    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/5888_inckd/image/20230714065304433_F383F82C-4985-47ED-A5E7-28FC960AF99A.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/26843_20230917174322157-medium.jpg",
      name: "Tommy Gunz",

      city: "Fürth",
      country: "Germany",

      url: `${process.env.LIVE_URL}/artists/Tommy Gunz_q6h9wsn1`,
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

  const [listingItems, setListingItems] = useState([
    {
      title: "Rose",
      content:
        "Die Rose ist ein zeitloses Tattoo-Motiv, das Liebe und Leidenschaft symbolisiert. Unterschiedliche Farben können verschiedene Bedeutungen haben, wie rote Rosen für Liebe und Leidenschaft, weiße Rosen für Reinheit und Unschulds",
    },
    {
      title: "Anker",
      content:
        "Der Anker steht oft für Stabilität und Sicherheit. Es ist ein beliebtes Motiv, das oft von Menschen gewählt wird, die eine tiefe Verbindung zum Meer oder maritimen Lebensstil haben.",
    },

    {
      title: "Schwalbe",
      content:
        "Die Schwalbe ist ein traditionelles Motiv, das für Freiheit und Wohlstand steht. In der Seefahrt symbolisiert die Schwalbe oft die Rückkehr nach Hause, was sie zu einem Symbol der Hoffnung macht.",
    },
    {
      title: "Schlüssel und Schloss",
      content:
        "Dieses Motiv symbolisiert oft Geheimnisse, Liebe und das Finden von Lösungen. Ein offenes Schloss kann Freiheit und Entdeckung darstellen.",
    },

    {
      title: "Pfeil und Bogen",
      content:
        "Pfeil und Bogen stehen für Fokus, Zielstrebigkeit und Fortschritt. Ein Pfeil muss zurückgezogen werden, bevor er vorwärts schießen kann, was oft mit persönlichem Wachstum verbunden wird.",
    },

    {
      title: "Lotusblume",
      content:
        "Die Lotusblume symbolisiert oft Reinheit und Erneuerung. Sie wächst aus schlammigem Wasser heraus, was ihre Fähigkeit repräsentiert, Schönheit aus Schwierigkeiten zu gewinnen.",
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
        datas={Schmetterlings}
        keyword={"butterfly"}
      />

      <CarouselSection
        title="Mini Tattoos"
        content="Für diejenigen, die eine zarte Note bevorzugen, sind Mini Tattoos eine wunderbare Wahl. Entdecke winzige Kunstwerke, die trotz ihrer Größe starke Bedeutungen tragen. Mini Tattoos sind perfekt für subtile Statements und können genauso kraftvoll sein wie größere Designs.
          Egal ob ein winziges Tiermotiv, ein Symbol oder ein Wort – Mini Tattoos bieten Raum für kreative Individualität. In unserer Mini Tattoo Galerie findest du eine vielfältige Auswahl an inspirierenden Designs. Lass dich sich von den feinen Details und der kunstvollen Umsetzung dieser kleinen Kunstwerke inspirieren. Denn manchmal sagt ein Mini Tattoo mehr als tausend Worte.
          "
        buttonName="Mehr mini Tattoos"
        datas={miniTattoo}
        keyword={"mini"}
      />

      <CarouselSection
        title="Finger Tattoos"
        content="Beginnen wir mit den zarten und eleganten Finger Tattoos. Unsere umfangreiche Galerie präsentiert eine Vielzahl von Finger Tattoo Ideen, von minimalistisch bis hin zu detailverliebt. Ein filigranes Herz am Finger oder ein dezentes Blumenmotiv – lass dich von diesen zarten Kreationen inspirieren. Finger Tattoos sind nicht nur ästhetisch, sondern bieten auch eine diskrete Möglichkeit, deine Persönlichkeit zu zeigen.
          "
        buttonName="Mehr finger Tattoos"
        datas={fingerTattos}
        keyword={"finger"}
      />

      <CarouselSection
        title="Herz Tattoos:"
        content=" Unsere Sammlung erstreckt sich über eine Vielzahl von Tattoo-Motiven, darunter nicht nur Finger Tattoos, Schmetterlings Tattoos und Mini Tattoos, sondern auch eine exquisite Auswahl an Herz-Tattoos. Ob dunach romantischen Herz-Tattoos oder einzigartigen Motiven suchen – bei uns findest du die Inspiration, die du benötigen. Ein Herz-Tattoo kann Liebe und Leidenschaft auf kunstvolle Weise verkörpern.
          Lass dich von unseren Herz-Tattoo Ideen inspirieren und entdecke sie, wie ein scheinbar kleines Symbol starke Gefühle und tiefe Emotionen ausdrücken kann. Die Vielfalt unserer Herz-Tattoos bietet dir kreative Möglichkeiten, deine Liebe oder deine persönlichen Erfahrungen auf einzigartige Weise zu symbolisieren.
          "
        buttonName="Mehr Herz Tattoos"
        datas={herzTattos}
        keyword={"Herz"}
      />

      <div className="mb_30">

        <FullWidthBlock
          img="/studio.svg"
          alt="studio"
          title={"Andere Tattoo Motive"}
          content="Vielleicht interessiert du dich für Tattoo-Motive mit spirituellen oder kulturellen Bezügen. Unsere Kollektion umfasst Mandalas, Symbole und Schriftzüge in verschiedenen Sprachen, die tiefe persönliche Bedeutungen tragen können. Jedes Tattoo Motiv erzählt eine Geschichte, und wir bieten dir die breite Auswahl, um deine Persönlichkeit und Erfahrungen kreativ auszudrücken. Hier ein paar tattoo ideen für dich"
          bgColor="#f8f8f8"
        />
      </div>




      <ListingGridTwoColumn data={listingItems} bgColor="#eaffc0" />

      <div className='mt_25'>

      <CarouselSection
        title="Löwen Tattoo Ideen"
        content=" Ein beeindruckendes Löwen-Tattoo symbolisiert Stärke und Selbstbewusstsein. Löwen stehen für Mut und königliche Macht. Unsere Kollektion bietet eine Vielfalt von realistischen bis abstrakten Löwenbildern.
          Die Mähne des Löwen kann detailliert gestaltet werden, um eine starke Wirkung zu erzielen. Ein Löwen-Tattoo ist nicht nur schön anzusehen, sondern hat auch eine tiefe symbolische Bedeutung. Entdeckd die faszinierende Welt der Löwen Tattoos und lass dich von ihrer starken Ausstrahlung inspirieren. Wir bieten eine große Auswahl an subtilen und beeindruckenden Darstellungen, um deine persönliche Stärke zu betonen.
          "
        buttonName="Mehr Löwen Tattoos"
        datas={löwenTattoo}
        keyword={"Löwen"}
      />
</div>
      <CarouselSection
        title="Drachen Tattoo Ideen"
        content="Drachen Tattoos sind faszinierende Kunstwerke, die Macht und Mystik verkörpern. Von Glücks-Drachen bis zu Abenteuer-Drachen - Drachen Tattoos sind vielfältig und beeindruckend in ihrer Symbolik. Ein Drachen Tattoo kann mit lebendigen Farben und detailreichen Designs gestaltet werden, um eine atemberaubende Wirkung zu erzielen. Lass dich von der mythologischen Welt der Drachen zu einer einzigartigen Tätowierung inspirieren.
          "
        buttonName={"Entdecke mehr Drachen Tattoos"}
        datas={dragonTattoo}
        keyword={"dragon"}
        bottomButton="Erfahre mehr über Drachen Tattoos hier"
      />

      <div
        className="d_flex justify_content_center pb_35  m_mt_0 m_justify_content_left pl_15    pr_15 
 "
      >
        <Link
          href={"#"}
          className="btn_primary btn_img btn_xxl m_btn_custom_48  
           "
        >
          Erfahre mehr über Drachen Tattoos hier
          <Image
            src="/arow-white-right.svg"
            width={24}
            height={24}
            alt="logo"
            loading="lazy"
            placeholder="blur"
            blurDataURL={blurDataURL}
            className="ml-8 mt-2"
          />
        </Link>
        {/* </div> */}
      </div>

      <FullWidthBlock
        title={"Deine Tattoo Träume Wirklichkeit werden lassen:"}
        content={
          "Bei uns geht es darum, deine Tattoo Träume Wirklichkeit werden zu lassen. Entdecke die tolle Tattoo Ideen für deinen Stil. Mini Tattoos, Finger Tattoos, Schmetterlings Tattoos, Löwen Tattoos, Drachen Tattoos und mehr setzen dein individuelles Statement. Tauchen ein in die Welt der Tätowierung Kunst und lass dich von unserer Expertise begleiten."
        }
        sectionBackgrounColor={"#eaffc0"}
      />

      <ThreeColumCarousel
        title=" "
        title_sub=""
        content="Wir möchten ein einzigartiges Kunstwerk für dich schaffen, das deine Persönlichkeit und Geschichte authentisch repräsentiert. Unsere erfahrenen Künstler sind hier, um deine individuelle Vision Wirklichkeit werden zu lassen."
        button="Entdecke mehr Tätowierer"
        trendingArtist={trendingArtist}
      />

      <OrangeTwoRowBlock
        mainTitle=""
        img1="/LinkRound.svg"
        title1="Erfahre mehr über die Tattoo-Motive"
        content1={
          <>
            Wir freuen uns darauf, dich bei jedem Schritt deiner Tattoo-Reise zu
            begleiten. Wir helfen dir von Ideen bis zur Umsetzung, ein Tattoo zu
            bekommen. Das Tattoo soll nicht nur schön aussehen, sondern auch
            eine Bedeutung für dich haben. Erfahre mehr über die Tattoo-Motive
            in unserem{" "}
            <Link href={`/${router.locale}/tattoo-dictionary`}>
              Tattoo Lexikon
            </Link>
          </>
        }
        link="Tattoo Lexikon"
        img2="/Album.svg"
        title2="Erforsche unsere umfangreiche Sammlung von Tattoo Ideen
          "
        content2="Erforsche unsere umfangreiche Sammlung von Tattoo Ideen, lasse dich inspirieren und schaffe gemeinsam mit uns dein persönliches Meisterwerk. Jedes Tattoo erzählt eine besondere Geschichte. Wir sorgen dafür, dass deine Geschichte künstlerisch und individuell in deinem Tattoo dargestellt wird."
        bgColor="#FFD5C0"
      />

      <DownloadApps title="Download the" subTitle="App & Explore more!" />
    </div>
  );
}
