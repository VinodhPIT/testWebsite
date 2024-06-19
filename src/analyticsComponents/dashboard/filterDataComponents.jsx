import React, { useRef, useState } from "react";

import { useToggle } from "@/hooks/useToggle";

import Select from "react-select";
import moment from "moment";
import OutsideClickHandler from "react-outside-click-handler";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
import { utils } from "@hassanmojab/react-modern-calendar-datepicker";
import useTranslation from "next-translate/useTranslation";
import RegionDropdown from "@/analyticsComponents/dashboard/regionDropdown";

import { options } from "@/helpers/helper";
import { useGlobalState } from "@/context/Context";

export default function FilterDataComponents({
  filterDashBoardData, countryData

}) {
  const [toggle, onToggle] = useToggle(false);

  const { t } = useTranslation();

  const { selectedIds, setSelectedIds } = useGlobalState();

  const [selectedYear, setSelectedYear] = useState({
    value: 0,
    label: t("common:AnalyticsDashboard.Yearly"),
  });

  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });

  const [selectedFilter, setSelectedFilter] = useState({
    start_date: null,
    end_date: null,
    region: null,
    year: null,
  });
  const inputRef = useRef(null);

  const selectedOption = {
    value: selectedYear.value,
    label: selectedYear.label,
  };

  const customStyles = {
    placeholder: (provided) => ({
      ...provided,
      color:"#000",
      fontSize:"14px"
    }),

    control: (base) => ({
      ...base,
      border: "1px solid #E7E7E7",
      borderRadius: 4,
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "none",
    
      
    }),
    option: (provided) => ({
      ...provided,
      fontSize: "14px",
      color: "#212121",
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: "14px",
      color: "#212121",
    }),
    indicatorSeparator: () => ({ display: "none" }),
    dropdownIndicator: () => ({ marginRight: 8, color: "#707070" }),
  };

  const resetCalender = () => {
    setSelectedDayRange({
      from: null,
      to: null,
    });
  };

  const resetYear = () => {
    setSelectedYear({ label: "Yearly", value: "Yearly" });
  };

  const onFilterDashbardData = (data) => {
    resetCalender();
    resetYear();

    setSelectedFilter({
      ...selectedFilter,
      start_date: null,
      end_date: null,
      region: data,
      year: '',
    });
    filterDashBoardData({
      ...selectedFilter,
      start_date: null,
      end_date: null,
      region: data,
      year: '',
    });
    onToggle();
  };

  const onClearRegion = ()=>{
    filterDashBoardData({
      ...selectedFilter,
      start_date: null,
      end_date: null,
      region: '',
      year: '',
    });
    onToggle();
  }




  const handleChange = (selectedOption) => {
    setSelectedIds([])
    resetCalender();
    const yearToFilter = selectedOption.value;
    setSelectedYear(yearToFilter);

    setSelectedFilter({
      ...selectedFilter,
      start_date: null,
      end_date: null,
      year: yearToFilter,
    });
    filterDashBoardData({
      ...selectedFilter,
      start_date: null,
      end_date: null,
      year: yearToFilter,
      region:""
    });
  };

  const onClickToday = () => {
    setSelectedIds([])
    resetCalender();
    resetYear();
    setSelectedFilter({
      ...selectedFilter,
      start_date: moment().format("YYYY-MM-DD"),
      end_date: moment().format("YYYY-MM-DD"),
    });
    filterDashBoardData({
      ...selectedFilter,
      year: "",
      start_date: moment().format("YYYY-MM-DD"),
      end_date: moment().format("YYYY-MM-DD"),
      region:""
    });
  };

  const divClassName = `filter_month_selection btn_style custom-placeholder ${
    selectedDayRange.from && selectedDayRange.to
      ? "db_calendar_max_width"
      : "db_calendar_min_width"
  }`;



  const renderCustomInput = ({ ref }) => (
    <div className="db_list_drop_down">
      <div className="db_filter_data_comp">
        <input
          readOnly
          ref={ref}
          placeholder={t("common:AnalyticsDashboard.Monthly")}
          value={
            selectedDayRange &&
            selectedDayRange.from &&
            selectedDayRange.to
              ? `${moment(`${selectedDayRange.from.year}-${selectedDayRange.from.month}-${selectedDayRange.from.day}`).format("DD MMM YYYY")} ${
                  moment(`${selectedDayRange.to.year}-${selectedDayRange.to.month}-${selectedDayRange.to.day}`).format("DD MMM YYYY") !==
                  moment(`${selectedDayRange.from.year}-${selectedDayRange.from.month}-${selectedDayRange.from.day}`).format("DD MMM YYYY")
                    ? `- ${moment(`${selectedDayRange.to.year}-${selectedDayRange.to.month}-${selectedDayRange.to.day}`).format("DD MMM YYYY")}`
                    : ""
                }`
              : ""
          }
          className={divClassName}
        />
      </div>
    </div>
  );
  

  return (
    <>
      <section className="container-fluid">
        <div className="db_selection_wrapper">
          <div className="db_list_drop_down">
            <div className="db_filter_data_comp db_filter_region">
              <button
                type="button"
                onClick={onToggle}
                className="btn_selection btn_style"
              >
                {t("common:AnalyticsDashboard.Regions")}

                {selectedIds.length> 0 &&  <span className="country_count">{selectedIds.length}</span>}
              </button>
             
            </div>
            {toggle && (
              <OutsideClickHandler onOutsideClick={onToggle}>
                <RegionDropdown
                  onToggle={onToggle}
                  onFilterData={onFilterDashbardData}
                  onClearRegion={onClearRegion}
                  countryData={countryData}
                />
              </OutsideClickHandler>
            )}
          </div>
          <div className="db_list_drop_down">
            <div className="db_filter_data_comp">
              <button
                type="button"
                onClick={onClickToday}
                className="btn_selection btn_style"
              >
                {t("common:AnalyticsDashboard.Today")}
              </button>
            </div>
          </div>
          <div className="db_list_drop_down">
            <div className="db_filter_data_comp db_filter_monthly">
              <DatePicker
                inputPlaceholder={t("common:AnalyticsDashboard.Monthly")}
                
                calendarPopperPosition="bottom-end"
                maximumDate={utils("en").getToday()}
                value={selectedDayRange}
                onChange={(range) => {
                  resetYear();
                  setSelectedDayRange(range);

                  if (range.from && range.to) {
                    setSelectedIds([])
                    const fromDay = range.from.day.toString().padStart(2, "0");
                    const fromMonth = range.from.month
                      .toString()
                      .padStart(2, "0");
                    const toDay = range.to.day.toString().padStart(2, "0");
                    const toMonth = range.to.month.toString().padStart(2, "0");
                    const fromDate = `${range.from.year}-${fromMonth}-${fromDay}`;
                    const toDate = `${range.to.year}-${toMonth}-${toDay}`;

            

                    setSelectedFilter({
                      ...selectedFilter,
                      start_date: fromDate,
                      end_date: toDate,
                    });

                    filterDashBoardData({
                      ...selectedFilter,
                      year: "",
                      start_date: fromDate,
                      end_date: toDate,
                      region:""
                    });
                  }
                }}
                renderInput={renderCustomInput}
                shouldHighlightWeekends
              />
            </div>
          </div>
          <div className="db_list_drop_down">
            <div className="db_filter_data_comp db_filter_yearly">
              <Select
                id="yearSelect"
                options={options}
                value={selectedOption.label}
                onChange={handleChange}
                placeholder={t("common:AnalyticsDashboard.Yearly")}
                isSearchable={false}
                styles={customStyles}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
