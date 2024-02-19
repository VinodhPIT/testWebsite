import React, { useState } from "react";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { offerCountFilter } from "@/action/offerAnalyticsService";
import { downloadExcel } from "@/action/downloadService";
import CountDisplayCard from "../countDisplayCard";
import useTranslation from "next-translate/useTranslation";

const Apitype = {
  scheduled: "scheduled",
  completed: "completed",
  rejected: "rejected",
  expired: "expired",
};

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
  const [countData, setCountData] = useState(offerCount);
  const { t } = useTranslation();
  const [dateRange, setDateRange] = useState(initialValue);
  const [selectedDayRange, setSelectedDayRange] = useState(initialValue);

  const handleDownload = async (type , startDate, endDate) => {
    downloadExcel("/analytics/offer/csv/", type, token ,startDate, endDate);
  };

  const handleDateFilter = async (key, dateRangeValue) => {
    setSelectedDayRange({
      ...selectedDayRange,
      [key]: dateRangeValue,
    });
    const { from, to } = dateRangeValue;
    const fromDate =
      `${from?.year}-${from?.month > 9 ? from?.month : `0${from?.month}`}-${
        from?.day > 9 ? from?.day : `0${from?.day}`
      }` || "";
    const toDate = to
      ? `${to?.year}-${to?.month > 9 ? to?.month : `0${to?.month}`}-${
          to?.day > 9 ? to?.day : `0${to?.day}`
        }`
      : null;

    if (fromDate && toDate) {
      const res = await offerCountFilter(
        {
          endDate: toDate,
          startDate: fromDate,
          type: Apitype[key],
        },
        token
      );
      setCountData({
        ...countData,
        [key]: res[Apitype[key]],
      });
      setDateRange({
        ...dateRange,
        [key]: {
          from: fromDate,
          to: toDate,
        },
      });
    }
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
              onClickDownload={() => handleDownload("scheduled" , dateRange.scheduled.from, dateRange.scheduled.to)}
              onUpdateDateFilter={(val) => handleDateFilter("scheduled", val)}
              selectedDateRange={selectedDayRange.scheduled}
              title={t("common:AnalyticsOffer.Scheduled")}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <CountDisplayCard
              bgColorClass="block_bg_green_100"
              count={countData.completed}
              filteredDateRange={dateRange.completed}
              onClickDownload={() => handleDownload("completed" , dateRange.completed.from, dateRange.completed.to)}
              onUpdateDateFilter={(val) => handleDateFilter("completed", val)}
              selectedDateRange={selectedDayRange.completed}
              title={t("common:AnalyticsOffer.Completed")}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <CountDisplayCard
              bgColorClass="block_bg_blue_50"
              count={countData.rejected}
              filteredDateRange={dateRange.rejected}
              onClickDownload={() => handleDownload("rejected" , dateRange.rejected.from, dateRange.rejected.to)}
              onUpdateDateFilter={(val) => handleDateFilter("rejected", val)}
              selectedDateRange={selectedDayRange.rejected}
              title={t("common:AnalyticsOffer.Rejected")}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <CountDisplayCard
              bgColorClass="block_bg_orange_100"
              count={countData.expired}
              filteredDateRange={dateRange.expired}
              onClickDownload={() => handleDownload("expired" , dateRange.expired.from, dateRange.expired.to)}
              onUpdateDateFilter={(val) => handleDateFilter("expired", val)}
              selectedDateRange={selectedDayRange.expired}
              title={t("common:AnalyticsOffer.Expired")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
