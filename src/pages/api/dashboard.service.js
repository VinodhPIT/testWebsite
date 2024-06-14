import axiosInstance from "../../apiConfig/axios.instance";
import API_URL from "@/apiConfig/api.config";

export const analyticsDashboardCount = async (session) => {
  try {
    const response = await axiosInstance.get(
      API_URL.ANALYTICS_DASHBOARD.GET_DOWNLOAD_COUNT,{session}
    );
    return response.data;
  } catch (error) {
    return [];
  }
};