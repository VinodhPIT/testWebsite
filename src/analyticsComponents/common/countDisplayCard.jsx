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

export default function CountDisplayCard({
  bgColorClass,
  count,
  filteredDateRange,
  hideDownload,
  hideFilter,
  onClickDownload,
  onUpdateDateFilter,
  selectedDateRange,
  title,
  reset,
}) {
  return (
    <div className={`db_card ${bgColorClass}`}>
      <div className="db_card_body p_16">
        <div className="d_flex justify_space_between align_item_center pb_12">
          <div>
            <h4>{title}</h4>
            <p>
              {filteredDateRange &&
              filteredDateRange.from &&
              filteredDateRange.from
                ? `${moment(filteredDateRange.from).format("DD MMM YYYY")} ${
                    moment(filteredDateRange.to).format("DD MMM YYYY") !==
                    moment(filteredDateRange.from).format("DD MMM YYYY")
                      ? `- ${moment(filteredDateRange.to).format(
                          "DD MMM YYYY"
                        )}`
                      : ""
                  }`
                : ""}
            </p>
          </div>
          {!hideFilter && (
            <div className="iconWrapper">
              <div className="db_icon_shape db_icon_cal">
                <Image
                  alt="calender"
                  height="20"
                  priority
                  src="/icon_calender_new.svg"
                  width="20"
                />
                <DatePicker
                  calendarPopperPosition="bottom"
                  maximumDate={utils("en").getToday()}
                  onChange={(val) => onUpdateDateFilter(val)}
                  renderInput={renderCustomInput}
                  shouldHighlightWeekends
                  value={selectedDateRange}
                />
              </div>

              <div className="db_icon_shape db_icon_cal">
                <button
                  disabled={
                    filteredDateRange &&
                    filteredDateRange.from &&
                    filteredDateRange.from !== null
                      ? false
                      : true
                  }
                  onClick={reset}
                >
                  <Image
                    src={"/resetIcon.png"}
                    alt="resetIcon"
                    width={15}
                    height={15}
                  />
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="d_flex justify_space_between align_item_center">
          <h2>{count}</h2>
          {!hideDownload && (
            <div className="db_icon_shape mr_24">
              <Link
                href=""
                className="d_inline_block"
                onClick={onClickDownload}
              >
                <Image
                  alt="Download"
                  height="24"
                  priority
                  src="/db_icon_download.svg"
                  width="24"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
