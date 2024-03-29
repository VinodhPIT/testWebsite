import { searchParam, fetchMulticategory } from "@/helpers/helper";
// import API_URL from "./api.config";
// import { getApiCall, postApiCall } from "./api.service";

import axiosInstance from "../../apiConfig/axios.instance";
import API_URL from "@/apiConfig/api.config";


export const fetchCategoryData = async (params) => {
  try {
    const responseCategory = await axiosInstance.post(
      API_URL.SEARCH.SEARCH_BY_CATRGORY(params),
      searchParam(params)
    );

    return responseCategory.data; 
  } catch (error) {
    return [];
  }
};

export const getStyles = async () => {
  try {
    const reponseStyles = await axiosInstance.get(API_URL.SEARCH.GET_STYLE_ALL);

    return reponseStyles.data;
  } catch (error) {
    return [];
  }
};




export async function fetchMultiData(param) {
  try {
    const tattooRes = await axiosInstance.post(
      `${process.env.apiDomain}${API_URL.SEARCH.GET_TATTOO_SEARCH}`,
      {
        ...fetchMulticategory({
          ...param,
          category: "tattoo",
        }),
      },
    );

    const flashRes = await axiosInstance.post(
      `${process.env.apiDomain}${API_URL.SEARCH.GET_FLASH_SEARCH}`,
      {
        ...fetchMulticategory({
          ...param,
          category: "flash",
        }),
      },
    );

    const [tattoosResult, flashesResult] = await Promise.all([
      tattooRes.data,
      flashRes.data,
    ]);

    const shuffledResults = [
      ...tattoosResult.rows.hits,
      ...flashesResult.rows.hits,
    ];

    const resultsCount =
      tattoosResult.rows.total.value + flashesResult.rows.total.value;

    return {
      data: shuffledResults,
      totalCount: resultsCount,
    };
    
  } catch (error) {
    throw error; // Rethrow the error to propagate it
  }
}



export const fetchTattooDetail = async (params) => {
  try {
    const response = await axiosInstance.get(API_URL.SEARCH.GET_TATTOO_DETAIL(params));
    return response.data;
  } catch (error) {
    return [];
  }
};

export const fetchArtistDetail = async (slug) => {
  try {
    const response = await axiosInstance.get(API_URL.SEARCH.GET_ARTIST_DETAIL(slug));
    return response.data;
  } catch (error) {
    return [];
  }
};

export const artistGallery = async (uid) => {
  try {
    const response = await axiosInstance.get(API_URL.SEARCH.GET_ARTIST_GALLERY(uid));

    return response.data;
  } catch (error) {
    return [];
  }
};

export const referralCode = async (slug) => {
  try {
    const response = await axiosInstance.get(API_URL.SEARCH.GET_REFERRAL_CODE(slug));
    return response.data;
  } catch (error) {
    return [];
  }
};