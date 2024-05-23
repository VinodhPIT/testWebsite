import React from "react";

import useTranslation from "next-translate/useTranslation";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";

import SkeletonCount from "@/components/placeholders/count";
import NewCountDisplayCard from "../common/newCountDisplayCard";

import { currencyOptions, useCurrency } from "@/helpers/currencyHelper";
import { calculateMetrics } from "@/helpers/offerHelper"; 

export default function AcceptedOfferDashboardDetails({
  initialCounts,
  totalOfferCount,
  loading,
}) {
  const [selectedCurrency, setSelectedCurrency] = useCurrency();
  const { t } = useTranslation();
  const {
    conversionRate,
    sumWithInitial,
    getTotalAmount,
    avgOrderValue,
  } = calculateMetrics(initialCounts, totalOfferCount, selectedCurrency);

  return (
    <section className="container-fluid">
      <div className="db_customer_detail_wrap db_card_margin ">
        <div className="db_customer_rqst_data">
          <NewCountDisplayCard
            iconBgColor="block_bg_pink_400"
            count={loading ? <SkeletonCount /> : initialCounts?.length}
            title={t("common:AnalyticsDashboard.acceptedOffers")}
            icon="/Logout.svg"
          />
          <NewCountDisplayCard
            iconBgColor="block_bg_pink_300"
            rightIconBgColor="block_bg_pink_400"
            rightIcon="/Logout.svg"
            count={loading ? <SkeletonCount /> : `${conversionRate || 0}%`}
            title={t("common:AnalyticsDashboard.conversionRate")}
            icon="/timerIcon.svg"
            withRightIcon
          />
          <NewCountDisplayCard
            count={loading ? <SkeletonCount /> : getTotalAmount()}
            iconBgColor="block_bg_pink_400"
            icon="/Logout.svg"
            title={t("common:AnalyticsDashboard.acceptedOffers")}
          />
          <NewCountDisplayCard
            count={loading ? <SkeletonCount /> : sumWithInitial}
            icon="/Logout.svg"
            iconBgColor="block_bg_pink_400"
            onSelectData={(val) => setSelectedCurrency(val)}
            options={currencyOptions}
            selectedData={selectedCurrency}
            title={t("common:AnalyticsDashboard.acceptedOffers")}
          />
          <NewCountDisplayCard
            count={
              loading ? (
                <SkeletonCount />
              ) : (
                `${selectedCurrency.value} ${avgOrderValue || 0}`
              )
            }
            iconBgColor="block_bg_pink_400"
            icon="/Logout.svg"
            title={t("common:AnalyticsDashboard.avgOrderValue")}
          />
        </div>
      </div>
    </section>
  );
}
