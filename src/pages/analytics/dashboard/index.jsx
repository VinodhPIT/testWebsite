import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";

import DashboardDetails from "@/analyticsComponents/dashboardDetails";
import Header from "@/analyticsComponents/header/header";
import { analyticsDashboardCount } from "@/action/analyticsDashboard";

export default function Dashboard({ data : initialData }) {
  const router = useRouter();
  const { status, data: sessionData } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/analytics/login");
    }
  }, [status, router]);

  return (
    <>
      <Header data={status === "authenticated" && sessionData.user.name} />
      <section className="pt_20 pb_20 block_bg_gray_150">
        <DashboardDetails initialCounts={initialData} token={initialData.sessionToken} />
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
    const data = await analyticsDashboardCount(session.user.myToken);
    
    return {
      props: {
        data: {
          androidDownloads: data.total_count || 0,
          iosDownloads: data.voucher_used_customer || 0,
          sessionToken: session.user.myToken ?? '',
          data
        },
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
}
