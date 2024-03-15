import React, { useState } from "react";
import Head from "next/head";
import Banner from "@/landing-2/Banner/Banner";
import ListingGridThreeColumn from "@/landing-2/ListingGrid-ThreeColumn/ListingGridTwoColumn";
import { useRouter } from "next/router";
import UniquePartner from "@/landing-1/LeftContentRightImage/LeftContentRightImage";
import MediaContent from "@/landing-3/MediaContent/MediaContent";
import FullWidthBlock from "@/landing-1/FullwidthBlock/FullwidthBlock";
import FiveColumnCarousel from "@/landing-1/FiveColumnCarousel/fiveColumnCarousel";
import ContentImageLayout from "@/landing-3/ContentImageLayout/ContentImageLayout";
import DownloadApps from "@/landing-3/DownloadApps/DownloadApps";

export default function CoverUpTattoos() {
  const list1 = [
    {
      title: "Das Touch-up",
      content:
        "Frisches Stechen, um verblasste Farben wieder aufleben zu lassen.",
      img: "/shield-check-1.svg",
      alt: "icons",
    },
    {
      title: "Ausbessern",
      content: "Das Grundmotiv bleibt, aber neue Details werden hinzugefügt.",
      img: "/iPhone.svg",
      alt: "icons",
    },

    {
      title: "Integrieren",
      content:
        "Altes Motiv wird in ein neues integriert, ideal für sentimentale Erinnerungen.",
      img: "/shield-check-1.svg",
      alt: "icons",
    },

    {
      title: "Blast Over",
      content: "Neues Tattoo harmonisch über dem alten platzieren.",
      img: "/lock-password.svg",
      alt: "icons",
    },

    {
      title: "Überdecken",
      content: "Klassisches Cover Up mit einem komplett neuen Motiv.",
      img: "/shield-check-1.svg",
      alt: "icons",
    },

    {
      title: "Heavy Blackwork",
      content:
        "Extremer Ansatz, ungeliebte Kunstwerke mit Schwarz zu überdecken.",
      img: "/shield-check-1.svg",
      alt: "icons",
    },
  ];

  const list2 = [
    {
      title: "Farben und Hauptprozesse",
      content:
        "Beachte den Zeitfaktor und die Veränderung der Farben unter der Haut. Dunklere Farben eignen sich oft besser für ein langfristiges Cover Up.",
      img: "/shield-check-1.svg",
      alt: "icons",
    },
    {
      title: "Wann ist eine Laserbehandlung sinnvoll?",
      content:
        "Es ist manchmal am besten, ein altes Tattoo mit einem Laser zu entfernen. Dadurch entsteht Platz für ein neues Tattoo. Dieser Prozess erfordert Geduld und Vorbereitung.",
      img: "/iPhone.svg",
      alt: "icons",
    },

    {
      title: "Fazit",
      content:
        "Cover Up Tattoos sind eine optimale Lösung, um die Freude an deinem Tattoo wieder zu entfachen. Die Möglichkeiten sind vielfältig, aber eine gute Vorbereitung und Zeitplanung sind entscheidend. Am Ende zählt, dass das neue Tattoo deine Lebensqualität verbessert und dir gefällt.",
      img: "/shield-check-1.svg",
      alt: "icons",
    },
  ];

  const router = useRouter();

  const trendingArtist = [
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/2584_97206FDC-D3C8-4308-84A2-2CC25B7A1369.jpg",
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/2584_97206FDC-D3C8-4308-84A2-2CC25B7A1369.jpg",
      name: "ineskalina",
      city: "Fulda",
      country: "Germany",
      url: `${process.env.LIVE_URL}/${router.locale}/artists/ineskalina_dldiyy1c`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/10094_20221125191535372-medium.jpg",

      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/2147_B0F76368-8627-4B42-8A35-BCD14174DD5D.jpg",
      name: "youcannotstopme",
      city: "Berlin",
      country: "Germany",

      url: `${process.env.LIVE_URL}/${router.locale}/artists/youcannotstopme_ug882bl3`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/1272_9ED2EFEB-9051-4328-AD32-90E104AD4513.jpg",
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/1272_9ED2EFEB-9051-4328-AD32-90E104AD4513.jpg",

      name: "SashaFoteev",
      city: "Berlin",
      country: "Germany",

      url: `${process.env.LIVE_URL}/${router.locale}/artists/barbaranobody_e8w4uiq5`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/6331_20221023075813298-medium.jpg",

      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/1294_3EC6394E-CEA6-4263-B402-C13777DDD90C.jpg",

      name: "Herr Schneider",
      city: "Berlin",
      country: "Germany",

      url: `${process.env.LIVE_URL}/${router.locale}/artists/herrschneider_rzrp823z`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/20380_20230223232347378-medium.jpg",
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/4133_20230223231344373_FBE73D07-9404-4870-AB2A-BD4B4A99CA3F.jpg",

      name: "Filo Casablanca",

      city: "Reinbek",
      country: "Germany",

      url: `${process.env.LIVE_URL}/${router.locale}/artists/filocasablanca_rgq479cv`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/26287_20230822081513813-medium.jpg",
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/6267_20230822081007001_A9AA449E-F57F-4D37-A0E9-5B724EA5D3AD.jpg",

      name: "Sakrosankt",

      city: "Berlin",
      country: "Germany",

      url: `${process.env.LIVE_URL}/${router.locale}/artists/sakrosankt_max3x71q`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/28527_20231104211909957-medium.jpg",
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/8394_20231104205952747_12233EEE-2223-4841-B50D-FFDE9A7E32E8.jpg",
      name: "Tobias Schneider",

      city: "Berlin",
      country: "Germany",

      url: `${process.env.LIVE_URL}/${router.locale}/artists/tobias-schneider_0w8pudg1`,
    },
  ];

  return (
    <>
      <Head>
        <title>
          Cover Up Tattoos: Tipps, Methoden und Kreative Lösungen für Dein Neues
          Tattoo
        </title>
        <meta
          name="description"
          content="Erfahre, warum Cover Up Tattoos die ideale Lösung für veraltete Motive sind. Entdecke verschiedene Methoden, beachte wichtige Faktoren und finde die beste Lösung mit unseren erfahrenen Tätowierern."
        />
        <meta
          name="keywords"
          content="Cover Up Tattoos, Tattoo Überdeckung, Tätowierer, Tattoo-Entfernung, Tattoo-Rettung, Kreative Lösungen, Tattoo-Prozess"
        />

        <meta
          property="og:title"
          content="Cover Up Tattoos: Tipps, Methoden und Kreative Lösungen für Dein Neues Tattoo"
        />
        <meta
          property="og:description"
          content="Erfahre, warum Cover Up Tattoos die ideale Lösung für veraltete Motive sind. Entdecke verschiedene Methoden, beachte wichtige Faktoren und finde die beste Lösung mit unseren erfahrenen Tätowierern."
        />

        <meta
          property="og:url"
          content={`${process.env.LIVE_URL}/${router.locale}/cover-up-tattoos`}
        />

        <meta
          property="og:image"
          content={`${process.env.LIVE_URL}/coverUpTattooBanner.jpg`}
        />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cover Up Tattoos: Tipps, Methoden und Kreative Lösungen für Dein Neues Tattoo"
        />
        <meta
          name="twitter:description"
          content="Erfahre, warum Cover Up Tattoos die ideale Lösung für veraltete Motive sind. Entdecke verschiedene Methoden, beachte wichtige Faktoren und finde die beste Lösung mit unseren erfahrenen Tätowierern."
        />
        <meta
          name="twitter:image"
          content={`${process.env.LIVE_URL}/coverUpTattooBanner.jpg`}
        />
      </Head>

      <div>
        <Banner
          bannerTitle={"Cover Up Tattoo: Tipps, Methoden und Kreative Lösungen"}
          subTitlte=""
          bannerImg={"/coverUpTattooBanner.jpg"}
          bannerButton={"Know more about inckd"}
          position="center"
          altTag="Cover Up Tattoo"
        />

        <UniquePartner
          title="Tipps, Methoden und Kreative Lösungen
          "
          subTitle=""
          content1="Willkommen bei unserem umfassenden Guide zum Thema Cover Up Tattoos. Ein Tattoo, das nicht mehr deinen Vorstellungen entspricht, muss nicht dein Dorn im Auge bleiben. Hier erfährst du, welche Möglichkeiten es gibt, um ein altes Motiv zu überdecken und neu zu gestalten.
          "
          content2=""
          img="/coverUpTattoo1.png"
          alt="coverUpTattoo1"
          carousel={""}
          imgWidth="570"
          imgHeight="600"
          altTag="Tipps, Methoden und Kreative Lösungen"
        />

        <MediaContent
          title={"Was du beachten solltest"}
          description={
            "Die Größe, Stechtiefe und Farbe deines alten Tattoos beeinflussen das Cover Up erheblich. Vorbereitung ist entscheidend. Ein erfahrener Tätowierer sollte dein altes Tattoo sehen und über die besten Möglichkeiten für das Cover Up sprechen. Nimm dir genug Zeit, besonders bei größeren Rettungsaktionen."
          }
          bgColor="#fff"
          image="/coverUpTattoo3.png"
          altTag="Was du beachten solltest"
        />

        <ContentImageLayout
          title={"Warum cover up Tattoos?"}
          content="Es gibt viele Gründe für ein Cover Up Tattoo. Zum Beispiel, wenn du den Namen deines Ex-Partners entfernen möchtest. Oder wenn du einen Fehler aus deiner Jugend korrigieren willst. Oder wenn du dich von einem Party-Motiv trennen möchtest. Es gibt viele Möglichkeiten, ein Tattoo zu überdecken.
        "
          img="/coverUpTattoo3.png"
          alt="Warum cover up Tattoos"
          bgColor={"#f8f8f8"}
        />

        <ListingGridThreeColumn
          mainTitle="Verschiedene Methoden"
          data={list1}
          bgColor={"#fff4c0"}
        />

        <FullWidthBlock
          title={"Finde die Beste Lösung mit unseren Tätowierern"}
          content="Die Vielfalt der Cover-Up-Methoden kann überwältigend sein. Bei uns auf der Plattform stehen dir erfahrene Tätowierer zur Verfügung, die nicht nur über umfassendes Fachwissen verfügen, sondern auch deine individuellen Wünsche verstehen. Informiere dich bei einem unserer Tätowierer, um die beste Lösung für dein Cover Up zu finden. Von der Auswahl der Methoden bis zur Abstimmung auf deine Hautbeschaffenheit – wir begleiten dich auf dem Weg zu einem neuen, bedeutungsvollen Tattoo.
Unsere Tätowierer sind Experten auf ihrem Gebiet und können dir nicht nur mit fachkundigem Rat dienen, sondern auch sicherstellen, dass das Cover Up nicht nur ästhetisch ansprechend, sondern auch langfristig zufriedenstellend ist. Vertraue auf ihre Erfahrung und lass dich auf dem Weg zu einem gelungenen Cover Up von unseren Profis begleiten.
"
          sectionBackgrounColor="#F8F8F8"
        />

        <FiveColumnCarousel
          title=" Dein Cover-Up-Prozess"
          title_sub=" beginnt hier"
          content="Informiere dich jetzt bei einem unserer Tätowierer und starte die Reise zu einem erneuerten und beeindruckenden Tattoo
          "
          button="Entdecke mehr Tätowierer"
          trendingArtist={trendingArtist}
          btnLink={`/${router.locale}/explore/tattoo-artists?location=BerlinGermany`}
        />

        <ListingGridThreeColumn mainTitle="" data={list2} bgColor={"#fff4c0"} />

        <DownloadApps title="Download the" subTitle="App & Explore more!" />
      </div>
    </>
  );
}
