import React, { useState } from "react";
import Head from "next/head";

import Banner from "@/landingComponents/banner/banner";

import FourColumnSection from "@/landingComponents/fourColumnSection/fourColumnSection";
import PartnerTattoos from "@/landingComponents/partnerTattoos/tattoos";
import WhypartnerTattoos from "@/landingComponents/whypartnerTattoos/whypartnerTattoos";

export default function TattooIdeasForMen() {
  const currentPage = typeof window !== "undefined" ? window.location.href : "";


  const [data, setData] = useState([
    {
      id: 1,
      tattooName: "",
      image:"https://storage.googleapis.com/hllincd-bucket/profile/image/2795_4657C062-5776-43D0-AC8F-43BBEE5B850E.jpg",
      description:
        "Effortless Booking: With inckd, booking a tattoo artist is a breeze. Browse through a curated list of local tattoo studios, view artist portfolios, and book your appointment seamlessly."
        
    },
    {
      id: 2,
      
      tattooName: "",
      image:"https://storage.googleapis.com/hllincd-bucket/profile/image/1742_3857121F-A33D-420C-A197-5D9EC3D02905.jpg",
      description:
        "Diverse Styles: Explore a variety of tattoo styles catered to your preferences. From traditional to contemporary, our platform connects you with artists who specialize in the style you desire",
    },
    {
      id: 3,
      tattooName: "",
      image:"https://storage.googleapis.com/hllincd-bucket/profile/image/920_5CC75242-4928-4A0B-A72D-90E651FCA364.jpg",
      description:
        "Exclusive Partnerships: We've partnered with renowned tattoo studios to bring you exclusive insights and offers. Benefit from our collaborations with tattoo studios to enhance your overall experience.",
    },

    {
      id: 4,
      tattooName: "",
      image:"https://storage.googleapis.com/hllincd-bucket/profile/image/566_175C2680-D5A1-46C6-A5BF-13055B046823.jpg",
      description:
        "Community Reviews: Read reviews and ratings from the tattoo community to make informed decisions. Connect with artists who have a proven track record of delivering exceptional work."
        
    },

    
  ]);




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
          content={"/young-beautiful-couple-posing-old-building-1.jpg"}
        />

        <meta property="og:url" content={currentPage} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        
      </Head>

      <div>
        <Banner
          bannerTitle="Discover and Book Tattoo Artists Near Me with inckd."
          subTitlte="Are you searching for exceptional tattoo artists near you? Look no further! Inckd is your go-to platform for discovering and booking talented tattoo artists in your area. Whether you're a seasoned ink enthusiast or a first-time tattoo recipient, we've got you covered.

        "
          alt="Discover and Book Tattoo Artists Near Me with inckd."
          bannerImg={"/young-beautiful-couple-posing-old-building-1.jpg"}
          bannerButton={"Know more about inckd"}
        />



<PartnerTattoos
          mainTitle="Why Choose inckd?"
          
          content1=""
          content2=""
        
          button="Explore more tattoos"
          data={data}
          partnerTattoo1={"/Symbol-Unity.png"}

          slide1={"slide1"}

         
        />








      


<WhypartnerTattoos
          mainTitle=""
          title1="Connect with Your Ideal Tattoo Artist
          "
          content1="inckd goes beyond just discovering tattoo artists; we simplify the entire booking process. Use our app to connect with your artist, discuss designs, and book your appointment easily.
        "
          title2="Explore More with inckd
          "
          content2="In addition to connecting with tattoo artists, inckd offers a wealth of information and inspiration. Check out our journal for info on tattoo care, trends, and tips for a great tattooing experience.

        "
          embrace="Ready to embark"
          story="on your tattoo journey?"
          downloadApp="Download inckd now and explore the world of tattoo artists near you. Connect, create, and book your next tattoo with ease.
          "
        />



      </div>
    </>
  );
}
