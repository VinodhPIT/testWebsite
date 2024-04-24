import React from "react";
import Link from "next/link";
import moment from "moment";
import Image from "next/image";
import DatePicker, {
  utils,
} from "@hassanmojab/react-modern-calendar-datepicker";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";

const renderCustomInput = ({ ref }) => (
  <input readOnly ref={ref} className="datepicker_input" title="Date Range" />
);

export default function NewCountDisplayCard({
  iconBgColor,
  rightIconBgColor,
  rightIcon,
  count,
  withRightIcon,
  filteredDateRange,
  hideDownload,
  hideFilter,
  onClickDownload,
  onUpdateDateFilter,
  selectedDateRange,
  title,
  reset,
  icon
}) {
  return (
    <div className="db_card_wrapper">
      <div className="db_card_body p_16">
        <div>
          <div className="">
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
            <div className="db_count_text">{count}</div>
            <div className="db_customer_rqst_type">
              <div className="db_card_title_text">{title}</div>
              <div className="d_flex flex_direction_row db_customer_conversion_rate">
                <div className="db_card_conversion_percent_text">41.3%</div>
                <Image
                  src='/up-arrow-green.svg'
                  alt="arrow"
                  width={10}
                  height={10}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
