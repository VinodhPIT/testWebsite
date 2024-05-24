import React, { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import {useSession } from "next-auth/react";

import HeaderProfile from "@/analyticsComponents/common/headerProfile"

import useTranslation from "next-translate/useTranslation";
import DataTable from "@/analyticsComponents/dataTable/table";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function ArtistAnalytics({ }) {
  const { status, data } = useSession();
  const router = useRouter();
  const { t } = useTranslation();
 
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/analytics/login");
    }
  }, [status, router]);


  const dataTable = React.useMemo(
    () => [
      { offerCode: '220615456', projectName: 'Flash Garden', status: 'Pending', offerDate: '24/02/2024', createdOn: '20/02/2024', updatedOn: '20/02/2024', city: 'Artesa de Segre', priceType: 'Fixed', price: '€1560', voucher: 'None' },
      { offerCode: '220615456', projectName: 'Simon Roger', status: 'Scheduled', offerDate: '24/02/2024', createdOn: '20/02/2024', updatedOn: '20/02/2024', city: 'Artesa de Segre', priceType: 'Fixed', price: '€1560', voucher: 'None' },
      { offerCode: '220615456', projectName: 'Smiley Cutie', status: 'Completed', offerDate: '24/02/2024', createdOn: '20/02/2024', updatedOn: '20/02/2024', city: 'Artesa de Segre', priceType: 'Fixed', price: '€1560', voucher: 'None' },
      { offerCode: '220615456', projectName: 'Flash Garden', status: 'Pending', offerDate: '24/02/2024', createdOn: '20/02/2024', updatedOn: '20/02/2024', city: 'Artesa de Segre', priceType: 'Fixed', price: '€1560', voucher: 'None' },
      { offerCode: '220615456', projectName: 'Spain Modern Tattoo', status: 'Scheduled', offerDate: '24/02/2024', createdOn: '20/02/2024', updatedOn: '20/02/2024', city: 'Artesa de Segre', priceType: 'Fixed', price: '€1560', voucher: 'None' },
      { offerCode: '220615456', projectName: 'Flash Garden', status: 'Pending', offerDate: '24/02/2024', createdOn: '20/02/2024', updatedOn: '20/02/2024', city: 'Artesa de Segre', priceType: 'Fixed', price: '€1560', voucher: 'None' },
      { offerCode: '220615456', projectName: 'Flash Garden', status: 'Completed', offerDate: '24/02/2024', createdOn: '20/02/2024', updatedOn: '20/02/2024', city: 'Artesa de Segre', priceType: 'Fixed', price: '€1560', voucher: 'None' },
      { offerCode: '220615456', projectName: 'Flash Garden', status: 'Completed', offerDate: '24/02/2024', createdOn: '20/02/2024', updatedOn: '20/02/2024', city: 'Artesa de Segre', priceType: 'Fixed', price: '€1560', voucher: 'None' },
      { offerCode: '220615456', projectName: 'Flash Garden', status: 'Completed', offerDate: '24/02/2024', createdOn: '20/02/2024', updatedOn: '20/02/2024', city: 'Artesa de Segre', priceType: 'Fixed', price: '€1560', voucher: 'None' },
      { offerCode: '220615456', projectName: 'Flash Garden', status: 'Completed', offerDate: '24/02/2024', createdOn: '20/02/2024', updatedOn: '20/02/2024', city: 'Artesa de Segre', priceType: 'Fixed', price: '€1560', voucher: 'None' },
      { offerCode: '220615456', projectName: 'Flash Garden', status: 'Completed', offerDate: '24/02/2024', createdOn: '20/02/2024', updatedOn: '20/02/2024', city: 'Artesa de Segre', priceType: 'Fixed', price: '€1560', voucher: 'None' },
      { offerCode: '220615456', projectName: 'Flash Garden', status: 'Completed', offerDate: '24/02/2024', createdOn: '20/02/2024', updatedOn: '20/02/2024', city: 'Artesa de Segre', priceType: 'Fixed', price: '€1560', voucher: 'None' },
      { offerCode: '220615456', projectName: 'Flash Garden', status: 'Completed', offerDate: '24/02/2024', createdOn: '20/02/2024', updatedOn: '20/02/2024', city: 'Artesa de Segre', priceType: 'Fixed', price: '€1560', voucher: 'None' },
      { offerCode: '220615456', projectName: 'Flash Garden', status: 'Completed', offerDate: '24/02/2024', createdOn: '20/02/2024', updatedOn: '20/02/2024', city: 'Artesa de Segre', priceType: 'Fixed', price: '€1560', voucher: 'None' },
      { offerCode: '220615456', projectName: 'Flash Garden', status: 'Completed', offerDate: '24/02/2024', createdOn: '20/02/2024', updatedOn: '20/02/2024', city: 'Artesa de Segre', priceType: 'Fixed', price: '€1560', voucher: 'None' },
      { offerCode: '220615456', projectName: 'Flash Garden', status: 'Completed', offerDate: '24/02/2024', createdOn: '20/02/2024', updatedOn: '20/02/2024', city: 'Artesa de Segre', priceType: 'Fixed', price: '€1560', voucher: 'None' },
      { offerCode: '220615456', projectName: 'Flash Garden', status: 'Completed', offerDate: '24/02/2024', createdOn: '20/02/2024', updatedOn: '20/02/2024', city: 'Artesa de Segre', priceType: 'Fixed', price: '€1560', voucher: 'None' },
    ],
    []
  )

  // Column definitions
const columns = React.useMemo(
  () => [
    {
      Header: 'Offer code',
      accessor: 'offerCode',
    },
    {
      Header: 'Project name',
      accessor: 'projectName',
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: ({ value }) => (
        <span className={`status_${value.toLowerCase()}`}>{value}</span>
      ),
    },
    {
      Header: 'Offer date',
      accessor: 'offerDate',
    },
    {
      Header: 'Created on',
      accessor: 'createdOn',
    },
    {
      Header: 'Updated on',
      accessor: 'updatedOn',
    },
    {
      Header: 'City',
      accessor: 'city',
    },
    {
      Header: 'Price type',
      accessor: 'priceType',
    },
    {
      Header: 'Price',
      accessor: 'price',
    },
    {
      Header: 'Voucher',
      accessor: 'voucher',
    },
    {
      Header: 'Actions',
      accessor: 'Actions',
    },
  ],
  []
);
 






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
                  <DataTable columns={columns} data={dataTable} />
                </TabPanel>   

                
              </Tabs>

            </div>
          </div>
        </div>
      </section>      
     


    </>
  );
}

