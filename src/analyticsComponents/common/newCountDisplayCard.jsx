import React from "react";
import Select from "react-select";
import Image from "next/image";

import useTranslation from "next-translate/useTranslation";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";

export default function NewCountDisplayCard({
  count,
  icon,
  iconBgColor,
  onSelectData, 
  options,
  rightIcon,
  rightIconBgColor,
  selectedData,
  title,
  withRightIcon
}) {
  const { t } = useTranslation();

  const customStyles = {
    control: base => ({
      ...base,
      border: '1px solid --gray-light-300',
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'none'
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

  return (
    <div className="db_card_wrapper">
      <div className="db_card_body p_16">
        <div>
          <div className="flex_direction_row d_flex justify_space_between" >
            <div className="flex_direction_row d_flex">
              <div className={`db_card_icon_wrapper ${iconBgColor}`}>
                <Image
                  src={icon}
                  alt="icon"
                  width={24}
                  height={24}
                />
              </div>
              {withRightIcon && <div className={`ml_5 db_card_icon_wrapper ${rightIconBgColor}`}>
                <Image
                  src={rightIcon}
                  alt="rightIcon"
                  width={24}
                  height={24}
                />
              </div>}
            </div>
            {onSelectData
             && ( 
                <Select
                  id="currencySelect"
                  options={options}
                  defaultValue={selectedData}
                  onChange={onSelectData}
                  placeholder={t("common:AnalyticsDashboard.Yearly")}
                  isSearchable={false}
                  styles={customStyles}
                />
            )}
          </div>
          <div className="db_count_text">{count}</div>
          <div className="db_customer_rqst_type">
            <div className="db_card_title_text">{title}</div>
            {/* <div className="d_flex flex_direction_row db_customer_conversion_rate">
              <div className="db_card_conversion_percent_text">41.3%</div>
              <Image
                src='/up-arrow-green.svg'
                alt="arrow"
                width={10}
                height={10}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
