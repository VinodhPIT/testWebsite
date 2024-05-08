import React, { useState } from "react";
import moment from "moment";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import useTranslation from "next-translate/useTranslation";

import NewCountDisplayCard from "../common/newCountDisplayCard";

export default function NewOfferDashboardDetails({ initialCounts, customerRequestCount }) {
  const { t } = useTranslation();

  const sendOffers = initialCounts?.filter(item => item.created_date !== null);
  const conversionRate = Math.floor((customerRequestCount / sendOffers?.length) * 100);
  const offerCount = initialCounts?.filter(item=> item.amount!==null).length;
 
  const getTotalAmount = () => {
    let totalAmount = 0;
    for (let i = 0; i < initialCounts.length; i++) {
      totalAmount += initialCounts[i].amount;
    }
    return totalAmount;
  };
  
  const avgOderValue = Math.floor(getTotalAmount()/offerCount);

  return (
    <section className="container-fluid">
      <div className="db_customer_detail_wrap db_card_margin ">
        <div className="db_customer_rqst_data">
          <NewCountDisplayCard
            iconBgColor="block_bg_pink_200"
            count={initialCounts?.length}
            title="Sendet Offers"
            icon="/login-broken.svg"
          />
          <NewCountDisplayCard
            iconBgColor="block_bg_green_200"
            rightIconBgColor="block_bg_pink_200"
            rightIcon="/login-broken.svg"
            count={`${conversionRate || 0}%`}
            title="Conversion Rate"
            icon="/chat-round-dots.svg"
            withRightIcon
          />
          <NewCountDisplayCard
            count={getTotalAmount()}
            iconBgColor="block_bg_pink_200"
            icon="/login-broken.svg"
            title="Sendet Offers"
          />
          <NewCountDisplayCard
            // count={allRequestProfiles?.length}
            iconBgColor="block_bg_pink_200"
            icon="/login-broken.svg"
            title="Sendet Offers"
          />
          <NewCountDisplayCard
            count={`${avgOderValue || 0}`}
            iconBgColor="block_bg_pink_200"
            icon="/login-broken.svg"
            title="Avg. order value"
          />
          {/* <NewCountDisplayCard
            count={`${conversionRate || 0}%`}
            iconBgColor="block_bg_blue_200"
            rightIconBgColor="block_bg_green_200"
            icon="/users.svg"
            rightIcon="/chat-round-dots.svg"
            title="Sendet Offers"
          /> */}
        </div>
      </div>
    </section>
  );
}
