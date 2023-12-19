import React from "react";
import { useNavigation } from "@/hooks/useRouter";

import Klarnadownload from "@/marketingScreens/KlarnaDownload/KlarnaDownload";
import Offerdownloads from "@/marketingScreens/OfferDownload/OfferDownload";
import AppDownload from "@/marketingScreens/AppDownload/AppDownload";
import Message from "@/marketingScreens/Message/Message";
import { referralCode } from "@/action/action";

function Download({ data }) {
  const { router } = useNavigation();

  const { type, ...otherParams } = router.query;

  function getMarketingpage(type) {
    switch (type) {
      case "klarna":
        return <Klarnadownload />;
      case "general":
        return <AppDownload />;
      case "campaign":
        return <Offerdownloads data={data} />;
      default:
        return <Message />;
    }
  }

  return <>{getMarketingpage(type)}</>;
}

export default Download;

export async function getServerSideProps(context) {
  const { query } = context;
  try {
    if (query.type === "campaign" && query.influencer !== undefined) {
      const results = await referralCode(query.influencer);
      return {
        props: {
          data :results.data??''
        },
      };
    } 
else {
  return {
    props: {
      data:''
    },
  };

}


  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
}
