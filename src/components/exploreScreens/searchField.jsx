import React, { useState, useEffect, useRef } from "react";
import style from "./styles/searchField.module.css";
import { getUrl } from "@/utils/getUrl";
import { useGlobalState } from "@/context/Context";
import Image from "next/image";

function SearchBar({ searchKey, currentTab, selectedStyle, router, isDetail }) {
  const { state, searchData, setSearchState, searchState } = useGlobalState();

  const clearText = async () => {
    setSearchState({ query: "" });
    if (searchKey !== "") {
      await getUrl(currentTab, "", selectedStyle, state.location, router);
    }
  };
  
  const handleChange = (e) => {
    setSearchState((prevSearchState) => ({
      ...prevSearchState,
      query: e,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    await getUrl(
      currentTab,
      searchState.query,
      selectedStyle,
      state.location,
      router
    );
  };
  
  const inputRef = useRef(null);


  return (
    <div className={style.search_bar} style={{ position: "relative" }}>
      <form onSubmit={handleSubmit}>
        <div className="input_group position_relative" ref={inputRef}>
          <input
            placeholder="Search"
            type="text"
            required="required"
            className={style.input_txt}
            onChange={(event) => handleChange(event.target.value)}
            onFocus={() =>
              setSearchState((prevSearchState) => ({
                ...prevSearchState,
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
