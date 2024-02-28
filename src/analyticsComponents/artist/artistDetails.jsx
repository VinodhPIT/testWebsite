import React, { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import CountDisplayCard from "../common/countDisplayCard";
import useAnalyticsStore from "@/store/artistAnalytics/calenderFilter"; // This is a custom hook for managing analytics data
import { useEffect } from "react";
import { downloadExcel } from "@/apiConfig/downloadService";
// Initial values for date ranges
const initialValue = {
  artistCompletedOffers: {
    from: null,
    to: null,
  },
  artistInCommunication: {
    from: null,
    to: null,
  },
  joinedFromApp: {
    from: null,
    to: null,
  },
  joinedFromWeb: {
    from: null,
    to: null,
  },
  joinedUsingReferral: {
    from: null,
    to: null,
  },
  nonPublicProfiles: {
    from: null,
    to: null,
  },
  notCompletedAnyOffer: {
    from: null,
    to: null,
  },
  notContactedCustomer: {
    from: null,
    to: null,
  },
  notCreatedAnyOffers: {
    from: null,
    to: null,
  },
  totalArtists: {
    from: null,
    to: null,
  },
  totalPublicArtists: {
    from: null,
    to: null,
  },
};

export default function ArtistDetails({ initialCounts, token }) {
  // Destructuring values from custom hook
  const {
    countData,
    dateRange,
    selectedDayRange,
    handleDateFilter,
    resetCalender,
    fetchInitialData,
  } = useAnalyticsStore();

  const { t } = useTranslation();

  // Fetch initial data on component mount
  useEffect(() => {
    fetchInitialData(initialCounts, initialValue, token);
  }, []);

  // Function to handle downloading Excel data
  const handleDownload = (type, startDate, endDate) => {
    downloadExcel("/analytics/artist", type, startDate, endDate, token);
  };

  return (
    <section className="container-fluid">
      <div className="db_customer_detail_wrap">
        <div className="row">
          {/* CountDisplayCard components for various analytics */}
          {/* Each card has its own props and functionality */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <CountDisplayCard
              bgColorClass="block_bg_yellow_300"
              count={countData.totalArtists ?? ""}
              filteredDateRange={dateRange.totalArtists ?? ""}
              onClickDownload={() =>
                handleDownload(
                  "total_artist",
                  dateRange.totalArtists.from ?? "",
                  dateRange.totalArtists.to ?? ""
                )
              }
              onUpdateDateFilter={(val) =>
                handleDateFilter("totalArtists", val)
              }
              selectedDateRange={selectedDayRange.totalArtists ?? ""}
              title={t("common:AnalyticsArtist.Total active artist")}
              reset={() => resetCalender("totalArtists")}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <CountDisplayCard
              bgColorClass="block_bg_green_100"
              count={countData.totalPublicArtists ?? ""}
              filteredDateRange={dateRange.totalPublicArtists ?? ""}
              onClickDownload={() =>
                handleDownload(
                  "public_artist",
                  dateRange.totalPublicArtists.from ?? "",
                  dateRange.totalPublicArtists.to ?? ""
                )
              }
              onUpdateDateFilter={(val) =>
                handleDateFilter("totalPublicArtists", val)
              }
              selectedDateRange={selectedDayRange.totalPublicArtists ?? ""}
              title={t("common:AnalyticsArtist.Total public artists")}
              reset={() => resetCalender("totalPublicArtists")}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <CountDisplayCard
              bgColorClass="block_bg_blue_50"
              count={countData.artistInCommunication ?? ""}
              filteredDateRange={dateRange.artistInCommunication ?? ""}
              onClickDownload={() =>
                handleDownload(
                  "contacted_artist",
                  dateRange.artistInCommunication.from ?? "",
                  dateRange.artistInCommunication.to ?? ""
                )
              }
              onUpdateDateFilter={(val) =>
                handleDateFilter("artistInCommunication", val)
              }
              selectedDateRange={selectedDayRange.artistInCommunication ?? ""}
              title={t(
                "common:AnalyticsArtist.Artists in communication with the customer"
              )}
              reset={() => resetCalender("artistInCommunication")}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <CountDisplayCard
              bgColorClass="block_bg_orange_100"
              count={countData.artistCompletedOffers ?? ""}
              filteredDateRange={dateRange.artistCompletedOffers ?? ""}
              onClickDownload={() =>
                handleDownload(
                  "artist_with_offer",
                  dateRange.artistCompletedOffers.from ?? "",
                  dateRange.artistCompletedOffers.to ?? ""
                )
              }
              onUpdateDateFilter={(val) =>
                handleDateFilter("artistCompletedOffers", val)
              }
              selectedDateRange={selectedDayRange.artistCompletedOffers ?? ""}
              title={t(
                "common:AnalyticsArtist.Artists who completed at least one offer"
              )}
              reset={() => resetCalender("artistCompletedOffers")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <CountDisplayCard
              bgColorClass="block_bg_yellow_300"
              count={countData.notCompletedAnyOffer}
              filteredDateRange={dateRange.notCompletedAnyOffer}
              hideFilter
              onClickDownload={() =>
                handleDownload(
                  "no_offer_completed",
                  dateRange.notCompletedAnyOffer.from,
                  dateRange.notCompletedAnyOffer.to
                )
              }
              onUpdateDateFilter={(val) =>
                handleDateFilter("notCompletedAnyOffer", val)
              }
              selectedDateRange={selectedDayRange.notCompletedAnyOffer}
              title={t(
                "common:AnalyticsArtist.Artists who didn’t complete any offers"
              )}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <CountDisplayCard
              bgColorClass="block_bg_green_100"
              count={countData.joinedUsingReferral}
              filteredDateRange={dateRange.joinedUsingReferral}
              hideFilter
              onClickDownload={() =>
                handleDownload(
                  "referral_used",
                  dateRange.joinedUsingReferral.from,
                  dateRange.joinedUsingReferral.to
                )
              }
              onUpdateDateFilter={(val) =>
                handleDateFilter("joinedUsingReferral", val)
              }
              selectedDateRange={selectedDayRange.joinedUsingReferral}
              title={t("common:AnalyticsArtist.Artists joined using referral")}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <CountDisplayCard
              bgColorClass="block_bg_blue_50"
              count={countData.joinedFromWeb}
              filteredDateRange={dateRange.joinedFromWeb}
              onClickDownload={() =>
                handleDownload(
                  "joined_from_website",
                  dateRange.joinedFromWeb.from,
                  dateRange.joinedFromWeb.to
                )
              }
              onUpdateDateFilter={(val) =>
                handleDateFilter("joinedFromWeb", val)
              }
              selectedDateRange={selectedDayRange.joinedFromWeb}
              title={t("common:AnalyticsArtist.Artists joined from website")}
              reset={() => resetCalender("joinedFromWeb")}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <CountDisplayCard
              bgColorClass="block_bg_orange_100"
              count={countData.joinedFromApp}
              filteredDateRange={dateRange.joinedFromApp}
              onClickDownload={() =>
                handleDownload(
                  "joined_from_app",
                  dateRange.joinedFromApp.from,
                  dateRange.joinedFromApp.to
                )
              }
              onUpdateDateFilter={(val) =>
                handleDateFilter("joinedFromApp", val)
              }
              selectedDateRange={selectedDayRange.joinedFromApp}
              title={t("common:AnalyticsArtist.Artists joined from App")}
              reset={() => resetCalender("joinedFromApp")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <CountDisplayCard
              bgColorClass="block_bg_yellow_300"
              count={countData.notContactedCustomer}
              filteredDateRange={dateRange.notContactedCustomer}
              hideFilter
              onClickDownload={() =>
                handleDownload(
                  "no_contacted",
                  dateRange.notContactedCustomer.from,
                  dateRange.notContactedCustomer.to
                )
              }
              onUpdateDateFilter={(val) =>
                handleDateFilter("notContactedCustomer", val)
              }
              selectedDateRange={selectedDayRange.notContactedCustomer}
              title={t(
                "common:AnalyticsArtist.Artists not contacted any customers"
              )}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <CountDisplayCard
              bgColorClass="block_bg_green_100"
              count={countData.notCreatedAnyOffers}
              filteredDateRange={dateRange.notCreatedAnyOffers}
              hideFilter
              onClickDownload={() =>
                handleDownload(
                  "no_offer_created",
                  dateRange.notCreatedAnyOffers.from,
                  dateRange.notCreatedAnyOffers.to
                )
              }
              onUpdateDateFilter={(val) =>
                handleDateFilter("notCreatedAnyOffers", val)
              }
              selectedDateRange={selectedDayRange.notCreatedAnyOffers}
              title={t("common:AnalyticsArtist.Artists not created any offers")}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <CountDisplayCard
              bgColorClass="block_bg_blue_50"
              count={countData.nonPublicProfiles}
              filteredDateRange={dateRange.nonPublicProfiles}
              hideFilter
              onClickDownload={() =>
                handleDownload(
                  "not_public_artist",
                  dateRange.nonPublicProfiles.from,
                  dateRange.nonPublicProfiles.to
                )
              }
              onUpdateDateFilter={(val) =>
                handleDateFilter("nonPublicProfiles", val)
              }
              selectedDateRange={selectedDayRange.nonPublicProfiles}
              title={t(
                "common:AnalyticsArtist.Artists not completed public profile criteria"
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
