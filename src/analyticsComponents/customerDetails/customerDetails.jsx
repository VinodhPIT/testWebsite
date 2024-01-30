import React, { useState } from 'react'
import moment from 'moment';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { analyticsCustomerCountWithFIlter , analyticsCustomerLeadSourceCountWithFIlter} from "@/action/analyticsAdmin";

import CountDisplayCard from '../countDisplayCard';

const Apitype = {
    contactedWithNoOffer:'contacted_with_no_offer',
    deletedCustomers:'deleted',
    joinedFromApp:'joined_from_app',
    joinedFromWeb:'joined_from_website',
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

export default function CustomerDetails({initialCounts, token}) {
    const [countData, setCountData]=useState(initialCounts);
    const [dateRange, setDateRange] = useState(initialValue);
    const [selectedDayRange, setSelectedDayRange] = useState(initialValue);

    const handleDownload = async (type, startDate, endDate) => {
        fetch(`${process.env.apiDomain}/analytics/customer/csv/${type}${startDate&&endDate?`?start_date=${moment(startDate).format("YYYY-MM-DD")}&end_date=${moment(endDate).format("YYYY-MM-DD")}`:''}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            },
          }).then(resp => resp.blob())
          .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `${type}_${new Date().getTime()}.csv`;
            document.body.appendChild(link);
            link.click();
            window.URL.revokeObjectURL(url);
          })
          .catch(() => alert("download error!"));
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
            }, token);
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
            }, token);
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
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard 
                            bgColorClass="block_bg_yellow_300"
                            count={countData.totalCustomers}
                            filteredDateRange={dateRange.totalCustomers}
                            onClickDownload={() => handleDownload('total_count', dateRange.totalCustomers.from, dateRange.totalCustomers.to)}
                            onUpdateDateFilter={(val)=>handleDateFilter('totalCustomers', val)}
                            selectedDateRange={selectedDayRange.totalCustomers}
                            title="Total customers"
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard 
                            bgColorClass="block_bg_green_100"
                            count={countData.notContacted}
                            filteredDateRange={dateRange.notContacted}
                            onClickDownload={() => handleDownload('no_contacted', dateRange.notContacted.from, dateRange.notContacted.to)}
                            onUpdateDateFilter={(val)=>handleDateFilter('notContacted', val)}
                            selectedDateRange={selectedDayRange.notContacted}
                            title="Customers not contacted any artists"
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard 
                            bgColorClass="block_bg_blue_50"
                            count={countData.noCompletedOffer}
                            filteredDateRange={dateRange.noCompletedOffer}
                            onClickDownload={() => handleDownload('customer_no_offer_completed', dateRange.noCompletedOffer.from, dateRange.noCompletedOffer.to)}
                            onUpdateDateFilter={(val)=>handleDateFilter('noCompletedOffer', val)}
                            selectedDateRange={selectedDayRange.noCompletedOffer}
                            title="Customers not completed any offers"
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard 
                            bgColorClass="block_bg_orange_100"
                            count={countData.contactedWithNoOffer}
                            filteredDateRange={dateRange.contactedWithNoOffer}
                            onClickDownload={() => handleDownload('contacted_with_no_offer', dateRange.contactedWithNoOffer.from, dateRange.contactedWithNoOffer.to)}
                            onUpdateDateFilter={(val)=>handleDateFilter('contactedWithNoOffer', val)}
                            selectedDateRange={selectedDayRange.contactedWithNoOffer}
                            title="Customers contacted the artist and no offer"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard 
                            bgColorClass="block_bg_yellow_300"
                            count={countData.deletedCustomers}
                            filteredDateRange={dateRange.deletedCustomers}
                            onClickDownload={() => handleDownload('deleted', dateRange.deletedCustomers.from, dateRange.deletedCustomers.to)}
                            onUpdateDateFilter={(val)=>handleDateFilter('deletedCustomers', val)}
                            selectedDateRange={selectedDayRange.deletedCustomers}
                            title="Deleted customers"
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard 
                            bgColorClass="block_bg_green_100"
                            count={countData.voucherUserCustomers}
                            filteredDateRange={dateRange.voucherUserCustomers}
                            onClickDownload={() => handleDownload('voucher_used_customer', dateRange.voucherUserCustomers.from, dateRange.voucherUserCustomers.to)}
                            onUpdateDateFilter={(val)=>handleDateFilter('voucherUserCustomers', val)}
                            selectedDateRange={selectedDayRange.voucherUserCustomers}
                            title="Customers used any vouchers"
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard 
                            bgColorClass="block_bg_blue_50"
                            count={countData.referralUsedCustomers}
                            filteredDateRange={dateRange.referralUsedCustomers}
                            onClickDownload={() => handleDownload('referral_used_customer', dateRange.referralUsedCustomers.from, dateRange.referralUsedCustomers.to)}
                            onUpdateDateFilter={(val)=>handleDateFilter('referralUsedCustomers', val)}
                            selectedDateRange={selectedDayRange.referralUsedCustomers}
                            title="Customers joined using referral"
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard 
                            bgColorClass="block_bg_orange_100"
                            count={countData.joinedFromWeb}
                            filteredDateRange={dateRange.joinedFromWeb}
                            onClickDownload={() => handleDownload('joined_from_web', dateRange.joinedFromWeb.from, dateRange.joinedFromWeb.to)}
                            onUpdateDateFilter={(val)=>handleDateFilter('joinedFromWeb', val)}
                            selectedDateRange={selectedDayRange.joinedFromWeb}
                            title="Customers joined from the website"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard 
                            bgColorClass="block_bg_yellow_300"
                            count={countData.joinedFromApp}
                            filteredDateRange={dateRange.joinedFromApp}
                            onClickDownload={() => handleDownload('joined_from_app', dateRange.joinedFromApp.from, dateRange.joinedFromApp.to)}
                            onUpdateDateFilter={(val)=>handleDateFilter('joinedFromApp', val)}
                            selectedDateRange={selectedDayRange.joinedFromApp}
                            title="Customers joined from the app"
                        />
                    </div>
                </div>
                
            </div>
        </section>
    )
}