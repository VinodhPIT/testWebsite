import React ,{useRef ,useEffect, useState} from "react";
import Image from "next/image";
import StyleDropdown from "@/components/styleDropdown/styleDropdown";
import useWindowResize from "@/hooks/useWindowSize";
import { useToggle } from "@/hooks/useToggle";
import style from "@/pages/explore/search.module.css";

import useTranslation from "next-translate/useTranslation";
import LocationSearch from "@/components/filterByLocation/location";
import { useGlobalState } from "@/context/Context";
import { formatText } from '@/utils/textUtils';
import { useRouter } from 'next/router';
import OutsideClickHandler from 'react-outside-click-handler';

export default function SelectDropdown({
  searchKey,
  currentTab,
  selectedStyle,
  lat,
  lon,
  router,
  isDetail,
}) {
  const [toggle, onToggle, onToggleLoc, toggleLocation] = useToggle(false);
  const { state ,selectedIds} = useGlobalState();
  const { isMobileView } = useWindowResize();

  const { t } = useTranslation();

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
            <div className={style.wrapper_block} >
              <button className={ `${style.wrapper_block_loc} ${toggleLocation ? 'onActive' :null}`   } onClick={onToggleLoc} >
                <Image
                  src="/location-small.svg"
                  width={16}
                  height={17}
                  alt="location"
                  className={style.location_icon}
                  priority
                />

                <span>{formatText(state.address)}</span>    

                
              </button>
            
              {toggleLocation && 
                <OutsideClickHandler  onOutsideClick={onToggleLoc}>
              <LocationSearch 
                 searchKey={searchKey}
                 currentTab={currentTab}
                 selectedStyle={selectedStyle}
                 router={router}
                 onToggle={onToggleLoc}/>
                 </OutsideClickHandler>
                }
                 
                 
            </div>
          )}

          <div className={style.wrapper_filter}>
            <button onClick={onToggle} className={`${style.filter_block }  ${toggle ? 'onActive' :null}`}>
              <Image
                src="/setting-tuning.svg"
                width={20}
                height={21}
                alt="style"
                className={style.filter_icon}
              
                priority
              />
              <span>Styles</span>{state.styleId.length!==0 && <span className={style.notification_count}>{state.styleId.length}</span>}
            </button>





            {toggle && !isMobileView && (
              <OutsideClickHandler  onOutsideClick={onToggle}>

                
              <StyleDropdown
                searchKey={searchKey}
                currentTab={currentTab}
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
        currentTab={currentTab}
        selectedStyle={selectedStyle}
        router={router}
        onToggle={onToggleLoc} />
        
        </div>
       
      )}


        {toggle && isMobileView && (
        <div>
          <StyleDropdown
            searchKey={searchKey}
            currentTab={currentTab}
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
