import React, { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import { useToggle } from "@/hooks/useToggle";

import { singleArtistProfileDetail } from "@/apiConfig/artistAnalyticsService";
import { blurDataURL } from "@/constants/constants";

import HeaderProfile from "@/analyticsComponents/common/headerProfile";
import useTranslation from "next-translate/useTranslation";
import DataTable from "@/analyticsComponents/dataTable/table";
import DataModel from "@/analyticsComponents/dataTable/model";

import moment from "moment";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function ArtistDetail({ profileData }) {
  const { status, data } = useSession();
  const [showIban, setShowIban] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  const [toggle, onToggle] = useToggle(false);

  const handleToggle = () => {
    setShowIban((prevShowIban) => !prevShowIban);
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/analytics/login");
    }
  }, [status, router]);

  const dataTable = React.useMemo(
    () => [
      {
        offer_code: "220615",
        project: "Flash Garden",
        status: "Pending",
        offer_date: "24/02/2024",
        created_at: "20/02/2024",
        updated_at: "20/02/2024",
        city: "Artesa de Segre",
        payment_type: "Fixed",
        price: "€1560",
        voucher_amount: "None",
        logger: [
          {
            offer: "Offer Objet",
            log_type: "StatusChange",
            offer_amount: "50.00",
            offer_Date: "Jun 1 2014",
            isAmount: "False",
            message: "Offer status changed from draft to pending",
            created_by: "Flash Garden",
            created_at: "Jun 1 2014",
          },

          {
            offer: "Offer Pits sector",
            log_type: "Status ok",
            offer_amount: "250.00",
            offer_Date: "Jun 14 2014",
            isAmount: "True",
            message: "Offer status to pending",
            created_by: "Flash Garden",
            created_at: "Jun 20 2014",
          },
        ],
      },
      {
        offer_code: "11115",
        project: "Sherlok",
        status: "Scheduled",
        offer_date: "24/02/2024",
        created_at: "20/02/2024",
        updated_at: "20/02/2024",
        city: "Artesa de Segre",
        payment_type: "Fixed",
        price: "€1560",
        voucher_amount: "None",

        logger: [
          {
            offer: "Offer Objet",
            log_type: "StatusChange",
            offer_amount: "50.00",
            offer_Date: "Jun 1 2014",
            isAmount: "False",
            message: "Offer status changed from draft to pending",
            created_by: "Flash Garden",
            created_at: "Jun 1 2014",
          },

          {
            offer: "Offer Pits",
            log_type: "Status ok",
            offer_amount: "250.00",
            offer_Date: "Jun 14 2014",
            isAmount: "True",
            message: "Offer status to pending",
            created_by: "Flash Garden",
            created_at: "Jun 20 2014",
          },
        ],
      },
      {
        offer_code: "0615",
        project: "Sherlok_Capital",
        status: "Completed",
        offer_date: "24/02/2024",
        created_at: "20/02/2024",
        updated_at: "20/02/2024",
        city: "Artesa de Segre",
        payment_type: "Fixed",
        price: "€1560",
        voucher_amount: "None",

        logger: [
          {
            offer: "Offer Objet",
            log_type: "StatusChange",
            offer_amount: "50.00",
            offer_Date: "Jun 1 2014",
            isAmount: "False",
            message: "Offer status changed from draft to pending",
            created_by: "Flash Garden",
            created_at: "Jun 1 2014",
          },

          {
            offer: "Offer Pits",
            log_type: "Status ok",
            offer_amount: "250.00",
            offer_Date: "Jun 14 2014",
            isAmount: "True",
            message: "Offer status to pending",
            created_by: "Flash Garden",
            created_at: "Jun 20 2014",
          },
        ],
      },
      {
        offer_code: "820615",
        project: "Neo capital",
        status: "Pending",
        offer_date: "24/02/2024",
        created_at: "20/02/2024",
        updated_at: "20/02/2024",
        city: "Artesa de Segre",
        payment_type: "Fixed",
        price: "€1560",
        voucher_amount: "None",

        logger: [
          {
            offer: "Offer Objet",
            log_type: "StatusChange",
            offer_amount: "50.00",
            offer_Date: "Jun 1 2014",
            isAmount: "False",
            message: "Offer status changed from draft to pending",
            created_by: "Flash Garden",
            created_at: "Jun 1 2014",
          },

          {
            offer: "Offer Pits",
            log_type: "Status ok",
            offer_amount: "250.00",
            offer_Date: "Jun 14 2014",
            isAmount: "True",
            message: "Offer status to pending",
            created_by: "Flash Garden",
            created_at: "Jun 20 2014",
          },
        ],
      },
      {
        offer_code: "22065",
        project: "Spin tattoo capital",
        status: "Scheduled",
        offer_date: "24/02/2024",
        created_at: "20/02/2024",
        updated_at: "20/02/2024",
        city: "Artesa de Segre",
        payment_type: "Fixed",
        price: "€1560",
        voucher_amount: "None",
      },
      {
        offer_code: "20615",
        project: "Capital",
        status: "Pending",
        offer_date: "24/02/2024",
        created_at: "20/02/2024",
        updated_at: "20/02/2024",
        city: "Artesa de Segre",
        payment_type: "Fixed",
        price: "€1560",
        voucher_amount: "None",

        logger: [
          {
            offer: "Offer Objet",
            log_type: "StatusChange",
            offer_amount: "50.00",
            offer_Date: "Jun 1 2014",
            isAmount: "False",
            message: "Offer status changed from draft to pending",
            created_by: "Flash Garden",
            created_at: "Jun 1 2014",
          },

          {
            offer: "Offer Pits",
            log_type: "Status ok",
            offer_amount: "250.00",
            offer_Date: "Jun 14 2014",
            isAmount: "True",
            message: "Offer status to pending",
            created_by: "Flash Garden",
            created_at: "Jun 20 2014",
          },
        ],
      },
      {
        offer_code: "2000",
        project: "CapitalLondon",
        status: "Pending",
        offer_date: "24/02/2024",
        created_at: "20/02/2024",
        updated_at: "20/02/2024",
        city: "Artesa de Segre",
        payment_type: "Non",
        price: "€10",
        voucher_amount: "None",
      },
    ],
    []
  );

  // Column definitions
  const columns = React.useMemo(
    () => [
      {
        Header: "Offer code",
        accessor: "offer_code",
      },
      {
        Header: "Project name",
        accessor: "project",
        Cell: ({ value }) => (
          <span className={`fw_600 color_gray_550`}>{value}</span>
        ),
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => (
          <span className={`status_indicator status_${value.toLowerCase()}`}>
            {value}
          </span>
        ),
      },
      {
        Header: "Offer date",
        accessor: "offer_date",
      },
      {
        Header: "Created on",
        accessor: "created_at",
      },
      {
        Header: "Updated on",
        accessor: "updated_at",
      },

      {
        Header: "Price type",
        accessor: "payment_type",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Voucher",
        accessor: "voucher_amount",
      },

      {
        Header: "Actions",
        accessor: "logger",
        Cell: ({ value }) => (
          <button className="logButton" onClick={() => handleViewLog(value)}>
            View log
          </button>
        ),
      },
    ],
    []
  );

  const [currentLogData, setCurrentLogData] = useState([]);

  const handleViewLog = (logData) => {
    console.log(logData,"logData")
    setCurrentLogData(logData);
    onToggle();
  };

  const {
    detail: {
      public_profile,
      profile_approved_date,
      artist_name,
      first_name,
      last_name,
      country,
      app_language,
      gender,
      email,
      phone_no,
      dob,
      kyc_status,
      iban,
      created_date,
      any_offers_created,
      any_artists_referred,
      any_customers_referred,
      payout_pending,
      main_studio_details,
    },
  } = profileData;

  const ibanNum = iban;
  const hiddenIban = ibanNum
    ? new Array(iban.length + 1).join("*")
    : "----------";

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
              <div className="user_profile_block">
                <div className="user_profile_pic">
                  <Image
                    src="/placeHolder.png"
                    alt="user"
                    width="40"
                    height="40"
                    priority
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                  />
                </div>
                <div className="user_profile_detail">
                  <div className="d_flex flex_direction_column">
                    <div className="user_profile_name">
                      {artist_name || `${first_name} ${last_name}`}
                    </div>
                    <div className="user_profile_sub">
                      ({`Artist ${artist_name || first_name}`})
                    </div>
                  </div>

                  <div className="user_profile_address">
                    <div className="user_profile_adrs_title">
                      {main_studio_details.name}
                    </div>
                    <div className="user_profile_adrs_sub">
                      {`${
                        main_studio_details.city_name
                          ? main_studio_details.city_name + ", "
                          : ""
                      }${country}${
                        main_studio_details.zipcode
                          ? " PO-Box: " + main_studio_details.zipcode
                          : ""
                      }`}
                    </div>
                  </div>
                </div>
                <div className="user_profile_link">
                  <button
                    type="button"
                    className="btn_secondary block_bg_green_800 btn_public"
                  >
                    {public_profile === true ? "Public" : "Non Public"}
                  </button>
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
                  <div className="db_main_info_col">
                    <div className="db_main_info_head">
                      <h3 className="color_gray_550 custom_fs_26 fw_400 mb_0">
                        My Profile
                      </h3>
                      <ul className="head_status_block">
                        <li>
                          <h6 className="head_status_label">Profile status</h6>
                          <span className="status_indicator block_bg_green_100 color_green_900">
                            {public_profile ? "Public" : "Non Public"}
                          </span>
                        </li>
                        {profile_approved_date && (
                          <li>
                            <h6 className="head_status_label">
                              Profile public date:
                            </h6>
                            <span className="head_status_date">
                              {moment(profile_approved_date).format(
                                "DD/MM/YYYY"
                              )}
                            </span>
                          </li>
                        )}
                      </ul>
                    </div>
                    <div className="profile_info_col_wrap">
                      <div className="profile_personal_info">
                        <h4 className="profile_personal_label">Locations</h4>
                        <div className="profile_personal_info_col">
                          <ul className="profile_info_list">
                            <li>
                              <label>Artist Name</label>
                              <span className="profile_list_desc">
                                {artist_name || `${first_name} ${last_name}`}
                              </span>
                            </li>
                            <li>
                              <label>First Name</label>
                              <span className="profile_list_desc">
                                {first_name}
                              </span>
                            </li>
                            <li>
                              <label>Last Name</label>
                              <span className="profile_list_desc">
                                {last_name}
                              </span>
                            </li>
                          </ul>
                          <ul className="profile_info_list">
                            <li>
                              <label>Country</label>
                              <span className="profile_list_desc">
                                {country}
                              </span>
                            </li>
                            <li>
                              <label>Language</label>
                              <span className="profile_list_desc">
                                {app_language}
                              </span>
                            </li>
                            <li>
                              <label>Gender</label>
                              <span className="profile_list_desc">
                                {gender}
                              </span>
                            </li>
                          </ul>
                          <ul className="profile_info_list">
                            <li>
                              <label>Email</label>
                              <span className="profile_list_desc">
                                {email}
                                <Image
                                  src="/circle_tick.svg"
                                  width={16}
                                  height={17}
                                  alt="tick"
                                  priority
                                  className="ml_5 mt_5"
                                />
                              </span>
                            </li>
                            <li>
                              <label>Phone</label>
                              <span className="profile_list_desc">
                                {phone_no || "----------"}
                                {phone_no && (
                                  <Image
                                    src="/circle_tick.svg"
                                    width={16}
                                    height={17}
                                    alt="tick"
                                    priority
                                    className="ml_5 mt_5"
                                  />
                                )}
                              </span>
                            </li>
                            <li>
                              <label>Date of Birth</label>
                              <span className="profile_list_desc">{dob}</span>
                            </li>
                          </ul>
                          <ul className="profile_info_list">
                            <li>
                              <label>KYC status</label>
                              <span className="profile_list_desc">
                                <Image
                                  src="/circle_tick.svg"
                                  width={16}
                                  height={17}
                                  alt="tick"
                                  priority
                                  className="mr_5 mt_5"
                                />
                                {kyc_status}
                              </span>
                            </li>
                            <li>
                              <label>IBAN number</label>
                              <span className="profile_list_desc align_item_center">
                                <span className="password_blocker">
                                  {showIban ? iban : hiddenIban}
                                </span>
                                {iban && (
                                  <button onClick={handleToggle} className="pl_0 pr_0 ml_5 lh_22 h_24">
                                    {!showIban ? (
                                      <AiOutlineEyeInvisible size={24} />
                                    ) : (
                                      <AiOutlineEye size={24} />
                                    )}
                                  </button>
                                )}
                              </span>
                            </li>
                            <li>
                              <label>Joined date</label>
                              <span className="profile_list_desc">
                                {moment(created_date).format("DD/MM/YYYY")}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="profile_other_info">
                        <h4 className="profile_personal_label">
                          Other information
                        </h4>
                        <div className="profile_other_info_col mb_25">
                          <ul className="profile_info_list">
                            <li className="w_50pc">
                              <label>Any offers created</label>
                              <span className="profile_list_desc">
                                {any_offers_created === "True" ? "Yes" : "No"}
                              </span>
                            </li>
                            <li className="w_50pc">
                              <label>Any artist referred</label>
                              <span className="profile_list_desc">
                                {any_artists_referred === "True" ? "Yes" : "No"}
                              </span>
                            </li>
                          </ul>
                          <ul className="profile_info_list">
                            <li className="w_50pc">
                              <label>Any customer referred</label>
                              <span className="profile_list_desc">
                                {any_customers_referred === "True"
                                  ? "Yes"
                                  : "No"}
                              </span>
                            </li>
                            <li className="w_50pc">
                              <label>Payout pending</label>
                              <span className="profile_list_desc">
                                {payout_pending === "True" ? "Yes" : "No"}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <h4 className="profile_personal_label">
                          Main studio information
                        </h4>
                        <div className="studio_profile_details">
                          <div className="studio_profile_pic">
                            <Image
                              src="/icon_studio.svg"
                              alt="studio"
                              width="17"
                              height="16"
                              priority
                            />
                          </div>
                          <div className="flex">
                            {main_studio_details.name && (
                              <div className="studio_profile_name">
                                {main_studio_details.name}
                              </div>
                            )}
                            <div className="studio_profile_sub">
                              {main_studio_details.city_name &&
                                `${main_studio_details.city_name}, `}
                              {country}
                              {main_studio_details.zipcode &&
                                ` PO-Box: ${main_studio_details.zipcode}`}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <DataTable columns={columns} data={dataTable} />
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

     {toggle && <DataModel currentLogData={currentLogData} />}

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

  const { query } = context;
  const { slug } = query;

  try {
    const res = await singleArtistProfileDetail(session.user.myToken, slug);

    // Check if response data is valid
    if (!res || !res.data || res.data.length === 0) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        profileData: {
          sessionToken: session.user.myToken ?? "",
          detail: res.data[0],
        },
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
