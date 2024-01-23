import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import ArtistDetails from "@/analyticsComponents/artistDetails";
import Header from "@/analyticsComponents/header/header";

export default function ArtistAnalytics({data: initialData}) {
  const router = useRouter();
  const { status, data } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/analytics/login");
  }, [status, router]);

  return (
    <>
      <Header 
        data={status === "authenticated" &&  data.user.name }
        type="artist"
       />
      <section className="pt_20 pb_20 block_bg_gray_150">
        <ArtistDetails
          initialCounts={initialData}
        />   
      </section>
    </>
  );
}

export async function getServerSideProps() {
  try {
    return {
      props: {
        data:{
          artistCompletedOffers:'1',
          artistInCommunication:'2',
          joinedFromApp:'3',
          joinedFromWeb:'4',
          joinedUsingReferral:'5',
          nonPublicProfiles:'6',
          notCompletedAnyOffer:'7',
          notContactedCustomer:'8',
          notCreatedAnyOffers:'9',
          totalArtists:'10',
          totalPublicArtists:'11'
        },
      },
    };
  } catch (error) {
    return {
      data: null,
    };
  }
}
