import React from "react";
import Head from "next/head";

import { useNavigation } from "@/hooks/useRouter";

import Banner from "@/landing-1/Banner/Banner";
import FullWidthSecwithIcon from "@/landing-2/FullWidthSecwithIcon/FullWidthSecwithIcon";
import DownloadApps from "@/landing-3/DownloadApps/DownloadApps";
import OrangeTwoRowBlock from "@/landing-1/orangeTwoRowBlock/orangeTwoRowBlock";
import SideBySideContentWithImage from "@/landing-1/SideBySideContentWithImage/SideBySideContentWithImage";
import FourColumnCarousel from "@/landing-1/FourColumCarousel/fourColumnCarousel";

export default function TattooIdeasForMen() {
 
  const { router } = useNavigation();

  const trendingArtist = [
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/2795_4657C062-5776-43D0-AC8F-43BBEE5B850E.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/13709_20230104191526329-medium.jpg",
      name: "Delphin Musquet",

      city: "London",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/${router.locale}/artists/delphin-musquet_ja14on47`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/1742_3857121F-A33D-420C-A197-5D9EC3D02905.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8672_20221110131034233-medium.jpg",
      name: "Luciatattoos",

      city: "Luciatattoos",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/${router.locale}/artists/luciatattoos_n98rnvgl`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/920_5CC75242-4928-4A0B-A72D-90E651FCA364.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/9439_20221118114953632-medium.jpg",
      name: "Alessandro Lanzafame",

      city: "London",
      country: "United Kingdom",

      url: `${process.env.LIVE_URL}/${router.locale}/artists/alessandro-lanzafame_nts3jh4k`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/566_175C2680-D5A1-46C6-A5BF-13055B046823.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/2164_20220831155842506-medium.jpg",
      name: "Barbara Nobody",

      city: "London",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/${router.locale}/artists/barbaranobody_e8w4uiq5`,
    },

    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/4449_20230307153700577_7FCCE75E-1210-4929-B396-295ECE8D7D0E.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/21192_20230307143220227-medium.jpg",
      name: "Mileink",

      city: "London",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/${router.locale}/artists/Mileink_8t07n1nk`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/3741_20230209033123652_D9044E0B-6D66-4491-A800-E100E428B30B.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/18214_20230209043507234-medium.jpg",
      name: "13FoxxTattoos",

      city: "London",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/${router.locale}/artists/13foxxtattoos_6426m6eg`,
    },

    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/3587_20230206105448273_7BBC9E76-F92B-4BBC-B743-0DD7BC4C1F31.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/17589_20230204173826801-medium.jpg",
      name: "Çinar Efe Tattoo",
      city: "London",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/${router.locale}/artists/cinar-efe_acwe82ae`,
    },
  ];

  return (
    <>
      <Head>
        <title>Book Tattoo Artists Near Me with inckd</title>
        <meta
          name="description"
          content="Explore exceptional tattoo artists near you on inckd. Effortlessly book your preferred artist, discover diverse styles, and benefit from exclusive partnerships. Download inckd now!"
        />
        <meta
          name="keywords"
          content="tattoo artists, book tattoo, inckd, tattoo styles, exclusive partnerships, community reviews"
        />

        <meta
          property="og:title"
          content="Book Tattoo Artists Near Me with inckd"
        />
        <meta
          property="og:description"
          content="Discover and book talented tattoo artists near you with inckd. Effortless booking, diverse styles, exclusive partnerships, community reviews, and more. Connect with your ideal tattoo artist now!"
        />

        <meta
          property="og:image"
          content={`${process.env.LIVE_URL}/${router.locale}/artistBanner.jpg`}
        />
        <meta property="og:url" content={`${process.env.LIVE_URL}/${router.locale}/book-tattoo-artists`}  />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div>
        <Banner
          bannerTitle="Discover and Book Tattoo Artists Near Me with inckd."
          alt="Discover and Book Tattoo Artists Near Me with inckd"
          bannerImg={"/artistBanner.jpg"}
          bannerButton={"Know more about inckd"}
        />

        <FullWidthSecwithIcon
          img="/studio.svg"
          alt="studio"
          title={"Are you searching for exceptional tattoo artists near you?"}
          content="Look no further! Inckd is your go-to platform for discovering and booking talented tattoo artists in your area. Whether you're a seasoned ink enthusiast or a first-time tattoo recipient, we've got you covered."
          bgColor="#f8f8f8"
        />

        <FourColumnCarousel
          title="Tattoo Artists Near Me"
          title_sub=""
          content=" "
          button="Explore more artists"
          trendingArtist={trendingArtist}
          btnLink={`/${router.locale}/explore/tattoo-artists?location=LondonUK`}

        />

        <SideBySideContentWithImage
          mainTitle="Why Choose inckd?"
          title1="Effortless Booking:"
          content1="With inckd, booking a tattoo artist is a breeze. Browse through a curated list of local tattoo studios, view artist portfolios, and book your appointment seamlessly.
          "
          title2="Diverse Style"
          content2="Explore a variety of tattoo styles catered to your preferences. From traditional to contemporary, our platform connects you with artists who specialize in the style you desire.
"
          title3="Exclusive Partnerships:"
          content3="We've partnered with renowned tattoo studios to bring you exclusive insights and offers. Benefit from our collaborations with tattoo studios to enhance your overall experience.
          "
          title4="Community Reviews:"
          content4="Read reviews and ratings from the tattoo community to make informed decisions. Connect with artists who have a proven track record of delivering exceptional work.
          "
          leftSectionImage="/inckdArtist1.svg"
          rightSecImage="/inckdArtist2.svg"

          alt1="Diverse Style"
          alt2="Exclusive Partnerships"


        />

        <OrangeTwoRowBlock
          mainTitle=""
          img1="/LinkRound.svg"
          title1="Connect with Your Ideal Tattoo Artist"
          content1="inckd goes beyond just discovering tattoo artists; we simplify the entire booking process. Use our app to connect with your artist, discuss designs, and book your appointment easily.
        "
          img2="/Album.svg"
          title2="Explore More with inckd"
          content2="In addition to connecting with tattoo artists, inckd offers a wealth of information and inspiration. Check out our journal for info on tattoo care, trends, and tips for a great tattooing experience.
        "
          bgColor="#FFD5C0"
          imgAlt1='Connect with Your Ideal Tattoo Artise'
imgAlt2="Explore More with inckd"
        />

        <DownloadApps
          title="Download the"
          subTitle="app & explore more!"        
        />
      </div>
    </>
  );
}
