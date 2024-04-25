import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import OutsideClickHandler from "react-outside-click-handler";
import { useToggle } from "@/hooks/useToggle";
import RegionDropdown from "@/components/regionSelection/regionDropdown";
import { currentYear, options, months } from "@/helpers/helper";
import Calendar, { utils } from "@hassanmojab/react-modern-calendar-datepicker";
import useTranslation from "next-translate/useTranslation";
import moment from "moment";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";

export default function FilterDataComponents({ filterDashBoardData, onUpdateDateFilter, countryData }) {
  const [toggle, onToggle] = useToggle(false);
  const { t } = useTranslation();

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
  const inputRef = useRef(null);

  const selectedOption = { value: selectedYear, label: selectedYear };

  const customStyles = {
    control: base => ({
      ...base,
      border: '1px solid #E1E4E8',
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'none',
      marginLeft: 16,
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

  const onFilterDashbardData = (data) => {
    setSelectedFilter({
      ...selectedFilter,
      region: data
    });
    filterDashBoardData({
      ...selectedFilter,
      region: data
    });;
    onToggle();
  };

  const resetCalender = () => {
    setSelectedDayRange({
      from: null,
      to: null,
    });
  };

  const handleChange = (selectedOption) => {
    const yearToFilter = selectedOption.value;
    setSelectedYear(yearToFilter);
    resetCalender();
    setSelectedFilter({
      ...selectedFilter,
      start_date: null,
      end_date: null,
      year: yearToFilter
    })
    filterDashBoardData({
      ...selectedFilter,
      start_date: null,
      end_date: null,
      year: yearToFilter
    });
  };

  const resetYear = () => {
    setSelectedYear('Yearly');
  };

  const onClickToday = () => {
    resetCalender();
    resetYear();
    setSelectedFilter({
      ...selectedFilter,
      start_date: moment().format('YYYY-MM-DD'),
      end_date: moment().format('YYYY-MM-DD'),
    })
    filterDashBoardData({
      ...selectedFilter,
      year: '',
      start_date: moment().format('YYYY-MM-DD'),
      end_date: moment().format('YYYY-MM-DD'),
    });
  };

  const renderCustomInput = ({ ref }) => (
    <div className="db_list_drop_down">
      <div className="db_filter_data_comp">
        <input
          readOnly
          ref={ref}
          placeholder="Monthly"
          value={selectedDayRange &&
            selectedDayRange.from &&
            selectedDayRange.to
            ? `${moment(selectedDayRange.from).format("DD MMM YYYY")} ${moment(selectedDayRange.to).format("DD MMM YYYY") !==
              moment(selectedDayRange.from).format("DD MMM YYYY")
              ? `- ${moment(selectedDayRange.to).format("DD MMM YYYY")}`
              : ""
            }`
            : ""}
          className="filter_month_selection btn_style"
        />
      </div>
    </div>
  )

  return (
    <>
      <section class="container-fluid">
        <div className="db_selection_wrapper">
          <div className="db_list_drop_down">
            <div className="db_filter_data_comp">
              <button
                type="button"
                onClick={onToggle}
                class="btn_selection btn_style"
                style={buttonTextStyle}
              >
                {t("common:AnalyticsDashboard.Regions")}
              </button>
            </div>
            {
              toggle && (
                <OutsideClickHandler
                  onOutsideClick={onToggle}
                >
                  <RegionDropdown onToggle={onToggle} onFilterData={onFilterDashbardData} countryData={countryData} />
                </OutsideClickHandler>
              )
            }
          </div>
          <div className="db_list_drop_down">
            <div className="db_filter_data_comp">
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
            <div className="db_filter_data_comp">
              <DatePicker
                inputPlaceholder={t("common:AnalyticsDashboard.Monthly")}
                calendarPopperPosition="bottom-end"
                maximumDate={utils("en").getToday()}
                value={selectedDayRange}
                onChange={(range) => {
                  setSelectedDayRange(range);
                  const fromDay = range.from?.day.toString().padStart(2, '0');
                  const fromMonth = range.from?.month.toString().padStart(2, '0');
                  const toDay = range.to?.day.toString().padStart(2, '0');
                  const toMonth = range.to?.month.toString().padStart(2, '0');
                  const fromDate = `${range.from?.year}-${fromMonth}-${fromDay}`;
                  const toDate = `${range.to?.year}-${toMonth}-${toDay}`;
                  setSelectedFilter({
                    ...selectedFilter,
                    start_date: fromDate,
                    end_date: toDate
                  });
                  filterDashBoardData({
                    ...selectedFilter,
                    start_date: fromDate,
                    end_date: toDate
                  })
                }}
                renderInput={renderCustomInput}
                shouldHighlightWeekends
              />
            </div>
          </div>
          <div className="db_list_drop_down">
            <div className="db_filter_data_comp">
              <Select
                id="yearSelect"
                options={options}
                value={selectedOption}
                onChange={handleChange}
                placeholder={t("common:AnalyticsDashboard.Yearly")}
                isSearchable={false}
                styles={customStyles}
              />
            </div>
          </div>
        </div >
      </section>
    </>
  )
}
