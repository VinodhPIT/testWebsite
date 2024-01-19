import React, { useEffect } from "react";
import Header from "@/analyticsComponents/header/header";
import CustomerDetails from "@/analyticsComponents/customerDetails/customerDetails";
import TotalCustomers from "@/analyticsComponents/totalCustomers/totalCustomers";
import CustomerGender from "@/analyticsComponents/customerGender/customerGender";
import CustomerPayment from "@/analyticsComponents/customerPayment/customerPayment";
import CustomerConversion from "@/analyticsComponents/customerConversion/customerConversion";
import CustomerChart from "@/analyticsComponents/customerChart/customerChart";
import CustomerinfoAlert from "@/analyticsComponents/customerinfoAlert/customerinfoAlert";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { analyticsCustomerCount, analyticsCustomerLeadSourceCount } from "@/action/action";

export default function Analytics({data: initialData}) {
  const router = useRouter();
  const { status, data } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/analytics/login");
    }
  }, [status, router]);

  return (
    <>
      <Header />
      {/* {status === "authenticated" && (
        <p className="custom_fs_m_16">{JSON.stringify(data.user, null, 2)}</p>
      )}

      <button onClick={() => signOut({ callbackUrl: "/analytics/login" })}>
        logo ut{" "}
      </button> */}      

      <section className="pt_20 pb_20 block_bg_gray_150">

        <CustomerDetails 
          initialCounts={initialData}
        />        
        <section className="container-fluid"> 
          <div className="db_customer_detail_wrap">
            <div class="row">
              <div class="col-lg-8 col-md-6 col-sm-12">
                <TotalCustomers />
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12">
                <CustomerGender />
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid"> 
          <div className="db_customer_detail_wrap">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-12">
                <CustomerPayment />
              </div>
              <div class="col-lg-8 col-md-6 col-sm-12">
                <CustomerConversion />
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid"> 
          <div className="db_customer_detail_wrap">
            <div class="row">
              <div class="col-lg-9 col-md-7 col-sm-12">
                <CustomerChart />
              </div>
              <div class="col-lg-3 col-md-5 col-sm-12">
                <CustomerinfoAlert />
              </div>
            </div>
          </div>
        </section>

      </section>

    </>
  );
}

export async function getServerSideProps() {
  try {
    const data = await analyticsCustomerCount();
    const customerJoinigData = await analyticsCustomerLeadSourceCount();

    return {
      props: {
        data:{
          contactedWithNoOffer: data.contacted_with_no_offer,
          deletedCustomers: data.deleted,
          joinedFromApp: customerJoinigData.filter((custData)=> custData.lead_source==="APP").length,
          joinedFromWeb: customerJoinigData.filter((custData)=> custData.lead_source!=="APP").length,
          noCompletedOffer: data.customer_no_offer_completed,
          notContacted: data.no_contacted,
          referralUsedCustomers: data.referral_used_customer,
          totalCustomers: data.total_count,
          voucherUserCustomers: data.voucher_used_customer,
        },
      },
    };
  } catch (error) {
    return {
      data: null,
    };
  }
}
