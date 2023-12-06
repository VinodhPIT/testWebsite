import React, { useState } from "react";
import Head from "next/head";

import Banner from "@/landingComponents/banner/banner";

import TwocolumnSection from "@/landingComponents/TwoColumSection/twoColumnSection";
import FullWidthBlock from "@/landingComponents/fullwidthBlock/fullwidthBlock";
import TrendingArtist from "@/landingComponents-2/trendingArtist/trendingArtist";
import TrendinginckdArtist from "@/landingComponents/trendinginckdArtist/trendinginckdArtist";
import TattooExperience from "@/landingComponents/tattooExperience/tattooExperience";

export default function TattooIdeasForMen() {
  const currentPage = typeof window !== "undefined" ? window.location.href : "";

  const [trendingArtist, setTendingArtist] = useState([
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/546_A44FBBCA-2408-4072-B365-68679E3AECFB.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/21450_20230309172955410-medium.jpg",
      name: "Vivi B Tattoo",
      location: "London, United Kingdom",
      url: `${process.env.LIVE_URL}/artists/vivibtattoo_nqk6umse`,
     


    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/3957_20230215132800618_bbf0eaa6-bedf-41fb-a793-a5e1939aa222.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/19325_20230215132631090-medium.jpg",
      name: "Divine Macabre",
      location: "Richmond, United Kingdom",
      url: `${process.env.LIVE_URL}/artists/divinemacabre_jzrz10ex`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/4829_inckd/image/20231122023031194_564F9D45-BDB6-46A1-B3B9-A1C11363F44D.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/22937_20230329165014393-medium.jpg",
      name: "Marco_tatz",
      location: "Hove, United Kingdom",
      url: `${process.env.LIVE_URL}/artists/Marco_tatz_lqtedjrr`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/8168_20231101192828945_8C820437-F686-4025-A95F-A09304D77963.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/28289_20231101193907439-medium.jpg",
      name: "Stephen Noir",
      location: "Daventry, United Kingdom",
      url: `${process.env.LIVE_URL}/artists/stephennoir_tykruorz`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/940_0CEA2732-FD2F-499C-A897-81833EDDB447.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/3771_20220927130845510-medium.jpg",
      name: "Smania.nera",
      location: "London, United Kingdom",
      url: `${process.env.LIVE_URL}/artists/smania.nera_e2wwxujb`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/1742_3857121F-A33D-420C-A197-5D9EC3D02905.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8655_20221110125829007-medium.jpg",
      name: "Luciatattoos",
      location: "London, United Kingdom",
      url: `${process.env.LIVE_URL}/artists/luciatattoos_n98rnvgl`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/1947_02F8189E-5AD8-4922-9A1A-85845DD9E3A7.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/9164_20221116191748594-medium.jpg",
      name: "Megan Rae",
      location: "Carlisle, United Kingdom",
      url: `${process.env.LIVE_URL}/artists/meganrae_4dszyy98`,
    },
  ]);

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
          content="/young-beautiful-couple-posing-old-building-1.jpg"
        />
        <meta property="og:url" content={currentPage} />
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
          content="[URL to an image relevant to the content]"
        />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <meta name="twitter:creator" content="@YourTwitterHandle" />
      </Head>

      <div>
        <Banner
          bannerTitle="Find the Finest Tattoo Shops Near Me for Exceptional Ink"
          subTitlte="Are you searching for the perfect tattoo shop to bring your vision to life? Find the best tattoo artists and shops near you with our app. It guarantees a smooth process from consultation to the final tattoo.
        "
          alt="Exploring Tattoo Ideas for Men"
          bannerImg={"/young-beautiful-couple-posing-old-building-1.jpg"}
          bannerButton={"Know more about inckd"}
        />

        <TrendinginckdArtist
          title="Why Choose Our"
          title_sub="Tattoo Booking App?"
          content="No more hassles with long waiting times or phone calls. Use our easy app to book your tattoo appointment instantly, ensuring you get the artist and time you want. Our listed tattoo shops and artists offer a diverse range of services, from body piercings to intricate tattoo designs. You can find artists who specialize in various tattoo styles, ensuring your unique preferences are met.
          "
          button="Explore more"
          trendingArtist={trendingArtist}
        />

        <div className="mb_25">
          <TattooExperience
            mainTitle=""
            title1="Discover peace of mind"
            content1="As you explore our network of tattoo artists and shops. Within our community, you'll find skilled and experienced individuals who are dedicated to their craft. Your journey begins with our team of artists, each poised to collaborate with you in crafting a custom design that mirrors your unique style and vision.Our commitment is to provide you with tattoos of the highest quality and timeless appeal. Booking an appointment is a seamless process that opens the door to personalized consultations with your chosen tattoo artist. Our staff is friendly and ready to assist you in transforming your idea into reality. They can help you whether your idea is well-defined or still a bit unclear.


        "
            title2=""
            content2="
        
        "
            title3="Booking with Confidence:
"
            content3=" When it comes to finding the best tattoo artist and tattoo shop, trust our app to guide you. We studied top competitors to find the best match for you.

        "
            title4="Enhance Your Tattoo Journey:
          "
            content4="Your tattoo journey is a unique expression of yourself, and we're here to make it exceptional. Our app connects you with tattoo artists and shops that value your individuality, regardless of tattoo size.
          Embark on your tattoo journey with confidence. Our app empowers you to discover top-rated tattoo shops, ensuring your experience is as brilliant as your ink. Book your appointment today and celebrate your unique style with the perfect tattoo artist for you.
          .
        "
          />
        </div>
      </div>
    </>
  );
}
