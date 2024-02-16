import { analyticsGetApiCall } from "@/utils/apiUtils";


export const offerRevenueDetails = async (token) => {
    try {
      const response = await analyticsGetApiCall(`/analytics/offer/revenue/details`,token);
  
      return response;
    } catch (error) {
      return [];
    }
  };

  export const offerDetails = async (token) => {
    try {
      const response = await analyticsGetApiCall(`/analytics/offer/details`,token);
  
      return response;
    } catch (error) {
      return [];
    }
  };
  
  export const offerCount = async (token) => {
    try {
      const response = await analyticsGetApiCall(`/analytics/offer/count`,token);
  
      return response;
    } catch (error) {
      return [];
    }
  };
  
    
  export const offerCountFilter = async (params ,token) => {
  
    try {
      const response = await analyticsGetApiCall(
        `/analytics/offer/count/${params.type}?start_date=${params.startDate}&end_date=${params.endDate}`
      ,token);
      return response;
    } catch (error) {
      return [];
    }
  };