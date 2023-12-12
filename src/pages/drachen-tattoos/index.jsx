import React ,{useState} from "react";
import Banner from "@/landing-3/Banner/Banner";
import ContentImageLayout from "@/landing-3/ContentImageLayout/ContentImageLayout";
import SquareBoxTattooSlider from "@/landing-3/SquareBoxTattooSlider/SquareBoxTattooSlider";
import DragonTattoo from "@/landing-3/dragonTattoo/dragonTattoo";
import TattooDragonSlider from "@/landing-3/TattooDragonSlider/TattooDragonSlider";
import LeftContentWithBackgroundImage from "@/landing-3/LeftContentWithBackgroundImage/LeftContentWithBackgroundImage";
import TattooSlider from "@/landing-3/TattooSlider/TattooSlider";
import VerticalImageLayout from "@/landing-3/VerticalImageLayout/VerticalImageLayout";
import DownloadApps from "@/landing-3/DownloadApps/DownloadApps";
import Head from "next/head";
import SplitText from "@/landing-3/SplitText&Image/SplitText";
import FullWidthSecwithIcon from "@/landing-2/FullWidthSecwithIcon/FullWidthSecwithIcon";
import { useRouter } from 'next/router'

import ThreeColumCarousel from "@/landing-1/ThreeColumCarousel/ThreeColumnCarousel";
import FullWidthBlock from "@/landing-1/FullwidthBlock/FullwidthBlock";



export default function DrachenTattoos() {
  const images = [
    { image: "/Drachen-tattoo-Idee.jpg" },
    { image: "/dragonslider2.png" },
    { image: "/dragonslider3.png" },
   
    
  ];
  const router = useRouter()



  const  tattooDesigns = [
    { image: "/benet-1.png" },
    { image: "/benet-2.png" },
    { image: "/benet-3.png" }
    ];


    const Discoverdiversity  = [
      {
        artistImage:
          "https://storage.googleapis.com/hllincd-bucket/cache/96/f0/96f0e474c600b072dd779a8eac62b4f1.jpg",
        image:
          "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/7779_20221101204102259-medium.jpg",
        name: "Benet ar",
  
        city: "Birmingham",
        country: "United Kingdom",
        url: `${process.env.LIVE_URL}/tattoo/b121f441-0033-4295-baf4-f83b77fffce5`,
      },

      {
        artistImage:
          "https://storage.googleapis.com/hllincd-bucket/cache/ab/7f/ab7ffbd004bcb376f5857f456b662240.jpg",
        image:
          "/benet-2.png",
        name: "Imanol Lara",
  
        city: "Barcelona" , 
        country: "Spain",
        url: `${process.env.LIVE_URL}/tattoo/b4d0825e-f1dc-4721-8e21-fd4d18079ad1`,
      },


      {
        artistImage:
          "https://storage.googleapis.com/hllincd-bucket/cache/7a/99/7a990641320df3ee81fa6cfad9ee9757.jpg",
        image:
          "https://storage.googleapis.com/hllincd-bucket/cache/f5/bd/f5bde5da33e387a99f95baa91e01ff61.jpg",
        name: "Raphael Stanley",
  
        city: "Zürich",
        
        country: "Switzerland",
        url: `${process.env.LIVE_URL}/tattoo/f775f716-4f76-4335-a41a-0ec2b5b9596a`,
      },




    ]









  const artistData = [
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/2612_A384C201-0E3F-47A1-BC3E-D53C8F0730B2.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/None_5F7922D5-EFD8-4BD9-988A-1B71AEF2BA33.jpg",
      name: "Jack Quadri",

      city: "Bologna",
      country: "Germany",
      url: `${process.env.LIVE_URL}/artists/jackquadri_lz7r97vb`
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/2612_A384C201-0E3F-47A1-BC3E-D53C8F0730B2.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/None_5F7922D5-EFD8-4BD9-988A-1B71AEF2BA33.jpg",
      name: "Jack Quadri",

      city: "Bologna",
      country: "Germany",
      url: `${process.env.LIVE_URL}/artists/jackquadri_lz7r97vb`
    },
  
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/2612_A384C201-0E3F-47A1-BC3E-D53C8F0730B2.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/None_5F7922D5-EFD8-4BD9-988A-1B71AEF2BA33.jpg",
      name: "Jack Quadri",

      city: "Bologna",
      country: "Germany",
      url: `${process.env.LIVE_URL}/artists/jackquadri_lz7r97vb`
    },
  
  
  
  ]




  const [trendingArtist, setTendingArtist] = useState([
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/2612_A384C201-0E3F-47A1-BC3E-D53C8F0730B2.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/17320_20230203091843781-medium.jpg",
      name: "Jack Quadri",
      city: "Berlin",
      country: "Germany",

      url: `${process.env.LIVE_URL}/artists/jackquadri_lz7r97vb`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/128_7B76116E-6834-4094-9112-57AD2448E61A.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/cache/c9/2c/c92c9f211c96cf534a5e76b2dcf24b8e.jpg",
      name: "Pablo Ferrukt",
      city: "Berlin",
      country: "Germany",
      url: `${process.env.LIVE_URL}/artists/pablo-ferrukt_znfil6iu`,
    },


    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/169_8D3FF033-04D9-4693-92F6-BDF7476CD193.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/1781_20220816112640791-medium.jpg",
      name: "Roots-n-wings",
      city: "Berlin",
      country: "Germany",
      url: `${process.env.LIVE_URL}/artists/roots-n-wings_m5uw8u0h`,
    },



    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/2612_A384C201-0E3F-47A1-BC3E-D53C8F0730B2.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/17320_20230203091843781-medium.jpg",
      name: "Jack Quadri",
      city: "Berlin",
      country: "Germany",

      url: `${process.env.LIVE_URL}/artists/jackquadri_lz7r97vb`,
    },




  ]);




    





  return (
    <>
      <Head>
        <title>
          Entdecke die faszinierende Welt der Drachen Tattoos - Bedeutung,
          Designs und Vorlagen
        </title>

        <meta
          name="description"
          content="Erfahre alles über die Symbolik, Bedeutung und Vielfalt von Drachen-Tattoos. Entdecke inspirierende Designs, Vorlagen und Künstler in deiner Nähe. Lade unsere App herunter und starte deine einzigartige Reise zu einem Drachen-Tattoo."
        />

        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Drachen Tattoos - Mystische Kunst für deine Haut"
        />
        <meta
          property="og:description"
          content="Entdecke die Symbolik, Bedeutung und Vielfalt von Drachen Tattoos. Finde inspirierende Designs, Vorlagen und Künstler in deiner Nähe. Lade unsere App herunter und starte deine Reise zu einem einzigartigen Drachen-Tattoo."
        />
        <meta property="og:image" content="URL_TO_IMAGE" />
        <meta
          property="og:url"
          content="https://www.inckd.com/tattoo/b121f441-0033-4295-baf4-f83b77fffce5"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Drachen Tattoos - Mystische Kunst für deine Haut"
        />
        <meta
          name="twitter:description"
          content="Entdecke die Symbolik, Bedeutung und Vielfalt von Drachen Tattoos. Finde inspirierende Designs, Vorlagen und Künstler in deiner Nähe. Lade unsere App herunter und starte deine Reise zu einem einzigartigen Drachen-Tattoo."
        />
        <meta name="twitter:image" content="URL_TO_IMAGE" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Drachen Tattoos, Drachen-Tattoo, Tattoo Kunst, Tattoo Symbole, Drachen Symbolik, Tattoo Bedeutung, Tattoo Designs, Tattoo Vorlagen, Drachen Motive, Drachen-Tattoo Vielfalt, Körperkunst, Mystische Tattoos, Tattoo App, Tattoo Künstler, Drachen-Tattoo Tradition, Drachen Symbol, Asiatische Drachen, Europäische Drachen, Drachen-Tattoo Bedeutung, Tattoo Reise, Tattoo Studio, Tattoo Inspirationsseite, Tattoo Portfolio, Tattoo Bewertungen, Tattoo Community, Tattoo Pflege, Tattoo Trends, Tattoo Tipps"
        />
        <meta name="author" content="Your Name" />


        
      </Head>

      <Banner
        bannerTitle={"Drachen Tattoos - Mystische Kunst für deine Haut"}
        bannerImg={"/Drachen-banner.jpg"}
        bannerButton={"Know more about inckd"}
        position={"center top"}
      />



<FullWidthSecwithIcon
        img="/studio.svg"
        alt="studio"
        title={""}
        content="Willkommen bei unserer Drachen-Tattoo-Informationsseite, deinem ultimativen Guide zu einer kraftvollen Form der Körperkunst. Drachen-Tattoos sind mehr als nur Designs; sie sind Symbole für Stärke, Macht und Mystik.
        "
        bgColor="#f9fbfa"
      />





      <ContentImageLayout
        title={"Die Symbolik von Drachen Tattoos"}
        content="Drachen haben in vielen Kulturen eine reiche Symbolik. Asiatische Drachen bedeuten Glück und Weisheit, während westliche Drachen für Stärke und Abenteuer stehen. Jedes Drachen-Tattoo erzählt eine einzigartige Geschichte. Die mystische Aura, die Drachen umgibt, macht sie zu beliebten Motiven für Tätowierungen weltweit."
        img="/Drachen-Tattoo-Idee-1.png"
        alt="Die Symbolik von Drachen Tattoos"
         bgColor="#fff"

      />

      <SquareBoxTattooSlider
        mainTitle={"Entdecke Vielfalt in Drachen Tattoo-Designs"}
        content2={
          "Die Vielfalt der Drachen-Tattoo-Designs ist ebenso faszinierend wie die Geschichte, die sie erzählen. Von realistischen Darstellungen bis zu künstlerischen Interpretationen bieten Drachen Tattoos eine breite Palette kreativer Möglichkeiten. In unserer Galerie findest du Inspiration für dein eigenes, einzigartiges Tattoo."
        }
        data={Discoverdiversity}

        bgColor={'#f9fbfa'}

      

        btnLink={`${process.env.NEXT_PUBLIC_BASE_URL}/${router.locale}/explore/tattoos?keyword=dragon`}

      />

      <SplitText
        title="Die Kunst der Drachen Tätowierung"
        content="Das Tätowieren eines Drachens erfordert Geschick und Verständnis für die Symbolik. Unsere erfahrenen Künstler können dir helfen, ein ästhetisches Drachen-Tattoo zu gestalten, das deine persönliche Geschichte zeigt."
      />

      <DragonTattoo
        title1="Die Kunst der Drachen Tätowierung"
        content1="Das Tätowieren eines Drachens erfordert Geschick und Verständnis für die Symbolik. Unsere erfahrenen Künstler können dir helfen, ein ästhetisches Drachen-Tattoo zu gestalten, das deine persönliche Geschichte zeigt."
        title2="Inspirierende Drachen Tattoo Designs"
        content2="Bereite dich darauf vor, in die Welt der inspirierenden Tattoo Designs einzutauchen. Von traditionellen Drachen bis zu modernen Interpretationen bieten wir einen Einblick in die künstlerische Vielfalt dieses fesselnden Motivs.
        "
        title3="Drachen Tattoo Bedeutung"
        content3="Die Bedeutung eines Drachen-Tattoos reicht weit über die Oberfläche hinaus. Es symbolisiert nicht nur Stärke und Macht, sondern kann auch für Schutz, Weisheit oder persönliche Transformation stehen. Erforsche die Bedeutung von Drachen-Tattoos und finde heraus, welcher Teil deiner Geschichte passt.
        "
        image="/drachen-tattoo-idee-3.png"

        imageWidth="440"

        imageHeight="440"

      />

      <TattooDragonSlider
        title="Drachen Tattoo Vorlagen"
        content="Bist du auf der Suche nach dem idealen Design für dein Tattoo? Entdecke viele Tattoo-Ideen, um Ihren Tätowierer zu inspirieren und bei der Gestaltung zu helfen."
        data={images}
      />



      <LeftContentWithBackgroundImage
        title1="Warum ein Drachen-Tattoo?"
        content1="Ein Drachen-Tattoo auf deiner Haut zu tragen, bedeutet mehr als nur Körperkunst. Es ist eine kraftvolle Entscheidung, die deine Persönlichkeit und deine Lebensreise reflektiert. Dieses Tattoo kann eine Erinnerung an Überwindung, Schutz oder einfach an die Faszination für das Mystische sein."
        title2="Die Vielfalt der Drachen Tattoo-Kunst"
        content2="Die Welt der Drachen-Tattoos bietet eine beeindruckende Vielfalt an Stilen und Techniken. Von detaillierten asiatischen Drachen bis zu modernen Darstellungen gibt es viele Möglichkeiten, Drachen-Tattoos zu erkunden."
        title3="Einzigartige Drachen Tattoo-Motive"
        content3="Jedes Drachen-Tattoo ist ein Unikat, gestaltet nach den Vorstellungen des Trägers und der Kreativität des Künstlers. Die einzigartigen Motive reichen von majestätisch fliegenden Drachen bis zu mythologischen Darstellungen, jede erzählt ihre eigene Geschichte."
        title4="Drachen Tattoos als Lebensweg"
        content4="Ein Drachen-Tattoo kann mehr sein als nur ein Kunstwerk auf der Haut. Viele Menschen wählen Drachen-Tattoos als einen Weg, ihre persönlichen Reisen und Erfolge zu symbolisieren. Die kraftvollen Drachen können als Schutzgeister oder symbolische Begleiter dienen."
      />

 










 <ThreeColumCarousel 
 
 title="Der Prozess der Drachen Tätowierung"
 title_sub=""
 content="Das Drachen-Tattoo ist eine Reise in die Kunst und Selbstausdruck. Unsere Plattform verbindet dich mit erfahrenen Künstlern, die die Technik beherrschen und die Bedeutung der Drachen-Tattoos verstehen."
 button="Explore more artists"
 
 
 trendingArtist={trendingArtist}
 
 linkUrl={`/${router.locale}/explore/tattoo-artists?location=BerlinGermany`}/>






{/* 
<ThreeColumCarousel/> */}
















      <div className="pt_75 m_pt_25 ">
        <VerticalImageLayout
          maintitle=""
          title1="Die Tradition von Drachen Tattoos"
          content1={
            <>
              Drachen-Tattoos haben eine lange Tradition in verschiedenen
              Kulturen. Drachen Tattoos zeigen kulturelle Vielfalt: Chinesische
              Drachen bringen Glück, europäische Drachen schützen und bewachen.
            </>
          }
          title2="Ein Drachen Tattoo wählen"
          content2="Die Entscheidung für das richtige Tattoo kann eine persönliche Reise sein. Von der Wahl des Drachen-Typs bis zur Platzierung auf dem Körper - es gibt viele Überlegungen. Unsere Künstler begleiten dich, um zu gewährleisten, dass dein Tattoo deine Geschichte optimal darstellt."
          title3="Schritt um Schritt zu deinem Drachen Tattoo"
          content3="Lade unsere App herunter und starte deine Reise zu einem einzigartigen Drachen-Tattoo. Wir begleiten dich von der Künstlerauswahl bis zur Fertigstellung des Tattoos, Schritt für Schritt zu deiner persönlichen Körperkunst.
        "
          image1="/DrachenTattoo1.png"
          image2="/DrachenTattoo2.png"
          image3="/DrachenTattoo3.png"
          alt="DrachenTattoos"
          bgColor="#fff"
        />
      </div>
      <DownloadApps title="Download the" subTitle="App & Explore more!" />
    </>
  );
}
