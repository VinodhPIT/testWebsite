import React  from "react";
import Head from "next/head";

import { useNavigation } from "@/hooks/useRouter";

import Banner from "@/landing-3/Banner/Banner";
import DownloadApps from "@/landing-3/DownloadApps/DownloadApps";
import ContentImageLayout from "@/landing-3/ContentImageLayout/ContentImageLayout";
import ListingGridTwoColumn from "@/landing-1/ListingGrid-TwoColumn/ListingGridTwoColumn";
import FullWidthBlock from "@/landing-1/FullwidthBlock/FullwidthBlock";
import FAQ from "@/landing-1/Faq/Faq";
import SideBySideContentWithImage from "@/landing-3/SideBySideContentWithImage/SideBySideContentWithImage";

export default function TattooAfterCare() {
  const { router } = useNavigation();

 
  const Healingprocess = [
    {
      title: "Infection",
      content:
        "A properly cared-for tattoo is less likely to get infected. However, if you notice redness, warmth, pain, and pus, it could indicate an infection. If symptoms persist or worsen, consult with a healthcare professional promptly.",
    },

    {
      title: "Nontuberculous Mycobacterial Skin Infections",

      content:
        "Though rare, mycobacterial infections can occur. If you observe unusual symptoms, including persistent redness, swelling, and discharge, seek medical attention",
    },

    {
      title: "Allergic Reaction",

      content:
        "If you're sensitive to the ink used, you may develop a red, itchy skin reaction. Red dyes, along with blue and black dyes, are more likely to cause nonallergic skin reactions. If you suspect an allergic reaction, consult with a healthcare professional.",
    },

    {
      title: "Scarring",
      content:
        "Damage from the tattoo needle or picking at the tattoo can lead to scar tissue formation. Scars can be permanent, emphasizing the importance of avoiding picking or scratching during the healing process.",
    },
  ];

  const FAQ_GENERAL = [
    {
      id: "01",
      summary: "Stay Hydrated",

      details: `Hydration is crucial for overall health and skin elasticity. Drinking plenty of water supports your body's healing processes and helps maintain the quality of your skin, indirectly benefiting your tattoo.`,
    },
    {
      id: "02",

      summary: `Use the Right Soap`,

      details:
        "Always use a mild, fragrance-free soap or a specially formulated tattoo cleanser to clean the tattooed area. Brands like Dr. Bronner’s 18-in-1 Hemp Baby Unscented Pure-Castile Soap or Dove Sensitive Skin Beauty Bar are often recommended by tattoo artists for their gentle yet effective cleansing properties.",
    },
    {
      id: "03",
      summary: "Choose the Right Ointment",

      details: `During the initial healing period, some artists recommend using A+D Original Ointment for the first day or two, then transitioning to Aquaphor Healing Ointment. Others may suggest Dr. Bronner’s Unscented Organic Magic Balm. Ensure that the chosen ointment allows for proper air flow to the tattoo and doesn't trap moisture.`,
    },
    {
      id: "04",

      summary: `Transition to Lotion`,

      details: `While it's safe to continue using Aquaphor or Dr. Bronner’s during the first week, you can typically switch to lotion afterward. Look for lotions that are free of fragrances, ethyl alcohol, and other additives that could dry out your skin. Lubriderm Daily Moisture Lotion or Cetaphil Moisturizing Lotion are commonly recommended by tattoo artists for their hydrating properties.`,
    },
    {
      id: "05",

      summary: `Avoid 100% Petroleum Products`,

      details: `During the initial healing process, it's best to avoid products that are 100% petroleum-based, such as original Vaseline. These products can be too thick on the skin, potentially trapping moisture and hindering air flow, which is essential for the healing process. Additionally, petroleum-based products without breathable ingredients may contribute to ink fading`,
    },
  ];

  return (
    <div>
      <Head>
        <title>
          Tattoo After Care Guide: Best Practices and Tips for Healing
        </title>

        <meta
          name="description"
          content="Explore our comprehensive guide on tattoo aftercare, covering proper healing steps, aftercare tips, and essential do's and don'ts. Learn from experts for optimal results."
        />
        <meta
          name="keywords"
          content="tattoo aftercare, healing process, long-term maintenance"
        />

        <link rel="canonical" content={`${process.env.LIVE_URL}/${router.locale}/tattoo-after-care`} />

        <meta
          property="og:title"
          content="Tattoo After Care Guide: Best Practices and Tips for Healing"
        />
        <meta
          property="og:description"
          content="Explore our comprehensive guide on tattoo aftercare, covering proper healing steps, aftercare tips, and essential do's and don'ts. Learn from experts for optimal results."
        />
        <meta property="og:image"  content={`${process.env.LIVE_URL}/drachen-tattoos.png`}/>
        <meta
          property="og:url"
          content={`${process.env.LIVE_URL}/${router.locale}/tattoo-after-care`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tattoo After Care Guide: Best Practices and Tips for Healing"
        />
        <meta
          name="twitter:description"
          content="Explore our comprehensive guide on tattoo aftercare, covering proper healing steps, aftercare tips, and essential do's and don'ts. Learn from experts for optimal results."
        />
        <meta name="twitter:image" content={`${process.env.LIVE_URL}/drachen-tattoos.png`}/>
        <meta
          name="twitter:url"
          content={`${process.env.LIVE_URL}/${router.locale}/tattoo-after-care`}
        />
      </Head>

      <Banner
        bannerTitle={
          "Tattoo After Care Guide: Best Practices and Tips for Healing"
        }
        bannerImg={"/drachen-tattoos.png"}
        bannerButton={"Know more about inckd"}
        position="bottom"
        altTag="Tattoo After Care Guide: Best Practices and Tips for Healing"
      />

      <ContentImageLayout
        title={"Tattoo aftercare"}
        content="Welcome to our comprehensive guide on tattoo aftercare, a journey into the essential steps to ensure your tattoo not only heals effectively but remains vibrant for years to come. Tattoo aftercare is a critical aspect of the tattooing process, playing a significant role in minimizing the risk of scarring, infection, and fading. In this extensive guide, we'll walk you through a detailed day-by-day approach to caring for your tattoo, along with long-term maintenance tips and answers to common questions."
        img="/peeling-tattoo.jpg"
        alt="Tattoo aftercare"
      />

      <SideBySideContentWithImage
        mainTitle="Importance of Proper Tattoo Aftercare
          "
        description="Proper tattoo aftercare is not just about the initial healing period; it's a commitment to the longevity and vibrancy of your tattoo. Following the right steps from the get-go can significantly reduce the risk of complications and ensure your tattoo looks as stunning as the day you got it.
          "
        title1="Day 1: Setting the Foundation"
        content1="Your tattoo artist has just adorned you with a masterpiece, and now it's your turn to take the reins. On the first day, your artist will cover your tattoo with a dressing. It's crucial to follow their instructions on when to remove it. Once the dressing is off, it's time to start the cleansing process.
          Gently cleanse the tattooed area with warm water and a fragrance-free soap. Take care not to use harsh soaps, as they may irritate the fresh tattoo. After cleansing, pat the area dry with a clean, soft cloth. The next step is applying the recommended ointment or lotion. This not only aids in the healing process but also helps maintain the tattoo's vibrancy.
          "
        title2="Days 2–3: Navigating the Dull Phase
          "
        content2="As the initial excitement settles, you may notice your tattoo appearing duller. This is a natural part of the healing process. Scabs may start to form, and if you've already removed the dressing, continue washing your tattoo once or twice a day. Some ink may run off during this process, which is entirely normal.
          Allow the skin to dry naturally before applying the recommended ointment or lotion. Consistency is key during this phase, as it sets the stage for the upcoming stages of healing.
          "
        title3="Days 4–6: Transitioning through Healing Layers
          "
        content3={`The "second skin" (a protective layer applied by some artists) is typically removed during this period. Follow your artist's instructions on how to remove it, ensuring your hands are clean before starting the process. You might find it helpful to pull the adhesive layer to the side gently, allowing it to lift from the skin slowly.
          Cleanse the area and let the skin dry before applying the recommended aftercare products. Redness should start to fade, and you may notice light scabbing over the tattoo. It's crucial not to pick at the scabs, as this can lead to scarring.
          `}
        title4="Days 6–14: The Itchy Stage
          "
        content4="By now, any scabs have likely hardened and will begin to flake off. Avoid the temptation to pick at them; instead, let them come off naturally. Your skin may feel itchy during this stage, and to relieve the itch, gently rub on a fragrance-free and alcohol-free moisturizer several times daily.
          If your tattoo is still red and swollen at this point, it's advisable to consult with your tattoo artist or a healthcare professional, as it might indicate an infection
"
        title5="Days 15–30: Final Stages of Healing
"
        content5="In the last stage of healing, most of the big flakes will be gone, and the scabs should be diminishing. You might still see some dead skin, but this should clear up over time. The tattooed area might look dry and dull, so continue moisturizing until the skin looks hydrated again.
By the second or third week, the outer layers of skin should have healed, but keep in mind that it may take three to four months for the lower layers to heal completely. Patience is key during this final stretch.

"
        img1="/tattooAftercare-img1.jpg"
        img2="/tattooAftercare-img2.jpg"
        img3="/tattooAfterCare-img3.jpg"
        img4="/Rectangle3602.png"
        img5="/Rectangle3603.png"
    imgAlt1="Day 1: Setting the Foundation"
    imgAlt2="Days 2–3: Navigating the Dull Phase"
    imgAlt3="Days 4–6: Transitioning through Healing Layers"
    imgAlt4="Days 6–14: The Itchy Stage"
    imgAlt5="Days 15–30: Final Stages of Healing"
 

      />

      <FAQ
        title="Long-Term Aftercare Tips"
        dscription="Once your tattoo has successfully traversed the healing process, the focus shifts to long-term maintenance. Follow these tips to ensure your tattoo remains a vivid piece of art:
"
        data={FAQ_GENERAL}
      />

      <FullWidthBlock
        title={`Can You "Dry Heal"a Tattoo?`}
        content={`"Dry healing" involves allowing the tattoo to heal without applying moisturizer or lotion during the aftercare routine. While some artists and individuals believe this may reduce the risk of skin irritation or allergic reactions, there isn't conclusive research to support the idea. Before trying any unproven aftercare method, it's advisable to consult with your tattoo artist.`}
        sectionBackgrounColor={"#f8f8f8"}
      />

      <div
        className={"text_box_wrap right pt_75  m_pt_pb_30 "}
        style={{ backgroundColor: "rgb(234, 255, 192)" }}
      >
        <div className="img_text_box_inner container">
          <div className="text_box_content w_100pc justify_content_center p_0 min_h_reset m_pb_0 m_text_center">
            <div className="text_box_content_inner max_w_100pc text_center">
              <h3 className="color_gray_550 heading_h2 ">
                Addressing Complications During the Healing Process
              </h3>
              <p className="custom_fs_20 w_1090 max_w_100pc lh_30 custom_fs_m_16 color_gray_550 mb_0">
                While the majority of the healing process is straightforward,
                its essential to be aware of potential complications. Here are
                some common issues and how to address them:
              </p>
            </div>
          </div>
        </div>
      </div>

      <ListingGridTwoColumn data={Healingprocess} bgColor="#eaffc0" />

      <DownloadApps title="Download the" subTitle="App & Explore more!" />
    </div>
  );
}
