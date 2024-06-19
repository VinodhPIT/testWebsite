import React, { useState } from "react";
import TattooSearchModalPopup from "@/components/modalPopup/TattooSearchModalPopup";
import CountrySelectorPopup from "@/components/modalPopup/countrySelectorPopup";
import JoinArtistPopup from "@/components/modalPopup/joinArtistPopup";

export const TattooSearchModal = ({ isOpen, closeModal }) => (
  <TattooSearchModalPopup
    className="custom-modal"
    isOpen={isOpen}
    closeModal={closeModal}
  />
);

export const CountryPickerModel = ({ isOpen, closeModal }) => (
  <CountrySelectorPopup
    className="custom-modal"
    isOpen={isOpen}
    closeModal={closeModal}
  />
);

export const ArtistPickerModel = ({ isOpen, closeModal }) => (
  <JoinArtistPopup
    className="custom-modal"
    isOpen={isOpen}
    closeModal={closeModal}
  />
);

export const useModal = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return {
    isPopupOpen,
    openPopup,
    closePopup,
  };
};
