
import { useCallback } from "react";
import { getOs } from "../lib/os-detector";
import { APP_LINK_APPLE, APP_LINK_GOOGLE } from "@/constants/constants";

const useOpenApp = () => {
  const os = getOs();
  const openApp = useCallback(() => {

    let appLink = APP_LINK_GOOGLE; // Default to Google Play Store link
    if (os === "Mac OS" || os=== "iOS") {
      appLink = APP_LINK_APPLE;
    }
    window.open(appLink, "_blank");
  }, []);

  return { openApp };
};
export default useOpenApp;
