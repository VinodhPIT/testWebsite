import axiosInstance from "../../apiConfig/axios.instance";
import API_URL from "@/apiConfig/api.config";

export const analyticsCustomerCount = async (session) => {
  try {
    const response = await axiosInstance.get(
      API_URL.ANALYTICS_CUSTOMER.GET_CUSTOMER_COUNT,{
        session
      }
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const analyticsCustomerCountWithFIlter = async (params) => {
  try {
    const response = await axiosInstance.get(
      API_URL.ANALYTICS_CUSTOMER.FILTER_BY_TYPE(params),
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const analyticsCustomerLeadSourceCount = async (session) => {
  try {
    const response = await axiosInstance.get(
      API_URL.ANALYTICS_CUSTOMER.GET_CUSTOMER_DETAILS,
      {session}
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const analyticsCustomerLeadSourceCountWithFIlter = async (
  params,
) => {
  try {
    const response = await axiosInstance.get(
      API_URL.ANALYTICS_CUSTOMER.CUSTOEMR_FILTER_BY_DATE(params),
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const analyticsRevenueDetails = async () => {
  try {
    const response = await axiosInstance.get(
      API_URL.ANALYTICS_CUSTOMER.GET_REVENUE_DETAILS,
    );

    return response.data;
  } catch (error) {
    return [];
  }
};

export const analyticsConvertion = async () => {
  try {
    const response = await axiosInstance.get(
      API_URL.ANALYTICS_CUSTOMER.GET_CUSTOMER_CONVERSION,
    );
    return response.data;
  } catch (error) {
    return [];
  }
};