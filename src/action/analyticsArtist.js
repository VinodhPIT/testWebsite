import { analyticsGetApiCall } from "@/utils/apiUtils";

export const analyticsArtistCount = async (token) => {
  try {
    const response = await analyticsGetApiCall("/analytics/artist/count" ,token);
    return response;
  } catch (error) {
    return [];
  }
};

export const analyticsArtistCountWithFIlter = async (params ,token) => {
  try {
    const response = await analyticsGetApiCall(
      `/analytics/artist/count/${params.type}?start_date=${params.startDate}&end_date=${params.endDate}`
    ,token);
    return response;
  } catch (error) {
    return [];
  }
};

export const analyticsArtistLeadSourceCount = async (token) => {
    try {
      const response = await analyticsGetApiCall("/analytics/artist/details" ,token);
      return response;
    } catch (error) {
      return [];
    }
  };

  export const artistConvertion = async (token) => {
    try {
      const response = await analyticsGetApiCall(`/analytics/artist/converstion` ,token);
      return response;
    } catch (error) {
      return [];
    }
  };
  
