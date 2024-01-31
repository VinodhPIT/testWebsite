import { analyticsGetApiCall } from "@/utils/apiUtils";

export const analyticsDashboardCount = async (token) => {
  try {
    const response = await analyticsGetApiCall("/analytics/dashboard/count" ,token);
    return response;
  } catch (error) {
    return [];
  }
};
