import React, { useState, useEffect, useRef } from "react";
import style from "./styles/tattoosearch.module.css";
import { useGlobalState } from "@/context/Context";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { useRequestForm } from "@/store/requestManagement/requestForm";

function SearchBar() {
  const { setSearchState, searchState } = useGlobalState();

  const {  searchArtist } =
    useRequestForm();


  const { t } = useTranslation();

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setSearchState((prevSearchState) => ({
      ...prevSearchState,
      query: e,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    searchArtist(searchState.query)
    

  };

  const clearText = async () => {
 

    setSearchState((prevSearchState) => ({
        ...prevSearchState,
        query: '',
      }));
    window.location.reload();

  };

  return (
    <div className={style.search_bar} style={{ position: "relative" }}>
      <form onSubmit={handleSubmit}>
        <div className="input_group position_relative" ref={inputRef}>
          <input
            placeholder={t("common:menus.search")}
            type="text"
            required="required"
            className={style.input_txt}
            onChange={(event) => handleChange(event.target.value)}
            onFocus={() =>
              setSearchState((prevSearchState) => ({
                ...prevSearchState,
                //  showDropdown: true,
              }))
            }
            value={searchState.query}
          />
          <button type="submit" tabindex="-1" className={style.btn_search}>
            <Image
              src="/tattoo-magnifer.svg"
              alt="search"
              width={16}
              height={16}
            />
          </button>

          
        </div>
      </form>
      {searchState.query && (
        <button className={style.close_search} onClick={() => clearText()}>
          <Image
            src="/search-close.svg"
            alt="search close"
            width={16}
            height={16}
            className={style.close_search_icon}
          />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
