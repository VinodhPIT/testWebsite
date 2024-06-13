import { analyticsGetApiCall } from "./api.service";
import API_URL from "./api.config";

export const analyticsArtistCount = async (token) => {
  try {
    const response = await analyticsGetApiCall(
      API_URL.ANALYTICS_ARTISTS.GET_ARTIST_COUNT,
      token
    );
    return response;
  } catch (error) {
    return [];
  }
};

export const analyticsArtistCountWithFIlter = async (params, token) => {
  try {
    const response = await analyticsGetApiCall(
      API_URL.ANALYTICS_ARTISTS.ARTIST_FILTER_BY_DATE(params),
      token
    );
    return response;
  } catch (error) {
    return [];
  }
};

export const analyticsArtistLeadSourceCount = async (token) => {
  try {
    const response = await analyticsGetApiCall(
      API_URL.ANALYTICS_ARTISTS.GET_ARTIST_DETAILS,
      token
    );
    return response;
  } catch (error) {
    return [];
  }
};

export const artistConvertion = async (token) => {
  try {
    const response = await analyticsGetApiCall(
      API_URL.ANALYTICS_ARTISTS.GET_ARTIST_CONVERSION,
      token
    );
    return response;
  } catch (error) {
    return [];
  }
};

export const artistConvesionWithCountryFilter = async (country, token) => {
  try {
    const response = await analyticsGetApiCall(API_URL.ANALYTICS_ARTISTS.CONVERSION_COUNTRY(country) ,token);
    return response;
  } catch (error) {
    return [];
  }
};

export const singleArtistProfileDetail = async (token ,slug) => {
  try {
    const response = await analyticsGetApiCall(API_URL.ANALYTICS_ARTISTS.ARTIST_PROFILE_DETAIL(slug) ,token);
    return response;
  } catch (error) {
    return [];
  }
};

export const fetchOfferDataTable = async (token ,slug) => {
  try {
    const response = await analyticsGetApiCall(API_URL.ANALYTICS_ARTISTS.OFFER_DATA_TABLE(slug) ,token);
    return response;
  } catch (error) {
    throw error; 
  }
};



export const fetchOfferLog = async (token ,slug) => {
  try {
    const response = await analyticsGetApiCall(API_URL.ANALYTICS_ARTISTS.OFFER_DATA_LOG(slug) ,token);
    return response;
  } catch (error) {
    throw error; 
  }
};




