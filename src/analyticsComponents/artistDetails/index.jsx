import React, { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import moment from 'moment';

import DatePicker, { utils } from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';

import { analyticsCustomerCountWithFIlter , analyticsCustomerLeadSourceCountWithFIlter} from "@/action/action";

const Apitype = {
    artistCompletedOffers:'',
    artistInCommunication:'',
    joinedFromApp:'',
    joinedFromWeb:'',
    joinedUsingReferral:'',
    nonPublicProfiles:'',
    notCompletedAnyOffer:'',
    notContactedCustomer:'',
    notCreatedAnyOffers:'',
    totalArtists:'',
    totalPublicArtists:''
  }

const initialValue = {
    artistCompletedOffers:{
        from: null,
        to: null
    },
    artistInCommunication:{
        from: null,
        to: null
    },
    joinedFromApp:{
        from: null,
        to: null
    },
    joinedFromWeb:{
        from: null,
        to: null
    },
    joinedUsingReferral:{
        from: null,
        to: null
    },
    nonPublicProfiles:{
        from: null,
        to: null
    },
    notCompletedAnyOffer:{
        from: null,
        to: null
    },
    notContactedCustomer:{
        from: null,
        to: null
    },
    notCreatedAnyOffers:{
        from: null,
        to: null
    },
    totalArtists:{
        from: null,
        to: null
    },
    totalPublicArtists:{
        from: null,
        to: null
    }
};

export default function ArtistDetails({initialCounts}) {
    const [countData, setCountData]=useState(initialCounts);
    const [dateRange, setDateRange] = useState(initialValue);
    const [selectedDayRange, setSelectedDayRange] = useState(initialValue);

    const renderCustomInput = ({ ref }) => (
        <input
            readOnly
            ref={ref}
            className="datepicker_input"
            title="Date Range"
        />
    )

    const handleDownload = (type, startDate, endDate) => {
    const link = document.createElement('a');
    link.href = `${process.env.analyticsBaseUrl}/customer/csv/${type}?start_date=${startDate}&end_date=${endDate}`;
    link.target = '_blank';
    link.download = `${new Date().getTime()}.csv`;
    link.click();
  };

  const handleDateFilter = async (key, dateRangeValue) => {
      setSelectedDayRange({
        ...selectedDayRange,
        [key]: dateRangeValue
    });
      const { from, to } = dateRangeValue;
      const fromDate = `${from?.year}-${from?.month}-${from?.day}` || '';
      const toDate = to ? `${to?.year}-${to?.month}-${to?.day}` : null;
      if (fromDate && toDate) {
        if(key==="joinedFromApp"||key==="joinedFromWeb"){
            const res = await analyticsCustomerLeadSourceCountWithFIlter({
                startDate: fromDate,
                endDate: toDate
            });
            setCountData({
                ...countData,
                ...(key==="joinedFromApp" && { joinedFromApp: res.filter((custData)=> custData.lead_source==="APP").length }),
                ...(key==="joinedFromWeb" && { joinedFromWeb: res.filter((custData)=> custData.lead_source!=="APP").length })
            })
            setDateRange({
              ...dateRange,
              [key]: {
                from: fromDate,
                to: toDate
            }
          });
        } else {
            const res = await analyticsCustomerCountWithFIlter({
                type: Apitype[key],
                startDate: fromDate,
                endDate: toDate
            });
            setCountData({
                ...countData,
                [key]: res[Apitype[key]]
            });
            setDateRange({
              ...dateRange,
              [key]: {
                from: fromDate,
                to: toDate
            }
          });
        }
      }
  }

  return (
        <section className="container-fluid">
            <div className="db_customer_detail_wrap">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div className="db_card block_bg_yellow_300">
                            <div className="db_card_body p_16">
                                <div className="d_flex justify_space_between align_item_center pb_12">
                                    <div>
                                        <h4>Total artist</h4>
                                        <p>
                                            {
                                            dateRange.totalArtists.from&&dateRange.totalArtists.from
                                                ?`${moment(dateRange.totalArtists.from).format('DD MMM YYYY')} ${moment(dateRange.totalArtists.to).format('DD MMM YYYY') !== moment(dateRange.totalArtists.from).format('DD MMM YYYY')? `- ${moment(dateRange.totalArtists.to).format('DD MMM YYYY')}`:''}`
                                                :''
                                            }
                                        </p>
                                    </div>   
                                    <div className="db_icon_shape db_icon_cal">  
                                        <div>
                                            <Image
                                              src="/icon_calender_new.svg"
                                              alt="Download"
                                              width="24"
                                              height="24"
                                              priority
                                            />
                                            <DatePicker
                                                value={selectedDayRange.totalArtists}
                                                onChange={(val)=>handleDateFilter('totalArtists', val)}
                                                shouldHighlightWeekends
                                                maximumDate={utils('en').getToday()}
                                                renderInput={renderCustomInput}
                                            />
                                        </div>
                                    </div>                            
                                </div>
                                <div className="d_flex justify_space_between align_item_center">
                                    <h2>{countData.totalArtists}</h2>
                                    <div className="db_icon_shape">
                                        <Link href="" className="d_inline_block" onClick={() => handleDownload('total_count','2023-01-01','2024-01-01')}>
                                            <Image
                                              src="/db_icon_download.svg"
                                              alt="Download"
                                              width="24"
                                              height="24"
                                              priority
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div className="db_card block_bg_green_100">
                            <div className="db_card_body p_16">
                                <div className="d_flex justify_space_between align_item_center pb_12">
                                    <div>
                                        <h4>Total Public artists</h4>
                                        <p>
                                            {
                                            dateRange.totalPublicArtists.from&&dateRange.totalPublicArtists.from
                                                ?`${moment(dateRange.totalPublicArtists.from).format('DD MMM YYYY')} ${moment(dateRange.totalPublicArtists.to).format('DD MMM YYYY') !== moment(dateRange.totalPublicArtists.from).format('DD MMM YYYY')? `- ${moment(dateRange.totalPublicArtists.to).format('DD MMM YYYY')}`:''}`
                                                :''
                                            }
                                        </p>
                                    </div>   
                                    <div className="db_icon_shape db_icon_cal">  
                                        <div>
                                            <Image
                                              src="/icon_calender_new.svg"
                                              alt="Download"
                                              width="24"
                                              height="24"
                                              priority
                                            />
                                            <DatePicker
                                                maximumDate={utils('en').getToday()}
                                                onChange={(val)=>handleDateFilter('totalPublicArtists', val)}
                                                renderInput={renderCustomInput}
                                                shouldHighlightWeekends
                                                value={selectedDayRange.totalPublicArtists}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="d_flex justify_space_between align_item_center">
                                    <h2>{countData.totalPublicArtists}</h2>
                                    <div className="db_icon_shape">
                                        <Link href="" className="d_inline_block" onClick={() => handleDownload('no_contacted','2023-01-01','2024-01-01')}>
                                            <Image
                                              src="/db_icon_download.svg"
                                              alt="Download"
                                              width="24"
                                              height="24"
                                              priority
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div className="db_card block_bg_blue_50">
                            <div className="db_card_body p_16">
                                <div className="d_flex justify_space_between align_item_center pb_12">
                                    <div>
                                        <h4>Artists in communication with the customer</h4> 
                                        <p>
                                            {
                                            dateRange.artistInCommunication.from&&dateRange.artistInCommunication.from
                                                ?`${moment(dateRange.artistInCommunication.from).format('DD MMM YYYY')} ${moment(dateRange.artistInCommunication.to).format('DD MMM YYYY') !== moment(dateRange.artistInCommunication.from).format('DD MMM YYYY')? `- ${moment(dateRange.artistInCommunication.to).format('DD MMM YYYY')}`:''}`
                                                :''
                                            }
                                        </p>
                                    </div>  
                                    <div className="db_icon_shape db_icon_cal"> 
                                        <div>
                                            <Image
                                              src="/icon_calender_new.svg"
                                              alt="Download"
                                              width="24"
                                              height="24"
                                              priority
                                            />
                                            <DatePicker
                                                value={selectedDayRange.artistInCommunication}
                                                onChange={(val)=>handleDateFilter('artistInCommunication', val)}
                                                shouldHighlightWeekends
                                                maximumDate={utils('en').getToday()}
                                                renderInput={renderCustomInput}
                                            />
                                        </div>
                                    </div>                            
                                </div>
                                <div className="d_flex justify_space_between align_item_center">
                                    <h2>{countData.artistInCommunication}</h2>
                                    <div className="db_icon_shape">
                                        <Link href="" className="d_inline_block" onClick={() => handleDownload('customer_no_offer_completed','2023-01-01','2024-01-01')}>
                                            <Image
                                              src="/db_icon_download.svg"
                                              alt="Download"
                                              width="24"
                                              height="24"
                                              priority
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div className="db_card  block_bg_orange_100">
                            <div className="db_card_body p_16">
                                <div className="d_flex justify_space_between align_item_center pb_12">
                                    <div>
                                        <h4>Artists who completed at least one offer </h4>   
                                        <p>
                                            {
                                            dateRange.artistCompletedOffers.from&&dateRange.artistCompletedOffers.from
                                                ?`${moment(dateRange.artistCompletedOffers.from).format('DD MMM YYYY')} ${moment(dateRange.artistCompletedOffers.to).format('DD MMM YYYY') !== moment(dateRange.artistCompletedOffers.from).format('DD MMM YYYY')? `- ${moment(dateRange.artistCompletedOffers.to).format('DD MMM YYYY')}`:''}`
                                                :''
                                            }
                                        </p>
                                    </div>  
                                    <div className="db_icon_shape db_icon_cal">   
                                        <div>
                                            <Image
                                              src="/icon_calender_new.svg"
                                              alt="Download"
                                              width="24"
                                              height="24"
                                              priority
                                            />
                                            <DatePicker
                                                value={selectedDayRange.artistCompletedOffers}
                                                onChange={(val)=>handleDateFilter('artistCompletedOffers', val)}
                                                shouldHighlightWeekends
                                                maximumDate={utils('en').getToday()}
                                                renderInput={renderCustomInput}
                                            />
                                        </div>
                                    </div>                             
                                </div>
                                <div className="d_flex justify_space_between align_item_center">
                                    <h2>{countData.artistCompletedOffers}</h2>
                                    <div className="db_icon_shape">
                                        <Link href="" className="d_inline_block" onClick={() => handleDownload('contacted_with_no_offer','2023-01-01','2024-01-01')}>
                                            <Image
                                              src="/db_icon_download.svg"
                                              alt="Download"
                                              width="24"
                                              height="24"
                                              priority
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div className="db_card block_bg_yellow_300">
                            <div className="db_card_body p_16">
                                <div className="d_flex justify_space_between align_item_center pb_12">
                                    <div>
                                        <h4>Artists who didn’t complete any offers</h4>
                                        <p>
                                            {
                                            dateRange.notCompletedAnyOffer.from&&dateRange.notCompletedAnyOffer.from
                                                ?`${moment(dateRange.notCompletedAnyOffer.from).format('DD MMM YYYY')} ${moment(dateRange.notCompletedAnyOffer.to).format('DD MMM YYYY') !== moment(dateRange.notCompletedAnyOffer.from).format('DD MMM YYYY')? `- ${moment(dateRange.notCompletedAnyOffer.to).format('DD MMM YYYY')}`:''}`
                                                :''
                                            }
                                        </p>
                                    </div>  
                                    <div className="db_icon_shape db_icon_cal"> 
                                        <div>
                                            <Image
                                              src="/icon_calender_new.svg"
                                              alt="Download"
                                              width="24"
                                              height="24"
                                              priority
                                            />
                                            <DatePicker
                                                value={selectedDayRange.notCompletedAnyOffer}
                                                onChange={(val)=>handleDateFilter('notCompletedAnyOffer', val)}
                                                shouldHighlightWeekends
                                                maximumDate={utils('en').getToday()}
                                                renderInput={renderCustomInput}
                                            />
                                        </div>
                                    </div>                             
                                </div>
                                <div className="d_flex justify_space_between align_item_center">
                                    <h2>{countData.notCompletedAnyOffer}</h2>
                                    <div className="db_icon_shape">
                                        <Link href="" className="d_inline_block" onClick={() => handleDownload('deleted','2023-01-01','2024-01-01')}>
                                            <Image
                                              src="/db_icon_download.svg"
                                              alt="Download"
                                              width="24"
                                              height="24"
                                              priority
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div className="db_card block_bg_green_100">
                            <div className="db_card_body p_16">
                                <div className="d_flex justify_space_between align_item_center pb_12">
                                    <div>
                                        <h4>Artists joined using referral</h4>
                                        <p>
                                            {
                                            dateRange.joinedUsingReferral.from&&dateRange.joinedUsingReferral.from
                                                ?`${moment(dateRange.joinedUsingReferral.from).format('DD MMM YYYY')} ${moment(dateRange.joinedUsingReferral.to).format('DD MMM YYYY') !== moment(dateRange.joinedUsingReferral.from).format('DD MMM YYYY')? `- ${moment(dateRange.joinedUsingReferral.to).format('DD MMM YYYY')}`:''}`
                                                :''
                                            }
                                        </p>
                                    </div>
                                    <div className="db_icon_shape db_icon_cal">  
                                        <div>
                                            <Image
                                              src="/icon_calender_new.svg"
                                              alt="Download"
                                              width="24"
                                              height="24"
                                              priority
                                            />
                                            <DatePicker
                                                value={selectedDayRange.joinedUsingReferral}
                                                onChange={(val)=>handleDateFilter('joinedUsingReferral', val)}
                                                shouldHighlightWeekends
                                                maximumDate={utils('en').getToday()}
                                                renderInput={renderCustomInput}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="d_flex justify_space_between align_item_center">
                                    <h2>{countData.joinedUsingReferral}</h2>
                                    <div className="db_icon_shape">
                                        <Link href="" className="d_inline_block" onClick={() => handleDownload('voucher_used_customer','2023-01-01','2024-01-01')}>
                                            <Image
                                              src="/db_icon_download.svg"
                                              alt="Download"
                                              width="24"
                                              height="24"
                                              priority
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div className="db_card block_bg_blue_50">
                            <div className="db_card_body p_16">
                                <div className="d_flex justify_space_between align_item_center pb_12">
                                    <div>
                                        <h4>Artists joined from website</h4> 
                                        <p>
                                            {
                                            dateRange.joinedFromWeb.from&&dateRange.joinedFromWeb.from
                                                ?`${moment(dateRange.joinedFromWeb.from).format('DD MMM YYYY')} ${moment(dateRange.joinedFromWeb.to).format('DD MMM YYYY') !== moment(dateRange.joinedFromWeb.from).format('DD MMM YYYY')? `- ${moment(dateRange.joinedFromWeb.to).format('DD MMM YYYY')}`:''}`
                                                :''
                                            }
                                        </p>
                                    </div>  
                                    <div className="db_icon_shape db_icon_cal">  
                                        <div>
                                            <Image
                                              src="/icon_calender_new.svg"
                                              alt="Download"
                                              width="24"
                                              height="24"
                                              priority
                                            />
                                            <DatePicker
                                                value={selectedDayRange.joinedFromWeb}
                                                onChange={(val)=>handleDateFilter('joinedFromWeb', val)}
                                                shouldHighlightWeekends
                                                maximumDate={utils('en').getToday()}
                                                renderInput={renderCustomInput}
                                            />
                                        </div>
                                    </div>                             
                                </div>
                                <div className="d_flex justify_space_between align_item_center">
                                    <h2>{countData.joinedFromWeb}</h2>
                                    <div className="db_icon_shape">
                                        <Link href="" className="d_inline_block" onClick={() => handleDownload('referral_used_customer','2023-01-01','2024-01-01')}>
                                            <Image
                                              src="/db_icon_download.svg"
                                              alt="Download"
                                              width="24"
                                              height="24"
                                              priority
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div className="db_card  block_bg_orange_100">
                            <div className="db_card_body p_16">
                                <div className="d_flex justify_space_between align_item_center pb_12">
                                    <div>
                                        <h4>Artists joined from App </h4>   
                                        <p>
                                            {
                                            dateRange.joinedFromApp.from&&dateRange.joinedFromApp.from
                                                ?`${moment(dateRange.joinedFromApp.from).format('DD MMM YYYY')} ${moment(dateRange.joinedFromApp.to).format('DD MMM YYYY') !== moment(dateRange.joinedFromApp.from).format('DD MMM YYYY')? `- ${moment(dateRange.joinedFromApp.to).format('DD MMM YYYY')}`:''}`
                                                :''
                                            }
                                        </p>
                                    </div>  
                                    <div className="db_icon_shape db_icon_cal">   
                                        <div>
                                            <Image
                                              src="/icon_calender_new.svg"
                                              alt="Download"
                                              width="24"
                                              height="24"
                                              priority
                                            />
                                            <DatePicker
                                                value={selectedDayRange.joinedFromApp}
                                                onChange={(val)=>handleDateFilter('joinedFromApp', val)}
                                                shouldHighlightWeekends
                                                maximumDate={utils('en').getToday()}
                                                renderInput={renderCustomInput}
                                            />
                                        </div>
                                    </div>                             
                                </div>
                                <div className="d_flex justify_space_between align_item_center">
                                    <h2>{countData.joinedFromApp}</h2>
                                    <div className="db_icon_shape">
                                        <Link href="" className="d_inline_block" onClick={() => handleDownload('contacted_with_no_offer','2023-01-01','2024-01-01')}>
                                            <Image
                                              src="/db_icon_download.svg"
                                              alt="Download"
                                              width="24"
                                              height="24"
                                              priority
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div className="db_card  block_bg_yellow_300">
                            <div className="db_card_body p_16">
                                <div className="d_flex justify_space_between align_item_center pb_12">
                                    <div>
                                        <h4>Artists not contacted any customers</h4>
                                        <p>
                                            {
                                            dateRange.notContactedCustomer.from&&dateRange.notContactedCustomer.from
                                                ?`${moment(dateRange.notContactedCustomer.from).format('DD MMM YYYY')} ${moment(dateRange.notContactedCustomer.to).format('DD MMM YYYY') !== moment(dateRange.notContactedCustomer.from).format('DD MMM YYYY')? `- ${moment(dateRange.notContactedCustomer.to).format('DD MMM YYYY')}`:''}`
                                                :''
                                            }
                                        </p>
                                    </div>    
                                    <div className="db_icon_shape db_icon_cal">  
                                        <div>
                                            <Image
                                              src="/icon_calender_new.svg"
                                              alt="Download"
                                              width="24"
                                              height="24"
                                              priority
                                            />
                                            <DatePicker
                                                value={selectedDayRange.notContactedCustomer}
                                                onChange={(val)=>handleDateFilter('notContactedCustomer', val)}
                                                shouldHighlightWeekends
                                                maximumDate={utils('en').getToday()}
                                                renderInput={renderCustomInput}
                                            />
                                        </div>
                                    </div>                           
                                </div>
                                <div className="d_flex justify_space_between align_item_center">
                                    <h2>{countData.notContactedCustomer}</h2>
                                    <div className="db_icon_shape">
                                        <Link href="" className="d_inline_block" onClick={() => handleDownload('total_count','2023-01-01','2024-01-01')}>
                                            <Image
                                              src="/db_icon_download.svg"
                                              alt="Download"
                                              width="24"
                                              height="24"
                                              priority
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div className="db_card block_bg_green_100">
                            <div className="db_card_body p_16">
                                <div className="d_flex justify_space_between align_item_center pb_12">
                                    <div>
                                        <h4>Artists not created any offers</h4>
                                        <p>
                                            {
                                            dateRange.notCreatedAnyOffers.from&&dateRange.notCreatedAnyOffers.from
                                                ?`${moment(dateRange.notCreatedAnyOffers.from).format('DD MMM YYYY')} ${moment(dateRange.notCreatedAnyOffers.to).format('DD MMM YYYY') !== moment(dateRange.notCreatedAnyOffers.from).format('DD MMM YYYY')? `- ${moment(dateRange.notCreatedAnyOffers.to).format('DD MMM YYYY')}`:''}`
                                                :''
                                            }
                                        </p>
                                    </div>
                                    <div className="db_icon_shape db_icon_cal">  
                                        <div>
                                            <Image
                                              src="/icon_calender_new.svg"
                                              alt="Download"
                                              width="24"
                                              height="24"
                                              priority
                                            />
                                            <DatePicker
                                                value={selectedDayRange.notCreatedAnyOffers}
                                                onChange={(val)=>handleDateFilter('notCreatedAnyOffers', val)}
                                                shouldHighlightWeekends
                                                maximumDate={utils('en').getToday()}
                                                renderInput={renderCustomInput}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="d_flex justify_space_between align_item_center">
                                    <h2>{countData.notCreatedAnyOffers}</h2>
                                    <div className="db_icon_shape">
                                        <Link href="" className="d_inline_block" onClick={() => handleDownload('voucher_used_customer','2023-01-01','2024-01-01')}>
                                            <Image
                                              src="/db_icon_download.svg"
                                              alt="Download"
                                              width="24"
                                              height="24"
                                              priority
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div className="db_card block_bg_blue_50">
                            <div className="db_card_body p_16">
                                <div className="d_flex justify_space_between align_item_center pb_12">
                                    <div>
                                        <h4>Artists not completed public profile criteria</h4> 
                                        <p>
                                            {
                                            dateRange.nonPublicProfiles.from&&dateRange.nonPublicProfiles.from
                                                ?`${moment(dateRange.nonPublicProfiles.from).format('DD MMM YYYY')} ${moment(dateRange.nonPublicProfiles.to).format('DD MMM YYYY') !== moment(dateRange.nonPublicProfiles.from).format('DD MMM YYYY')? `- ${moment(dateRange.nonPublicProfiles.to).format('DD MMM YYYY')}`:''}`
                                                :''
                                            }
                                        </p>
                                    </div>  
                                    <div className="db_icon_shape db_icon_cal">  
                                        <div>
                                            <Image
                                              src="/icon_calender_new.svg"
                                              alt="Download"
                                              width="24"
                                              height="24"
                                              priority
                                            />
                                            <DatePicker
                                                value={selectedDayRange.nonPublicProfiles}
                                                onChange={(val)=>handleDateFilter('nonPublicProfiles', val)}
                                                shouldHighlightWeekends
                                                maximumDate={utils('en').getToday()}
                                                renderInput={renderCustomInput}
                                            />
                                        </div>
                                    </div>                             
                                </div>
                                <div className="d_flex justify_space_between align_item_center">
                                    <h2>{countData.nonPublicProfiles}</h2>
                                    <div className="db_icon_shape">
                                        <Link href="" className="d_inline_block" onClick={() => handleDownload('referral_used_customer','2023-01-01','2024-01-01')}>
                                            <Image
                                              src="/db_icon_download.svg"
                                              alt="Download"
                                              width="24"
                                              height="24"
                                              priority
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
