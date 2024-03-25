import axiosInstance from "../../apiConfig/axios.instance";
import API_URL from "@/apiConfig/api.config";

export const analyticsCustomerCount = async (token) => {
  try {
    const response = await axiosInstance.get(
      API_URL.ANALYTICS_CUSTOMER.GET_CUSTOMER_COUNT,
      {token}
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const analyticsCustomerCountWithFIlter = async (params, token) => {
  try {
    const response = await axiosInstance.get(
      API_URL.ANALYTICS_CUSTOMER.FILTER_BY_TYPE(params),
      {token}
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const analyticsCustomerLeadSourceCount = async (token) => {
  try {
    const response = await axiosInstance.get(
      API_URL.ANALYTICS_CUSTOMER.GET_CUSTOMER_DETAILS,
      {token}
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const analyticsCustomerLeadSourceCountWithFIlter = async (
  params,
  token
) => {
  try {
    const response = await axiosInstance.get(
      API_URL.ANALYTICS_CUSTOMER.CUSTOEMR_FILTER_BY_DATE(params),
      {token}
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const analyticsRevenueDetails = async (token) => {
  try {
    const response = await axiosInstance.get(
      API_URL.ANALYTICS_CUSTOMER.GET_REVENUE_DETAILS,
      {token}
    );

    return response.data;
  } catch (error) {
    return [];
  }
};

export const analyticsConvertion = async (token) => {
  try {
    const response = await axiosInstance.get(
      API_URL.ANALYTICS_CUSTOMER.GET_CUSTOMER_CONVERSION,
      {token}
    );
    return response.data;
  } catch (error) {
    return [];
  }
};