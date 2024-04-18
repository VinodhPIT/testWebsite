import React from "react";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import NewCountDisplayCard from "../common/newCountDisplayCard";
import useTranslation from "next-translate/useTranslation";

export default function NewDashboardDetails({ initialCounts, token }) {
  const { t } = useTranslation();
  const singleRequestCount = initialCounts.filter(item => item.single_request === true);
  const allRequestCount = initialCounts.filter(item => item.multiple_request === true);
  const conversionRate = Math.floor((allRequestCount.length / initialCounts.length) * 100);

  return (
    <section className="container-fluid">
      <div className="db_customer_detail_wrap db_card_margin ">
        <div className="row">
          <NewCountDisplayCard
            iconBgColor="block_bg_blue_200"
            count={initialCounts.length}
            title="Customers"
            icon="/users.svg"
          />
          <NewCountDisplayCard
            iconBgColor="block_bg_green_200"
            count={singleRequestCount.length}
            title="Single Request"
            icon="/chat-round-dots.svg"
          />

          <NewCountDisplayCard
            count={allRequestCount.length}
            iconBgColor="block_bg_green_200"
            icon="/chat-round-dots.svg"
            title="All Request"
          />

          <NewCountDisplayCard
            withRightIcon
            count={`${conversionRate}%`}
            iconBgColor="block_bg_blue_200"
            rightIconBgColor="block_bg_green_200"
            icon="/users.svg"
            rightIcon="/chat-round-dots.svg"
            title="Conversion Rate"
          />

          <NewCountDisplayCard
            withRightIcon
            iconBgColor="block_bg_blue_200"
            rightIconBgColor="block_bg_green_200"
            count={120}
            icon="/users.svg"
            rightIcon="/chat-round-dots.svg"
            title="Avg.time"
          />
        </div>
      </div>
    </section>
  );
}
