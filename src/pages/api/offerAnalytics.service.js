import axiosInstance from "../../apiConfig/axios.instance";
import API_URL from "@/apiConfig/api.config";


export const offerDetails = async () => {
  try {
    const response = await axiosInstance.get(
      API_URL.ANALYTICS_OFFER.GET_OFFER_DETAILS
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const offerCount = async (session) => {
  try {
    const response = await axiosInstance.get(
      API_URL.ANALYTICS_OFFER.GET_OFFER_COUNT, {session}
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const offerCountFilter = async (params) => {
  try {
    const response = await axiosInstance.get(
      API_URL.ANALYTICS_OFFER.OFFER_FILTER_BY_DATE(params),
    );
    return response.data;
  } catch (error) {
    return [];
  }
};