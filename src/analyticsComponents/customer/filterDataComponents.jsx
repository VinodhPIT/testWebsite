import React, { useState } from "react";
import Select from "react-select";
import OutsideClickHandler from "react-outside-click-handler";
import { useToggle } from "@/hooks/useToggle";
import RegionDropdown from "@/components/regionSelection/regionDropdown";
import { currentYear, options, months } from "@/helpers/helper";
import DatePicker, { utils } from "@hassanmojab/react-modern-calendar-datepicker";
import Image from "next/image";

export default function FilterDataComponents({ onFilterDashbardData }) {
  const [toggle, onToggle, onToggleLoc, toggleLocation] = useToggle(false);

  const [selectedYear, setSelectedYear] = useState('Yearly');

  const selectedOption = { value: selectedYear, label: selectedYear };

  const handleChange = (selectedOption) => {
    const yearToFilter = selectedOption.value;
    setSelectedYear(yearToFilter);
  };

  const customStyles = {
    control: base => ({
      ...base,
      border: '1px solid #E1E4E8',
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'none',
      marginRight: 16,
    }),
    option: (provided) => ({
      ...provided,
      fontSize: '14px',
      color: '#212121'
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: '14px',
      color: '#212121'
    }),
    indicatorSeparator: () => ({ display: 'none' }),
    dropdownIndicator: () => ({ marginRight: 8, color: '#707070' })
  };

  const buttonTextStyle = {
    fontSize: '14px',
    color: '#333'
  };

  const renderCustomInput = ({ onClick }) => (
    <button
      type="button"
      onClick={onClick}
      class="btn_selection btn_style"
    >
      Monthly
    </button>
  );

  const initialValue = {
    // Initial date range values
    contactedWithNoOffer: {
      from: null,
      to: null,
    },
    deletedCustomers: {
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
    noCompletedOffer: {
      from: null,
      to: null,
    },
    notContacted: {
      from: null,
      to: null,
    },
    referralUsedCustomers: {
      from: null,
      to: null,
    },
    totalCustomers: {
      from: null,
      to: null,
    },
    voucherUserCustomers: {
      from: null,
      to: null,
    },
  };

  const [selectedDayRange, setSelectedDayRange] = useState(initialValue);


  // Function to handle date filter
  const handleDateFilter = async (key, dateRangeValue) => {
    setSelectedDayRange({
      ...selectedDayRange,
      [key]: dateRangeValue
    });
    const { from, to } = dateRangeValue;
    const fromDate = `${from?.year}-${from?.month > 9 ? from?.month : `0${from?.month}`}-${from?.day > 9 ? from?.day : `0${from?.day}`}` || '';
    const toDate = to ? `${to?.year}-${to?.month > 9 ? to?.month : `0${to?.month}`}-${to?.day > 9 ? to?.day : `0${to?.day}`}` : null;
    if (fromDate && toDate) {
      if (key === "joinedFromWeb" || key === "joinedFromApp") {
        const res = await analyticsCustomerLeadSourceCountWithFIlter({
          startDate: fromDate,
          endDate: toDate
        }, token);
        setCountData({
          ...countData,
          ...(key === "joinedFromApp" && { joinedFromApp: res.filter((custData) => custData.lead_source === "APP").length }),
          ...(key === "joinedFromWeb" && { joinedFromWeb: res.filter((custData) => custData.lead_source === "WEB").length })
        })
        setDateRange({
          ...dateRange,
          [key]: {
            from: fromDate,
            to: toDate
          }
        });
      } else {
        const res = await analyticsCustomerCountWithFIlter({
          type: Apitype[key],
          startDate: fromDate,
          endDate: toDate
        }, token);
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
  }

  const resetCalender = (key) => {
    setSelectedDayRange({
      ...selectedDayRange,
      [key]: {
        from: null,
        to: null,
      },
    });

    setDateRange({
      ...dateRange,
      [key]: {
        from: null,
        to: null,
      },
    });

    setCountData({
      ...countData,
      [key]: initialCounts[key],
    });
  };

  return (
    <>
      <div className="db_selection_wrapper">
        <div className="db_list_drop_down">
          <div className="db_flex">
            <button
              type="button"
              onClick={onToggle}
              class="btn_selection btn_style"
              style={buttonTextStyle}
            >
              Regions
            </button>
          </div>
        </div>
        <div className="db_list_drop_down">
          <div className="db_flex">
            <button
              type="button"
              // onClick={onToggle}
              class="btn_selection btn_style"
            >
              Today
            </button>
          </div>
        </div>
        <div className="db_list_drop_down">
          <div className="db_flex">
            <Select
              id="yearSelect"
              options={options}
              value={selectedOption}
              onChange={handleChange}
              placeholder="Yearly"
              isSearchable={false}
              styles={customStyles}
            />
          </div>
        </div>
        <div className="db_list_drop_down">
          <div className="db_flex">
            <DatePicker
              calendarPopperPosition="bottom"
              maximumDate={utils("en").getToday()}
              onChange={(val) => handleDateFilter('joinedFromWeb', val)}
              renderInput={renderCustomInput}
              shouldHighlightWeekends
              value={selectedDayRange.deletedCustomers}
            />

          </div>
        </div>
      </div >
      {
        toggle && (
          <OutsideClickHandler
            onOutsideClick={onToggle}
          >
            <RegionDropdown onToggle={onToggle} onFilterData={onFilterDashbardData} />
          </OutsideClickHandler>
        )
      }
    </>
  )
}
