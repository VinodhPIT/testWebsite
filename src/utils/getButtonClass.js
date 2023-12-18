const getButtonClass = (theme, router) => {
    const isBlackTheme = theme === "black";
    const isJournalPage = router.pathname === "/journal";
  
    if (isBlackTheme) {
      return isJournalPage ? "bgBlack" : "bgWhite";
    } else {
      return "bgBlack";
    }
  };
  
  export default getButtonClass;