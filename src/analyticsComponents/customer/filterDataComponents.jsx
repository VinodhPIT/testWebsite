import React, { useRef, useState } from "react";
import Select from "react-select";
import moment from "moment";
import OutsideClickHandler from "react-outside-click-handler";
import { utils } from "@hassanmojab/react-modern-calendar-datepicker";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";

import { useToggle } from "@/hooks/useToggle";

import useTranslation from "next-translate/useTranslation";

import RegionDropdown from "@/components/regionSelection/regionDropdown";

import { options } from "@/helpers/helper";

export default function FilterDataComponents({ filterDashBoardData, onUpdateDateFilter, countryData }) {
  const [toggle, onToggle] = useToggle(false);
  const { t } = useTranslation();

  const [selectedYear, setSelectedYear] = useState(
    { value: t("common:AnalyticsDashboard.Yearly"), label: 'Yearly' });
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

  const selectedOption = { value: selectedYear.value, label: selectedYear.label };

  const customStyles = {
    control: base => ({
      ...base,

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
      end_date: null, year: yearToFilter
    });
  };

  const resetYear = () => {
    setSelectedYear({ label: 'Yearly', value: 'Yearly' });
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

  const divClassName = `filter_month_selection btn_style ${selectedDayRange.from &&
    selectedDayRange.to ? 'db_calendar_max_width' : 'db_calendar_min_width'}`;

  const renderCustomInput = ({ ref }) => (
    <div className="db_list_drop_down">
      <div className="db_filter_data_comp">
        <input
          readOnly
          ref={ref}
          placeholder={t("common:AnalyticsDashboard.Monthly")}
          value={selectedDayRange &&
            selectedDayRange.from &&
            selectedDayRange.to
            ? `${moment(selectedDayRange.from).format("DD MMM YYYY")} ${moment(selectedDayRange.to).format("DD MMM YYYY") !==
              moment(selectedDayRange.from).format("DD MMM YYYY")
              ? `- ${moment(selectedDayRange.to).format("DD MMM YYYY")}`
              : ""
            }`
            : ""}
          className={divClassName}
        />
      </div>
    </div>
  )

  return (
    <>
      <section class="container-fluid">
        <div className="db_selection_wrapper">
          <div className="db_list_drop_down">
            <div className="db_filter_data_comp db_filter_region">
              <button
                type="button"
                onClick={onToggle}
                class="btn_selection btn_style"
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
            <div className="db_filter_data_comp db_filter_yearly">
              <Select
                id="yearSelect"
                options={options}
                value={selectedOption.value}
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
