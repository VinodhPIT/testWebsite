import React from "react";
import Head from "next/head";

import { useNavigation } from "@/hooks/useRouter";

import Klarna from "@/marketingScreens/KlarnaPage/Klarna";
import Voucher from "@/marketingScreens/VoucherPage/Voucher";
import AppDownload from "@/marketingScreens/GeneralDownload/AppDownload";

import API_URL from "@/apiConfig/api.config";
import { axiosInstance } from "@/apiConfig/axios.instance";

function Download({data}) {
  const { router } = useNavigation();
  const { type, influencer, ...otherParams } = router.query;

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

  return (
    <>
      <Head>
        <title>Download the inckd. app</title>
        <meta
          name="description"
          content="Explore the Features in the Mobile App"
        />
      </Head>

      {getMarketingpage(type)}
    </>
  );
}

export default Download;


export async function getServerSideProps(context) {
  const { query } = context;
  const { type, influencer } = query;

  if (type !== "campaign" || influencer === undefined) {
    return {
      props: {
        data: "",
      },
    };
  }

  try {
    const response = await axiosInstance.get(API_URL.SEARCH.GET_REFERRAL_CODE(influencer));
    const data = response.data?.data ?? "";
    return {
      props: {
        data,
        noData: !data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/download?type=general',
        permanent: false,
      },
    };
  }
}
