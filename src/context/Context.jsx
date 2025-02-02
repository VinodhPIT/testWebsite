///

import React, {
  createContext,
  useReducer,
  useContext,
  useState,
  useEffect,
} from "react";
import { getUrl } from "@/utils/getUrl";

import { Parameters} from "@/constants/index";

import API_URL from "@/apiConfig/api.config";
import {axiosInstance} from "@/apiConfig/axios.instance";
import { searchParam, fetchMulticategory } from "@/helpers/helper";

const initialState = {
  address: "",
  categoryCollection: [],
  currentTab: "",
  errorMessage: false,
  hints: [],
  isLoad: false,
  isTriggered: false,
  latitude: "",
  location: "",
  longitude: "",
  locale: "EN",
  pageNo: 0,
  searchKey: "",
  searchData: [],
  selectedStyle: "",
  seed: "",
  slugIds: "",
  styleCollection: [],
  styleId: [],
  toggle: false,
  totalItems: "",
  value: "",
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
            ? [...state.categoryCollection, ...action.payload]
            : [...state.categoryCollection, ...action.payload],
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

  const fetchServerlData = async (payload) => {
    try {
      dispatch({ type: "INITIAL_SERVER_DATA", payload: payload });
    } catch (error) {}
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
        const [tattooFetch, flashFetch] = await Promise.all([
          axiosInstance.post(
            API_URL.SEARCH.SEARCH_BY_CATRGORY("tattoo"),
            fetchMulticategory({
              ...requestData,
            })
          ),
          axiosInstance.post(
            API_URL.SEARCH.SEARCH_BY_CATRGORY("flash"),
            fetchMulticategory({
              ...requestData,
            })
          ),
        ]);

        const tattooRes = tattooFetch.data;
        const flashRes = flashFetch.data;
        const shuffledResults = [...tattooRes.rows.hits, ...flashRes.rows.hits];
        responseData = shuffledResults;

      } else {
        const res = await axiosInstance.post(
          API_URL.SEARCH.SEARCH_BY_CATRGORY(state.currentTab),
          searchParam({ ...requestData })
        );
        responseData = res.data.rows.hits;
      }

      dispatch({ type: "LOAD_MORE", payload: responseData });
    } catch (error) {
    }
  };

  const onSearch = async (
    currentTab,
    searchKey,
    selectedIds,
    location,
    router
  ) => {
    await getUrl(currentTab, searchKey, selectedIds, location, router);

    dispatch({ type: "GETSTYLE_ID", payload: selectedIds });
  };

  const styleCollection = async () => {
    try {
      const response = await axiosInstance.get(
        API_URL.SEARCH.GET_STYLE_ALL
      );


      dispatch({ type: "STYLE_COLLECTION", payload: response.data.data });
    } catch (error) {}
  };

  return (
    <GlobalStateContext.Provider
      value={{
        clearStyleId,
        fetchServerlData,
        getLocale,
        getAddress,
        loadMore,
        onSearch,
        state,
        styleCollection,
        selectedIds,
        setSelectedIds,
        searchState,
        setSearchState,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
