import { analyticsGetApiCall, analyticsPostApiCall } from "./api.service";
import API_URL from "./api.config";

export const analyticsDashboardCount = async (token) => {
  try {
    const response = await analyticsGetApiCall(
      API_URL.ANALYTICS_DASHBOARD.GET_DOWNLOAD_COUNT,
      token
    );
    return response;
  } catch (error) {
    return [];
  }
};

export const getCustomerRequestAnalyticsData = async (token) => {
  try {
    const response = await analyticsPostApiCall(
      API_URL.ANALYTICS_DASHBOARD.GET_CUSTOMER_REQUEST_DETAILS_DATA,
      token
    );
    return response;
  } catch (error) {
    return [];
  }
};

export const getOfferRequestAnalyticsData = async (token) => {
  try {
    const response = await analyticsPostApiCall(
      API_URL.ANALYTICS_DASHBOARD.GET_OFFER_DASHBOARD_DETAILS,
      token
    );
    return response;
  } catch (error) {
    return [];
  }
};

export const getAcceptedOfferAnalyticsData = async (token) => {
  try {
    const response = await analyticsPostApiCall(
      API_URL.ANALYTICS_DASHBOARD.GET_ACCEPTED_OFFER_DASHBOARD_DETAILS,
      token
    );
    return response;
  } catch (error) {
    return [];
  }
};

export const getCompletedOfferAnalyticsData = async (token) => {
  try {
    const response = await analyticsPostApiCall(
      API_URL.ANALYTICS_DASHBOARD.GET_COMPLETED_OFFER_DASHBOARD_DETAILS,
      token
    );
    return response;
  } catch (error) {
    return [];
  }
};

export const getCountriesData = async (token) => {
  try {
    const response = await analyticsGetApiCall(
      API_URL.ANALYTICS_DASHBOARD.GET_COUNTRIES,
      token
    );
    return response;
  } catch (error) {
    return [];
  }
}
