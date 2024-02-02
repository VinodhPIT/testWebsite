import { analyticsGetApiCall } from "@/utils/apiUtils";

export const analyticsDashboardCount = async (token) => {
  try {
    const response = await analyticsGetApiCall("/analytics/download/count" ,token);
    return response;
  } catch (error) {
    return [];
  }
};
