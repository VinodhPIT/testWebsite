import { analyticsGetApiCall } from "@/utils/apiUtils";

export const analyticsCustomerCount = async (token) => {

  try {
    const response = await analyticsGetApiCall("/analytics/customer/count" ,token);
    return response;
  } catch (error) {
    return [];
  }
};

export const analyticsCustomerCountWithFIlter = async (params ,token) => {
  try {
    const response = await analyticsGetApiCall(
      `/analytics/customer/count/${params.type}?start_date=${params.startDate}&end_date=${params.endDate}`
    ,token);
    return response;
  } catch (error) {
    return [];
  }
};

export const analyticsCustomerLeadSourceCount = async (token) => {
  try {
    const response = await analyticsGetApiCall("/analytics/customer/details" ,token);
    return response;
  } catch (error) {
    return [];
  }
};

export const analyticsCustomerLeadSourceCountWithFIlter = async (params ,token) => {
  try {
    const response = await analyticsGetApiCall(
      `/analytics/customer/details?start_date=${params.startDate}&end_date=${params.endDate}` 
    ,token);
    return response;
  } catch (error) {
    return [];
  }
};

export const analyticsCustomeFilter = async (params, parma1 ,token) => {
  try {
    const response = await analyticsGetApiCall(
      `/analytics/customer/details?start_date=${params}&end_date=${parma1}`
    ,token);

    return response;
  } catch (error) {
    return [];
  }
};

export const analyticsRevenueDetails = async (token) => {
  try {
    const response = await analyticsGetApiCall(`/analytics/revenue/details`,token);

    return response;
  } catch (error) {
    return [];
  }
};



export const analyticsConvertion = async (token) => {
  try {
    const response = await analyticsGetApiCall(`/analytics/customer/convertion` ,token);
    return response;
  } catch (error) {
    return [];
  }
};
