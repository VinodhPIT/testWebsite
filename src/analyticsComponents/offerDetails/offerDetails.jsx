import React, { useEffect } from "react";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { downloadExcel } from "@/apiConfig/downloadService";
import CountDisplayCard from "../countDisplayCard";
import useTranslation from "next-translate/useTranslation";
import useAnalyticsStore from "@/store/offerAnalytics/calenderFilter";

const initialValue = {
  scheduled: {
    from: null,
    to: null,
  },
  completed: {
    from: null,
    to: null,
  },
  rejected: {
    from: null,
    to: null,
  },
  expired: {
    from: null,
    to: null,
  },
};

export default function OfferDeatils({ offerCount, token }) {
  const { t } = useTranslation();

 // Hook to manage analytics store
  const {
    countData,
    dateRange,
    selectedDayRange,
    handleDateFilter,
    resetCalender,
    fetchInitialData,
  } = useAnalyticsStore();

   // Fetch initial data on component mount
  useEffect(() => {
    fetchInitialData(offerCount, initialValue, token);
  }, []);

// Function to handle downloading Excel file
  const handleDownload = async (type, startDate, endDate) => {
    downloadExcel("/analytics/offer", type, startDate, endDate ,token);
  };

  return (
    <section className="container-fluid">
      <div className="db_customer_detail_wrap">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <CountDisplayCard
              bgColorClass="block_bg_yellow_300"
              count={countData.scheduled}
              filteredDateRange={dateRange.scheduled}
              onClickDownload={() =>
                handleDownload(
                  "scheduled",
                  dateRange.scheduled.from,
                  dateRange.scheduled.to
                )
              }
              onUpdateDateFilter={(val) => handleDateFilter("scheduled", val)}
              selectedDateRange={selectedDayRange.scheduled}
              title={t("common:AnalyticsOffer.Scheduled")}
              reset={() => resetCalender("scheduled")}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <CountDisplayCard
              bgColorClass="block_bg_green_100"
              count={countData.completed}
              filteredDateRange={dateRange.completed}
              onClickDownload={() =>
                handleDownload(
                  "completed",
                  dateRange.completed.from,
                  dateRange.completed.to
                )
              }
              onUpdateDateFilter={(val) => handleDateFilter("completed", val)}
              selectedDateRange={selectedDayRange.completed}
              title={t("common:AnalyticsOffer.Completed")}
              reset={() => resetCalender("completed")}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <CountDisplayCard
              bgColorClass="block_bg_blue_50"
              count={countData.rejected}
              filteredDateRange={dateRange.rejected}
              onClickDownload={() =>
                handleDownload(
                  "rejected",
                  dateRange.rejected.from,
                  dateRange.rejected.to
                )
              }
              onUpdateDateFilter={(val) => handleDateFilter("rejected", val)}
              selectedDateRange={selectedDayRange.rejected}
              title={t("common:AnalyticsOffer.Rejected")}
              reset={() => resetCalender("rejected")}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <CountDisplayCard
              bgColorClass="block_bg_orange_100"
              count={countData.expired}
              filteredDateRange={dateRange.expired}
              onClickDownload={() =>
                handleDownload(
                  "expired",
                  dateRange.expired.from,
                  dateRange.expired.to
                )
              }
              onUpdateDateFilter={(val) => handleDateFilter("expired", val)}
              selectedDateRange={selectedDayRange.expired}
              title={t("common:AnalyticsOffer.Expired")}
              reset={() => resetCalender("expired")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
