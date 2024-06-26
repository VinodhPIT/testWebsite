import React from "react";
import Head from "next/head";

import { useNavigation } from "@/hooks/useRouter";

import Banner from "@/landing-1/Banner/Banner";
import OrangeTwoRowBlock from "@/landing-1/orangeTwoRowBlock/orangeTwoRowBlock";
import DownloadApps from "@/landing-3/DownloadApps/DownloadApps";
import LeftContentRightImage from "@/landing-1/LeftContentRightImage/LeftContentRightImage";
import FullWidthSecwithIcon from "@/landing-2/FullWidthSecwithIcon/FullWidthSecwithIcon";
import FiveColumnCarousel from "@/landing-1/FiveColumnCarousel/fiveColumnCarousel";

export default function TattooIdeasForMen() {
  const { router } = useNavigation();
  

  const  trendingArtist = [
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/546_A44FBBCA-2408-4072-B365-68679E3AECFB.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/21450_20230309172955410-medium.jpg",
      name: "Vivi B Tattoo",

      city: "London",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/${router.locale}/artists/vivibtattoo_nqk6umse`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/3957_20230215132800618_bbf0eaa6-bedf-41fb-a793-a5e1939aa222.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/19325_20230215132631090-medium.jpg",
      name: "Divine Macabre",

      city: "Richmond",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/${router.locale}/artists/divinemacabre_jzrz10ex`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/4829_inckd/image/20231122023031194_564F9D45-BDB6-46A1-B3B9-A1C11363F44D.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/22937_20230329165014393-medium.jpg",
      name: "Marco_tatz",

      city: "Hove",
      country: "United Kingdom",

      url: `${process.env.LIVE_URL}/${router.locale}/artists/Marco_tatz_lqtedjrr`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/8168_20231101192828945_8C820437-F686-4025-A95F-A09304D77963.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/28289_20231101193907439-medium.jpg",
      name: "Stephen Noir",

      city: "Daventry",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/${router.locale}/artists/stephennoir_tykruorz`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/940_0CEA2732-FD2F-499C-A897-81833EDDB447.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/3771_20220927130845510-medium.jpg",
      name: "Smania.nera",

      city: "London",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/${router.locale}/artists/smania.nera_e2wwxujb`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/1742_3857121F-A33D-420C-A197-5D9EC3D02905.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8655_20221110125829007-medium.jpg",
      name: "Luciatattoos",

      city: "London",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/${router.locale}/artists/luciatattoos_n98rnvgl`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/1947_02F8189E-5AD8-4922-9A1A-85845DD9E3A7.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/9164_20221116191748594-medium.jpg",
      name: "Megan Rae",

      city: "Carlisle",
      country: "United Kingdom",

      url: `${process.env.LIVE_URL}/${router.locale}/artists/meganrae_4dszyy98`,
    },
  ];

  return (
    <>
      <Head>
        <title>Find the Finest Tattoo Shops Near Me for Exceptional Ink</title>
        <meta
          name="description"
          content="Discover the perfect tattoo shop with our app. From body piercings to intricate designs, find skilled artists near you. Transform your vision into timeless art."
        />
        <meta
          name="keywords"
          content="tattoo shops, tattoo artists, body piercings, intricate designs, best tattoo app, exceptional ink, unique tattoo styles, personalized consultations"
        />

        <meta
          property="og:title"
          content="Exploring Tattoo Ideas for Men: From Concept to Canvas | Inckd"
        />
        <meta
          property="og:description"
          content="Discover the perfect tattoo ideas for men at Inckd. Express yourself with small tattoos, tribal designs, cross tattoos, and more. Explore diverse tattoo styles and find inspiration for 2023."
        />
        <meta
          property="og:title"
          content="Find the Finest Tattoo Shops Near Me for Exceptional Ink"
        />
        <meta
          property="og:description"
          content="Discover the perfect tattoo shop with our app. From body piercings to intricate designs, find skilled artists near you. Transform your vision into timeless art."
        />
        <meta
          property="og:image"
          content={`${process.env.LIVE_URL}/tattooShop.jpg`}

        />
        <meta property="og:url"  content={`${process.env.LIVE_URL}/${router.locale}/find-the-best-tattooShops-near-me`} />

        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Find the Finest Tattoo Shops Near Me for Exceptional Ink"
        />
        <meta
          name="twitter:description"
          content="Discover the perfect tattoo shop with our app. From body piercings to intricate designs, find skilled artists near you. Transform your vision into timeless art."
        />

        <meta
          name="twitter:image"
          content={`${process.env.LIVE_URL}/tattooShop.jpg`}
        />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <meta name="twitter:creator" content="@YourTwitterHandle" />

        


        
      </Head>

      <div>
        <Banner
          bannerTitle="Find the Finest Tattoo Shops Near Me for Exceptional Ink"
          subTitlte=""
          alt="Find the Finest Tattoo Shops Near Me for Exceptional Ink"
          bannerImg={"/tattooShop.jpg"}
          bannerButton={"Know more about inckd"}
        />

        <FullWidthSecwithIcon
          img="/studio.svg"
          alt="studio"
          title={"Find the Finest Tattoo Shops Near Me"}
          content="Are you searching for the perfect tattoo shop to bring your vision to life? Find the best tattoo artists and shops near you with our app. It guarantees a smooth process from consultation to the final tattoo.

          "
          bgColor="#f8f8f8"
        />

        <FiveColumnCarousel
          title="Why Choose Our"
          title_sub="Tattoo Booking App?"
          content="No more hassles with long waiting times or phone calls. Use our easy app to book your tattoo appointment instantly, ensuring you get the artist and time you want. Our listed tattoo shops and artists offer a diverse range of services, from body piercings to intricate tattoo designs. You can find artists who specialize in various tattoo styles, ensuring your unique preferences are met.
          "
          button="Explore more artists"
          trendingArtist={trendingArtist}
          btnLink={`/${router.locale}/explore/tattoo-artists?location=UnitedKingdom`}
        />

        <LeftContentRightImage
          title="Exploring Diverse Tattoo Styles"
          subTitle=""
          content1="Discover peace of mind as you explore our network of tattoo artists and shops. Within our community, you'll find skilled and experienced individuals who are dedicated to their craft. Your journey begins with our team of artists, each poised to collaborate with you in crafting a custom design that mirrors your unique style and vision."
          content2="Our commitment is to provide you with tattoos of the highest quality and timeless appeal. Booking an appointment is a seamless process that opens the door to personalized consultations with your chosen tattoo artist. Our staff is friendly and ready to assist you in transforming your idea into reality. They can help you whether your idea is well-defined or still a bit unclear.
          "
          img="/inckdedArtists.jpg"
          
          
          carousel={""}
          imgWidth="570"
          imgHeight="700"
          altTag="Exploring Diverse Tattoo Styles"
        />

        <OrangeTwoRowBlock
          mainTitle=""
          img1="/LinkRound.svg"
          title1="Booking with Confidence:"
          content1="When it comes to finding the best tattoo artist and tattoo shop, trust our app to guide you. We studied top competitors to find the best match for you."
          img2="/Album.svg"
          title2="Enhance Your Tattoo Journey:"
          content2="Your tattoo journey is a unique expression of yourself, and we're here to make it exceptional. Our app connects you with tattoo artists and shops that value your individuality, regardless of tattoo size."
          bgColor="#FFD5C0"
imgAlt1='Booking with Confidence'
imgAlt2="Enhance Your Tattoo Journey"



        />

<DownloadApps
        
        title="Download the"
        subTitle="App & Explore more!"
        
        
        
        
        
        />
      </div>
    </>
  );
}
