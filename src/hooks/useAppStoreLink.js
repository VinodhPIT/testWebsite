import { useState, useEffect } from 'react';
import { getOs } from "../lib/os-detector";
import {
    APP_LINK_APPLE,
    APP_LINK_GOOGLE,
  } from "@/constants/constants";


const useAppStoreLink = () => {
  const [appStoreLink, setAppStoreLink] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const os = getOs();

  useEffect(() => {
    if (os === 'iOS') {
        setAppStoreLink(APP_LINK_APPLE);
      setImageSrc("/app-store-new.svg");
      }
     else {
      setAppStoreLink(APP_LINK_GOOGLE);
      setImageSrc('/g-play-new.svg');
    }
  }, []);

  return { appStoreLink, imageSrc };
};
export default useAppStoreLink;