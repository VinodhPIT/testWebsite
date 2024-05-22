import React, { useState } from "react";

import useTranslation from "next-translate/useTranslation";
import NewCountDisplayCard from "../common/newCountDisplayCard";

import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";

const currencyOptions = [
  "GBP",
  "EUR",
  "CHF",
  "HUF",
  "CZK",
  "PLN",
  "RON",
  "SEK",
].map((data) => ({ value: data, label: data }));

export default function NewOfferDashboardDetails({
  initialCounts,
  customerRequestCount,
}) {
  const [seletedCurrency, setSelectedCurrency] = useState(currencyOptions[1]);
  const { t } = useTranslation();



  const sendOffers = initialCounts?.filter(
    (item) => item.created_date !== null
  );
  let conversionRate;
  if (sendOffers.length === 0) {
    conversionRate = 0;
  } else {
    // Perform the division and calculate conversion rate when sendOffers is not empty
    conversionRate = Math.floor(
      (customerRequestCount / sendOffers.length) * 100
    );
  }
  const offerCount = initialCounts?.filter(
    (item) => item.amounts !== null
  ).length;
  const offersWithSelectedCurrency = initialCounts?.filter(
    (item) => item.currency === seletedCurrency.value
  );



  
  const sumWithInitial = offersWithSelectedCurrency.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amounts,
    0
  );



  
  const getTotalAmount = () => {
    let totalAmount = 0;
    for (let i = 0; i < initialCounts.length; i++) {
      totalAmount += initialCounts[i].amounts;
    }
    return totalAmount;
  };

  const avgOderValue = Math.floor(sumWithInitial / offerCount);

  return (
    <section className="container-fluid">
      <div className="db_customer_detail_wrap db_card_margin ">
        <div className="db_customer_rqst_data">
          <NewCountDisplayCard
            iconBgColor="block_bg_pink_200"
            count={initialCounts?.length}
            title="Sendet Offers"
            icon="/br_login.svg"
          />
          <NewCountDisplayCard
            iconBgColor="block_bg_green_200"
            rightIconBgColor="block_bg_pink_200"
            rightIcon="/br_login.svg"
            count={`${conversionRate || 0}%`}
            title="Conversion Rate"
            icon="/chat-round-dots.svg"
            withRightIcon
          />
          <NewCountDisplayCard
            count={getTotalAmount()}
            iconBgColor="block_bg_pink_200"
            icon="/br_login.svg"
            title="Sendet Offers"
          />
          <NewCountDisplayCard
            count={sumWithInitial}
            icon="/br_login.svg"
            iconBgColor="block_bg_pink_200"
            onSelectData={(val) => setSelectedCurrency(val)}
            options={currencyOptions}
            selectedData={seletedCurrency}
            title="Sendet Offers"
          />
          <NewCountDisplayCard
            count={`${seletedCurrency.value} ${avgOderValue || 0}`}
            iconBgColor="block_bg_pink_200"
            icon="/br_login.svg"
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
