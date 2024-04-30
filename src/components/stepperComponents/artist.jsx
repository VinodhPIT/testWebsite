import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import { useToggle } from "@/hooks/useToggle";
import { useNavigation } from "@/hooks/useRouter";
import useWindowResize from "@/hooks/useWindowSize";

import OutsideClickHandler from "react-outside-click-handler";
import { useRequestForm } from "@/store/requestManagement/requestForm";

import StyleDropdown from "@/components/stepperComponents/styleListing";
import SearchBar from "@/components/stepperComponents/searchBar";
import Location from "@/components/stepperComponents/location";
import SkeletonArtistList from "@/components/placeholders/artistList";
import Modal from "@/components/stepperComponents/modal";

import { blurDataURL } from "@/constants/constants";
import { getCountry } from "@/helpers/helper";



const Artist = () => {
  const [showLimitReached, setShowLimitReached] = useState(false);
  const [toggle, onToggle, onToggleLoc, toggleLocation] = useToggle(false);
  const [toggleModel, setModel] = useState(false);
  const { router } = useNavigation();
  const [searchVisible, setSearchVisible] = useState(false);
  
  const {
    addSelectedArtist,
    artistList,
    loader,
    loadMore,
    loadData,
    location,
    nextPage,
    prevPage,
    removeSelectedArtist,
    selectedArtists,
    totalCount,
  } = useRequestForm();
  
  const { t } = useTranslation();
  const { isMobileView } = useWindowResize();



  const handleCheckboxChange = (artist) => {
    const { id } = artist;
    const artistExists = selectedArtists.some((artist) => artist.id === id);
    if (artistExists) {
      removeSelectedArtist(id);
    } else if (selectedArtists.length < 10) {
      addSelectedArtist(artist);
    }
  };
  
  const onCloseModel = () => {
    setModel(false);
  };
  
  const SelectedArtistsInfo = () => {
    return (
      <>
        {showLimitReached ? (
          <p className="mt_15 request_ref_selected max_reached">
            Maximum limit of 10 reached
          </p>
        ) : (
          selectedArtists.length > 0 && (
            <button
              className="request_ref_selected mt_15 mb_10  d_block m_auto"
              onClick={() => setModel(true)}
            >
              {selectedArtists.length} {t("common:artistsSelected")}{" "}
              <Image src="/arrowRight.svg" width={16} height={16} alt="arrow" />
            </button>
          )
        )}
      </>
    );
  };
  
  useEffect(() => {
    if (selectedArtists.length === 10) {
      setShowLimitReached(true);
      setTimeout(() => {
        setShowLimitReached(false);
      }, 1000); // Display for 1 second
    }
  }, [selectedArtists]);
  
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };
  




  return (
    <>
      <div className="full_col_block h_126_vh m_h_118_vh">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align_content">
              <section className="request_landing_content">
                <div className="request_landing_content_col align_self_stretch">
                  <h2>{t("common:stepper.title5")}</h2>
                  <div style={{ position: "relative" }}>
                    <div
                      className="request_filter_col_wrap"
                      style={{ display: "flex", gap: "4px" }}
                    >
                      <div className="request_filter_block">
                        <div className="request_style_drop">
                          <button
                            onClick={onToggle}
                            className={`${toggle ? "onActive" : null}`}
                          >
                            <p>{t("common:Style")}</p>
                          </button>
                          {toggle && (
                            <OutsideClickHandler onOutsideClick={onToggle}>
                              <StyleDropdown onToggle={onToggle} />
                            </OutsideClickHandler>
                          )}
                        </div>
                        <div className="request_location_drop">
                          <button
                            onClick={onToggleLoc}
                            className={`${toggleLocation ? "onActive" : null}`}
                          >
                            <p>
                              {location !== ""
                                ? location
                                : t("common:locations")}
                            </p>
                          </button>
                          {toggleLocation && (
                            <OutsideClickHandler onOutsideClick={onToggleLoc}>
                              <Location onToggleLoc={onToggleLoc} />
                            </OutsideClickHandler>
                          )}
                        </div>
                      </div>
                      {isMobileView ? (
                        <button
                          type="submit"
                          onClick={toggleSearch}
                          className="mobileSearch"
                        >
                          <Image
                            src="/magni.svg"
                            alt="search"
                            width={20}
                            height={20}
                          />
                        </button>
                      ) : (
                        <SearchBar />
                      )}
                    </div>
                    {searchVisible && isMobileView && (
                      <div className="request_mobile_search">
                        <SearchBar />
                        <div className="mob_search_close">
                          <button onClick={toggleSearch}>
                            <Image
                              src="/mob_search_close.svg"
                              alt="search"
                              width={24}
                              height={24}
                            />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  {loader ? (
                    <SkeletonArtistList />
                  ) : (
                    <div>
                      {artistList && artistList.length > 0 ? (
                        <div className="request_filter_wrap">
                          <div className="request_filter_col">
                            {artistList.map((e) => {
                              const isSelected = selectedArtists.some(
                                (artist) => artist.id === e._id
                              );

                              return (
                                <div
                                  className="request_filter_grid"
                                  key={e._id}
                                >
                                  <div
                                    className="request_filter_img"
                                    onClick={() =>
                                      handleCheckboxChange({
                                        id: e._id,
                                        image: e._source.tattoos[0].image,
                                        names: e._source.name,
                                        studios: e._source.studios,
                                        location,
                                        slug: e._source.slug,
                                        artistImage: e._source.profile_image,
                                        artistId:
                                          e._source.tattoos[0].profile_uid,
                                      })
                                    }
                                  >
                                    <div className="request_ref_checkbox">
                                      <input
                                        type="checkbox"
                                        checked={isSelected}
                                        onChange={() => {}}
                                      />
                                    </div>
                                    <Image
                                      src={e._source.tattoos[0].image}
                                      fill
                                      objectFit="cover"
                                      objectPosition="center"
                                      alt={e._source.slug}
                                      placeholder="blur"
                                      blurDataURL={blurDataURL}
                                    />
                                  </div>

                                  <div className="request_filter_dtls">
                                    <div className="request_filter_profile">
                                      <Image
                                        src={e._source.profile_image}
                                        width={36}
                                        height={36}
                                        alt={e._source.slug}
                                      />
                                    </div>

                                    <div className="request_filter_profile_dtls">
                                      <Link
                                        href={`/${router.locale}/artists/${e._source.slug}`}
                                        target="_blank"
                                      >
                                        <h6 className="request_filter_profile_title">
                                          {e._source.name}
                                        </h6>
                                        <span className="request_filter_profile_address">
                                          {getCountry(
                                            e._source.studios,
                                            location
                                          )}
                                        </span>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ) : (
                        <div className="mt_40">
                          <p className="text_center">{t("common:nodata")}</p>
                        </div>
                      )}
                      <div className="request_ref_loadmore">
                        {artistList.length !== 0 &&
                          artistList.length !== totalCount && (
                            <button
                              className="btn_secondary btn_view_more"
                              onClick={loadMore}
                            >
                              {t("common:loadMore")}

                              {loadData && (
                                <span
                                  className="spinner-border spinner-border-sm"
                                  aria-hidden="true"
                                ></span>
                              )}
                            </button>
                          )}
                      </div>

                      {isMobileView &&    <SelectedArtistsInfo /> }

                      <div className="request_ref_btn">
                        <button
                          onClick={prevPage}
                          className="btn_outline_secondary btn_cutom_40 mt_15"
                        >
                          {t("common:goBack")}
                        </button>

                        {!isMobileView &&  <SelectedArtistsInfo /> }

                        {selectedArtists.length > 0 && (
                          <button
                            onClick={nextPage}
                            className="btn_secondary btn_cutom_40 mt_15 pull_right align_self_end"
                          >
                            {t("common:next")}
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Modal
        toggleModel={toggleModel}
        onCloseModel={onCloseModel}
        selectedArtists={selectedArtists}
      />
    </>
  );
};

export default Artist;
