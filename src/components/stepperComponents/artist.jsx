// components/Reference.js
import React, { useEffect } from "react";
import Image from "next/image";
import { useRequestForm } from "@/store/requestManagement/requestForm"; 
import useTranslation from "next-translate/useTranslation";
import { blurDataURL } from "@/constants/constants";
import { useToggle } from "@/hooks/useToggle";
import StyleDropdown from "@/components/stepperComponents/styleListing";
import SearchBar from "@/components/stepperComponents/searchBar";
import Location from "@/components/stepperComponents/location";
import OutsideClickHandler from "react-outside-click-handler";
import useWindowResize from "@/hooks/useWindowSize";
import { getCountry } from "@/helpers/helper";
import Loader from "@/components/loader";

const Artist = () => {
  const {
    nextPage,
    prevPage,
    fetchArtistList,
    artistList,
    loadMore,
    addSelectedArtist,
    removeSelectedArtist,
    selectedArtists,
    location,
    totalCount,
  } = useRequestForm();

  const [toggle, onToggle, onToggleLoc, toggleLocation] = useToggle(false);

  const { t } = useTranslation();

  useEffect(() => {
    fetchArtistList();
  }, []);

  const handleCheckboxChange = (id, image ,names,
    studios, location ,slug  ,artistImage ) => {
    if (selectedArtists.some((artist) => artist.id === id)) {
      removeSelectedArtist(id);
    } else {
      if (selectedArtists.length < 10) {
        addSelectedArtist({ id, image ,names,
         studios, location ,slug ,artistImage});
      }
    }
  };

  const { isMobileView } = useWindowResize();



  return (
    <>
      <div className="full_col_block h_126_pc">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align_content">
              <section className="request_landing_content">
                <div className="request_landing_content_col align_self_stretch">
                  <h2>{t("common:stepper.title5")}</h2>

                  <div style={{ display: "flex", gap: "4px" }}>
                    <div
                      style={{
                        backgroundColor: "#fff",
                        padding: "11px",
                        border: "1px solid red",
                        position: "relative",
                        flex: "1",
                      }}
                    >
                      <button onClick={onToggle} style={{ width: "100%" }}>
                        <p>style</p>
                      </button>
                      {toggle && !isMobileView && (
                        <OutsideClickHandler onOutsideClick={onToggle}>
                          <StyleDropdown />
                        </OutsideClickHandler>
                      )}
                    </div>

                    <div
                      style={{
                        backgroundColor: "#fff",
                        padding: "11px",
                        border: "1px solid red",
                        position: "relative",
                        flex: "1",
                      }}
                    >
                      <button style={{ width: "100%" }} onClick={onToggleLoc}>
                        <p>Location</p>
                      </button>

                      {toggleLocation && (
                        <OutsideClickHandler onOutsideClick={onToggleLoc}>
                          <Location />
                        </OutsideClickHandler>
                      )}
                    </div>

                    <SearchBar />
                  </div>

                  <div class="request_filter_wrap">
                    <div class="request_filter_col">
                      {artistList &&
                        artistList.map((e) => {
                          return (
                            <div
                              class="request_filter_grid"
                              key={e._id}
                              onClick={() =>
                                handleCheckboxChange(
                                  e._id,
                                  e._source.tattoos[0].image,
                                  e._source.name,
                                  e._source.studios, location  ,e._source.slug  ,e._source.profile_image
                                )
                              }
                            >
                              <div class="request_filter_img">
                                {/* <input
            type="checkbox"
            checked={selectedArtists.includes(e._id)}
            onChange={() => handleCheckboxChange(e._id,e._source.tattoos[0].image)}
          /> */}

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
                              <div class="request_filter_dtls">
                                <div class="request_filter_profile">
                                  <Image
                                    src={e._source.profile_image}
                                    width={36}
                                    height={36}
                                    alt={e._source.slug}
                                  />
                                </div>
                                <div class="request_filter_profile_dtls">
                                  <h6 class="request_filter_profile_title">
                                    {e._source.name}
                                  </h6>
                                  <span class="request_filter_profile_address">
                                    {getCountry(e._source.studios, location)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>

                  {artistList.length !== 0 &&
                    artistList.length !== totalCount && (
                      <button onClick={() => loadMore()}>Load More</button>
                    )}

                  <div className="">
                    <button
                      onClick={() => prevPage()}
                      className="btn_outline_secondary btn_cutom_40 mt_15"
                    >
                      {t("common:goBack")}
                    </button>

                    {selectedArtists.length ===
                    0 ? null : selectedArtists.length === 10 ? (
                      <p>Maximum limit of 10 reached</p>
                    ) : (
                      <p>{selectedArtists.length} Artists Selected</p>
                    )}

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
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Artist;