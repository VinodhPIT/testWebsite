import React from "react";
import { useNavigation } from "@/hooks/useRouter";
import path from "path";
import fs from "fs";
import Klarnadownload from "@/marketingScreens/KlarnaDownload/KlarnaDownload";
import Offerdownloads from "@/marketingScreens/OfferDownload/OfferDownload";
import AppDownload from "@/marketingScreens/AppDownload/AppDownload";
import Message from "@/marketingScreens/Message/Message";

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
      const filePath = path.join(process.cwd(), "src", "data", "voucher.json");
      const jsonData = fs.readFileSync(filePath, "utf-8");
      const data = JSON.parse(jsonData);

      return {
        props: {
          data,
        },
      };
    } else {
      return {
        props: {
          data: "",
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
