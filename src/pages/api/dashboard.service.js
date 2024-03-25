import axiosInstance from "../../apiConfig/axios.instance";
import API_URL from "@/apiConfig/api.config";

export const analyticsDashboardCount = async (token) => {
  try {
    const response = await axiosInstance.get(
      API_URL.ANALYTICS_DASHBOARD.GET_DOWNLOAD_COUNT,
      {token}
    );
    return response.data;
  } catch (error) {
    return [];
  }
};