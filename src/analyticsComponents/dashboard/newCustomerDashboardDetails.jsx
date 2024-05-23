import React from "react";

import moment from "moment";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import useTranslation from "next-translate/useTranslation";

import NewCountDisplayCard from "../common/newCountDisplayCard";
import SkeletonCount from "@/components/placeholders/count";

export default function NewCustomerDashboardDetails({
  initialCounts,
  loading,
}) {
  const { t } = useTranslation();

  const singleRequestProfiles = initialCounts?.filter(
    (item) => item.single_request
  );
  const allRequestProfiles = initialCounts?.filter(
    (item) => item.multiple_request
  );
  const conversionRate = Math.floor(
    (allRequestProfiles?.length / initialCounts?.length) * 100
  );

  const getAverageTime = () => {
    const totalDurationInMinutes = allRequestProfiles?.reduce(
      (accumulator, currentValue) => {
        const profileCreatedTimeMoment = moment(
          currentValue.profile_created_time
        );
        const chatCreatedTimeMoment = moment(currentValue.first_chat_time);

        return (
          accumulator +
          chatCreatedTimeMoment.diff(profileCreatedTimeMoment, "minutes")
        );
      },
      0
    );
    const hours = Math.floor(
      totalDurationInMinutes / allRequestProfiles?.length / 60
    );
    const minutes = Math.floor(
      (totalDurationInMinutes / allRequestProfiles?.length) % 60
    );

    return { hours, minutes };
  };

  return (
    <section className="container-fluid">
      <div className="db_customer_detail_wrap db_card_margin ">
        <div className="db_customer_rqst_data">
          <NewCountDisplayCard
            iconBgColor="block_bg_blue_200"
            count={loading ? <SkeletonCount /> : initialCounts?.length}
            title={t("common:AnalyticsDashboard.Customers")}
            icon="/users.svg"
          />
          <NewCountDisplayCard
            iconBgColor="block_bg_green_200"
            count={loading ? <SkeletonCount /> : singleRequestProfiles?.length}
            title={t("common:AnalyticsDashboard.Single request")}
            icon="/chat-round-dots.svg"
          />

          <NewCountDisplayCard
            count={loading ? <SkeletonCount /> : allRequestProfiles?.length}
            iconBgColor="block_bg_green_200"
            icon="/chat-round-dots.svg"
            title={t("common:AnalyticsDashboard.All requests")}
          />
          <NewCountDisplayCard
            withRightIcon
            count={loading ? <SkeletonCount /> : `${conversionRate || 0}%`}
            iconBgColor="block_bg_blue_200"
            rightIconBgColor="block_bg_green_200"
            icon="/users.svg"
            rightIcon="/chat-round-dots.svg"
            title={t("common:AnalyticsDashboard.Conversion rate")}
          />
          <NewCountDisplayCard
            withRightIcon
            iconBgColor="block_bg_blue_200"
            rightIconBgColor="block_bg_green_200"
            count={
              loading ? (
                <SkeletonCount />
              ) : (
                `${getAverageTime().hours || 0}h ${
                  getAverageTime().minutes || 0
                }min`
              )
            }
            icon="/users.svg"
            rightIcon="/chat-round-dots.svg"
            title={t("common:AnalyticsDashboard.Avg time")}
          />
        </div>
      </div>
    </section>
  );
}
