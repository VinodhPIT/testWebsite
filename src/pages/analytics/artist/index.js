import React, { useEffect } from "react";
import Head from 'next/head'
import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/react";

import ArtistDetails from "@/analyticsComponents/artistDetails";
import Header from "@/analyticsComponents/header/header";
import { analyticsArtistCount } from "@/action/analyticsArtist";

export default function ArtistAnalytics({data: initialData}) {
  const router = useRouter();
  const { status, data } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/analytics/login");
  }, [status, router]);

  return (
    <>
      <Head>
       <title>Artist-Analytics</title>
     </Head>

     <Header data={status === "authenticated" && data.user.name} />
      <section className="pt_20 pb_20 block_bg_gray_150">
        <ArtistDetails
          initialCounts={initialData}
          token={initialData.sessionToken}
        />   
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/analytics/login",
        permanent: false,
      },
    };
  }

  try {
    const data = await analyticsArtistCount(session.user.myToken);

    return {
      props: {
        data:{
          artistCompletedOffers:data.artist_with_offer || 0,
          artistInCommunication:data.contacted_artist || 0,
          joinedFromApp:data.joined_from_app || 0,
          joinedFromWeb:data.joined_from_website || 0,
          joinedUsingReferral:data.referreal_used || 0,
          nonPublicProfiles:data.not_public_artist || 0,
          notCompletedAnyOffer:data.no_offer_completed || 0,
          notContactedCustomer:data.no_contacted || 0,
          notCreatedAnyOffers:data.no_offer_created || 0,
          sessionToken: session.user.myToken??'',
          totalArtists:data.total_artist || 0,
          totalPublicArtists:data.public_artist || 0
        },
      },
    };
  } catch (error) {
    return {
      data: null,
    };
  }
}
