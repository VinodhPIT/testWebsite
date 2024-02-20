import { analyticsGetApiCall } from "./api.service";
import API_URL from "./api.config";

export const offerDetails = async (token) => {
  try {
    const response = await analyticsGetApiCall(
      API_URL.ANALYTICS_OFFER.GET_OFFER_DETAILS,
      token
    );
    return response;
  } catch (error) {
    return [];
  }
};

export const offerCount = async (token) => {
  try {
    const response = await analyticsGetApiCall(
      API_URL.ANALYTICS_OFFER.GET_OFFER_COUNT,
      token
    );
    return response;
  } catch (error) {
    return [];
  }
};

export const offerCountFilter = async (params, token) => {
  try {
    const response = await analyticsGetApiCall(
      API_URL.ANALYTICS_OFFER.OFFER_FILTER_BY_DATE(params),
      token
    );
    return response;
  } catch (error) {
    return [];
  }
};