import React, { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/react";
import HeaderProfile from "@/analyticsComponents/common/headerProfile"
import {
  analyticsArtistCount,
  analyticsArtistLeadSourceCount,
} from "@/apiConfig/artistAnalyticsService";

import YourComponent from "@/analyticsComponents/common/keys";
import useTranslation from "next-translate/useTranslation";

import DataTable from "@/analyticsComponents/dataTable/table";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function ArtistAnalytics({ data: initialData }) {
  const { status, data } = useSession();
  const router = useRouter();
  const { t } = useTranslation();
  const { artistConversion } = YourComponent();

  const getValues = Object.values(initialData.genderCount);

  const getKeys = Object.keys(initialData.genderCount).map((key) => {
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
    { id: 1, label: "Male", bgColor: "block_bg_blue" },
    { id: 2, label: "Female", bgColor: "block_bg_pink_100" },
    { id: 3, label: "Other", bgColor: "block_bg_gray_light_200" },
  ];

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/analytics/login");
    }
  }, [status, router]);

  const columns = [    
    {
      Header: "Offer code",
      accessor: "offer_code",
    },
    {
      Header: "Offer Date",
      accessor: "offer_date",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Total Amount",
      accessor: "total_amount",
    },

    {
      Header: "Currency",
      accessor: "currency",
    },

    {
      Header: "Status1",
      accessor: "status1",
    },
    {
      Header: "Total Amount1",
      accessor: "total_amount1",
    },

    {
      Header: "Currency1",
      accessor: "currency1",
    },

    {
      Header: "Status11",
      accessor: "status11",
    },
    {
      Header: "Total A1modcdcdunt1",
      accessor: "t1otal_adcdcdcmount1",
    },

    {
      Header: "Cur1rencysxs1",
      accessor: "cur1rencsxxsy1",
    },

    {
      Header: "Sta11tus1",
      accessor: "s11tatus1",
    },
    {
      Header: "Total Amoun111t1",
      accessor: "total_dcdcamount1",
    },

    {
      Header: "Currency1wdd",
      accessor: "currenccdcdcy1",
    },

    {
      Header: "Total Amocdcdcun111t1",
      accessor: "total_dcdcdcdcamount1",
    },

    {
      Header: "Currencydcd1wdd",
      accessor: "currencdcdccdcdcy1",
    },
  ];

  const data1 = [
    {
      offer_code: null,
      offer_date: null,  
      status: null,
      total_amount: null,
      currency: null,
    },
    {
      offer_code: "220615456",
      offer_date: "2023-06-21",
      status: "cancelled",
      total_amount: null,
      currency: "EUR",
    },
    {
      offer_code: "220615456",
      offer_date: "2023-07-26",
      status: "completed",
      total_amount: 50.0,
      currency: "EUR",
    },
    {
      offer_code: "220615456",
      offer_date: "2023-05-29",
      status: "completed",
      total_amount: 460.0,
      currency: "EUR",
    },
    {
      offer_code: "220615456",
      offer_date: "2023-05-30",
      psp: "klarna",
      status: "completed",
      total_amount: 50.0,
      currency: "EUR",
    },
    {
      offer_code: "220615456",
      offer_date: "2023-05-30",
      psp: null,
      status: "completed",
      total_amount: 210.0,
      currency: "EUR",
    },
    {
      offer_code: null,
      offer_date: null,
      psp: null,
      status: null,
      total_amount: null,
      currency: null,
    },
    {
      offer_code: null,
      offer_date: null,
      psp: null,
      status: null,
      total_amount: null,
      currency: null,
    },
    {
      offer_code: "220615456",
      offer_date: "2023-06-01",
      psp: "klarna",
      status: "cancelled",
      total_amount: 15.0,
      currency: "EUR",
    },
    {
      offer_code: "220615456",
      offer_date: "2023-07-27",
      psp: null,
      status: null,
      total_amount: null,
      currency: null,
    },
    {
      offer_code: null,
      offer_date: null,
      psp: null,
      status: null,
      total_amount: null,
      currency: null,
    },
    {
      offer_code: "220615456",
      offer_date: "2023-05-30",
      psp: null,
      status: null,
      total_amount: null,
      currency: null,
    },
    {
      offer_code: "220615456",
      offer_date: "2023-05-29",
      psp: null,
      status: "completed",
      total_amount: 42.0,
      currency: "EUR",
    },
    {
      offer_code: null,
      offer_date: null,
      psp: null,
      status: null,
      total_amount: null,
      currency: null,
    },
    {
      offer_code: "220615456",
      offer_date: "2023-06-05",
      psp: null,
      status: "completed",
      total_amount: 60.0,
      currency: "EUR",
    },
    {
      offer_code: "220615456",
      offer_date: "2023-06-05",
      psp: null,
      status: "completed",
      total_amount: 60.0,
      currency: "EUR",
    },
    {
      offer_code: "220615456",
      offer_date: "2023-07-31",
      psp: null,
      status: null,
      total_amount: null,
      currency: null,
    },
    {
      offer_code: "220615456",
      offer_date: "2023-06-14",
      psp: null,
      status: "cancelled",
      total_amount: null,
      currency: "EUR",
    },
    {
      offer_code: "220615456",
      offer_date: "2023-08-02",
      psp: null,
      status: "completed",
      total_amount: 50.0,
      currency: "EUR",
    },
    {
      offer_code: "220615456",
      offer_date: "2023-05-30",
      psp: null,
      status: "cancelled",
      total_amount: 15.0,
      currency: "EUR",
    },
    {
      offer_code: "220615456",
      offer_date: "2023-05-30",
      psp: "klarna",
      status: "completed",
      total_amount: 50.0,
      currency: "EUR",
    },
    {
      offer_code: "220615456",
      offer_date: "2023-08-09",
      psp: "klarna",
      status: "completed",
      total_amount: 75.0,
      currency: "EUR",
    },
    {
      offer_code: null,
      offer_date: null,
      psp: null,
      status: null,
      total_amount: null,
      currency: null,
    },
    {
      offer_code: null,
      offer_date: null,
      psp: null,
      status: null,
      total_amount: null,
      currency: null,
    },
    {
      offer_code: null,
      offer_date: null,
      psp: null,
      status: null,
      total_amount: null,
      currency: null,
    },
    {
      offer_code: null,
      offer_date: null,
      psp: null,
      status: null,
      total_amount: null,
      currency: null,
    },
    {
      offer_code: null,
      offer_date: null,
      psp: null,
      status: null,
      total_amount: null,
      currency: null,
    },
    {
      offer_code: null,
      offer_date: null,
      psp: null,
      status: null,
      total_amount: null,
      currency: null,
    },
    {
      offer_code: "220615456",
      offer_date: "2023-05-29",
      psp: null,
      status: "completed",
      total_amount: 300.0,
      currency: "EUR",
    },
    {
      offer_code: "220615456",
      offer_date: "2023-05-29",
      psp: null,
      status: null,
      total_amount: null,
      currency: null,
    },
    {
      offer_code: "220615456",
      offer_date: "2023-05-30",
      psp: null,
      status: "completed",
      total_amount: 210.0,
      currency: "EUR",
    },
    {
      offer_code: "220615456",
      offer_date: "2023-08-10",
      psp: null,
      status: "completed",
      total_amount: 350.0,
      currency: "EUR",
    },
    {
      offer_code: "220615456",
      offer_date: "2023-08-10",
      psp: null,
      status: "completed",
      total_amount: 200.0,
      currency: "EUR",
    },
    {
      offer_code: "220615456",
      offer_date: "2023-05-31",
      psp: null,
      status: "completed",
      total_amount: 100.0,
      currency: "GBP",
    },
    {
      offer_code: null,
      offer_date: null,
      psp: null,
      status: null,
      total_amount: null,
      currency: null,
    },
    {
      offer_code: "220615456",
      offer_date: "2023-05-29",
      psp: null,
      status: null,
      total_amount: null,
      currency: null,
    },
    {
      offer_code: "220615456",
      offer_date: "2023-05-29",
      psp: null,
      status: null,
      total_amount: null,
      currency: null,
    },
    {
      offer_code: null,
      offer_date: null,
      psp: null,
      status: null,
      total_amount: null,
      currency: null,
    },
    {
      offer_code: null,
      offer_date: null,
      psp: null,
      status: null,
      total_amount: null,
      currency: null,
    },
    {
      offer_code: null,
      offer_date: null,
      psp: null,
      status: null,
      total_amount: null,
      currency: null,
    },
    {
      offer_code: null,
      offer_date: null,
      psp: null,
      status: null,
      total_amount: null,
      currency: null,
    },
    {
      offer_code: "220615456",
      offer_date: "2023-05-31",
      psp: null,
      status: "completed",
      total_amount: 80.0,
      currency: "EUR",
    },
    {
      offer_code: "220615456",
      offer_date: "2023-05-31",
      psp: null,
      status: "cancelled",
      total_amount: 15.0,
      currency: "EUR",
    },
    {
      offer_code: null,
      offer_date: null,
      psp: null,
      status: null,
      total_amount: null,
      currency: null,
    },
    {
      offer_code: null,
      offer_date: null,
      psp: null,
      status: null,
      total_amount: null,
      currency: null,
    },
    {
      offer_code: "220615456",
      offer_date: "2023-06-01",
      psp: "klarna",
      status: "completed",
      total_amount: 50.0,
      currency: "EUR",
    },
    {
      offer_code: null,
      offer_date: null,
      psp: null,
      status: null,
      total_amount: null,
      currency: null,
    },

    {
      offer_code: "220615456",
      offer_date: "2023-06-05",
      psp: "klarna",
      status: "completed",
      total_amount: 130.0,
      currency: "EUR",
    },
    {
      offer_code: "220615456",
      offer_date: "2023-06-01",
      psp: "klarna",
      status: "completed",
      total_amount: 60.0,
      currency: "EUR",
    },
    {
      offer_code: "220615456",
      offer_date: "2023-06-16",
      psp: null,
      status: "scheduled",
      total_amount: null,
      currency: "EUR",
    },
    {
      offer_code: "220615456",
      offer_date: "2023-06-01",
      psp: "klarna",
      status: "completed",
      total_amount: 250.0,
      currency: "EUR",
    },
    {
      offer_code: "220615456",
      offer_date: "2023-06-13",
      psp: null,
      status: null,
      total_amount: null,
      currency: null,
    },
    {
      offer_code: "220615456",
      offer_date: "2023-06-22",
      psp: null,
      status: null,
      total_amount: null,
      currency: null,
    },
    {
      offer_code: "220615456",
      offer_date: "2023-06-05",
      psp: "klarna",
      status: "completed",
      total_amount: 50.0,
      currency: "EUR",
    },
    {
      offer_code: "220615456",
      offer_date: "2024-02-12",
      psp: null,
      status: "pending",
      total_amount: null,
      currency: "CHF",
    },
    {
      offer_code: "220615456",
      offer_date: "2023-08-30",
      psp: null,
      status: "rejected",
      total_amount: null,
      currency: "EUR",
    },
    {
      offer_code: "220615456",
      offer_date: "2023-06-22",
      psp: null,
      status: "rejected",
      total_amount: null,
      currency: "EUR",
    },
  ];

  const datas = data1.filter((e) => e.status !== null);
  





  return (
    <>
      <Head>
        <title>{t("common:AnalyticsArtist.MetaTitle")}</title>
      </Head>

      <HeaderProfile data={status === "authenticated" && data.user.name} />
      <section className="block_bg_white mt_3">  
        <div className="container-fluid">          
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div class="user_profile_block">
                <div class="user_profile_pic">
                  <Image
                    src="/db_user_1.png"
                    alt="user"
                    width="40"
                    height="40"
                    priority
                    className=""
                  />
                </div>
                <div class="user_profile_detail">
                  <div className="d_flex flex_direction_column">
                    <div class="user_profile_name">John doe Sebastian</div>
                    <div class="user_profile_sub">(Artistjohn)</div>
                  </div>

                  <div class="user_profile_address">
                    <div class="user_profile_adrs_title">ABC Studio</div>
                    <div class="user_profile_adrs_sub">Zurich, Switzerland, PO-Box: 0923</div>
                  </div>                  
                </div>
                <div class="user_profile_link">
                <button type="button" className="btn_secondary block_bg_green_800 btn_public">Public</button>
                </div>
              </div>                          
            </div>              
          </div>          
        </div>
      </section>

      <section className="pt_15 pb_15 mt_3">  
        <div className="container-fluid">          
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <Tabs className={"db_tab_block"}>
                <div className="testone">
                  <TabList>
                    <Tab>Profile</Tab>
                    <Tab>Offers</Tab>
                    <Tab>Chats</Tab>
                    <Tab>Payouts</Tab>
                    <Tab>Studios</Tab>
                    <Tab>Customer</Tab>
                    <Tab>Request</Tab>
                  </TabList>                 


                </div>
                <TabPanel>
                  <div class="db_main_info_col">
                    <div class="db_main_info_head">
                      <h3 class="color_gray_550 custom_fs_26 fw_400 mb_0">My Profile</h3>
                      <ul class="head_status_block">
                        <li>
                          <h6 class="head_status_label">Profile status</h6>
                          <span class="status_indicator block_bg_green_100 color_green_900">Public</span>
                        </li>
                        <li>
                          <h6 class="head_status_label">Profile public date:</h6>
                          <span class="head_status_date">14/02/2024</span>
                        </li>
                      </ul>
                    </div>
                    <div class="profile_info_col_wrap">
                      <div class="profile_personal_info">
                        <h4 class="profile_personal_label">Locations</h4>
                        <div class="profile_personal_info_col">
                          <ul class="profile_info_list">
                            <li>
                              <label>Artist Name</label>
                              <span class="profile_list_desc">Artistjohn</span>
                            </li>
                            <li>
                              <label>First Name</label>
                              <span class="profile_list_desc">John</span>
                            </li>
                            <li>
                              <label>Last Name</label>
                              <span class="profile_list_desc">Sebastian</span>
                            </li>
                          </ul>
                          <ul class="profile_info_list">
                            <li>
                              <label>Country</label>
                              <span class="profile_list_desc">Switzerland</span>
                            </li>
                            <li>
                              <label>Language</label>
                              <span class="profile_list_desc">German</span>
                            </li>
                            <li>
                              <label>Gender</label>
                              <span class="profile_list_desc">Male</span>
                            </li>
                          </ul>
                          <ul class="profile_info_list">
                            <li>
                              <label>Email</label>
                              <span class="profile_list_desc">johndoe@abc.com
                                <Image
                                  src="/circle_tick.svg"
                                  width={16}
                                  height={17}
                                  alt="tick"
                                  priority
                                  className="ml_7"
                                />
                              </span>
                            </li>
                            <li>
                              <label>Phone</label>
                              <span class="profile_list_desc">9876543210
                                <Image
                                  src="/circle_tick.svg"
                                  width={16}
                                  height={17}
                                  alt="tick"
                                  priority
                                  className="ml_7"
                                />
                              </span>
                            </li>
                            <li>
                              <label>Date of Birth</label>
                              <span class="profile_list_desc">14/02/2024</span>
                            </li>
                          </ul>
                          <ul class="profile_info_list">
                            <li>
                              <label>KYC status</label>
                              <span class="profile_list_desc">
                                <Image
                                  src="/circle_tick.svg"
                                  width={16}
                                  height={17}
                                  alt="tick"
                                  priority
                                  className="mr_7"
                                />Verified
                                </span>
                            </li>
                            <li>
                              <label>IBAN number</label>
                              <span class="profile_list_desc">
                                <span className="password_blocker">***********</span>
                                <Image
                                  src="/icon_eye.svg"
                                  width={25}
                                  height={24}
                                  alt="eye"
                                  priority
                                  className="ml_14"
                                />
                              </span>
                            </li>
                            <li>
                              <label>Joined date</label>
                              <span class="profile_list_desc">14/02/2024</span>
                            </li>
                          </ul>
                        </div>

                      </div>
                      <div class="profile_other_info">
                        <h4 class="profile_personal_label">Other information</h4>
                        <div class="profile_other_info_col mb_25">
                          <ul class="profile_info_list">
                            <li>
                              <label>Any offers created</label>
                              <span class="profile_list_desc">16</span>
                            </li>
                            <li>
                              <label>Any artist referred</label>
                              <span class="profile_list_desc">03</span>
                            </li>
                          </ul>
                          <ul class="profile_info_list">
                            <li>
                              <label>Any customer referred</label>
                              <span class="profile_list_desc">00</span>
                            </li>
                            <li>
                              <label>Payout pending</label>
                              <span class="profile_list_desc">No</span>
                            </li>
                          </ul>
                        </div>
                        <h4 class="profile_personal_label">Main studio information</h4>
                        <div className="studio_profile_details">
                          <div class="studio_profile_pic">
                            <Image
                              src="/icon_studio.svg"
                              alt="studio"
                              width="17"
                              height="16"
                              priority
                              className=""
                            />
                          </div>
                          <div className="flex">
                            <div class="studio_profile_name">Studio name abc</div>
                            <div class="studio_profile_sub">Wonderland street, Switzerland, PO-Box: 0923</div>
                          </div>                                     
                        </div>
                          
                        
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <DataTable columns={columns} data={datas} />
                </TabPanel>                  
                
              </Tabs>

            </div>
          </div>
        </div>
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
    const [data, customerJoinigData] = await Promise.all([
      analyticsArtistCount(session.user.myToken),
      analyticsArtistLeadSourceCount(session.user.myToken),
    ]);

    return {
      props: {
        data: {
          chartData: customerJoinigData ?? [],
          artistCompletedOffers: data.artist_with_offer || 0,
          artistInCommunication: data.contacted_artist || 0,
          joinedFromApp: data.joined_from_app || 0,
          joinedFromWeb: data.joined_from_website || 0,
          joinedUsingReferral: data.referral_used || 0,
          nonPublicProfiles: data.not_public_artist || 0,
          notCompletedAnyOffer: data.no_offer_completed || 0,
          notContactedCustomer: data.no_contacted || 0,
          notCreatedAnyOffers: data.no_offer_created || 0,
          sessionToken: session.user.myToken ?? "",
          totalArtists: data.total_artist || 0,
          totalPublicArtists: data.public_artist || 0,
          genderCount: data.gender || 0,
        },
      },
    };
  } catch (error) {
    return {
      data: null,
    };
  }
}
