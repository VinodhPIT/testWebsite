import React, { useEffect } from "react";
import Head from "next/head";

import { useNavigation } from "@/hooks/useRouter";

import Klarna from "@/marketingScreens/KlarnaPage/Klarna";
import Voucher from "@/marketingScreens/VoucherPage/Voucher";
import AppDownload from "@/marketingScreens/GeneralDownload/AppDownload";
import { referralCode } from "../api/web.service";



function Download({ data, noData }) {
  const { router } = useNavigation();

  const { type, influencer, ...otherParams } = router.query;

  useEffect(() => {
    if (noData === true) {
      router.replace(`/${router.locale}/download?type=general`);
    }
  }, [noData, router]);

  function getMarketingpage(type) {
    switch (type) {
      case "klarna":
        return <Klarna />;
      case "general":
        return <AppDownload />;
      case "campaign":
        return <Voucher data={data} />;

      default:
        return <AppDownload />;
    }
  }

  return <>
  
  <Head>
        <title>
        Download the inckd. app
        </title>
        <meta
          name="description"
          content="Explore the Features in the Mobile App"
        />
      </Head>
  
  
  {getMarketingpage(type)}
  
  
  
  </>;
}

export default Download;

export async function getServerSideProps(context) {
  const { query } = context;
  try {
    if (query.type === "campaign" && query.influencer !== undefined) {
      const results = await referralCode(query.influencer);
      return {
        props: {
          data: results.data ?? "",
          noData: results.data ?? true,
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
