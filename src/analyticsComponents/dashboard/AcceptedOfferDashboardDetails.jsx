import React, { useState } from "react";

import useTranslation from "next-translate/useTranslation";
import NewCountDisplayCard from "../common/newCountDisplayCard";

import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";

const currencyOptions = ["GBP","EUR","CHF","HUF","CZK","PLN","RON","SEK"].map((data) => ({ value: data, label: data }));

export default function AcceptedOfferDashboardDetails({ initialCounts, totalOfferCount }) {
  const [seletedCurrency, setSelectedCurrency]=useState(currencyOptions[1])

  const { t } = useTranslation();

  const sendOffers = initialCounts?.filter(item => item.created_date !== null);
  const conversionRate = Math.floor((sendOffers?.length/totalOfferCount) * 100);
  const offerCount = initialCounts?.filter(item=> item.amounts!==null).length;
  const offersWithSelectedCurrency = initialCounts?.filter(item=> item.currency === seletedCurrency.value);


  

  const sumWithInitial = offersWithSelectedCurrency ? offersWithSelectedCurrency.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amounts,
    0,
  ):0;



  const getTotalAmount = () => {
    let totalAmount = 0;
    for (let i = 0; i < initialCounts.length; i++) {
      totalAmount += initialCounts[i].amounts;
    }
    return totalAmount;
  };
  
  const avgOderValue = Math.floor(sumWithInitial/offerCount);

  return (
    <section className="container-fluid">
      <div className="db_customer_detail_wrap db_card_margin ">
        <div className="db_customer_rqst_data">
          <NewCountDisplayCard
            iconBgColor="block_bg_pink_400"
            count={initialCounts?.length}
            title="Accepted Offers"
            icon="/Logout.svg"
          />
          <NewCountDisplayCard
            iconBgColor="block_bg_pink_300"
            rightIconBgColor="block_bg_pink_400"
            rightIcon="/Logout.svg"
            count={`${conversionRate || 0}%`}
            title="Conversion Rate"
            icon="/timerIcon.svg"
            withRightIcon
          />
          <NewCountDisplayCard
            count={getTotalAmount()}
            iconBgColor="block_bg_pink_400"
            icon="/Logout.svg"
            title="Accepted Offers"
          />
          <NewCountDisplayCard
            count={sumWithInitial}
            icon="/Logout.svg"
            iconBgColor="block_bg_pink_400"
            onSelectData={(val)=> setSelectedCurrency(val)}
            options={currencyOptions}
            selectedData={seletedCurrency}
            title="Accepted Offers"
          />
          <NewCountDisplayCard
            count={`${seletedCurrency.value} ${avgOderValue || 0}`}
            iconBgColor="block_bg_pink_400"
            icon="/Logout.svg"
            title="Avg. order value"
          />
          {/* <NewCountDisplayCard
            count={`${conversionRate || 0}%`}
            iconBgColor="block_bg_blue_200"
            rightIconBgColor="block_bg_green_200"
            icon="/users.svg"
            rightIcon="/chat-round-dots.svg"
            title="Accepted Offers"
          /> */}
        </div>
      </div>
    </section>
  );
}
