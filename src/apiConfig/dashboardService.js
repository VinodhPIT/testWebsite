import { analyticsGetApiCall } from "./api.service";
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