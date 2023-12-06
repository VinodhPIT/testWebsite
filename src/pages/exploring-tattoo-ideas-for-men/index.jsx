import React, { useState } from "react";
import Head from "next/head";

import Banner from "@/landingComponents/banner/banner";
import UniquePartner from "@/landingComponents/uniquePartner-1/uniquePartner";

import TattooExperience from "@/landingComponents/tattooExperience/tattooExperience";
import TrendinginckdArtist from "@/landingComponents/trendinginckdArtist/trendinginckdArtist";
import WhypartnerTattoos from "@/landingComponents/whypartnerTattoos/whypartnerTattoos";
import CarouselSection from "@/landingComponents/carouselSection/carosuelSection";
import FullWidthcarosuel from "@/landingComponents/fullwidthCarousel/fullwidthCarousel";
import FourColumnSection from "@/landingComponents/fourColumnSection/fourColumnSection";
import FullWidthBlock from "@/landingComponents/fullwidthBlock/fullwidthBlock";
import TwoColumnSection from "@/landingComponents/TwoColumSection/twoColumnSection";
import { useRouter } from "next/router";

export default function TattooIdeasForMen() {
  const router = useRouter();

  const [crossTattoo, setCrossTattoo] = useState([
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/5623_20221015121407735-medium.jpg",

      url: `${process.env.LIVE_URL}/tattoo/bc4c6538-7f5b-4e53-b71b-09d670a0b8fc`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/26135_20230818133129210-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/71ad5f69-2c05-4666-b44f-dce8d39a8c4d`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/17370_20230203132358438-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/107595cf-876b-4276-b575-c5b16bd3e2f0`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/26845_20230917203559564-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/88c8e50d-37a6-4f6f-a75e-1a06cfc6d145`,
    },







    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/3021_20220920181814962-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/4f42297e-2235-4973-89f1-abb7037f0c36`,
    },



    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/25550_20230722110433958-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/6adb96f5-a278-4990-b488-dd5df109211a`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/2634_20220914105959127-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/f6acd94a-4ab6-4501-9159-970cf3410952`,
    },


    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/28270_20231030203112946-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/0d04f9ad-d3bf-493a-ab56-b3e47d6c2e8b`,
    },





  ]);

  const [dragonTattoo, setDragonTattoo] = useState([
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/3288_20220922092342423-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/10dd2046-58a2-4757-b71a-ff1214958af9`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/5413_20221013110844591-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/02837f63-18fc-47cf-b6cf-4cae325e5c55`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/12781_20221227153401323-medium.jpg",

      url: `${process.env.LIVE_URL}/tattoo/86871d13-c075-48d1-8921-1063080470fe`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/24936_20230607094237782-medium.jpg",

      url: `${process.env.LIVE_URL}/tattoo/11cf61d8-443a-4f62-a137-6bb50394289f`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8627_20221110095649977-medium.jpg",

      url: `${process.env.LIVE_URL}/tattoo/47fccec9-7997-4092-b7ea-9936644054e0`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/22260_20230322221505030-medium.jpg",

      url: `${process.env.LIVE_URL}/tattoo/5c0386b8-9c4f-4b01-b4e2-812311f3e0ea`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/7780_20221101204230909-medium.jpg",

      url: `${process.env.LIVE_URL}/tattoo/e4370a16-5bfe-4449-bea4-260059486f29`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/2381_20220911184739543-medium.jpg",

      url: `${process.env.LIVE_URL}/tattoo/ca14475a-7571-453d-9482-84067f9f6c64`,
    },
  ]);

  const [geometricTattoo, setGeometricTattoo] = useState([
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/11075_20221207172728931-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/4c2a1ecc-8a14-4495-94e6-c9eae15bd8fd`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/24863_20230601105154554-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/1eaac320-e7b0-4d6e-b58c-3a30ffaaa7d0`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/20674_20230227221803155-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/325df4c4-26ec-4f8e-9fde-3b2811450e72`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/cache/c3/41/c341d812fca63c064929c29c92dc9bff.jpg",
      url: `${process.env.LIVE_URL}/tattoo/90e79efb-7fe7-41f8-9fc3-c7d3291ab0c4`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/20679_20230227223151970-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/6d218657-309a-4aa3-ac5f-1117c8a762f3`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/24685_20230509155508671-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/8bbe38ef-3097-4729-bd3f-41dfe0ba215a`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4056_20220929070014888-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/a039fa3a-7b09-4eac-8d96-517eb8d1e4be`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4037_20220929062849598-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/c201f9c8-a321-452d-b4c0-f3c5408a7c0a`,
    },
  ]);

  const [sleeveTattoo, setSleeveTattoo] = useState([
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/27396_20231014131016014-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/d507d7d1-624d-43c6-bd4a-5d128d92b240`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/27230_20230930004801740-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/3131ea4c-bc33-4bd2-afd2-41e6bf02e15d`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8599_20221109221705652-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/090ba5c1-8135-4c57-bdde-259ecfbb9e24`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4433_20221004102653403-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/c1e86c54-711a-41ff-91db-4acd76943d22`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/27402_20231014132353855-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/7fe5ab8e-14ac-4d32-af3e-52460e60849e`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/10135_20221126151641435-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/e2c707ba-6b51-477e-8340-83238baa3151`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/14207_20230108111737325-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/aea38c79-96c0-4b8e-9dc3-aef7fb40b6aa`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/23097_20230402091601218-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/7eac90ab-69ff-44bc-a834-48551118f0ae`,
    },
  ]);

  const [eagleTattoo, setEagleTattoo] = useState([
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/5993_20221020080614968-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/2826212b-d61f-47df-b8a3-74e48fee02b5`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/21298_20230308093735434-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/c48c9c99-ad42-4275-a8fc-799be9a08963`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/16233_20230126133354449-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/d4131861-9723-433d-9516-f4c386e10dc5`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8130_20221104175103838-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/80ddfe46-c5ba-45d5-a90b-6ef43345276b`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/3239_20220921220006093-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/310031a7-c09d-4c70-a6c0-8e715fd4ab33`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/17322_20230203092103845-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/a18d1106-61ce-46a5-89a3-d5afab4ccc01`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/6251_20221021203013830-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/b628340e-b556-4081-ba2b-4d7b308b66a5`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/6355_20221023095249109-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/36c5339a-3183-4ba7-965e-924c04f5b588`,
    },
  ]);



  const [artist, setArtist] = useState([
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/2795_4657C062-5776-43D0-AC8F-43BBEE5B850E.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/None_5F7922D5-EFD8-4BD9-988A-1B71AEF2BA33.jpg",
      name: "Delphin Musquet",
      location: "London, United Kingdom",
      url: `${process.env.LIVE_URL}/artists/delphin-musquet_ja14on47`,
    },


    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/1742_3857121F-A33D-420C-A197-5D9EC3D02905.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8655_20221110125829007-medium.jpg",
      name: "Luciatattoos",
      location: "London, United Kingdom",
      url: `${process.env.LIVE_URL}/artists/luciatattoos_n98rnvgl`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/1012_a6338e0d-9888-4ca1-b6dc-06f911cd3361.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/6363_20221023095949684-medium.jpg",
      name: "Alessandro Lanzafame",
      location: "London, United Kingdom",
      url: `${process.env.LIVE_URL}/artists/alessandro-lanzafame_nts3jh4k`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/566_175C2680-D5A1-46C6-A5BF-13055B046823.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/2162_20220831155619012-medium.jpg",
      name: "Barbara Nobody",
      location: "London, United Kingdom",
      url: `${process.env.LIVE_URL}/artists/barbaranobody_e8w4uiq5`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/2686_A8B7EB97-F3E3-45ED-9FC0-6B5D544C1415.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/13142_20221229181240843-medium.jpg",
      name: "Orla Jessamine",
      location: "EK, East Kilbride, United Kingdom",
      url: `${process.env.LIVE_URL}/artists/orla-jessamine_ngnc48i5`,
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

  const [lionTattoo, SetLionTattoo] = useState([
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8928_20221114000030451-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/2bba9638-3540-487d-a2b7-848ea09fb3b4`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4290_20221001153856304-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/8123967f-57b7-4355-8d8e-89376c59c207`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/14053_20230106204904588-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/71e37869-1862-4505-b758-35e829b2805f`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/15824_20230123172402494-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/c1032a91-6ccf-400f-bf63-e72078f9dbc5`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/12054_20221215204256265-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/0628cbe0-bf53-4adc-8baa-13a1ec668e1d`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/13843_20230105164539780-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/9428e653-2461-4ccd-8251-00e6566b9da9`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/750_20220412032941277-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/becacea7-596c-40c1-a1cd-db055ce392e2`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/13079_20221229114438212-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/1555f8de-628c-459d-80eb-2e97dcd41c9a`,
    },
  ]);

  const [wolfTattoo, SetWolfTattoo] = useState([
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/15791_20230123114449181-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/d5341b19-53fa-452a-a48d-5939e8447567`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8921_20221113205418987-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/b688a83f-7af7-42ab-8c6d-edd2fcdf6412`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/11485_20221211114627901-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/36ee28fd-6985-468a-afcb-b78b8f807959`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/13918_20230106083756566-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/edbf815f-b1ce-456a-afc1-3f9a0b0b6cff`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/691_20220412032624728-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/f63585f8-c917-4a17-b2f0-c8e7e50cd573`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/9049_20221115155833283-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/f5eeea9a-60f8-4aad-918a-49edba55e566`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/14421_20230110024759369-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/17f6cf8d-d8c9-4048-b5e7-1bc13289bac6`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/3595_20220925051912507-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/b602e50a-03a6-40d0-a231-b324e35f2517`,
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
      location: "London, United Kingdom",
      url: `${process.env.LIVE_URL}/artists/chrisharvey_bghfm1a3`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/732_2E380F59-A6D7-489A-A63D-8EDBCD930746.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/2415_20220913092008354-medium.jpg",
      name: "Southgate SG Tattoo",
      location: "London, United Kingdom",
      url: `${process.env.LIVE_URL}/artists/southgatesgtattoo_x0xn3epc`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/1012_a6338e0d-9888-4ca1-b6dc-06f911cd3361.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4373_20221003072650823-medium.jpg",
      name: "pennygrit",
      location: "Redhill, United Kingdom",
      url: `${process.env.LIVE_URL}/artists/pennygrit_ufotb8kc`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/3585_inckd/image/20230204141144902_C9621048-27B5-40BB-A611-4A7596955485.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/17570_20230204154920550-medium.jpg",
      name: "Nhong Niramit",
      location: "Nottinghamshire, United Kingdom",
      url: `${process.env.LIVE_URL}/artists/nhong-niramit_oca540jq`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/1711_18448F13-4566-46B1-ABFB-05C708D51B88.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8444_20221108224339907-medium.jpg",
      name: "Hugoink_bristol",
      location: "Weston-super-Mare, United Kingdom",
      url: `${process.env.LIVE_URL}/artists/hugoink_bristol_mp015xjp`,
    },
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

        <FullWidthcarosuel
          title={"Cross Tattoos"}
          content="Symbolizing faith, cross tattoos are timeless classics. Choose a basic cross or a stylish design, these tattoos have deep meaning and are popular among men of all ages."
          datas={crossTattoo}
          buttonName="Explore more tattoos"
          keyword={"Cross"}
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
          title4={"Feather Tattoos"}
          content4={
            "Light as a feather, these tattoos exude a delicate yet profound allure. Feather tattoos symbolize freedom, spirituality, and connection to nature. Let the feathers tell a story with their gentle elegance."
          }
        />
        <CarouselSection
          title="Dragon Tattoo"
          content="Embrace the mystique of dragon tattoos. These mythical creatures symbolize strength, wisdom, and good fortune. Dragon tattoos allow for artistic freedom, with variations ranging from fierce and bold to intricate and detailed."
          buttonName="Explore more tattoos"
          datas={dragonTattoo}
          keyword={"Dragon"}
        />

        <CarouselSection
          title="Geometric Tattoo"
          content=" Precision meets artistry in geometric tattoos. Explore the beauty of shapes and lines, creating visually stunning tattoos with a modern edge. Geometric tattoos are a playground for creativity, offering endless possibilities."
          buttonName="Explore more tattoos"
          datas={geometricTattoo}
          keyword={"Geometric"}
        />

        <CarouselSection
          title="Sleeve Tattoo"
          content="For those craving an extensive canvas, a sleeve tattoo is a masterpiece. Sleeve tattoos are like art on the arm. They have lots of space for detailed designs, stories, or a group of smaller tattoos that go together."
          buttonName="Explore more tattoos"
          datas={sleeveTattoo}
          keyword={"Sleeve"}
        />

        <CarouselSection
          title="Eagle Tattoo"
          content="Soar to new heights with an eagle tattoo. Symbolizing freedom, power, and vision, eagle tattoos captivate with their majestic presence. From realistic portrayals to stylized designs, an eagle tattoo is a bold choice."
          buttonName="Explore more tattoos"
          datas={eagleTattoo}
          keyword={"Eagle"}
        />
<div className="pt_45">
        <FullWidthBlock
          title={"Navigating Tattoo Styles in 2023"}
          content={
            "Ideas for Men in 2023: As we step into a new year, fresh tattoo trends emerge. Stay ahead of the curve with innovative ideas for men's tattoos in 2023. Explore new styles, techniques, and concepts that resonate with the spirit of the times."
          }
          sectionBackgrounColor={"#f8f8f8"}
        />
        </div>

        {/* <CarouselSection
          title="Tattoo Artist"
          content="Behind every remarkable tattoo is a skilled tattoo artist. Work with a skilled tattoo artist who gets your ideas and can turn them into an amazing tattoo. They have the technical skills and creativity to make your tattoo special and one-of-a-kind."
          buttonName="Explore more tattoos"
          datas={artist}
          isButtonVisible={false}
        /> */}
        
        <TrendinginckdArtist
          title="Tattoo Artist "
          title_sub=""
          content="Behind every remarkable tattoo is a skilled tattoo artist. Work with a skilled tattoo artist who gets your ideas and can turn them into an amazing tattoo. They have the technical skills and creativity to make your tattoo special and one-of-a-kind."
          button="Explore more artists"
          trendingArtist={artist}
        />




        <FullWidthcarosuel
          title="Rose Tattoo"
          content="Choose a beautiful rose tattoo to symbolize love, beauty, and passion. Customize it in various styles, from realistic to artistic designs, for a romantic touch."
          buttonName="Explore more tattoos"
          datas={roseTattoo}
          keyword={"Rose"}
        />
        <TwoColumnSection
          title1={"Forearm tattoos"}
          content1={
            "are great for showing off your ink. They can be their own design or part of a larger one. You can choose the size and style that suits you."
          }
          title2={"Tattoo Designs for Men"}
          content2={
            "Dive into the plethora of tattoo designs tailored for men. Explore themes like nature, animals, quotes, or opt for a custom design that holds personal significance. You have many choices for a tattoo design that matches your personality."
          }
        />

        <CarouselSection
          title="Lion Tattoo"
          content="Roar with confidence with a lion tattoo. Symbolizing strength, courage, and leadership, lion tattoos command attention. Choose a regal mane or a fierce expression to capture the essence of the king of the jungle."
          buttonName="Explore more tattoos"
          datas={lionTattoo}
          keyword={"Lion"}
        />

        <CarouselSection
          title="Wolf Tattoo"
          content="Embody the spirit of the wild with a wolf tattoo. Wolves symbolize loyalty, instinct, and freedom. A wolf tattoo has a mysterious appeal for those connected to their primal instincts."
          buttonName="Explore more tattoos"
          datas={wolfTattoo}
          keyword={"Wolf"}
        />

        <CarouselSection
          title="Religious Tattoos"
          content="For those seeking spiritual expression, religious tattoos offer a profound way to showcase faith. From religious symbols to depictions of revered figures, religious tattoos are a timeless choice."
          buttonName="Explore more tattoos"
          datas={religiousTatoo}
          keyword={"Religious"}
        />
<div className="pt_45">


        <FullWidthBlock
          title={"Crafting Your Unique Tattoo Journey"}
          content={
            "Getting a tattoo is a personal and life-changing experience. Each tattoo represents a story and important moments in your life. Whether you prefer religious, eagle, or rose tattoos, your choice shows who you are as a person."
          }
          sectionBackgrounColor={"#f8f8f8"}
        />
        </div>

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
