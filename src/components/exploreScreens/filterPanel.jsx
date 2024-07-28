import React from "react";
import Image from "next/image";

import { useToggle } from "@/hooks/useToggle";
import useWindowResize from "@/hooks/useWindowSize";

import useTranslation from "next-translate/useTranslation";
import OutsideClickHandler from "react-outside-click-handler";

import StyleDropdown from "@/components/exploreScreens/styleListing";
import style from "@/pages/explore/search.module.css";
import LocationSearch from "@/components/exploreScreens/placesAutocomplete";

import { useGlobalState } from "@/context/Context";
import { formatText } from "@/utils/textUtils";

export default function FilterPanel({searchKey, currentTab,selectedStyle, lat, lon, router,  isDetail ,pathTranslations}) {

  const [toggle, onToggle, onToggleLoc, toggleLocation] = useToggle(false);
  const { state, selectedIds } = useGlobalState();
  const { isMobileView } = useWindowResize();
  const { t } = useTranslation();
  const addressText = state.address === "" ? t("common:location") : formatText(state.address);

  return (
    <div>
      {isMobileView === true ? (
        // Mobile  View //
        <div className={style.main_wrap}>
          <div className={style.custom_search_filter_mob}>
            <div className={style.wrapper_filter}>
              <button onClick={onToggle} className={style.setting_mob_block}>
                <Image
                  src="/setting-tuning-mob.svg"
                  width={20}
                  height={20}
                  alt="style"
                  className={style.filter_icon}
                  priority
                />
              </button>
            </div>
            {currentTab === "artist" ? (
              <button className={style.wrapper_block} onClick={onToggleLoc}>
                <Image
                  src="/location-mob.svg"
                  width={18}
                  height={18}
                  alt="location"
                  className={style.location_icon}
                  priority
                />
              </button>
            ) : null}
          </div>
        </div>
      ) : (
        // Desktop View //
        <div className={style.main_wrap}>
          {currentTab === "artist" && (
            <div className={style.wrapper_block}>
              <button
                className={`${style.wrapper_block_loc} ${
                  toggleLocation ? "onActive" : null
                }`}
                onClick={onToggleLoc}
              >
                <Image
                  src="/location-small.svg"
                  width={16}
                  height={17}
                  alt="location"
                  className={style.location_icon}
                  priority
                />

                <span>{addressText}</span>

              </button>

              {toggleLocation && (
                <OutsideClickHandler onOutsideClick={onToggleLoc}>
                  <LocationSearch
                    searchKey={searchKey}
                    currentTab={pathTranslations}
                    selectedStyle={selectedStyle}
                    router={router}
                    onToggle={onToggleLoc}
                  />
                </OutsideClickHandler>
              )}
            </div>
          )}

          <div className={style.wrapper_filter}>
            <button
              onClick={onToggle}
              className={`${style.filter_block}  ${toggle ? "onActive" : null}`}
            >
              <Image
                src="/setting-tuning.svg"
                width={20}
                height={21}
                alt="style"
                className={style.filter_icon}
                priority
              />
              <span>{t("common:Style")}</span>
              {selectedIds.length>=1 && (
                <span className={style.notification_count}>
                  {selectedIds.length}
                </span>
              )}
            </button>

            {toggle && !isMobileView && (
              <OutsideClickHandler onOutsideClick={onToggle}>
                <StyleDropdown
                  searchKey={searchKey}
                  currentTab={pathTranslations}
                  lat={lat}
                  lon={lon}
                  router={router}
                  isDetail={false}
                  onToggle={onToggle}
                />
              </OutsideClickHandler>
            )}
          </div>
        </div>
      )}

      {toggleLocation && isMobileView && (
        <div>
          <LocationSearch
            searchKey={searchKey}
            currentTab={pathTranslations}
            selectedStyle={selectedStyle}
            router={router}
            onToggle={onToggleLoc}
          />
        </div>
      )}

      {toggle && isMobileView && (
        <div>
          <StyleDropdown
            searchKey={searchKey}
            currentTab={pathTranslations}
            lat={lat}
            lon={lon}
            router={router}
            isDetail={isDetail}
            onToggle={onToggle}
          />
        </div>
      )}
    </div>
  );
}
