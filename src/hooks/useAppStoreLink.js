import { useState, useEffect } from 'react';
import { getOs } from "../lib/os-detector";
import { APP_LINK_APPLE, APP_LINK_GOOGLE } from "@/constants/index";
import { useNavigation } from "@/hooks/useRouter";

const localeImages = {
  de: {
    iOS: "/de_appstore.svg",
    Android: "/de_playstore.svg",
  },
  es: {
    iOS: "/es_appstore.svg",
    Android: "/es_playstore.svg",
  },
  default: {
    iOS: "/app-store-new.svg",
    Android: "/g-play-new.svg",
  }

  
};

const useAppStoreLink = () => {
  
  const [appStoreLink, setAppStoreLink] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const os = getOs();

  const { router } = useNavigation();
  const locale = router.locale.split("-")[1] || 'default';

  useEffect(() => {
    const appStoreLink = os === 'iOS' ? APP_LINK_APPLE : APP_LINK_GOOGLE;
    setAppStoreLink(appStoreLink);

    const imageSrc = (localeImages[locale] && localeImages[locale][os]) 
      ? localeImages[locale][os] 
      : localeImages['default'][os];
    setImageSrc(imageSrc);
  }, [locale, os]);

  return { appStoreLink, imageSrc };
};

export default useAppStoreLink;
