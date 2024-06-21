import {axiosInstance} from "../../apiConfig/axios.instance";
import API_URL from "@/apiConfig/api.config";

export const analyticsArtistCount = async (session) => {
  try {
    const response = await axiosInstance.get(API_URL.ANALYTICS_ARTISTS.GET_ARTIST_COUNT,{
      session
    });
    return response.data;
  } catch (error) {
    return [];
  }
};

export const analyticsArtistCountWithFIlter = async (params) => {
  try {
    const response = await axiosInstance.get(
      API_URL.ANALYTICS_ARTISTS.ARTIST_FILTER_BY_DATE(params),
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const analyticsArtistLeadSourceCount = async (session) => {
  try {
    const response = await axiosInstance.get(
      API_URL.ANALYTICS_ARTISTS.GET_ARTIST_DETAILS,{session}
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const artistConvertion = async () => {
  try {
    const response = await axiosInstance.get(
      API_URL.ANALYTICS_ARTISTS.GET_ARTIST_CONVERSION,
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const artistConvesionWithCountryFilter = async (country) => {
  try {
    const response = await axiosInstance.get(API_URL.ANALYTICS_ARTISTS.CONVERSION_COUNTRY(country));
    return response.data;
  } catch (error) {
    return [];
  }
};
