import { useState, useEffect } from "react";

function useWindowResize() {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isSmallDevice, setSmallDevice] = useState(false);
  const [cookieDropdown, setCookieDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 767.98);

      setSmallDevice(window.innerWidth <= 1199)

      setCookieDropdown(window.innerWidth <= 767.98);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize); // Add orientation change listener

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize); // Remove orientation change listener
    };
  }, []);

  return { isMobileView, cookieDropdown ,isSmallDevice };
}

export default useWindowResize;
