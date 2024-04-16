import { useEffect } from "react";

const UseLayout = ({ children, pathname }) => {
  
  useEffect(() => {
    if (pathname === "/") {
      document.body.style.backgroundColor = "#F8F8F8";
      document.body.className = "home";
    } else if (pathname === "/dictionary") {
      document.body.style.backgroundColor = "#fff";
      document.body.className = "dictionary";
    } else if (pathname === "/klarna") {
      document.body.style.backgroundColor = "#fff";
      document.body.className = "klarna";
    } 
    else if (pathname === "/requestForm") {
      document.body.className = "request_land_body";
    } else {
      // Reset styles for other pages
      document.body.style.backgroundColor = "#fff";
      document.body.className = "";
    }
    // Clean up the styles when the component unmounts
    return () => {
      document.body.style.backgroundColor = "#fff";
      document.body.className = "";
    };
  }, [pathname]);

  return <>{children}</>;
};

export default UseLayout;
