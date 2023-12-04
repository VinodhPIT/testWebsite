import React, { useState } from "react";
import Head from "next/head";

import Banner from "@/landingComponents/banner/banner";
import UniquePartner from "@/landingComponents/uniquePartner-1/uniquePartner";

import TattooExperience from "@/landingComponents/tattooExperience/tattooExperience";
import TrendinginckdArtist from "@/landingComponents/trendinginckdArtist/trendinginckdArtist";
import WhypartnerTattoos from "@/landingComponents/whypartnerTattoos/whypartnerTattoos";
import CarouselSection from "@/landingComponents/carouselSection/carosuelSection";
import FourColumnSection from "@/landingComponents/fourColumnSection/fourColumnSection";
import FullWidthBlock from "@/landingComponents/fullwidthBlock/fullwidthBlock";
import TwoColumnSection from "@/landingComponents/TwoColumSection/twoColumnSection";
import { useRouter } from 'next/router'
 



export default function TattooIdeasForMen() {

  const router = useRouter()

  
  const [crossTattoo, setCrossTattoo] = useState([
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/5623_20221015121407735-medium.jpg",
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/26135_20230818133129210-medium.jpg",
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/17370_20230203132358438-medium.jpg",
    },
   
    
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/26845_20230917203559564-medium.jpg",
    },
  ]);

  const [dragonTattoo, setDragonTattoo] = useState([
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/3288_20220922092342423-medium.jpg",
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/5413_20221013110844591-medium.jpg",
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/12781_20221227153401323-medium.jpg",
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/24936_20230607094237782-medium.jpg",
    },
  ]);

  const [geometricTattoo, setGeometricTattoo] = useState([
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/11075_20221207172728931-medium.jpg",
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/24863_20230601105154554-medium.jpg",
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/20674_20230227221803155-medium.jpg",
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/cache/c3/41/c341d812fca63c064929c29c92dc9bff.jpg",
    },
  ]);

  const [sleeveTattoo, setSleeveTattoo] = useState([
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/27396_20231014131016014-medium.jpg",
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/27230_20230930004801740-medium.jpg",
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8599_20221109221705652-medium.jpg",
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4433_20221004102653403-medium.jpg",
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/27402_20231014132353855-medium.jpg",
    },
  ]);

  const [eagleTattoo, setEagleTattoo] = useState([
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/5993_20221020080614968-medium.jpg",
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/21298_20230308093735434-medium.jpg",
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/16233_20230126133354449-medium.jpg",
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8130_20221104175103838-medium.jpg",
    },
  ]);






  const [artist, setArtist] = useState([
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/2795_4657C062-5776-43D0-AC8F-43BBEE5B850E.jpg",
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/1742_3857121F-A33D-420C-A197-5D9EC3D02905.jpg",
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/920_5CC75242-4928-4A0B-A72D-90E651FCA364.jpg",
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/566_175C2680-D5A1-46C6-A5BF-13055B046823.jpg",
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/2686_A8B7EB97-F3E3-45ED-9FC0-6B5D544C1415.jpg"
      
    },
  ])


   












const [roseTattoo, SetRoseTattoo] = useState([
  {
    image:
      "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/25952_20230803202843159-medium.jpg"
  },
  {
    image:
      "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4655_20221006175730757-medium.jpg"


  },
  {
    image:
      "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/5110_20221011114420674-medium.jpg",
  },
  {
    image:
      "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4306_20221001155133303-medium.jpg",
  },

  {
    image:
      "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/14804_20230112222439519-medium.jpg"

    
  },
])














const [lionTattoo, SetLionTattoo] = useState([
  {
    image:
      "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8928_20221114000030451-medium.jpg"
  },
  {
    image:
      "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4290_20221001153856304-medium.jpg"


  },
  {
    image:
      "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/14053_20230106204904588-medium.jpg",
  },
  {
    image:
      "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/15824_20230123172402494-medium.jpg",
  },


]);


const [wolfTattoo, SetWolfTattoo] = useState([
  {
    image:
      "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/15791_20230123114449181-medium.jpg"
  },
  {
    image:
      "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8921_20221113205418987-medium.jpg"


  },
  {
    image:
      "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/11485_20221211114627901-medium.jpg",
  },
  {
    image:
      "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/13918_20230106083756566-medium.jpg"

      
  },


]);


const [religiousTatoo, SetreligiousTatoo] = useState([
  {
    image:
      "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4291_20221001153943791-medium.jpg"
  },
  {
    image:
      "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8350_20221108105938536-medium.jpg"


  },
  {
    image:
      "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/5616_20221015095453238-medium.jpg",
  },
  {
    image:
      "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/15821_20230123171559560-medium.jpg"

      
  },

  {
    image:
      "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4284_20221001153221281-medium.jpg"

      

      
  },


]);





const [trendingArtist, setTendingArtist] = useState([
  { artistImage:"https://storage.googleapis.com/hllincd-bucket/profile/image/1048_484EAC34-6F4B-4438-A8C2-33928DD44B38.jpg",  image: "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4620_20221006100342954-medium.jpg" ,name:"Chris harvey" ,location:"London, United Kingdom"},
  { artistImage:"https://storage.googleapis.com/hllincd-bucket/profile/image/732_2E380F59-A6D7-489A-A63D-8EDBCD930746.jpg",  image: "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/2415_20220913092008354-medium.jpg" ,name:"Southgate SG Tattoo" ,location:"London, United Kingdom"},
  {artistImage:"https://storage.googleapis.com/hllincd-bucket/profile/image/1012_a6338e0d-9888-4ca1-b6dc-06f911cd3361.jpg",   image: "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4373_20221003072650823-medium.jpg" ,name:"pennygrit" ,location:"Redhill, United Kingdom"},
  {artistImage:"https://storage.googleapis.com/hllincd-bucket/profile/image/3585_inckd/image/20230204141144902_C9621048-27B5-40BB-A611-4A7596955485.jpg",   image: "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/17570_20230204154920550-medium.jpg" ,name:"Nhong Niramit" ,location:"Nottinghamshire, United Kingdom"},
  { artistImage:"https://storage.googleapis.com/hllincd-bucket/profile/image/1711_18448F13-4566-46B1-ABFB-05C708D51B88.jpg",  image: "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8444_20221108224339907-medium.jpg" ,name:"Hugoink_bristol" ,location:"Weston-super-Mare, United Kingdom"},

  ]);















  

















  

 

  return (
    <>
      <Head>
        <title>
          Exploring Tattoo Ideas for Men: From Concept to Canvas | Inckd
        </title>
        <meta
          name="description"
          content="Discover the perfect tattoo ideas for men at Inckd. Express yourself with small tattoos, tribal designs, cross tattoos, and more. Explore diverse tattoo styles and find inspiration. From dragon tattoos to geometric masterpieces, our guide takes you from concept to canvas. Connect with skilled tattoo artists and dive into our curated image gallery. Start your unique tattoo journey today.
          "
        />
        <meta
          name="keywords"
          content="tattoo ideas for men, small tattoos, tribal tattoos, cross tattoos, star tattoo, tattoo design, men's tattoos, dragon tattoo, geometric tattoos, feather tattoos, sleeve tattoo, eagle tattoo, tattoo styles, ideas for men in 2023, tattoo artist, rose tattoo, forearm tattoos, tattoo designs for men, lion tattoo, wolf tattoo, religious tattoos"
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
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/${router.locale}/explore/tattoos/6063c826-8008-4164-9f96-53a6fa3f47a3`}
        />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/hllincd-bucket/profile/image/None_DCD9D1C0-8166-4202-9CD0-AF23821205A7.jpg"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <meta
          name="twitter:title"
          content="Exploring Tattoo Ideas for Men: From Concept to Canvas | Inckd"
        />
        <meta
          name="twitter:description"
          content="Discover the perfect tattoo ideas for men at Inckd. Express yourself with small tattoos, tribal designs, cross tattoos, and more. Explore diverse tattoo styles and find inspiration for 2023."
        />
        <meta
          name="twitter:image"
          content="https://storage.googleapis.com/hllincd-bucket/profile/image/None_DCD9D1C0-8166-4202-9CD0-AF23821205A7.jpg"
        />
      </Head>

      <div>
        <Banner
          bannerTitle={"Exploring Tattoo Ideas for Men: From Concept to Canvas"}
          subTitlte="Are you on the hunt for the perfect tattoo ideas for men? You're in the right place! Tattoos are a way to express yourself and tell a story. Our guide will help you explore the world of men's tattoos, whether you're new to it or already a fan."
          alt="Exploring Tattoo Ideas for Men"
          bannerImg={"/young-beautiful-couple-posing-old-building-1.jpg"}
          bannerButton={"Know more about inckd"}
        />
        <UniquePartner
          title="Exploring Diverse Tattoo Styles"
          subTitle="Small Tattoo Ideas for Men"
          content="Let's begin with the charm of small tattoos. These gems are perfect for those seeking subtle yet meaningful designs. From minimalist symbols to tiny icons, small tattoos can be a powerful expression of your personality.If you like cultural symbols, think about getting tribal tattoos. These designs have deep roots in various cultures, reflecting strength, heritage, and unity. From intricate patterns to bold lines, tribal tattoos make a bold statement."
          img="/pexels-cottonbro-studio-5320037.jpg"
          alt="Celebrate Your Love Journey with Unique Partner Tattoos"
        />
        <CarouselSection
          title={"Cross Tattoos"}
          content="Symbolizing faith, cross tattoos are timeless classics. Choose a basic cross or a stylish design, these tattoos have deep meaning and are popular among men of all ages."
          datas={crossTattoo}
          buttonName="Explore more"
          keyword={'Cross'}
        />
        <FourColumnSection
          title1={"Star Tattoo"}
          content1={
            "Reach for the stars with a star tattoo. Symbolizing guidance and aspiration, star tattoos come in various styles, from simple outlines to elaborate cosmic scenes.Unveiling the Artistry: Tattoo Design and Styles"
          }
          title2={"Tattoo Design"}
          content2={
            "A good tattoo starts with a careful design. Be creative or work with a talented artist to make your idea come alive. Pick a design that represents you, your beliefs, or an important event in your life."
          }
          title3={"Men’s Tattoos"}
          content3={
            "The world of men's tattoos is vast and diverse. From traditional to contemporary, men's tattoos encompass a range of styles and themes. Find inspiration in the stories told by tattoos, each inked creation a unique expression of masculinity."
          }
        />
        <CarouselSection
          title="Dragon Tattoo"
          content="Embrace the mystique of dragon tattoos. These mythical creatures symbolize strength, wisdom, and good fortune. Dragon tattoos allow for artistic freedom, with variations ranging from fierce and bold to intricate and detailed."
          buttonName="Explore more"
          datas={dragonTattoo}
          keyword={'Dragon'}
        />

        <CarouselSection
          title="Geometric Tattoo"
          content=" Precision meets artistry in geometric tattoos. Explore the beauty of shapes and lines, creating visually stunning tattoos with a modern edge. Geometric tattoos are a playground for creativity, offering endless possibilities."
          buttonName="Explore more"
          datas={geometricTattoo}
          keyword={'Geometric'}
        />

        <FullWidthBlock
          title={"Feather Tattoos"}
          content={
            "Light as a feather, these tattoos exude a delicate yet profound allure. Feather tattoos symbolize freedom, spirituality, and connection to nature. Let the feathers tell a story with their gentle elegance."
          }
          sectionBackgrounColor={"#f8f8f8"}
        />

        <CarouselSection
          title="Sleeve Tattoo"
          content="For those craving an extensive canvas, a sleeve tattoo is a masterpiece. Sleeve tattoos are like art on the arm. They have lots of space for detailed designs, stories, or a group of smaller tattoos that go together."
          buttonName="Explore more"
          datas={sleeveTattoo}
          keyword={'Sleeve'}
        />

        <CarouselSection
          title="Eagle Tattoo"
          content="Soar to new heights with an eagle tattoo. Symbolizing freedom, power, and vision, eagle tattoos captivate with their majestic presence. From realistic portrayals to stylized designs, an eagle tattoo is a bold choice."
          buttonName="Explore more"
          datas={eagleTattoo}
          keyword={'Eagle'}
        />

        <FullWidthBlock
          title={"Navigating Tattoo Styles in 2023"}
          content={
            "Ideas for Men in 2023: As we step into a new year, fresh tattoo trends emerge. Stay ahead of the curve with innovative ideas for men's tattoos in 2023. Explore new styles, techniques, and concepts that resonate with the spirit of the times."
          }
          sectionBackgrounColor={"#f8f8f8"}
        />

        <CarouselSection
          title="Tattoo Artist"
          content="Behind every remarkable tattoo is a skilled tattoo artist. Work with a skilled tattoo artist who gets your ideas and can turn them into an amazing tattoo. They have the technical skills and creativity to make your tattoo special and one-of-a-kind."
          buttonName="Explore more"
          datas={artist}
          isButtonVisible={false}          
        />
        
        <CarouselSection
          title="Rose Tattoo"
          content="Choose a beautiful rose tattoo to symbolize love, beauty, and passion. Customize it in various styles, from realistic to artistic designs, for a romantic touch."
          buttonName="Explore more"
          datas={roseTattoo}
          keyword={'Rose'}
        />
        <TwoColumnSection title1={"Forearm tattoos"}     
          content1={'are great for showing off your ink. They can be their own design or part of a larger one. You can choose the size and style that suits you.'}
          title2={'Tattoo Designs for Men'}
          content2={"Dive into the plethora of tattoo designs tailored for men. Explore themes like nature, animals, quotes, or opt for a custom design that holds personal significance. You have many choices for a tattoo design that matches your personality."}
        />

        <CarouselSection
          title="Lion Tattoo"
          content="Roar with confidence with a lion tattoo. Symbolizing strength, courage, and leadership, lion tattoos command attention. Choose a regal mane or a fierce expression to capture the essence of the king of the jungle."
          buttonName="Explore more"
          datas={lionTattoo}
          keyword={'Lion'}
        />

        <CarouselSection
          title="Wolf Tattoo"
          content="Embody the spirit of the wild with a wolf tattoo. Wolves symbolize loyalty, instinct, and freedom. A wolf tattoo has a mysterious appeal for those connected to their primal instincts."
          buttonName="Explore more"
          datas={wolfTattoo}
          keyword={'Wolf'}
        />

        <CarouselSection
          title="Religious Tattoos"
          content="For those seeking spiritual expression, religious tattoos offer a profound way to showcase faith. From religious symbols to depictions of revered figures, religious tattoos are a timeless choice."
          buttonName="Explore more"
          datas={religiousTatoo}
          keyword={'Religious'}
        />
      
        <FullWidthBlock 
          title={"Crafting Your Unique Tattoo Journey"}
          content={'Getting a tattoo is a personal and life-changing experience. Each tattoo represents a story and important moments in your life. Whether you prefer religious, eagle, or rose tattoos, your choice shows who you are as a person.'}
          sectionBackgrounColor={"#f8f8f8"}
        />

        <TrendinginckdArtist
          title="Connecting with a Skilled "
          title_sub="Tattoo Artist:"
          content="Start your tattoo journey by finding the perfect artist. Look for skilled experts who understand your artistic vision. Work together on the design to make sure it reflects your story."
          button="Explore more artists"
          trendingArtist={trendingArtist}
        />

        <TattooExperience
          mainTitle=""
          title1="Expressing Individuality Regardless of Tattoo Size"
          content1="Small tattoo ideas for men hold as much significance as larger pieces. Every tattoo, regardless of size, contributes to the tapestry of your self-expression. Whether it's a discreet symbol or an extensive sleeve, your tattoo is a reflection of your identity."
          title2="Celebrating Diversity in Tattoo Styles"
          content2="The diversity of tattoo styles allows for a myriad of choices. From classic cross tattoos to contemporary geometric designs, each style offers a unique way to convey your personality. Embrace the variety and choose a style that resonates with your aesthetic sensibilities."
          title3="Honoring Tradition with Tribal Tattoos"
          content3=" For those with a connection to cultural heritage, tribal tattoos pay homage to tradition. These designs, rooted in ancient symbolism, bring a sense of identity and belonging. Explore the intricate patterns and meanings behind tribal tattoos."
          title4="New tattoo ideas for men in 2023"
          content4="Keep up with the latest trends by exploring innovative ideas. Tattoo styles change and include new techniques and concepts. Be a trendsetter as you start your tattoo journey this year. Choose a lone wolf or a group, a wolf tattoo has a mysterious appeal for those connected to their primal instincts."
        />    

        <WhypartnerTattoos
          mainTitle="Visualizing Your Tattoo Experience"
          title1="Tattoo Styles Image Gallery"
          content1="To inspire your tattoo journey, explore our curated image gallery showcasing various tattoo styles. Explore miniature tattoo concepts for men, including eagle tattoos, geometric tattoos, and rose tattoos, each demonstrating creativity, audacity, complexity, and enduring sophistication."
          title2="Connecting Through Body Art"
          content2="Tattoos connect people, forming a shared language of expression. Join a community that celebrates the artistry of body ink. Share your tattoo journey, discover unique designs, and connect with fellow enthusiasts who appreciate the beauty of tattoo art. Tattoos have power. They mark moments, express emotions, and remind us of personal growth. Each tattoo tells a story."
          embrace="Ready to Embrace"
          story="Your Love Story in Ink?"
          downloadApp="Download inckd now. Your perfect partner tattoo experience is just a click away!"
        />
     
      </div>
    </>
  );
}
