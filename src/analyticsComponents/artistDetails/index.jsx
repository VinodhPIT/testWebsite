import React, { useState } from 'react'

import { analyticsArtistCountWithFIlter } from "@/action/action";

import CountDisplayCard from '../countDisplayCard';

const Apitype = {
    artistCompletedOffers:'artist_with_offer',
    artistInCommunication:'contacted_artist',
    joinedFromApp:'joined_from_app',
    joinedFromWeb:'joined_from_website',
    joinedUsingReferral:'referreal_used',
    nonPublicProfiles:'not_public_artist',
    notCompletedAnyOffer:'no_offer_completed',
    notContactedCustomer:'no_contacted',
    notCreatedAnyOffers:'no_offer_created',
    totalArtists:'total_artist',
    totalPublicArtists:'public_artist'
  }

const initialValue = {
    artistCompletedOffers:{
        from: null,
        to: null
    },
    artistInCommunication:{
        from: null,
        to: null
    },
    joinedFromApp:{
        from: null,
        to: null
    },
    joinedFromWeb:{
        from: null,
        to: null
    },
    joinedUsingReferral:{
        from: null,
        to: null
    },
    nonPublicProfiles:{
        from: null,
        to: null
    },
    notCompletedAnyOffer:{
        from: null,
        to: null
    },
    notContactedCustomer:{
        from: null,
        to: null
    },
    notCreatedAnyOffers:{
        from: null,
        to: null
    },
    totalArtists:{
        from: null,
        to: null
    },
    totalPublicArtists:{
        from: null,
        to: null
    }
};

export default function ArtistDetails({initialCounts}) {
    const [countData, setCountData]=useState(initialCounts);
    const [dateRange, setDateRange] = useState(initialValue);
    const [selectedDayRange, setSelectedDayRange] = useState(initialValue);

    const renderCustomInput = ({ ref }) => (
        <input
            readOnly
            ref={ref}
            className="datepicker_input"
            title="Date Range"
        />
    )

    const handleDownload = (type, startDate, endDate) => {
    const link = document.createElement('a');
    link.href = `${process.env.analyticsBaseUrl}/customer/csv/${type}?start_date=${startDate}&end_date=${endDate}`;
    link.target = '_blank';
    link.download = `${new Date().getTime()}.csv`;
    link.click();
  };

  const handleDateFilter = async (key, dateRangeValue) => {
     setSelectedDayRange({
        ...selectedDayRange,
        [key]: dateRangeValue
    });
    const { from, to } = dateRangeValue;
    const fromDate = `${from?.year}-${from?.month}-${from?.day}` || '';
    const toDate = to ? `${to?.year}-${to?.month}-${to?.day}` : null;

    if (fromDate && toDate) {
        const res = await analyticsArtistCountWithFIlter({
            type: Apitype[key],
            startDate: fromDate,
            endDate: toDate
        });
        setCountData({
            ...countData,
            [key]: res[Apitype[key]]
        });
        setDateRange({
          ...dateRange,
          [key]: {
            from: fromDate,
            to: toDate
          }
        });
    }
  }

  return (
        <section className="container-fluid">
            <div className="db_customer_detail_wrap">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard 
                            bgColorClass="block_bg_yellow_300"
                            count={countData.totalArtists}
                            filteredDateRange={dateRange.totalArtists}
                            onClickDownload={() => handleDownload('total_artist', dateRange.totalArtists.from, dateRange.totalArtists.to)}
                            onUpdateDateFilter={(val)=>handleDateFilter('totalArtists', val)}
                            selectedDateRange={selectedDayRange.totalArtists}
                            title="Total artist"
                        />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard 
                            bgColorClass="block_bg_green_100"
                            count={countData.totalPublicArtists}
                            filteredDateRange={dateRange.totalPublicArtists}
                            onClickDownload={() => handleDownload('public_artist', dateRange.totalPublicArtists.from, dateRange.totalPublicArtists.to)}
                            onUpdateDateFilter={(val)=>handleDateFilter('totalPublicArtists', val)}
                            selectedDateRange={selectedDayRange.totalPublicArtists}
                            title="Total Public artists"
                        />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard 
                            bgColorClass="block_bg_blue_50"
                            count={countData.artistInCommunication}
                            filteredDateRange={dateRange.artistInCommunication}
                            onClickDownload={() => handleDownload('contacted_artist', dateRange.artistInCommunication.from, dateRange.artistInCommunication.to)}
                            onUpdateDateFilter={(val)=>handleDateFilter('artistInCommunication', val)}
                            selectedDateRange={selectedDayRange.artistInCommunication}
                            title="Artists in communication with the customer"
                        />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard 
                            bgColorClass="block_bg_orange_100"
                            count={countData.artistCompletedOffers}
                            filteredDateRange={dateRange.artistCompletedOffers}
                            onClickDownload={() => handleDownload('artist_with_offer', dateRange.artistCompletedOffers.from, dateRange.artistCompletedOffers.to)}
                            onUpdateDateFilter={(val)=>handleDateFilter('artistCompletedOffers', val)}
                            selectedDateRange={selectedDayRange.artistCompletedOffers}
                            title="Artists who completed at least one offer"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard 
                            bgColorClass="block_bg_yellow_300"
                            count={countData.notCompletedAnyOffer}
                            filteredDateRange={dateRange.notCompletedAnyOffer}
                            onClickDownload={() => handleDownload('no_offer_completed', dateRange.notCompletedAnyOffer.from, dateRange.notCompletedAnyOffer.to)}
                            onUpdateDateFilter={(val)=>handleDateFilter('notCompletedAnyOffer', val)}
                            selectedDateRange={selectedDayRange.notCompletedAnyOffer}
                            title="Artists who didn’t complete any offers"
                        />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard 
                            bgColorClass="block_bg_green_100"
                            count={countData.joinedUsingReferral}
                            filteredDateRange={dateRange.joinedUsingReferral}
                            onClickDownload={() => handleDownload('referreal_used', dateRange.joinedUsingReferral.from, dateRange.joinedUsingReferral.to)}
                            onUpdateDateFilter={(val)=>handleDateFilter('joinedUsingReferral', val)}
                            selectedDateRange={selectedDayRange.joinedUsingReferral}
                            title="Artists joined using referral"
                        />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard 
                            bgColorClass="block_bg_blue_50"
                            count={countData.joinedFromWeb}
                            filteredDateRange={dateRange.joinedFromWeb}
                            onClickDownload={() => handleDownload('joined_from_website', dateRange.joinedFromWeb.from, dateRange.joinedFromWeb.to)}
                            onUpdateDateFilter={(val)=>handleDateFilter('joinedFromWeb', val)}
                            selectedDateRange={selectedDayRange.joinedFromWeb}
                            title="Artists joined from website"
                        />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard 
                            bgColorClass="block_bg_orange_100"
                            count={countData.joinedFromApp}
                            filteredDateRange={dateRange.joinedFromApp}
                            onClickDownload={() => handleDownload('joined_from_app', dateRange.joinedFromApp.from, dateRange.joinedFromApp.to)}
                            onUpdateDateFilter={(val)=>handleDateFilter('joinedFromApp', val)}
                            selectedDateRange={selectedDayRange.joinedFromApp}
                            title="Artists joined from App"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard 
                            bgColorClass="block_bg_yellow_300"
                            count={countData.notContactedCustomer}
                            filteredDateRange={dateRange.notContactedCustomer}
                            onClickDownload={() => handleDownload('no_contacted', dateRange.notContactedCustomer.from, dateRange.notContactedCustomer.to)}
                            onUpdateDateFilter={(val)=>handleDateFilter('notContactedCustomer', val)}
                            selectedDateRange={selectedDayRange.notContactedCustomer}
                            title="Artists not contacted any customers"
                        />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard 
                            bgColorClass="block_bg_green_100"
                            count={countData.notCreatedAnyOffers}
                            filteredDateRange={dateRange.notCreatedAnyOffers}
                            onClickDownload={() => handleDownload('no_offer_created', dateRange.notCreatedAnyOffers.from, dateRange.notCreatedAnyOffers.to)}
                            onUpdateDateFilter={(val)=>handleDateFilter('notCreatedAnyOffers', val)}
                            selectedDateRange={selectedDayRange.notCreatedAnyOffers}
                            title="Artists not created any offers"
                        />
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <CountDisplayCard 
                            bgColorClass="block_bg_blue_50"
                            count={countData.nonPublicProfiles}
                            filteredDateRange={dateRange.nonPublicProfiles}
                            onClickDownload={() => handleDownload('not_public_artist', dateRange.nonPublicProfiles.from, dateRange.nonPublicProfiles.to)}
                            onUpdateDateFilter={(val)=>handleDateFilter('nonPublicProfiles', val)}
                            selectedDateRange={selectedDayRange.nonPublicProfiles}
                            title="Artists not completed public profile criteria"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
