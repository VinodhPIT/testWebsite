import React from "react";

import useTranslation from "next-translate/useTranslation";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";

import CountDisplayCard from "../common/countDisplayCard";

export default function DashboardDetails({ initialCounts }) {

  const { t } = useTranslation();
  
  return (
    <section className="container-fluid">
      <div className="db_customer_detail_wrap">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <CountDisplayCard
              bgColorClass="block_bg_green_100"
              count={initialCounts.offerData.completed}
              hideDownload
              hideFilter
              title={t("common:AnalyticsOffer.Completed")}
            />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <CountDisplayCard
              bgColorClass="block_bg_yellow_300"
              count={initialCounts.offerData.scheduled}
              hideDownload
              hideFilter
              title={t("common:AnalyticsOffer.Scheduled")}
            />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <CountDisplayCard
              bgColorClass="block_bg_blue_50"
              count={initialCounts.artistCount.total_artist}
              hideDownload
              hideFilter
              title={t("common:AnalyticsArtist.Total public artists")}
            />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <CountDisplayCard
              bgColorClass="block_bg_orange_100"
              count={initialCounts.customerCount.total_count}
              hideDownload
              hideFilter
              title={t("common:AnalyticsCustomer.TotalCustomers")}
            />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <CountDisplayCard
              bgColorClass="block_bg_blue_50"
              count={initialCounts.androidDownloads}
              hideDownload
              hideFilter
              title={t("common:AnalyticsDashboard.Android Downloads")}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <CountDisplayCard
              bgColorClass="block_bg_orange_100"
              count={initialCounts.iosDownloads}
              hideDownload
              hideFilter
              title={t("common:AnalyticsDashboard.IOS Downloads")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
