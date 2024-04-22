import React, { useState } from "react";
import Select from "react-select";
import OutsideClickHandler from "react-outside-click-handler";
import { useToggle } from "@/hooks/useToggle";
import RegionDropdown from "@/components/regionSelection/regionDropdown";
import { currentYear, options, months } from "@/helpers/helper";
import Calendar, { utils } from "@hassanmojab/react-modern-calendar-datepicker";
import Image from "next/image";
import {

  analyticsCustomerCountWithFIlter,
  analyticsCustomerLeadSourceCountWithFIlter,
} from "@/apiConfig/customerAnalyticsService"; // Importing analytics services
import useAnalyticsStore from "@/store/customerAnalytics/calenderFilter";

export default function FilterDataComponents({ filterDashBoardData, onUpdateDateFilter }) {
  const [toggle, onToggle] = useToggle(false);

  const [selectedYear, setSelectedYear] = useState('Yearly');
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });

  const [selectedFilter, setSelectedFilter] = useState({
    start_date: null,
    end_date: null,
    region: null,
    year: null
  });

  const selectedOption = { value: selectedYear, label: selectedYear };
  // const formattedDate = utils.formatDate(new Date(selectedDayRange.from.year, day.month, day.day), 'MMM dd, yyyy');

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

  const onFilterDashbardData = (data) => {
    setSelectedFilter({
      ...selectedFilter,
      region: data
    });
    filterDashBoardData(selectedFilter);
  };

  const handleChange = (selectedOption) => {
    const yearToFilter = selectedOption.value;
    setSelectedYear(yearToFilter);
    setSelectedFilter({ ...selectedFilter, year: yearToFilter })
    filterDashBoardData(selectedFilter);
  };

  const resetYear = () => {
    setSelectedYear('Yearly');
  };
  console.log('<><> sele', selectedFilter)
  const resetCalender = () => {
    setSelectedDayRange({
      ...selectedDayRange,
      from: null,
      to: null,
    });
  };

  const onClickToday = () => {
    resetCalender();
    resetYear();
    filterDashBoardData(selectedFilter);
  };

  // Filter the data based on the selected date range
  //  const filteredData = data.filter((item) => {
  //   const itemDate = item.date;
  //   if (!selectedDayRange.from || !selectedDayRange.to) {
  //     return true; // Return all items if no date range is selected
  //   }
  //   return (
  //     itemDate >= utils.startOfDay(selectedDayRange.from) &&
  //     itemDate <= utils.endOfDay(selectedDayRange.to)
  //   );
  // });

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
              onClick={onClickToday}
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
            <Calendar
              maximumDate={utils("en").getToday()}
              value={selectedDayRange}
              onChange={(range) => {
                setSelectedDayRange(range);
                setSelectedFilter({
                  ...selectedFilter,
                  start_date: selectedDayRange.from,
                  end_date: selectedDayRange.to
                })
              }}
              shouldHighlightWeekends
              calendarPopperPosition="bottom-end"
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
