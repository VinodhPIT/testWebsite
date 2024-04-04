
import React, { useEffect, useState } from "react";
import { useRequestForm } from "@/store/requestManagement/requestForm"; 
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import StyleDropdown from "@/components/stepperComponents/styleListing";
import SearchBar from "@/components/stepperComponents/searchBar";


const Artist = () => {
  const { nextPage, prevPage, fetchArtistList, artistList } = useRequestForm(); 
  const { t } = useTranslation();

  useEffect(() => {
    fetchArtistList();
  }, []);

  const getCountry = (locations) => {
    return `${locations[0].city} , ${locations[0].country}`;
  };

  return (
    <div>
      <h5>{t("common:stepper.title5")}</h5>


      <SearchBar/>

      <StyleDropdown />


  





      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {artistList.map((e) => {
          return (
            <div key={e.id}>
              <Image
                src={e._source.tattoos[0].image}
                width={300}
                height={300}
                alt={e._source.slug}
                placeholder="blur"
                blurDataURL={blurDataURL}
              />

              <p>{e._source.name}</p>

              {getCountry(e._source.locations)}
            </div>
          );
        })}
      </div>

      <button onClick={() => prevPage()}>{t("common:goBack")}</button>
      <button onClick={() => nextPage()}>{t("common:next")}</button>
    </div>
  );
};

export default Artist;
