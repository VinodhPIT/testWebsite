import { useState, useEffect } from "react";

function useWindowResize() {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isSmallDevice, setSmallDevice] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [isMobileToTablet, setisMobileToTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 767.98);
      setSmallDevice(window.innerWidth <= 875)
      setVisible(window.innerWidth <= 600)
      setisMobileToTablet(window.innerWidth <= 1024)
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize); // Add orientation change listener

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize); // Remove orientation change listener
    };
  }, []);  
  return { isMobileView ,isSmallDevice  ,isVisible ,isMobileToTablet};
}

export default useWindowResize;
