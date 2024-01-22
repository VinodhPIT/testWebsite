import React, { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import moment from 'moment';
import DatePicker, { utils } from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { analyticsCustomerCountWithFIlter , analyticsCustomerLeadSourceCountWithFIlter} from "@/action/action";

const Apitype = {
    contactedWithNoOffer:'contacted_with_no_offer',
    deletedCustomers:'deleted',
    joinedFromApp:'',
    joinedFromWeb:'',
    noCompletedOffer:'customer_no_offer_completed',
    notContacted:'no_contacted',
    referralUsedCustomers:'referral_used_customer',
    totalCustomers:'total_count',
    voucherUserCustomers:'voucher_used_customer',
  }

const initialValue = {
    contactedWithNoOffer:{
        from: null,
        to: null
    },
    deletedCustomers:{
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
    noCompletedOffer:{
        from: null,
        to: null
    },
    notContacted:{
        from: null,
        to: null
    },
    referralUsedCustomers:{
        from: null,
        to: null
    },
    totalCustomers:{
        from: null,
        to: null
    },
    voucherUserCustomers:{
        from: null,
        to: null
    }
};

export default function CustomerDetails({initialCounts}) {
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
        if(key==="joinedFromWeb"||key==="joinedFromApp"){
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
                                        <h4>Total customers</h4>
                                        <p>
                                            {dateRange.totalCustomers.from&&dateRange.totalCustomers.from?`${moment(dateRange.totalCustomers.from).format('MMM YYYY')}-${moment(dateRange.totalCustomers.to).format('MMM YYYY')}`:''}
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
                                                value={selectedDayRange.totalCustomers}
                                                onChange={(val)=>handleDateFilter('totalCustomers', val)}
                                                shouldHighlightWeekends
                                                maximumDate={utils('en').getToday()}
                                                renderInput={renderCustomInput}
                                            />
                                        </div>
                                    </div>                            
                                </div>
                                <div className="d_flex justify_space_between align_item_center">
                                    <h2>{countData.totalCustomers}</h2>
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
                                        <h4>Customers not contacted any artists</h4>
                                        <p>
                                        {dateRange.notContacted.from&&dateRange.notContacted.from?`${moment(dateRange.notContacted.from).format('MMM YYYY')}-${moment(dateRange.notContacted.to).format('MMM YYYY')}`:''}
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
                                                className={`datePicker`}
                                                maximumDate={utils('en').getToday()}
                                                onChange={(val)=>handleDateFilter('notContacted', val)}
                                                renderInput={renderCustomInput}
                                                shouldHighlightWeekends
                                                value={selectedDayRange.notContacted}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="d_flex justify_space_between align_item_center">
                                    <h2>{countData.notContacted}</h2>
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
                                        <h4>Customers not completed any offers</h4> 
                                        <p>
                                        {dateRange.noCompletedOffer.from&&dateRange.noCompletedOffer.from?`${moment(dateRange.noCompletedOffer.from).format('MMM YYYY')}-${moment(dateRange.noCompletedOffer.to).format('MMM YYYY')}`:''}
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
                                                value={selectedDayRange.noCompletedOffer}
                                                onChange={(val)=>handleDateFilter('noCompletedOffer', val)}
                                                shouldHighlightWeekends
                                                maximumDate={utils('en').getToday()}
                                                renderInput={renderCustomInput}
                                            />
                                        </div>
                                    </div>                            
                                </div>
                                <div className="d_flex justify_space_between align_item_center">
                                    <h2>{countData.noCompletedOffer}</h2>
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
                                        <h4>Customers contacted the artist and no offer</h4>   
                                        <p>
                                        {dateRange.contactedWithNoOffer.from&&dateRange.contactedWithNoOffer.from?`${moment(dateRange.contactedWithNoOffer.from).format('MMM YYYY')}-${moment(dateRange.contactedWithNoOffer.to).format('MMM YYYY')}`:''}
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
                                                value={selectedDayRange.contactedWithNoOffer}
                                                onChange={(val)=>handleDateFilter('contactedWithNoOffer', val)}
                                                shouldHighlightWeekends
                                                maximumDate={utils('en').getToday()}
                                                renderInput={renderCustomInput}
                                            />
                                        </div>
                                    </div>                             
                                </div>
                                <div className="d_flex justify_space_between align_item_center">
                                    <h2>{countData.contactedWithNoOffer}</h2>
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
                                        <h4>Deleted customers</h4>
                                        <p>
                                        {dateRange.deletedCustomers.from&&dateRange.deletedCustomers.from?`${moment(dateRange.deletedCustomers.from).format('MMM YYYY')}-${moment(dateRange.deletedCustomers.to).format('MMM YYYY')}`:''}
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
                                                value={selectedDayRange.deletedCustomers}
                                                onChange={(val)=>handleDateFilter('deletedCustomers', val)}
                                                shouldHighlightWeekends
                                                maximumDate={utils('en').getToday()}
                                                renderInput={renderCustomInput}
                                            />
                                        </div>
                                    </div>                             
                                </div>
                                <div className="d_flex justify_space_between align_item_center">
                                    <h2>{countData.deletedCustomers}</h2>
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
                                        <h4>Customers used any vouchers</h4>
                                        <p>
                                        {dateRange.voucherUserCustomers.from&&dateRange.voucherUserCustomers.from?`${moment(dateRange.voucherUserCustomers.from).format('MMM YYYY')}-${moment(dateRange.voucherUserCustomers.to).format('MMM YYYY')}`:''}
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
                                                value={selectedDayRange.voucherUserCustomers}
                                                onChange={(val)=>handleDateFilter('voucherUserCustomers', val)}
                                                shouldHighlightWeekends
                                                maximumDate={utils('en').getToday()}
                                                renderInput={renderCustomInput}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="d_flex justify_space_between align_item_center">
                                    <h2>{countData.voucherUserCustomers}</h2>
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
                                        <h4>Customers joined using referral</h4>   
                                        <p>
                                        {dateRange.referralUsedCustomers.from&&dateRange.referralUsedCustomers.from?`${moment(dateRange.referralUsedCustomers.from).format('MMM YYYY')}-${moment(dateRange.referralUsedCustomers.to).format('MMM YYYY')}`:''}
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
                                                value={selectedDayRange.referralUsedCustomers}
                                                onChange={(val)=>handleDateFilter('referralUsedCustomers', val)}
                                                shouldHighlightWeekends
                                                maximumDate={utils('en').getToday()}
                                                renderInput={renderCustomInput}
                                            />
                                        </div>
                                    </div>                             
                                </div>
                                <div className="d_flex justify_space_between align_item_center">
                                    <h2>{countData.referralUsedCustomers}</h2>
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
                                        <h4>Customers joined from the website</h4>  
                                        <p>
                                        {dateRange.joinedFromWeb.from&&dateRange.joinedFromWeb.from?`${moment(dateRange.joinedFromWeb.from).format('MMM YYYY')}-${moment(dateRange.joinedFromWeb.to).format('MMM YYYY')}`:''}
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
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div className="db_card  block_bg_yellow_300">
                            <div className="db_card_body p_16">
                                <div className="d_flex justify_space_between align_item_center pb_12">
                                    <div>
                                        <h4>Customers joined from the app</h4>
                                        <p>
                                        {dateRange.joinedFromApp.from&&dateRange.joinedFromApp.from?`${moment(dateRange.joinedFromApp.from).format('MMM YYYY')}-${moment(dateRange.joinedFromApp.to).format('MMM YYYY')}`:''}
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
                </div>
                
            </div>
        </section>
    )
}
