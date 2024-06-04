import React, { useRef } from "react";
import Image from "next/image";

import { useGlobalState } from "@/context/Context";
import { useRequestForm } from "@/store/requestManagement/requestForm";

import style from "./styles/tattoosearch.module.css";

function SearchBar() {
  const { searchKey, searchArtist, clearField } = useRequestForm();
  const { setSearchState, searchState } = useGlobalState();

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setSearchState((prevSearchState) => ({
      ...prevSearchState,
      query: e,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    searchArtist(searchState.query);
  };

  const clearText = async () => {
    if (!!searchKey) {
      clearField();
    }
    setSearchState((prevSearchState) => ({
      ...prevSearchState,
      query: "",
    }));
  };


  return (
    <div className={`${"langulock"} ${style.search_bar}`}>
      <form onSubmit={handleSubmit}>
        <div className="input_group position_relative" ref={inputRef}>
          <input
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

          <button type="submit" className={style.btn_search}>
            <Image src="/magni.svg" alt="search" width={20} height={20} />
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
