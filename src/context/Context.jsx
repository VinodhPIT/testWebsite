///

import React, {
  createContext,
  useReducer,
  useContext,
  useState,
  useEffect,
} from "react";
import { fetchCategoryData, fetchMultiData, getStyles } from "@/apiConfig/webService";
import { getUrl } from "@/utils/getUrl";

import { Parameters } from "@/components/parameters/params";



const initialState = {
  address: "Location",
  location: "",
  categoryCollection: [],
  currentTab: "",
  isTriggered: false,
  pageNo: 0,
  selectedStyle: "",
  styleCollection: [],
  totalItems: "",
  searchKey: "",
  value: "",
  hints: [],
  errorMessage: false,
  latitude: "",
  longitude: "",
  searchData: [],
  toggle: false,
  locale: "EN",
  isLoad: false,
  seed: "",
  slugIds: "",
  styleId: [],
};

const reducer = (state, action) => {
  let data,
    currentTab,
    totalItems,
    searchKey,
    selectedStyle,
    pageNo,
    lat,
    lon,
    locale,
    seed,
    slugIds;

  switch (action.type) {
    case "GET_ADDRESS":
      return {
        ...state,
        address: action.payload,
        location: action.payload === "Location" ? "" : action.payload,
      };

    case "GET_LOCALE":
      return {
        ...state,
        locale: action.payload.locale,
      };

    case "INITIAL_SERVER_DATA":
      ({
        data,
        currentTab,
        pageNo,
        totalItems,
        searchKey,
        selectedStyle,
        lat,
        lon,
        locale,
        seed,
        slugIds,
      } = action.payload);

      return {
        ...state,
        categoryCollection: data,
        currentTab,
        totalItems,
        searchKey,
        pageNo: 0,
        serverLoad: false,
        selectedStyle,
        latitude: lat,
        longitude: lon,
        locale,
        seed,
        slugIds,
      };

    case "COUNT":
      const pageNo = action.payload;
      return { ...state, pageNo };

    case "LOAD_MORE":
      return {
        ...state,
        categoryCollection:
          state.currentTab === "all"
            ? [...state.categoryCollection, ...action.payload.data]
            : [...state.categoryCollection, ...action.payload.rows.hits],
      };

    case "STYLE_COLLECTION":
      return {
        ...state,
        styleCollection: action.payload,
        isLoad: false,
      };

    case "GETSTYLE_ID":
      return {
        ...state,
        styleId: action.payload,
      };

    case "CLEARSTYLE_ID":
      return {
        ...state,
        styleId: action.payload,
      };

    default:
      return state;
  }
};

const GlobalStateContext = createContext();

export const useGlobalState = () => useContext(GlobalStateContext);

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [selectedIds, setSelectedIds] = useState([]);
  const [searchState, setSearchState] = useState({
    query: "",

  });

  useEffect(() => {
    const searchQuery = localStorage.getItem("searchQuery");
    if (searchQuery) {
      setSearchState((prevSearchState) => ({
        ...prevSearchState,
        query: JSON.parse(searchQuery),
      }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("searchQuery", JSON.stringify(searchState.query));
  }, [searchState.query]);

  const clearStyleId = async () => {
    dispatch({ type: "CLEARSTYLE_ID", payload: "" });
  };

  const onSearch = async (
    currentTab,
    searchKey,
    selectedIds,
    location,
    router
  ) => {
    await getUrl(currentTab,
      searchKey,
      selectedIds,
      location,
      router);

    dispatch({ type: "GETSTYLE_ID", payload: selectedIds });
  };



  const getAddress = async (payload) => {
    try {
      dispatch({ type: "GET_ADDRESS", payload: payload });
    } catch (error) {}
  };

  const getLocale = async (payload) => {
    try {
      dispatch({ type: "GET_LOCALE", payload: payload });
    } catch (error) {}
  };

  const fetchServerlData = async (payload) => {
    try {
      dispatch({ type: "INITIAL_SERVER_DATA", payload: payload });
    } catch (error) {}
  };

  const loadMore = async () => {
    const updatedPageNo = state.pageNo + 1;
    dispatch({ type: "COUNT", payload: updatedPageNo });
    try {
      const requestData = {
        ...Parameters,
        category: state.currentTab,
        page_no: updatedPageNo,
        style: state.slugIds,
        search_key: state.searchKey,
        latitude: state.latitude,
        longitude: state.longitude,
        seed: state.seed,
      };

      let responseData;
      if (state.currentTab === "all") {
        responseData = await fetchMultiData(requestData);
      } else {
        responseData = await fetchCategoryData(requestData);
      }

      dispatch({ type: "LOAD_MORE", payload: responseData });
    } catch (error) {}
  };

  const styleCollection = async () => {
    try {
      let responseData = await getStyles();

      dispatch({ type: "STYLE_COLLECTION", payload: responseData.data });
    } catch (error) {}
  };



  

  return (
    <GlobalStateContext.Provider
      value={{
        state,
        fetchServerlData,
        loadMore,
        getLocale,
        styleCollection,
        getAddress,
        selectedIds,
        setSelectedIds,
        onSearch,
        clearStyleId,
        setSearchState,
        searchState,
        
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
