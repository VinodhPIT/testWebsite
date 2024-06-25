// useOpenApp.js
import { useCallback } from 'react';
import {detectOS} from '@/utils/detectOS'
import {
    APP_LINK_APPLE,
    APP_LINK_GOOGLE,
  } from "@/constants/constants";

const useOpenApp = () => {
  const openApp = useCallback(() => {
    const os = detectOS();
    let appLink = APP_LINK_GOOGLE; // Default to Google Play Store link

    if (os === 'iOS' || os === 'MacOS' || os === 'iPad' || os === 'iPod') {
      appLink = APP_LINK_APPLE;
    }

    window.open(appLink, '_blank');
  }, []);

  return { openApp };
};

export default useOpenApp;
