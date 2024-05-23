import React from "react";

import useTranslation from "next-translate/useTranslation";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";

import NewCountDisplayCard from "../common/newCountDisplayCard";
import SkeletonCount from '@/components/placeholders/count'

import { currencyOptions, useCurrency } from "@/helpers/currencyHelper";
import { calculateMetrics } from "@/helpers/offerHelper"; 

export default function CompletedOfferDashboardDetails({ initialCounts, totalAcceptedOfferCount ,loading }) {
  
  const [selectedCurrency, setSelectedCurrency] = useCurrency();
  const { t } = useTranslation();

  const {
    conversionRate,
    sumWithInitial,
    getTotalAmount,
    avgOrderValue,
  } = calculateMetrics(initialCounts, totalAcceptedOfferCount, selectedCurrency);

  return (
    <section className="container-fluid">
      <div className="db_customer_detail_wrap db_card_margin ">
        <div className="db_customer_rqst_data">
          <NewCountDisplayCard
            iconBgColor="block_bg_success_green_100"
            count={loading ?  <SkeletonCount/> : initialCounts?.length}
            title={t("common:AnalyticsDashboard.completedTattoos")}
            icon="/tickSquare.svg"
          />
          <NewCountDisplayCard
            iconBgColor="block_bg_pink_400"
            rightIconBgColor="block_bg_success_green_100"
            rightIcon="/tickSquare.svg"
            count={loading ?  <SkeletonCount/> :`${conversionRate || 0}%`}
            title={t("common:AnalyticsDashboard.conversionRate")}
            icon="/Logout.svg"
            withRightIcon
          />
          <NewCountDisplayCard
            count={loading ?  <SkeletonCount/> : getTotalAmount()}
            iconBgColor="block_bg_success_green_100"
            icon="/tickSquare.svg"
            title={t("common:AnalyticsDashboard.completedTattoos")}
          />
          <NewCountDisplayCard
            count={loading ?  <SkeletonCount/> : sumWithInitial}
            icon="/tickSquare.svg"
            iconBgColor="block_bg_success_green_100"
            onSelectData={(val)=> setSelectedCurrency(val)}
            options={currencyOptions}
            selectedData={selectedCurrency}
            title={t("common:AnalyticsDashboard.completedTattoos")}
          />
          <NewCountDisplayCard
            count={loading ?  <SkeletonCount/> :`${selectedCurrency.value} ${avgOrderValue || 0}`}
            iconBgColor="block_bg_success_green_100"
            icon="/tickSquare.svg"
            title={t("common:AnalyticsDashboard.avgOrderValue")}
          />
        </div>
      </div>
    </section>
  );
}
