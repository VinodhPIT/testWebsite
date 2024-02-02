import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
  analyticsCustomerCount,
  analyticsCustomerLeadSourceCount,
} from "@/action/analyticsAdmin";
import Header from "@/analyticsComponents/header/header";
import CustomerDetails from "@/analyticsComponents/customerDetails/customerDetails";
import TotalCustomers from "@/analyticsComponents/totalCustomers/totalCustomers";
import PieChart from "@/analyticsComponents/pieChart/chart";
import CustomerConversion from "@/analyticsComponents/customerConversion/customerConversion";
import useRevenueStore from '@/store/revenueList';
import { getSession } from "next-auth/react";
import PaymentComparison from "@/analyticsComponents/paymentComparisonChart/paymentComparison";
import ComparisonChart from "@/analyticsComponents/comparisonPiechart/comparisonChart";
import Head from 'next/head'


export default function Analytics({ data }) {
  

  const router = useRouter();
  const { status, data: sessionData } = useSession();
  const { revenue, loading, fetchRevenue } = useRevenueStore()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/analytics/login");
    }
  }, [status, router]);

 

  useEffect(()=>{
    fetchRevenue(data.sessionToken)
  },[])

  const getValues = Object.values(data.genderCount);

  const getKeys = Object.keys(data.genderCount).map((key) => {
    switch (key) {
      case "male_count":
        return "Male";
      case "female_count":
        return "Female";
      case "non_binary_count":
        return "Other";
      default:
        return key;
    }
  });




  const getColor = ["#1976D2", "#FF80FF", "#EAEAEA"];

  const label = [
    { id: 1, label: "Male", bgColor: "block_bg_blue_150" },
    { id: 2, label: "Female", bgColor: "block_bg_pink_100" },
    { id: 3, label: "Other", bgColor: "block_bg_gray_light_200" },
  ];



  
  return (
    <>
     <Head>
        <title>Customer-Analytics</title>
      </Head>


      <Header data={status === "authenticated" && sessionData.user.name} />

      <section className="pt_20 pb_20 block_bg_gray_150">
        <CustomerDetails initialCounts={data} token={data.sessionToken} />
        <section className="container-fluid">
          <div className="db_customer_detail_wrap">
            <div className="row">
              <div className="col-lg-8 col-md-6 col-sm-12">
                 <TotalCustomers chartData={data.chartData} token={data.sessionToken} /> 
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <PieChart
                  title="Total customers by gender"
                  getKeys={getKeys}
                  getValues={getValues}
                  getColor={getColor}
                  label={label}
                  
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid">
          <div className="db_customer_detail_wrap">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
             {loading ? null  : <ComparisonChart
                    totalData={data.chartData}
                    title="Normal vs referred customers"
                    labe_1="Normal Customers"
                    labe_2="Referred Customers"
                  />}
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12">
              <PaymentComparison  title="Payment methods" label_1={'Klarna'}    label_2={'Stripe payment'}   revenueData={revenue} />
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid">
          <div className="db_customer_detail_wrap">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <CustomerConversion token={data.sessionToken} />
              </div>
            
            </div>
          </div>
        </section>
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
    const data = await analyticsCustomerCount(session.user.myToken);
    const customerJoinigData = await analyticsCustomerLeadSourceCount(session.user.myToken);
    
    return {
      props: {
        data: {
          chartData: customerJoinigData ?? [],
          contactedWithNoOffer: data.contacted_with_no_offer || 0,
          deletedCustomers: data.deleted || 0,
          genderCount: data.gender || 0,
          joinedFromApp: customerJoinigData.filter((custData)=> custData.lead_source==="APP").length || 0,
          joinedFromWeb: customerJoinigData.filter((custData)=> custData.lead_source!=="APP").length || 0,
          noCompletedOffer: data.customer_no_offer_completed || 0,
          notContacted: data.no_contacted || 0,
          referralUsedCustomers: data.referral_used_customer || 0,
          sessionToken:session.user.myToken??'',
          totalCustomers: data.total_count || 0,
          voucherUserCustomers: data.voucher_used_customer || 0
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
