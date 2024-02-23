import React, { useState } from "react";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import {

  analyticsCustomerCountWithFIlter,
  analyticsCustomerLeadSourceCountWithFIlter,
} from "@/apiConfig/customerAnalyticsService"; // Importing analytics services

import useTranslation from "next-translate/useTranslation";
import { downloadExcel } from "@/apiConfig/downloadService"; // Importing download service
import CountDisplayCard from "../countDisplayCard";

const Apitype = {
    contactedWithNoOffer: 'contacted_with_no_offer',
    deletedCustomers: 'deleted',
    noCompletedOffer: 'customer_no_offer_completed',
    notContacted: 'no_contacted',
    referralUsedCustomers: 'referral_used_customer',
    totalCustomers: 'total_count',
    voucherUserCustomers: 'voucher_used_customer',
};

const initialValue = {
    contactedWithNoOffer: {
        from: null,
        to: null
    },
    deletedCustomers: {
        from: null,
        to: null
    },
    noCompletedOffer: {
        from: null,
        to: null
    },
    notContacted: {
        from: null,
        to: null
    },
    referralUsedCustomers: {
        from: null,
        to: null
    },
    totalCustomers: {
        from: null,
        to: null
    },
    voucherUserCustomers: {
        from: null,
        to: null
    }
};


export default function CustomerDetails({ initialCounts, token }) {
    const [countData, setCountData] = useState(initialCounts);
    const [dateRange, setDateRange] = useState(initialValue);
    const [selectedDayRange, setSelectedDayRange] = useState(initialValue);
    const { t } = useTranslation();


  // Function to handle downloading Excel data
  const handleDownload = (type, startDate, endDate) => {
    downloadExcel("/analytics/customer", type, startDate, endDate ,token);
  };



    // Function to handle date filter
    const handleDateFilter = async (key, dateRangeValue) => {
        setSelectedDayRange({
          ...selectedDayRange,
          [key]: dateRangeValue
      });
        const { from, to } = dateRangeValue;
        const fromDate = `${from?.year}-${from?.month>9?from?.month:`0${from?.month}`}-${from?.day>9?from?.day:`0${from?.day}`}` || '';
        const toDate = to ? `${to?.year}-${to?.month>9?to?.month:`0${to?.month}`}-${to?.day>9?to?.day:`0${to?.day}`}` : null;
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
                            onUpdateDateFilter={(val) => handleDateFilter('totalCustomers', val)}
                            selectedDateRange={selectedDayRange.totalCustomers}
                            title={t("common:AnalyticsCustomer.TotalCustomers")}
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard
                            bgColorClass="block_bg_green_100"
                            count={countData.notContacted}
                            filteredDateRange={dateRange.notContacted}
                            hideFilter
                            onClickDownload={() => handleDownload('no_contacted', dateRange.notContacted.from, dateRange.notContacted.to)}
                            onUpdateDateFilter={(val) => handleDateFilter('notContacted', val)}
                            selectedDateRange={selectedDayRange.notContacted}
                            title={t("common:AnalyticsCustomer.NotContactedArtists")}
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard
                            bgColorClass="block_bg_blue_50"
                            count={countData.noCompletedOffer}
                            filteredDateRange={dateRange.noCompletedOffer}
                            hideFilter
                            onClickDownload={() => handleDownload('customer_no_offer_completed', dateRange.noCompletedOffer.from, dateRange.noCompletedOffer.to)}
                            onUpdateDateFilter={(val) => handleDateFilter('noCompletedOffer', val)}
                            selectedDateRange={selectedDayRange.noCompletedOffer}
                            title={t("common:AnalyticsCustomer.NotCompletedOffers")}
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard
                            bgColorClass="block_bg_orange_100"
                            count={countData.contactedWithNoOffer}
                            filteredDateRange={dateRange.contactedWithNoOffer}
                            onClickDownload={() => handleDownload('contacted_with_no_offer', dateRange.contactedWithNoOffer.from, dateRange.contactedWithNoOffer.to)}
                            onUpdateDateFilter={(val) => handleDateFilter('contactedWithNoOffer', val)}
                            selectedDateRange={selectedDayRange.contactedWithNoOffer}
                            title={t("common:AnalyticsCustomer.ContactedArtistNoOffer")}
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
                            onUpdateDateFilter={(val) => handleDateFilter('deletedCustomers', val)}
                            selectedDateRange={selectedDayRange.deletedCustomers}
                            title={t("common:AnalyticsCustomer.DeletedCustomer")}
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard
                            bgColorClass="block_bg_green_100"
                            count={countData.voucherUserCustomers}
                            filteredDateRange={dateRange.voucherUserCustomers}
                            onClickDownload={() => handleDownload('voucher_used_customer', dateRange.voucherUserCustomers.from, dateRange.voucherUserCustomers.to)}
                            onUpdateDateFilter={(val) => handleDateFilter('voucherUserCustomers', val)}
                            selectedDateRange={selectedDayRange.voucherUserCustomers}
                            title={t("common:AnalyticsCustomer.UsedVouchers")}
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard
                            bgColorClass="block_bg_blue_50"
                            count={countData.referralUsedCustomers}
                            filteredDateRange={dateRange.referralUsedCustomers}
                            onClickDownload={() => handleDownload('referral_used_customer', dateRange.referralUsedCustomers.from, dateRange.referralUsedCustomers.to)}
                            onUpdateDateFilter={(val) => handleDateFilter('referralUsedCustomers', val)}
                            selectedDateRange={selectedDayRange.referralUsedCustomers}
                            title={t("common:AnalyticsCustomer.JoinedUsingReferral")}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
