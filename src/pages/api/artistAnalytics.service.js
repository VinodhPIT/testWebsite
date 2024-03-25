import axiosInstance from "../../apiConfig/axios.instance";
import API_URL from "@/apiConfig/api.config";

export const analyticsArtistCount = async (token) => {
  try {
    const response = await axiosInstance.get(API_URL.ANALYTICS_ARTISTS.GET_ARTIST_COUNT, { token });
    return response.data;
  } catch (error) {
    return [];
  }
};

export const analyticsArtistCountWithFIlter = async (params, token) => {
  try {
    const response = await axiosInstance.get(
      API_URL.ANALYTICS_ARTISTS.ARTIST_FILTER_BY_DATE(params),
      {token}
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const analyticsArtistLeadSourceCount = async (token) => {
  try {
    const response = await axiosInstance.get(
      API_URL.ANALYTICS_ARTISTS.GET_ARTIST_DETAILS,
      {token}
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const artistConvertion = async (token) => {
  try {
    const response = await axiosInstance.get(
      API_URL.ANALYTICS_ARTISTS.GET_ARTIST_CONVERSION,
      {token}
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const artistConvesionWithCountryFilter = async (country, token) => {
  try {
    const response = await axiosInstance.get(API_URL.ANALYTICS_ARTISTS.CONVERSION_COUNTRY(country) ,{token});
    return response.data;
  } catch (error) {
    return [];
  }
};
