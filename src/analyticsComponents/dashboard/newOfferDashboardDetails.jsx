import React from "react";

import useTranslation from "next-translate/useTranslation";
import NewCountDisplayCard from "../common/newCountDisplayCard";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";

import SkeletonCount from "@/components/placeholders/count";

import { currencyOptions, useCurrency } from "@/helpers/currencyHelper";

export default function NewOfferDashboardDetails({
  initialCounts,
  customerRequestCount,
  loading,
}) {
  const [selectedCurrency, setSelectedCurrency] = useCurrency();
  const { t } = useTranslation();

  const sendOffers = initialCounts?.filter(
    (item) => item.created_date !== null
  );

  let conversionRate;

  if (sendOffers.length === 0) {
    conversionRate = 0;
  } else {
    conversionRate = Math.floor(
      (customerRequestCount / sendOffers.length) * 100
    );
  }

  const offerCount = initialCounts?.filter(
    (item) => item.amounts !== null
  ).length;
  const offersWithSelectedCurrency = initialCounts?.filter(
    (item) => item.currency === selectedCurrency.value
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
            count={loading ? <SkeletonCount /> : initialCounts?.length}
            title="Sendet Offers"
            icon="/br_login.svg"
          />
          <NewCountDisplayCard
            iconBgColor="block_bg_green_200"
            rightIconBgColor="block_bg_pink_200"
            rightIcon="/br_login.svg"
            count={loading ? <SkeletonCount /> : `${conversionRate || 0}%`}
            title="Conversion Rate"
            icon="/chat-round-dots.svg"
            withRightIcon
          />
          <NewCountDisplayCard
            count={loading ? <SkeletonCount /> : getTotalAmount()}
            iconBgColor="block_bg_pink_200"
            icon="/br_login.svg"
            title="Sendet Offers"
          />
          <NewCountDisplayCard
            count={loading ? <SkeletonCount /> : sumWithInitial}
            icon="/br_login.svg"
            iconBgColor="block_bg_pink_200"
            onSelectData={(val) => setSelectedCurrency(val)}
            options={currencyOptions}
            selectedData={selectedCurrency}
            title="Sendet Offers"
          />
          <NewCountDisplayCard
            count={
              loading ? (
                <SkeletonCount />
              ) : (
                `${selectedCurrency.value} ${avgOderValue || 0}`
              )
            }
            iconBgColor="block_bg_pink_200"
            icon="/br_login.svg"
            title="Avg. order value"
          />
        </div>
      </div>
    </section>
  );
}
